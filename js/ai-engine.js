/**
 * AI VOCABULARY ENGINE
 * Implements ZPD-based adaptive learning
 * Theory: Vygotsky (1978) - Zone of Proximal Development
 */

class AIVocabularyEngine {
    constructor() {
        this.currentWord = null;
        this.attemptNumber = 0;
    }
    
    // Select next word based on ZPD
    selectNextWord(availableWords, studentLevel = 2.0) {
        const config = window.SYMPHONY_CONFIG.ZPD;
        
        // Get student progress
        const student = window.AUTH.getCurrentUser();
        if (!student) return null;
        
        // Filter out mastered words
        const unmastered = availableWords.filter(word => {
            const progress = window.STORAGE.getWordProgress(word.id);
            return !progress || !progress.mastered;
        });
        
        if (unmastered.length === 0) {
            return null; // All words mastered!
        }
        
        // Find words in ZPD (difficulty near student level)
        const zpdWords = unmastered.filter(word => {
            return word.difficulty >= studentLevel - 0.5 &&
                   word.difficulty <= studentLevel + 0.8;
        });
        
        // Prioritize words never attempted
        const neverAttempted = zpdWords.filter(word => {
            const progress = window.STORAGE.getWordProgress(word.id);
            return !progress || progress.attempts.length === 0;
        });
        
        // Select word
        let selectedWords = neverAttempted.length > 0 ? neverAttempted : zpdWords;
        if (selectedWords.length === 0) selectedWords = unmastered;
        
        return selectedWords[Math.floor(Math.random() * selectedWords.length)];
    }
    
    // Get scaffolding for current attempt
    getScaffolding(word, attemptNumber) {
        const maxLevel = 4;
        const level = Math.min(attemptNumber, maxLevel);
        
        return word.scaffolding[`level${level}`];
    }
    
    // Check answer
    checkAnswer(word, userAnswer, correctAnswer, attemptNumber) {
        const isCorrect = this.normalizeAnswer(userAnswer) === this.normalizeAnswer(correctAnswer);
        
        // Calculate points
        const config = window.SYMPHONY_CONFIG.POINTS;
        let points = 0;
        
        if (isCorrect) {
            if (attemptNumber === 0) {
                points = config.FIRST_TRY_CORRECT;
            } else if (attemptNumber === 1) {
                points = config.SECOND_TRY_CORRECT;
            } else {
                points = config.THIRD_TRY_CORRECT;
            }
        }
        
        // Generate feedback
        const feedback = this.generateFeedback(isCorrect, attemptNumber, points);
        
        // Save progress
        window.STORAGE.saveWordProgress(word.id, {
            attemptNumber: attemptNumber,
            correct: isCorrect,
            scaffoldingLevel: attemptNumber,
            pointsEarned: points,
            timestamp: new Date().toISOString()
        });
        
        // Update student points
        if (points > 0) {
            const student = window.AUTH.getCurrentUser();
            student.points += points;
            window.AUTH.updateStudent({ points: student.points });
        }
        
        // Update session
        window.AUTH.updateSession({
            totalAttempts: (window.STORAGE.getCurrentSession()?.totalAttempts || 0) + 1,
            correctAttempts: (window.STORAGE.getCurrentSession()?.correctAttempts || 0) + (isCorrect ? 1 : 0)
        });
        
        // Log research event
        window.AUTH.logResearchEvent('word_attempt', {
            student: window.AUTH.currentUser,
            wordId: word.id,
            attemptNumber: attemptNumber,
            scaffoldingLevel: attemptNumber,
            correct: isCorrect,
            timeSpent: 0, // TODO: Track time
            pointsEarned: points
        });
        
        return {
            correct: isCorrect,
            points: points,
            feedback: feedback
        };
    }
    
    // Normalize answer
    normalizeAnswer(answer) {
        return answer.toLowerCase().trim();
    }
    
