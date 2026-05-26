/**
 * SYMPHONY VOCABULARY LEARNING SYSTEM - CONFIGURATION
 * 
 * Research Study: AI-Enhanced Gamified Vocabulary Learning
 * Grade Level: 4
 * Theoretical Framework: CTML, SDT, ZPD, Vocabulary Learning Theory
 */

const CONFIG = {
    // SYSTEM INFORMATION
    VERSION: '1.0.0',
    STUDY_NAME: 'Symphony Vocabulary DBR Study',
    GRADE_LEVEL: 4,
    
    // CONTENT SPECIFICATIONS
    TOTAL_WORDS: 15, // Unit 1 only for now
    TOTAL_UNITS: 1,  // Expandable to 8
    WORDS_PER_UNIT: 15,
    
    // AUTHENTICATION
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'admin123', // CHANGE IN PRODUCTION!
    
    // GAMIFICATION (SDT Implementation)
    POINTS: {
        FIRST_TRY_CORRECT: 15,      // Perfect - no scaffolding
        SECOND_TRY_CORRECT: 10,      // With hint
        THIRD_TRY_CORRECT: 5,        // With more scaffolding
        WORD_MASTERED: 20,           // 3 consecutive correct
        DAILY_LOGIN: 5,              // Streak bonus
        UNIT_COMPLETE: 100           // Unit completion bonus
    },
    
    // LEVELS (SDT Competence)
    LEVELS: {
        1: { name: 'Vocabulary Beginner', pointsRequired: 0 },
        2: { name: 'Word Explorer', pointsRequired: 200 },
        3: { name: 'Vocabulary Scholar', pointsRequired: 500 },
        4: { name: 'Word Expert', pointsRequired: 1000 },
        5: { name: 'Vocabulary Master', pointsRequired: 2000 },
        6: { name: 'Word Champion', pointsRequired: 3500 }
    },
    
    // BADGES (SDT Competence)
    BADGES: {
        FIRST_WORD: { id: 'first-word', name: 'First Word', icon: '🌟', requirement: 1 },
        FAST_LEARNER: { id: 'fast-learner', name: 'Fast Learner', icon: '⚡', requirement: 'session_10_words' },
        WEEK_WARRIOR: { id: 'week-warrior', name: 'Week Warrior', icon: '🔥', requirement: 'streak_7' },
        UNIT_MASTER: { id: 'unit-master', name: 'Unit 1 Master', icon: '🎓', requirement: 'unit_complete' },
        PERFECT_SCORE: { id: 'perfect-score', name: 'Perfect Score', icon: '💯', requirement: 'quiz_100' },
        HELPING_HAND: { id: 'helping-hand', name: 'Helping Hand', icon: '🤝', requirement: 'peer_teaching' }
    },
    
    // ZPD ADAPTIVE SYSTEM
    ZPD: {
        INITIAL_DIFFICULTY: 2.0,           // Start at Grade 4 level
        TARGET_SUCCESS_RATE_MIN: 0.60,     // 60% minimum
        TARGET_SUCCESS_RATE_MAX: 0.75,     // 75% maximum (optimal flow)
        DIFFICULTY_ADJUSTMENT: 0.3,        // How much to adjust
        WORDS_BEFORE_ADJUSTMENT: 10,       // Evaluate every 10 words
        MAX_DIFFICULTY: 2.5,               // Hard words
        MIN_DIFFICULTY: 1.5                // Easy words
    },
    
    // SCAFFOLDING (ZPD Implementation)
    SCAFFOLDING_LEVELS: 5,                 // 0-4
    MASTERY_THRESHOLD: 3,                  // 3 consecutive correct = mastered
    
    // CTML SPECIFICATIONS
    CTML: {
        ENABLE_AUDIO: true,                // Modality principle
        AUDIO_RATE: 0.8,                   // Slower for EFL learners
        SEGMENT_SIZE: 5,                   // 5-7 words per chunk
        PAUSE_DURATION: 3000,              // 3 seconds between words (ms)
        AUTO_PLAY_AUDIO: true              // Audio plays automatically
    },
    
    // NATION'S FOUR STRANDS
    FOUR_STRANDS: {
        INPUT_PERCENTAGE: 25,              // 25% meaning-focused input
        OUTPUT_PERCENTAGE: 25,             // 25% meaning-focused output
        STUDY_PERCENTAGE: 25,              // 25% language-focused learning
        FLUENCY_PERCENTAGE: 25             // 25% fluency development
    },
    
    // SESSION MANAGEMENT
    SESSION: {
        AUTO_SAVE_INTERVAL: 30000,         // Save every 30 seconds
        SESSION_TIMEOUT: 3600000,          // 1 hour
        MIN_SESSION_TIME: 300000           // 5 minutes minimum for valid session
    },
    
    // RESEARCH DATA COLLECTION
    RESEARCH: {
        LOG_ALL_INTERACTIONS: true,        // Log every click/response
        ANONYMOUS_MODE: false,             // Set true to anonymize student names
        DATA_EXPORT_FORMAT: 'csv',         // csv or json
        INCLUDE_TIMESTAMPS: true,          // ISO 8601 timestamps
        LOG_CHOICES: true                  // Track autonomy choices (SDT)
    },
    
    // UI/UX SETTINGS
    UI: {
        THEME: 'gradient',                 // gradient, flat, minimal
        ENABLE_ANIMATIONS: true,           // CSS animations
        ENABLE_SOUNDS: true,               // Success/level-up sounds
        SHOW_THEORY_TAGS: false,           // Show theory labels (for research demo only)
        MOBILE_OPTIMIZED: true             // Responsive design
    },
    
    // LOW-RESOURCE ADAPTATIONS
    LOW_RESOURCE: {
        OFFLINE_MODE: true,                // Works without internet
        COMPRESS_IMAGES: true,             // Smaller file sizes
        LAZY_LOAD: false,                  // Load all at once (better for offline)
        REDUCED_ANIMATIONS: false          // Set true for very old devices
    },
    
    // STORAGE KEYS (LocalStorage)
    STORAGE_KEYS: {
        STUDENTS: 'symphonyStudents',
        CURRENT_USER: 'symphonyCurrentUser',
        USER_ROLE: 'symphonyUserRole',
        CURRENT_SESSION: 'symphonyCurrentSession',
        RESEARCH_LOG: 'symphonyResearchLog',
        SETTINGS: 'symphonySettings'
    }
};

// Make config available globally
window.SYMPHONY_CONFIG = CONFIG;
