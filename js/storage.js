/**
 * STORAGE MANAGER
 * Handles all data persistence with auto-save
 */

class StorageManager {
    constructor() {
        this.autoSaveInterval = null;
        this.setupAutoSave();
    }
    
    // Setup auto-save
    setupAutoSave() {
        const config = window.SYMPHONY_CONFIG;
        
        if (config.SESSION.AUTO_SAVE_INTERVAL) {
            this.autoSaveInterval = setInterval(() => {
                this.autoSave();
            }, config.SESSION.AUTO_SAVE_INTERVAL);
        }
    }
    
    // Auto save current state
    autoSave() {
        if (!window.AUTH || !window.AUTH.isStudent()) return;
        
        const currentUser = window.AUTH.currentUser;
        const students = window.AUTH.getStudents();
        const student = students[currentUser];
        
        if (!student) return;
        
        // Save current progress
        window.AUTH.saveStudents(students);
        
        // Update session
        const session = this.getCurrentSession();
        if (session) {
            localStorage.setItem('symphonyCurrentSession', JSON.stringify(session));
        }
    }
    
    // Get current session
    getCurrentSession() {
        const sessionStr = localStorage.getItem('symphonyCurrentSession');
        return sessionStr ? JSON.parse(sessionStr) : null;
    }
    
    // Save word progress
    saveWordProgress(wordId, data) {
        if (!window.AUTH || !window.AUTH.isStudent()) return;
        
        const students = window.AUTH.getStudents();
        const student = students[window.AUTH.currentUser];
        
        if (!student) return;
        
        // Initialize word progress if not exists
        if (!student.wordProgress[wordId]) {
            student.wordProgress[wordId] = {
                attempts: [],
                mastered: false,
                lastReview: null,
                scaffoldingLevels: [],
                totalAttempts: 0,
                correctAttempts: 0
            };
        }
        
        // Update word progress
        const wordProgress = student.wordProgress[wordId];
        wordProgress.attempts.push(data);
        wordProgress.totalAttempts++;
        
        if (data.correct) {
            wordProgress.correctAttempts++;
        }
        
        wordProgress.scaffoldingLevels.push(data.scaffoldingLevel);
        wordProgress.lastReview = new Date().toISOString();
        
        // Check for mastery (3 consecutive correct)
        const recentAttempts = wordProgress.attempts.slice(-3);
        if (recentAttempts.length === 3 && recentAttempts.every(a => a.correct)) {
            if (!wordProgress.mastered) {
                wordProgress.mastered = true;
                this.handleWordMastered(wordId, student);
            }
        }
        
        window.AUTH.saveStudents(students);
    }
    
    // Handle word mastered
    handleWordMastered(wordId, student) {
        student.wordsMastered++;
        
        // Award mastery points
        const config = window.SYMPHONY_CONFIG;
        student.points += config.POINTS.WORD_MASTERED;
        
        // Update words learned count
        if (!student.wordProgress[wordId].countedAsLearned) {
            student.wordsLearned++;
            student.wordProgress[wordId].countedAsLearned = true;
        }
        
        // Check for badges
        this.checkBadges(student);
        
        // Check for level up
        this.checkLevelUp(student);
        
        // Log research event
        window.AUTH.logResearchEvent('word_mastered', {
            username: student.username,
            wordId: wordId,
            totalAttempts: student.wordProgress[wordId].totalAttempts,
            scaffoldingUsed: student.wordProgress[wordId].scaffoldingLevels
        });
    }
    
    // Check and award badges
    checkBadges(student) {
        const config = window.SYMPHONY_CONFIG;
        const badges = config.BADGES;
        
        // First Word
        if (student.wordsLearned >= 1 && !student.badges.includes('first-word')) {
            student.badges.push('first-word');
            student.points += 50;
        }
        
        // Fast Learner (10 words in one session)
        const currentSession = this.getCurrentSession();
        if (currentSession && currentSession.wordsLearned >= 10 && !student.badges.includes('fast-learner')) {
            student.badges.push('fast-learner');
            student.points += 100;
        }
        
        // Unit Master (all 15 words)
        if (student.wordsLearned >= 15 && !student.badges.includes('unit-master')) {
            student.badges.push('unit-master');
            student.points += 200;
        }
    }
    
    // Check level up
    checkLevelUp(student) {
        const config = window.SYMPHONY_CONFIG;
        const levels = config.LEVELS;
        
        let newLevel = student.level;
        
        for (const [level, data] of Object.entries(levels)) {
            const levelNum = parseInt(level);
            if (student.points >= data.pointsRequired && student.level < levelNum) {
                newLevel = levelNum;
            }
        }
        
        if (newLevel > student.level) {
            student.level = newLevel;
            
            // Log research event
            window.AUTH.logResearchEvent('level_up', {
                username: student.username,
                newLevel: newLevel,
                levelName: levels[newLevel].name,
                points: student.points
            });
            
            return true;
        }
        
        return false;
    }
    
    // Get word progress
    getWordProgress(wordId) {
        if (!window.AUTH || !window.AUTH.isStudent()) return null;
        
        const student = window.AUTH.getCurrentUser();
        if (!student) return null;
        
        return student.wordProgress[wordId] || null;
    }
    
    // Export all data (for debugging or research)
    exportAllData() {
        return {
            students: window.AUTH.getStudents(),
            researchLog: JSON.parse(localStorage.getItem('symphonyResearchLog') || '[]'),
            currentSession: this.getCurrentSession(),
            exportDate: new Date().toISOString()
        };
    }
    
    // Clear all data (CAUTION!)
    clearAllData() {
        if (confirm('⚠️ WARNING: This will delete ALL student data permanently! Continue?')) {
            if (confirm('Are you ABSOLUTELY sure? This cannot be undone!')) {
                localStorage.clear();
                window.location.reload();
            }
        }
    }
    
    // Stop auto-save
    stopAutoSave() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
            this.autoSaveInterval = null;
        }
    }
}

// Create global storage instance
window.STORAGE = new StorageManager();

// Save data before page unload
window.addEventListener('beforeunload', () => {
    if (window.AUTH && window.AUTH.isStudent()) {
        window.AUTH.endSession();
        window.STORAGE.autoSave();
    }
});
