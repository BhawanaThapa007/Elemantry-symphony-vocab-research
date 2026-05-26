/**
 * AUTHENTICATION & SESSION MANAGEMENT
 * Handles login, logout, and user session persistence
 */

class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.currentRole = null;
        this.loadSession();
    }
    
    // Load existing session
    loadSession() {
        this.currentUser = localStorage.getItem('symphonyCurrentUser');
        this.currentRole = localStorage.getItem('symphonyUserRole');
    }
    
    // Student login
    loginStudent(username) {
        if (!username || username.trim() === '') {
            throw new Error('Username is required');
        }
        
        username = username.trim();
        
        // Load or create student
        let students = this.getStudents();
        
        if (!students[username]) {
            // New student
            students[username] = this.createNewStudent(username);
            this.saveStudents(students);
            
            // Log research event
            this.logResearchEvent('student_created', {
                username: username,
                timestamp: new Date().toISOString()
            });
        } else {
            // Existing student - update login
            students[username].lastLogin = new Date().toISOString();
            this.updateStreak(students[username]);
            this.saveStudents(students);
            
            // Log research event
            this.logResearchEvent('student_login', {
                username: username,
                timestamp: new Date().toISOString(),
                streak: students[username].streak
            });
        }
        
        // Set session
        this.currentUser = username;
        this.currentRole = 'student';
        localStorage.setItem('symphonyCurrentUser', username);
        localStorage.setItem('symphonyUserRole', 'student');
        
        // Start new session
        this.startSession(students[username]);
        
        return students[username];
    }
    
    // Admin login
    loginAdmin(username, password) {
        const config = window.SYMPHONY_CONFIG;
        
        if (username === config.ADMIN_USERNAME && password === config.ADMIN_PASSWORD) {
            this.currentUser = 'admin';
            this.currentRole = 'admin';
            localStorage.setItem('symphonyCurrentUser', 'admin');
            localStorage.setItem('symphonyUserRole', 'admin');
            
            // Log research event
            this.logResearchEvent('admin_login', {
                timestamp: new Date().toISOString()
            });
            
            return true;
        }
        
        return false;
    }
    
    // Logout
    logout() {
        // End current session
        if (this.currentRole === 'student') {
            this.endSession();
        }
        
        // Clear session
        localStorage.removeItem('symphonyCurrentUser');
        localStorage.removeItem('symphonyUserRole');
        localStorage.removeItem('symphonyCurrentSession');
        
        this.currentUser = null;
        this.currentRole = null;
    }
    
    // Check if authenticated
    isAuthenticated() {
        return this.currentUser !== null;
    }
    
    // Check if admin
    isAdmin() {
        return this.currentRole === 'admin';
    }
    
    // Check if student
    isStudent() {
        return this.currentRole === 'student';
    }
    
    // Get current user
    getCurrentUser() {
        if (this.isStudent()) {
            const students = this.getStudents();
            return students[this.currentUser];
        }
        return null;
    }
    
    // Create new student
    createNewStudent(username) {
        return {
            username: username,
            createdDate: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            
            // Gamification
            wordsLearned: 0,
            wordsMastered: 0,
            points: 0,
            level: 1,
            streak: 0,
            badges: [],
            
            // Progress
            currentUnit: 1,
            unitsCompleted: [],
            wordProgress: {},
            
            // Research data
            sessions: [],
            totalTimeMinutes: 0,
            sdtScores: [],
            
            // ZPD
            currentDifficulty: 2.0,
            scaffoldingHistory: []
        };
    }
    
    // Update streak
    updateStreak(student) {
        const today = new Date().toDateString();
        const lastLogin = new Date(student.lastLogin).toDateString();
        
        if (lastLogin === today) {
            return; // Already logged in today
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (lastLogin === yesterdayStr) {
            // Consecutive day
            student.streak = (student.streak || 0) + 1;
            
            // Award streak bonus
            if (student.streak >= 3) {
                student.points += 5;
                
                // Check for Week Warrior badge
                if (student.streak >= 7 && !student.badges.includes('week-warrior')) {
                    student.badges.push('week-warrior');
                    student.points += 100;
                }
            }
        } else {
            // Streak broken
            student.streak = 1;
        }
    }
    
    // Start session
    startSession(student) {
        const session = {
            sessionId: 'session_' + Date.now(),
            startTime: new Date().toISOString(),
            endTime: null,
            wordsAttempted: [],
            wordsLearned: 0,
            totalAttempts: 0,
            correctAttempts: 0,
            scaffoldingUsed: {},
            choicesMade: {}
        };
        
        localStorage.setItem('symphonyCurrentSession', JSON.stringify(session));
    }
    
    // End session
    endSession() {
        const sessionStr = localStorage.getItem('symphonyCurrentSession');
        if (!sessionStr) return;
        
        const session = JSON.parse(sessionStr);
        session.endTime = new Date().toISOString();
        
        // Calculate duration
        const duration = new Date(session.endTime) - new Date(session.startTime);
        const durationMinutes = Math.round(duration / 60000);
        
        // Save to student record
        const students = this.getStudents();
        const student = students[this.currentUser];
        
        if (student) {
            student.sessions.push(session);
            student.totalTimeMinutes += durationMinutes;
            this.saveStudents(students);
        }
        
        // Log research event
        this.logResearchEvent('session_ended', {
            username: this.currentUser,
            sessionId: session.sessionId,
            duration: durationMinutes,
            wordsLearned: session.wordsLearned,
            successRate: session.totalAttempts > 0 
                ? (session.correctAttempts / session.totalAttempts) 
                : 0
        });
    }
    
    // Update current session
    updateSession(updates) {
        const sessionStr = localStorage.getItem('symphonyCurrentSession');
        if (!sessionStr) return;
        
        const session = JSON.parse(sessionStr);
        Object.assign(session, updates);
        localStorage.setItem('symphonyCurrentSession', JSON.stringify(session));
    }
    
    // Get students
    getStudents() {
        return JSON.parse(localStorage.getItem('symphonyStudents') || '{}');
    }
    
    // Save students
    saveStudents(students) {
        localStorage.setItem('symphonyStudents', JSON.stringify(students));
    }
    
    // Update student
    updateStudent(updates) {
        const students = this.getStudents();
        const student = students[this.currentUser];
        
        if (student) {
            Object.assign(student, updates);
            this.saveStudents(students);
        }
    }
    
    // Log research event
    logResearchEvent(eventType, data) {
        let researchLog = JSON.parse(localStorage.getItem('symphonyResearchLog') || '[]');
        
        researchLog.push({
            eventType: eventType,
            data: data,
            timestamp: new Date().toISOString()
        });
        
        localStorage.setItem('symphonyResearchLog', JSON.stringify(researchLog));
    }
}

// Create global auth instance
window.AUTH = new AuthSystem();
