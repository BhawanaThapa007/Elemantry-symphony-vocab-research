/**
 * UTILITY FUNCTIONS
 * Common helper functions used throughout the app
 */

const Utils = {
    // Format date/time
    formatDate(date, format = 'short') {
        const d = new Date(date);
        
        if (format === 'short') {
            return d.toLocaleDateString();
        } else if (format === 'long') {
            return d.toLocaleString();
        } else if (format === 'time') {
            return d.toLocaleTimeString();
        } else if (format === 'relative') {
            return this.getRelativeTime(d);
        }
        
        return d.toString();
    },
    
    // Get relative time (e.g., "2 hours ago")
    getRelativeTime(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffSecs = Math.round(diffMs / 1000);
        const diffMins = Math.round(diffMs / 60000);
        const diffHours = Math.round(diffMs / 3600000);
        const diffDays = Math.round(diffMs / 86400000);
        
        if (diffSecs < 60) return 'Just now';
        if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        
        return date.toLocaleDateString();
    },
    
    // Shuffle array
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    // Random selection
    randomSelect(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Show loading
    showLoading() {
        let loading = document.getElementById('loadingOverlay');
        if (!loading) {
            loading = document.createElement('div');
            loading.id = 'loadingOverlay';
            loading.className = 'loading-overlay';
            loading.innerHTML = '<div class="spinner"></div>';
            document.body.appendChild(loading);
        }
        loading.classList.remove('hidden');
    },
    
    // Hide loading
    hideLoading() {
        const loading = document.getElementById('loadingOverlay');
        if (loading) {
            loading.classList.add('hidden');
        }
    },
    
    // Show alert
    showAlert(message, type = 'info') {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} animate-fade-in`;
        alert.textContent = message;
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            z-index: 10000;
        `;
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    },
    
    // Download file
    downloadFile(content, filename, type = 'text/plain') {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    },
    
    // Text to speech
    speak(text, rate = 0.8) {
        if (!window.speechSynthesis) {
            console.warn('Speech synthesis not supported');
            return;
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = rate;
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    },
    
    // Stop speech
    stopSpeaking() {
        if (window.speechSynthesis) {
            speechSynthesis.cancel();
        }
    }
};

// Make utils available globally
window.Utils = Utils;
