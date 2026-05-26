/**
 * GAMIFICATION ENGINE
 * Implements SDT-based motivation through game mechanics
 * Theory: Self-Determination Theory (Deci & Ryan, 2000)
 */

class GamificationEngine {
    constructor() {
        this.animations = [];
    }
    
    // Award points
    awardPoints(amount, reason) {
        if (!window.AUTH || !window.AUTH.isStudent()) return;
        
        const student = window.AUTH.getCurrentUser();
        if (!student) return;
        
        // Add points
        student.points += amount;
        window.AUTH.updateStudent({ points: student.points });
        
        // Show floating points animation
        this.showFloatingPoints(amount, reason);
        
        // Check for level up
        const leveledUp = window.STORAGE.checkLevelUp(student);
        if (leveledUp) {
            this.showLevelUpAnimation(student.level);
        }
        
        // Update UI
        this.updatePointsDisplay();
    }
    
    // Show floating points
    showFloatingPoints(amount, reason) {
        const pointsEl = document.createElement('div');
        pointsEl.className = 'floating-points animate-fade-in';
        pointsEl.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 20px 40px;
                border-radius: 15px;
                font-size: 24px;
                font-weight: 700;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: floatUp 2s ease-out forwards;
            ">
                +${amount} points
                <div style="font-size: 14px; margin-top: 5px; opacity: 0.9;">
                    ${reason}
                </div>
            </div>
        `;
        
        document.body.appendChild(pointsEl);
        
        setTimeout(() => {
            pointsEl.remove();
        }, 2000);
    }
    
    // Show level up animation
    showLevelUpAnimation(newLevel) {
        const config = window.SYMPHONY_CONFIG.LEVELS;
        const levelName = config[newLevel]?.name || 'Unknown';
        
        const overlay = document.createElement('div');
        overlay.className = 'level-up-overlay';
        overlay.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                animation: fadeIn 0.5s;
            ">
                <div style="
                    background: white;
                    padding: 60px;
                    border-radius: 30px;
                    text-align: center;
                    animation: slideUp 0.6s ease-out;
                ">
                    <div style="font-size: 80px; margin-bottom: 20px; animation: pulse 1s infinite;">
                        🎖️
                    </div>
                    <h1 style="font-size: 48px; margin-bottom: 10px; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        LEVEL UP!
                    </h1>
                    <p style="font-size: 24px; color: #666; margin-bottom: 30px;">
                        You're now a <strong>${levelName}</strong>!
                    </p>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        padding: 15px 40px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-size: 18px;
                        font-weight: 600;
                        cursor: pointer;
                    ">
                        Awesome! 🎉
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Play sound if available
        this.playSound('levelup');
        
        // Confetti
        this.playConfetti();
    }
    
    // Show badge unlock
    showBadgeUnlock(badgeId) {
        const config = window.SYMPHONY_CONFIG.BADGES;
        const badge = Object.values(config).find(b => b.id === badgeId);
        
        if (!badge) return;
        
        const overlay = document.createElement('div');
        overlay.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99998;
                animation: fadeIn 0.5s;
            ">
                <div style="
                    background: white;
                    padding: 50px;
                    border-radius: 25px;
                    text-align: center;
                    animation: slideUp 0.6s ease-out;
                    max-width: 400px;
                ">
                    <div style="font-size: 100px; margin-bottom: 20px;">
                        ${badge.icon}
                    </div>
                    <h2 style="font-size: 32px; margin-bottom: 10px; color: #333;">
                        Badge Unlocked!
                    </h2>
                    <p style="font-size: 24px; font-weight: 600; color: #667eea; margin-bottom: 20px;">
                        ${badge.name}
                    </p>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        padding: 12px 30px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                    ">
                        Cool! 🎉
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Play sound
        this.playSound('badge');
    }
    
    // Play confetti
    playConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${this.randomColor()};
                top: -10px;
                left: ${Math.random() * 100}%;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
                z-index: 100000;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    }
    
    randomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Play sound
    playSound(type) {
        // Placeholder for sound system
        // In production, load and play MP3 files
        console.log('Playing sound:', type);
    }
    
    // Update points display
    updatePointsDisplay() {
        const student = window.AUTH.getCurrentUser();
        if (!student) return;
        
        const pointsEl = document.getElementById('totalPoints');
        if (pointsEl) {
            pointsEl.textContent = student.points;
        }
    }
    
    // Update progress bar
    updateProgressBar(wordsLearned, totalWords) {
        const percentage = Math.round((wordsLearned / totalWords) * 100);
        
        const progressFill = document.getElementById('unitProgress');
        if (progressFill) {
            progressFill.style.width = percentage + '%';
            progressFill.textContent = `${wordsLearned} / ${totalWords} words`;
        }
    }
    
    // Update streak display
    updateStreakDisplay() {
        const student = window.AUTH.getCurrentUser();
        if (!student) return;
        
        const streakEl = document.getElementById('dayStreak');
        if (streakEl) {
            streakEl.textContent = student.streak || 0;
        }
    }
}

// Create global gamification engine
window.GAMIFICATION = new GamificationEngine();

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -150%) scale(1.2);
        }
    }
    
    @keyframes confettiFall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);
