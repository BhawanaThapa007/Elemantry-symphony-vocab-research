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
    
    selectNextWord(availableWords, studentLevel = 2.0) {
        const config = window.SYMPHONY_CONFIG.ZPD;
        
        const student = window.AUTH.getCurrentUser();
        if (!student) return null;
        
        // Get words that haven't been mastered yet
        const unmastered = availableWords.filter(word => {
            const progress = window.STORAGE.getWordProgress(word.id);
            return !progress || !progress.mastered;
        });
        
        if (unmastered.length === 0) {
            return null;
        }
        
        // Get words within ZPD range
        const zpdWords = unmastered.filter(word => {
            return word.difficulty >= studentLevel - 0.5 &&
                   word.difficulty <= studentLevel + 0.8;
        });
        
        // Prioritize words that haven't been attempted yet
        const neverAttempted = zpdWords.filter(word => {
            const progress = window.STORAGE.getWordProgress(word.id);
            return !progress || progress.attempts.length === 0;
        });
        
        // Choose which pool to select from
        let selectedWords = neverAttempted.length > 0 ? neverAttempted : zpdWords;
        if (selectedWords.length === 0) selectedWords = unmastered;
        
        // Shuffle and pick random to avoid repetition
        const shuffled = this.shuffleArray(selectedWords);
        return shuffled[0];
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    getScaffolding(word, attemptNumber) {
        const maxLevel = 4;
        const level = Math.min(attemptNumber, maxLevel);
        
        return word.scaffolding[`level${level}`];
    }
    
    checkAnswer(word, userAnswer, correctAnswer, attemptNumber) {
        const isCorrect = this.normalizeAnswer(userAnswer) === this.normalizeAnswer(correctAnswer);
        
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
        
        const feedback = this.generateFeedback(isCorrect, attemptNumber, points);
        
        window.STORAGE.saveWordProgress(word.id, {
            attemptNumber: attemptNumber,
            correct: isCorrect,
            scaffoldingLevel: attemptNumber,
            pointsEarned: points,
            timestamp: new Date().toISOString()
        });
        
        if (points > 0) {
            const student = window.AUTH.getCurrentUser();
            student.points += points;
            window.AUTH.updateStudent({ points: student.points });
        }
        
        window.AUTH.updateSession({
            totalAttempts: (window.STORAGE.getCurrentSession()?.totalAttempts || 0) + 1,
            correctAttempts: (window.STORAGE.getCurrentSession()?.correctAttempts || 0) + (isCorrect ? 1 : 0)
        });
        
        window.AUTH.logResearchEvent('word_attempt', {
            student: window.AUTH.currentUser,
            wordId: word.id,
            attemptNumber: attemptNumber,
            scaffoldingLevel: attemptNumber,
            correct: isCorrect,
            timeSpent: 0,
            pointsEarned: points
        });
        
        return {
            correct: isCorrect,
            points: points,
            feedback: feedback
        };
    }
    
    normalizeAnswer(answer) {
        return answer.toLowerCase().trim();
    }
    
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
    
    adjustDifficulty(student) {
        const config = window.SYMPHONY_CONFIG.ZPD;
        
        const recentWords = Object.values(student.wordProgress)
            .sort((a, b) => new Date(b.lastReview) - new Date(a.lastReview))
            .slice(0, 10);
        
        if (recentWords.length < 5) return;
        
        const totalAttempts = recentWords.reduce((sum, w) => sum + w.totalAttempts, 0);
        const correctAttempts = recentWords.reduce((sum, w) => sum + w.correctAttempts, 0);
        const successRate = correctAttempts / totalAttempts;
        
        let newDifficulty = student.currentDifficulty;
        
        if (successRate > config.TARGET_SUCCESS_RATE_MAX) {
            newDifficulty = Math.min(
                student.currentDifficulty + config.DIFFICULTY_ADJUSTMENT,
                config.MAX_DIFFICULTY
            );
        } else if (successRate < config.TARGET_SUCCESS_RATE_MIN) {
            newDifficulty = Math.max(
                student.currentDifficulty - config.DIFFICULTY_ADJUSTMENT,
                config.MIN_DIFFICULTY
            );
        }
        
        if (newDifficulty !== student.currentDifficulty) {
            student.currentDifficulty = newDifficulty;
            window.AUTH.updateStudent({ currentDifficulty: newDifficulty });
            
            window.AUTH.logResearchEvent('difficulty_adjusted', {
                username: student.username,
                oldDifficulty: student.currentDifficulty,
                newDifficulty: newDifficulty,
                successRate: successRate
            });
        }
    }
}

// Create global AI engine
window.AI_ENGINE = new AIVocabularyEngine();