    // Generate personalized feedback (CTML Personalization + SDT Competence)
    generateFeedback(isCorrect, attemptNumber, points) {
        if (isCorrect && attemptNumber === 0) {
            return {
                icon: '🎉',
                title: 'Excellent!',
                message: 'You knew that word immediately! Amazing work!',
                points: points,
                tone: 'celebration'
            };
        } else if (isCorrect && attemptNumber === 1) {
            return {
                icon: '👍',
                title: 'Great Job!',
                message: 'You figured it out with a little help! Keep it up!',
                points: points,
                tone: 'positive'
            };
        } else if (isCorrect && attemptNumber <= 3) {
            return {
                icon: '😊',
                title: 'Well Done!',
                message: 'You got it! Nice problem-solving!',
                points: points,
                tone: 'supportive'
            };
        } else if (!isCorrect && attemptNumber < 3) {
            return {
                icon: '💭',
                title: 'Not quite...',
                message: 'That\'s okay! Let me give you a hint.',
                points: 0,
                tone: 'encouraging'
            };
        } else {
            return {
                icon: '📖',
                title: 'Let\'s learn together',
                message: 'This is a tricky word. I\'ll teach you!',
                points: 0,
                tone: 'teaching'
            };
        }
    }
    
    // Adjust student difficulty (ZPD adaptation)
    adjustDifficulty(student) {
        const config = window.SYMPHONY_CONFIG.ZPD;
        
        // Get recent performance (last 10 words)
        const recentWords = Object.values(student.wordProgress)
            .sort((a, b) => new Date(b.lastReview) - new Date(a.lastReview))
            .slice(0, 10);
        
        if (recentWords.length < 5) return; // Not enough data
        
        // Calculate success rate
        const totalAttempts = recentWords.reduce((sum, w) => sum + w.totalAttempts, 0);
        const correctAttempts = recentWords.reduce((sum, w) => sum + w.correctAttempts, 0);
        const successRate = correctAttempts / totalAttempts;
        
        let newDifficulty = student.currentDifficulty;
        
        if (successRate > config.TARGET_SUCCESS_RATE_MAX) {
            // Too easy - increase difficulty
            newDifficulty = Math.min(
                student.currentDifficulty + config.DIFFICULTY_ADJUSTMENT,
                config.MAX_DIFFICULTY
            );
        } else if (successRate < config.TARGET_SUCCESS_RATE_MIN) {
            // Too hard - decrease difficulty
            newDifficulty = Math.max(
                student.currentDifficulty - config.DIFFICULTY_ADJUSTMENT,
                config.MIN_DIFFICULTY
            );
        }
        
        if (newDifficulty !== student.currentDifficulty) {
            student.currentDifficulty = newDifficulty;
            window.AUTH.updateStudent({ currentDifficulty: newDifficulty });
            
            // Log adjustment
            window.AUTH.logResearchEvent('difficulty_adjusted', {
                username: student.username,
                oldDifficulty: student.currentDifficulty,
                newDifficulty: newDifficulty,
                successRate: successRate
            });
        }
    }
    
    // Calculate scaffolding efficiency
    getScaffoldingStats(student) {
        const allProgress = Object.values(student.wordProgress);
        
        if (allProgress.length === 0) {
            return {
                avgScaffoldingLevel: 0,
                scaffoldingDecreasing: false,
                independentSuccessRate: 0
            };
        }
        
        const avgScaffolding = allProgress.reduce((sum, p) => {
            const avg = p.scaffoldingLevels.reduce((s, l) => s + l, 0) / p.scaffoldingLevels.length;
            return sum + avg;
        }, 0) / allProgress.length;
        
        // Check if scaffolding is decreasing over time
        const recent5 = allProgress.slice(-5);
        const earlier5 = allProgress.slice(-10, -5);
        
        const recentAvg = recent5.length > 0
            ? recent5.reduce((sum, p) => sum + (p.scaffoldingLevels[p.scaffoldingLevels.length - 1] || 0), 0) / recent5.length
            : avgScaffolding;
        
        const earlierAvg = earlier5.length > 0
            ? earlier5.reduce((sum, p) => sum + (p.scaffoldingLevels[p.scaffoldingLevels.length - 1] || 0), 0) / earlier5.length
            : recentAvg;
        
        return {
            avgScaffoldingLevel: avgScaffolding.toFixed(2),
            scaffoldingDecreasing: recentAvg < earlierAvg,
            independentSuccessRate: allProgress.filter(p => 
                p.attempts.length > 0 && p.attempts[0].correct
            ).length / allProgress.length
        };
    }
}

// Create global AI engine
window.AI_ENGINE = new AIVocabularyEngine();
