/**
 * COMPLETE VOCABULARY DATABASE - UNIT 1: SCHOOL & LEARNING
 * All 15 words with full theory implementation
 * 
 * Theory Tags:
 * - Vocabulary Learning Theory (Beck Tier 2, Nation's 4 Strands)
 * - CTML (5 principles)
 * - SDT (3 needs)
 * - ZPD (5-level scaffolding)
 */

const VOCABULARY_DATABASE = {
    unit1: {
        id: 'unit-01',
        title: 'School & Learning',
        description: 'Essential vocabulary for talking about school, education, and learning',
        totalWords: 15,
        symphonySource: 'Symphony English Grade 4, Unit 1: Milan Goes to School',
        
        words: [
            // ============================================================
            // WORD 1: INTRODUCE
            // ============================================================
            {
                id: 'w001',
                word: 'introduce',
                pronunciation: '/ˌɪn.trəˈduːs/',
                partOfSpeech: 'verb',
                syllables: 3,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'To tell someone your name or present a person to others when meeting for the first time',
                simpleDefinition: 'To tell people who you are or who someone else is',
                
                examples: [
                    'The teacher asked me to introduce myself to the class.',
                    'Let me introduce you to my friend Sarah.',
                    'Students introduce their science projects at the fair.',
                    'I will introduce my family to my new teacher.'
                ],
                
                wordFamily: {
                    noun: 'introduction',
                    adjective: 'introductory'
                },
                
                synonyms: ['present', 'acquaint', 'make known'],
                antonyms: ['hide', 'conceal'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e3f2fd" width="400" height="300"/%3E%3Ccircle cx="150" cy="140" r="50" fill="%23ffb74d"/%3E%3Ccircle cx="250" cy="140" r="50" fill="%2381c784"/%3E%3Ctext x="150" y="150" text-anchor="middle" font-size="30"%3E😊%3C/text%3E%3Ctext x="250" y="150" text-anchor="middle" font-size="30"%3E😊%3C/text%3E%3Cpath d="M 175 140 L 200 120 L 225 140" stroke="%23333" stroke-width="3" fill="none"/%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EMeeting New People%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Introduce. Introduce. To tell someone your name or present a person to others. The teacher asked me to introduce myself to the class. Introduce.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What word means to tell people your name when you meet them for the first time?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'Think about the first day of school. What do you do when you meet new classmates?',
                        hint: 'You tell them your name and they tell you theirs.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "I" and has 3 syllables.',
                        hint: 'In-tro-duce',
                        visualClue: 'I - N - T - R - O - _ _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'Which word means to present yourself or others?',
                        options: [
                            { text: 'introduce', correct: true },
                            { text: 'interrupt', correct: false },
                            { text: 'interview', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is INTRODUCE (I-N-T-R-O-D-U-C-E). It means to tell someone your name or present a person to others. Example: I introduce myself to new students.'
                    }
                }
            },
            
            // ============================================================
            // WORD 2: NERVOUS
            // ============================================================
            {
                id: 'w002',
                word: 'nervous',
                pronunciation: '/ˈnɜː.vəs/',
                partOfSpeech: 'adjective',
                syllables: 2,
                tier: 2,
                difficulty: 1.8,
                
                definition: 'Feeling worried, anxious, or uncomfortable about something',
                simpleDefinition: 'Feeling scared or worried about something',
                
                examples: [
                    'I felt nervous before my first presentation.',
                    'Students often feel nervous on exam days.',
                    'Don\'t be nervous - you\'re going to do great!',
                    'She was nervous about meeting new people.'
                ],
                
                wordFamily: {
                    noun: 'nervousness',
                    adverb: 'nervously'
                },
                
                synonyms: ['anxious', 'worried', 'uneasy', 'tense'],
                antonyms: ['calm', 'relaxed', 'confident'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fff3e0" width="400" height="300"/%3E%3Ccircle cx="200" cy="120" r="60" fill="%23ffe082"/%3E%3Ccircle cx="180" cy="110" r="8" fill="%23333"/%3E%3Ccircle cx="220" cy="110" r="8" fill="%23333"/%3E%3Cpath d="M 170,145 Q 200,160 230,145" stroke="%23333" stroke-width="3" fill="none"/%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="20" fill="%23666"%3EFeeling Nervous%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Nervous. Nervous. Feeling worried or uncomfortable about something. I felt nervous before my presentation. Nervous.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'How do you feel before a big test or when speaking in front of people?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you\'re worried and your hands might shake, you feel...',
                        hint: 'Your stomach feels funny and your heart beats fast.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "N" and sounds like: Ner-vous',
                        hint: 'It has 2 syllables',
                        visualClue: 'N - E - R - V - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'Which word describes feeling worried or uncomfortable?',
                        options: [
                            { text: 'nervous', correct: true },
                            { text: 'curious', correct: false },
                            { text: 'generous', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is NERVOUS (N-E-R-V-O-U-S). It means feeling worried or uncomfortable. Example: I feel nervous before tests.'
                    }
                }
            },
            
            // ============================================================
            // WORD 3: EXCITED
            // ============================================================
            {
                id: 'w003',
                word: 'excited',
                pronunciation: '/ɪkˈsaɪ.tɪd/',
                partOfSpeech: 'adjective',
                syllables: 3,
                tier: 2,
                difficulty: 1.8,
                
                definition: 'Feeling very happy and enthusiastic about something',
                simpleDefinition: 'Feeling very happy about something good',
                
                examples: [
                    'I\'m excited about learning new vocabulary!',
                    'The students were excited for the field trip.',
                    'She felt excited on her birthday morning.',
                    'We\'re all excited to see the science experiment.'
                ],
                
                wordFamily: {
                    noun: 'excitement',
                    verb: 'excite',
                    adjective: 'exciting'
                },
                
                synonyms: ['thrilled', 'enthusiastic', 'eager', 'delighted'],
                antonyms: ['bored', 'uninterested', 'indifferent'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e8f5e9" width="400" height="300"/%3E%3Ccircle cx="200" cy="100" r="50" fill="%23ffeb3b"/%3E%3Ccircle cx="185" cy="90" r="10" fill="%23333"/%3E%3Ccircle cx="215" cy="90" r="10" fill="%23333"/%3E%3Cpath d="M 170,115 Q 200,145 230,115" stroke="%23333" stroke-width="4" fill="none"/%3E%3Ctext x="150" y="190" font-size="40"%3E🎉%3C/text%3E%3Ctext x="230" y="190" font-size="40"%3E✨%3C/text%3E%3Ctext x="200" y="260" text-anchor="middle" font-size="22" fill="%23333"%3ESo Excited!%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Excited. Excited. Feeling very happy and enthusiastic. I\'m excited about learning! Excited.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'How do you feel when something really good is about to happen?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you\'re really happy and can\'t wait for something fun, you feel...',
                        hint: 'You might smile a lot and have lots of energy!'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "E" and has 3 syllables.',
                        hint: 'Ex-ci-ted',
                        visualClue: 'E - X - C - I - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'Which word means feeling very happy about something?',
                        options: [
                            { text: 'excited', correct: true },
                            { text: 'nervous', correct: false },
                            { text: 'tired', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is EXCITED (E-X-C-I-T-E-D). It means feeling very happy about something. Example: I\'m excited for my birthday!'
                    }
                }
            },
            
            // ============================================================
            // WORD 4: EXPLAIN
            // ============================================================
            {
                id: 'w004',
                word: 'explain',
                pronunciation: '/ɪkˈspleɪn/',
                partOfSpeech: 'verb',
                syllables: 2,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'To make something clear or easy to understand by describing it in detail',
                simpleDefinition: 'To help someone understand something',
                
                examples: [
                    'The teacher will explain how to solve the problem.',
                    'Can you explain what this word means?',
                    'Let me explain the rules of the game.',
                    'The scientist explained her discovery to the class.'
                ],
                
                wordFamily: {
                    noun: 'explanation',
                    adjective: 'explanatory'
                },
                
                synonyms: ['describe', 'clarify', 'make clear', 'teach'],
                antonyms: ['confuse', 'complicate', 'obscure'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3e5f5" width="400" height="300"/%3E%3Ccircle cx="100" cy="150" r="40" fill="%23ce93d8"/%3E%3Ctext x="100" y="160" text-anchor="middle" font-size="30"%3E👩‍🏫%3C/text%3E%3Crect x="180" y="100" width="180" height="100" rx="10" fill="%23fff" stroke="%23333" stroke-width="2"/%3E%3Ctext x="270" y="130" text-anchor="middle" font-size="16" fill="%23333"%3E2 + 2 = ?%3C/text%3E%3Ctext x="270" y="165" text-anchor="middle" font-size="24" fill="%23667eea" font-weight="bold"%3E= 4%3C/text%3E%3Ctext x="200" y="260" text-anchor="middle" font-size="18" fill="%23333"%3ETeacher Explaining%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Explain. Explain. To make something clear and easy to understand. The teacher will explain how to solve the problem. Explain.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What does a teacher do to help you understand something?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you make something clear to someone, you...',
                        hint: 'You help them understand by describing it.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "E" and sounds like: Ex-plain',
                        hint: 'It has 2 syllables',
                        visualClue: 'E - X - P - L - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'Which word means to make something easy to understand?',
                        options: [
                            { text: 'explain', correct: true },
                            { text: 'complain', correct: false },
                            { text: 'exclaim', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is EXPLAIN (E-X-P-L-A-I-N). It means to make something clear. Example: The teacher explains math problems.'
                    }
                }
            },
            
            // ============================================================
            // WORD 5: PRACTICE
            // ============================================================
            {
                id: 'w005',
                word: 'practice',
                pronunciation: '/ˈpræk.tɪs/',
                partOfSpeech: 'verb/noun',
                syllables: 2,
                tier: 2,
                difficulty: 1.8,
                
                definition: 'To do something many times to get better at it',
                simpleDefinition: 'To do something again and again to improve',
                
                examples: [
                    'I practice vocabulary every day.',
                    'She practices piano for one hour.',
                    'Practice makes perfect!',
                    'We need to practice our presentation.'
                ],
                
                wordFamily: {
                    adjective: 'practical',
                    adverb: 'practically'
                },
                
                synonyms: ['rehearse', 'train', 'exercise', 'drill'],
                antonyms: ['neglect', 'ignore', 'abandon'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fce4ec" width="400" height="300"/%3E%3Ccircle cx="200" cy="130" r="50" fill="%23f48fb1"/%3E%3Ctext x="200" y="145" text-anchor="middle" font-size="35"%3E📝%3C/text%3E%3Cpath d="M 150,180 Q 150,200 170,200 L 230,200 Q 250,200 250,180" stroke="%23333" stroke-width="3" fill="none"/%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EStudying Hard%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Practice. Practice. To do something many times to get better. I practice vocabulary every day. Practice.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What do you do when you want to get better at something?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you do something many times to improve, you...',
                        hint: 'Like practicing a sport or musical instrument.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "P" and sounds like: Prac-tice',
                        hint: 'It has 2 syllables',
                        visualClue: 'P - R - A - C - _ _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means to do something repeatedly to improve?',
                        options: [
                            { text: 'practice', correct: true },
                            { text: 'perform', correct: false },
                            { text: 'present', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is PRACTICE (P-R-A-C-T-I-C-E). It means doing something many times to get better. Example: I practice reading every day.'
                    }
                }
            },
            
            // ============================================================
            // WORD 6: ATTENTION
            // ============================================================
            {
                id: 'w006',
                word: 'attention',
                pronunciation: '/əˈten.ʃən/',
                partOfSpeech: 'noun',
                syllables: 3,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'Careful listening, watching, or thinking about something',
                simpleDefinition: 'Focusing your mind on something carefully',
                
                examples: [
                    'Please pay attention to the teacher.',
                    'The student gave her full attention to the lesson.',
                    'You need attention to detail for this task.',
                    'Can I have your attention, please?'
                ],
                
                wordFamily: {
                    verb: 'attend',
                    adjective: 'attentive',
                    adverb: 'attentively'
                },
                
                synonyms: ['focus', 'concentration', 'awareness', 'notice'],
                antonyms: ['distraction', 'inattention', 'neglect'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e1f5fe" width="400" height="300"/%3E%3Ccircle cx="200" cy="120" r="55" fill="%2381d4fa"/%3E%3Ccircle cx="185" cy="110" r="10" fill="%23333"/%3E%3Ccircle cx="215" cy="110" r="10" fill="%23333"/%3E%3Cpath d="M 180,140 L 220,140" stroke="%23333" stroke-width="3"/%3E%3Cpath d="M 200,180 L 200,220 M 180,200 L 220,200" stroke="%23333" stroke-width="3"/%3E%3Ctext x="200" y="270" text-anchor="middle" font-size="18" fill="%23333"%3EPaying Attention%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Attention. Attention. Careful listening and watching. Please pay attention to the teacher. Attention.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What do you need to give when the teacher is speaking?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you listen and watch carefully, you are giving...',
                        hint: 'Your mind is focused on what you\'re learning.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "A" and has 3 syllables.',
                        hint: 'At-ten-tion',
                        visualClue: 'A - T - T - E - N - _ _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means careful listening and watching?',
                        options: [
                            { text: 'attention', correct: true },
                            { text: 'intention', correct: false },
                            { text: 'invention', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is ATTENTION (A-T-T-E-N-T-I-O-N). It means focusing carefully. Example: Pay attention in class.'
                    }
                }
            },
            
            // ============================================================
            // WORD 7: POLITE
            // ============================================================
            {
                id: 'w007',
                word: 'polite',
                pronunciation: '/pəˈlaɪt/',
                partOfSpeech: 'adjective',
                syllables: 2,
                tier: 2,
                difficulty: 1.8,
                
                definition: 'Showing good manners and respect for other people',
                simpleDefinition: 'Being nice and respectful to others',
                
                examples: [
                    'It\'s polite to say "please" and "thank you".',
                    'The polite student held the door open.',
                    'She gave a polite greeting to her teacher.',
                    'Being polite means treating others with respect.'
                ],
                
                wordFamily: {
                    noun: 'politeness',
                    adverb: 'politely',
                    antonym: 'impolite'
                },
                
                synonyms: ['courteous', 'respectful', 'well-mannered', 'civil'],
                antonyms: ['rude', 'impolite', 'disrespectful', 'discourteous'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fff9c4" width="400" height="300"/%3E%3Ccircle cx="150" cy="130" r="45" fill="%23fff59d"/%3E%3Ctext x="150" y="145" text-anchor="middle" font-size="30"%3E😊%3C/text%3E%3Cpath d="M 195,130 Q 220,110 245,130" stroke="%23333" stroke-width="3" fill="none"/%3E%3Ctext x="270" y="140" font-size="50"%3E👋%3C/text%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EBeing Polite%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Polite. Polite. Showing good manners and respect. It\'s polite to say please and thank you. Polite.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What word describes someone who has good manners?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you say "please" and "thank you", you are being...',
                        hint: 'You show respect and good manners.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "P" and rhymes with "light".',
                        hint: 'Po-lite (2 syllables)',
                        visualClue: 'P - O - L - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'Which word describes someone with good manners?',
                        options: [
                            { text: 'polite', correct: true },
                            { text: 'pilot', correct: false },
                            { text: 'pointed', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is POLITE (P-O-L-I-T-E). It means having good manners. Example: Polite students say please and thank you.'
                    }
                }
            },
            
            // ============================================================
            // WORD 8: PREPARE
            // ============================================================
            {
                id: 'w008',
                word: 'prepare',
                pronunciation: '/prɪˈper/',
                partOfSpeech: 'verb',
                syllables: 2,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'To get ready for something or to make something ready',
                simpleDefinition: 'To get ready for something',
                
                examples: [
                    'I need to prepare for the test.',
                    'She prepared her books for school.',
                    'The chef prepares delicious meals.',
                    'We should prepare before the presentation.'
                ],
                
                wordFamily: {
                    noun: 'preparation',
                    adjective: 'prepared',
                    adverb: 'preparedly'
                },
                
                synonyms: ['get ready', 'arrange', 'organize', 'plan'],
                antonyms: ['neglect', 'ignore', 'wing it'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e8eaf6" width="400" height="300"/%3E%3Crect x="100" y="100" width="200" height="120" rx="10" fill="%23c5cae9" stroke="%23333" stroke-width="2"/%3E%3Crect x="120" y="120" width="50" height="30" fill="%23fff"/%3E%3Crect x="180" y="120" width="50" height="30" fill="%23fff"/%3E%3Crect x="240" y="120" width="50" height="30" fill="%23fff"/%3E%3Ctext x="200" y="190" text-anchor="middle" font-size="30"%3E✅%3C/text%3E%3Ctext x="200" y="260" text-anchor="middle" font-size="18" fill="%23333"%3EGetting Ready%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Prepare. Prepare. To get ready for something. I need to prepare for the test. Prepare.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What do you do to get ready for school each morning?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you get things ready for something, you...',
                        hint: 'You organize and plan ahead.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "P" and sounds like: Pre-pare',
                        hint: 'It has 2 syllables',
                        visualClue: 'P - R - E - P - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means to get ready for something?',
                        options: [
                            { text: 'prepare', correct: true },
                            { text: 'repair', correct: false },
                            { text: 'compare', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is PREPARE (P-R-E-P-A-R-E). It means to get ready. Example: I prepare my bag before school.'
                    }
                }
            },
            
            // ============================================================
            // WORD 9: DESCRIBE
            // ============================================================
            {
                id: 'w009',
                word: 'describe',
                pronunciation: '/dɪˈskraɪb/',
                partOfSpeech: 'verb',
                syllables: 2,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'To say or write what something or someone is like',
                simpleDefinition: 'To tell what something looks like or is like',
                
                examples: [
                    'Can you describe your favorite animal?',
                    'She described her vacation to the class.',
                    'The witness described what he saw.',
                    'Please describe the picture in detail.'
                ],
                
                wordFamily: {
                    noun: 'description',
                    adjective: 'descriptive'
                },
                
                synonyms: ['explain', 'tell about', 'portray', 'depict'],
                antonyms: ['hide', 'conceal', 'suppress'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f1f8e9" width="400" height="300"/%3E%3Crect x="80" y="80" width="240" height="140" rx="10" fill="%23dcedc8" stroke="%23333" stroke-width="2"/%3E%3Ccircle cx="160" cy="140" r="25" fill="%23ffeb3b"/%3E%3Crect x="220" y="120" width="80" height="10" fill="%23333"/%3E%3Crect x="220" y="145" width="80" height="10" fill="%23333"/%3E%3Crect x="220" y="170" width="60" height="10" fill="%23333"/%3E%3Ctext x="200" y="260" text-anchor="middle" font-size="18" fill="%23333"%3EDescribing Something%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Describe. Describe. To say what something is like. Can you describe your favorite animal? Describe.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What word means to tell what something looks like?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you tell someone details about something, you...',
                        hint: 'You explain what it looks like, sounds like, or feels like.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "D" and sounds like: De-scribe',
                        hint: 'It has 2 syllables',
                        visualClue: 'D - E - S - C - R - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means to tell what something is like?',
                        options: [
                            { text: 'describe', correct: true },
                            { text: 'prescribe', correct: false },
                            { text: 'subscribe', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is DESCRIBE (D-E-S-C-R-I-B-E). It means to tell what something is like. Example: I can describe my house.'
                    }
                }
            },
            
            // ============================================================
            // WORD 10: CLASSMATE
            // ============================================================
            {
                id: 'w010',
                word: 'classmate',
                pronunciation: '/ˈklæs.meɪt/',
                partOfSpeech: 'noun',
                syllables: 2,
                tier: 2,
                difficulty: 1.5,
                
                definition: 'A person who is in the same class as you at school',
                simpleDefinition: 'A student in your class',
                
                examples: [
                    'I made friends with my classmates.',
                    'My classmate helped me with homework.',
                    'All my classmates are nice.',
                    'We work together with our classmates.'
                ],
                
                wordFamily: {
                    compound: 'class + mate',
                    related: 'teammate, roommate, schoolmate'
                },
                
                synonyms: ['peer', 'fellow student', 'schoolmate'],
                antonyms: ['teacher', 'stranger'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0f7fa" width="400" height="300"/%3E%3Ccircle cx="150" cy="140" r="40" fill="%2380deea"/%3E%3Ctext x="150" y="150" text-anchor="middle" font-size="25"%3E👦%3C/text%3E%3Ccircle cx="250" cy="140" r="40" fill="%2380deea"/%3E%3Ctext x="250" y="150" text-anchor="middle" font-size="25"%3E👧%3C/text%3E%3Cpath d="M 190,140 L 210,140" stroke="%23333" stroke-width="3"/%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EClassmates Together%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Classmate. Classmate. A person in the same class as you. My classmate helped me with homework. Classmate.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What do you call the other students in your class?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'The students who learn with you in the same class are your...',
                        hint: 'They sit in the same classroom as you.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word is made of two parts: "class" + "mate"',
                        hint: 'Class-mate',
                        visualClue: 'C - L - A - S - S - M - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What do you call students in your class?',
                        options: [
                            { text: 'classmates', correct: true },
                            { text: 'teammates', correct: false },
                            { text: 'roommates', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is CLASSMATE (C-L-A-S-S-M-A-T-E). It means students in your class. Example: I play with my classmates.'
                    }
                }
            },
            
            // ============================================================
            // WORD 11: SUBJECT
            // ============================================================
            {
                id: 'w011',
                word: 'subject',
                pronunciation: '/ˈsʌb.dʒekt/',
                partOfSpeech: 'noun',
                syllables: 2,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'An area of knowledge studied in school, like math or science',
                simpleDefinition: 'A topic you study in school',
                
                examples: [
                    'Math is my favorite subject.',
                    'We study many subjects at school.',
                    'Science is an interesting subject.',
                    'What subject do you like best?'
                ],
                
                wordFamily: {
                    adjective: 'subjective',
                    verb: 'subject (to)'
                },
                
                synonyms: ['topic', 'course', 'lesson', 'area of study'],
                antonyms: [],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ede7f6" width="400" height="300"/%3E%3Crect x="80" y="80" width="80" height="80" rx="5" fill="%23ce93d8"/%3E%3Ctext x="120" y="135" text-anchor="middle" font-size="40"%3E📐%3C/text%3E%3Crect x="170" y="80" width="80" height="80" rx="5" fill="%23ba68c8"/%3E%3Ctext x="210" y="135" text-anchor="middle" font-size="40"%3E🔬%3C/text%3E%3Crect x="260" y="80" width="80" height="80" rx="5" fill="%23ab47bc"/%3E%3Ctext x="300" y="135" text-anchor="middle" font-size="40"%3E📚%3C/text%3E%3Ctext x="200" y="240" text-anchor="middle" font-size="18" fill="%23333"%3ESchool Subjects%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Subject. Subject. An area of study in school. Math is my favorite subject. Subject.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What word describes things like math, science, and English?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'Math, science, English, and history are all...',
                        hint: 'They are topics you study at school.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "S" and sounds like: Sub-ject',
                        hint: 'It has 2 syllables',
                        visualClue: 'S - U - B - J - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word describes areas of study like math and science?',
                        options: [
                            { text: 'subject', correct: true },
                            { text: 'object', correct: false },
                            { text: 'project', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is SUBJECT (S-U-B-J-E-C-T). It means a school topic. Example: English is my favorite subject.'
                    }
                }
            },
            
            // ============================================================
            // WORD 12: LESSON
            // ============================================================
            {
                id: 'w012',
                word: 'lesson',
                pronunciation: '/ˈles.ən/',
                partOfSpeech: 'noun',
                syllables: 2,
                tier: 2,
                difficulty: 1.5,
                
                definition: 'A period of time when you are taught something',
                simpleDefinition: 'A time when you learn something',
                
                examples: [
                    'We have an English lesson today.',
                    'The piano lesson lasts one hour.',
                    'I learned a lot in today\'s lesson.',
                    'Our teacher gave us an interesting lesson.'
                ],
                
                wordFamily: {
                    related: 'teach, learn, class'
                },
                
                synonyms: ['class', 'session', 'instruction', 'teaching'],
                antonyms: ['break', 'recess'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fff3e0" width="400" height="300"/%3E%3Crect x="100" y="80" width="200" height="140" rx="10" fill="%23ffcc80" stroke="%23333" stroke-width="2"/%3E%3Crect x="120" y="100" width="160" height="100" fill="%23fff"/%3E%3Ctext x="200" y="140" text-anchor="middle" font-size="20" fill="%23333"%3E2 + 2 = 4%3C/text%3E%3Ctext x="200" y="170" text-anchor="middle" font-size="20" fill="%23333"%3E3 × 5 = 15%3C/text%3E%3Ctext x="200" y="260" text-anchor="middle" font-size="18" fill="%23333"%3EMath Lesson%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Lesson. Lesson. A period of teaching and learning. We have an English lesson today. Lesson.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What do you call a time when your teacher teaches you something?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When your teacher is teaching you, you are having a...',
                        hint: 'It\'s a period of time for learning.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "L" and sounds like: Les-son',
                        hint: 'It has 2 syllables',
                        visualClue: 'L - E - S - S - _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means a time when you are taught something?',
                        options: [
                            { text: 'lesson', correct: true },
                            { text: 'lessen', correct: false },
                            { text: 'listen', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is LESSON (L-E-S-S-O-N). It means a teaching period. Example: We have a math lesson every day.'
                    }
                }
            },
            
            // ============================================================
            // WORD 13: UNDERSTAND
            // ============================================================
            {
                id: 'w013',
                word: 'understand',
                pronunciation: '/ˌʌn.dəˈstænd/',
                partOfSpeech: 'verb',
                syllables: 3,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'To know the meaning of something or how something works',
                simpleDefinition: 'To know what something means',
                
                examples: [
                    'I understand the math problem now.',
                    'Do you understand what the teacher said?',
                    'She helps me understand new words.',
                    'It\'s important to understand the lesson.'
                ],
                
                wordFamily: {
                    noun: 'understanding',
                    adjective: 'understandable',
                    past: 'understood'
                },
                
                synonyms: ['comprehend', 'grasp', 'know', 'get'],
                antonyms: ['misunderstand', 'confuse', 'miss'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e8f5e9" width="400" height="300"/%3E%3Ccircle cx="200" cy="120" r="50" fill="%23a5d6a7"/%3E%3Ctext x="200" y="135" text-anchor="middle" font-size="35"%3E😊%3C/text%3E%3Ctext x="200" y="90" text-anchor="middle" font-size="40"%3E💡%3C/text%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EUnderstanding!%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Understand. Understand. To know the meaning of something. I understand the lesson now. Understand.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What happens when you know the meaning of something?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When something makes sense to you, you...',
                        hint: 'You know what it means.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "U" and has 3 syllables.',
                        hint: 'Un-der-stand',
                        visualClue: 'U - N - D - E - R - S - _ _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means to know the meaning of something?',
                        options: [
                            { text: 'understand', correct: true },
                            { text: 'undertake', correct: false },
                            { text: 'underline', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is UNDERSTAND (U-N-D-E-R-S-T-A-N-D). It means to know the meaning. Example: I understand English words.'
                    }
                }
            },
            
            // ============================================================
            // WORD 14: COOPERATE
            // ============================================================
            {
                id: 'w014',
                word: 'cooperate',
                pronunciation: '/koʊˈɑː.pə.reɪt/',
                partOfSpeech: 'verb',
                syllables: 4,
                tier: 2,
                difficulty: 2.2,
                
                definition: 'To work together with others toward a common goal',
                simpleDefinition: 'To work together with others',
                
                examples: [
                    'Students should cooperate on group projects.',
                    'We need to cooperate to finish the work.',
                    'The team cooperated well together.',
                    'Let\'s cooperate to solve this problem.'
                ],
                
                wordFamily: {
                    noun: 'cooperation',
                    adjective: 'cooperative',
                    adverb: 'cooperatively'
                },
                
                synonyms: ['collaborate', 'work together', 'team up', 'unite'],
                antonyms: ['compete', 'oppose', 'fight', 'conflict'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fce4ec" width="400" height="300"/%3E%3Ccircle cx="120" cy="140" r="35" fill="%23f8bbd0"/%3E%3Ctext x="120" y="150" text-anchor="middle" font-size="25"%3E👦%3C/text%3E%3Ccircle cx="200" cy="140" r="35" fill="%23f8bbd0"/%3E%3Ctext x="200" y="150" text-anchor="middle" font-size="25"%3E👧%3C/text%3E%3Ccircle cx="280" cy="140" r="35" fill="%23f8bbd0"/%3E%3Ctext x="280" y="150" text-anchor="middle" font-size="25"%3E👦%3C/text%3E%3Cpath d="M 155,140 L 165,140 M 235,140 L 245,140" stroke="%23333" stroke-width="3"/%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EWorking Together%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Cooperate. Cooperate. To work together with others. Students should cooperate on group projects. Cooperate.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What do you do when you work together with others?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When people work together as a team, they...',
                        hint: 'They help each other reach a goal.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "C" and has 4 syllables.',
                        hint: 'Co-op-er-ate',
                        visualClue: 'C - O - O - P - E - R - _ _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means to work together with others?',
                        options: [
                            { text: 'cooperate', correct: true },
                            { text: 'compete', correct: false },
                            { text: 'celebrate', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is COOPERATE (C-O-O-P-E-R-A-T-E). It means to work together. Example: We cooperate to clean the classroom.'
                    }
                }
            },
            
            // ============================================================
            // WORD 15: IMPROVE
            // ============================================================
            {
                id: 'w015',
                word: 'improve',
                pronunciation: '/ɪmˈpruːv/',
                partOfSpeech: 'verb',
                syllables: 2,
                tier: 2,
                difficulty: 2.0,
                
                definition: 'To make something better or to become better',
                simpleDefinition: 'To get better or make something better',
                
                examples: [
                    'Practice helps you improve your skills.',
                    'My grades improved this semester.',
                    'We can improve our vocabulary by reading.',
                    'The teacher helped me improve my writing.'
                ],
                
                wordFamily: {
                    noun: 'improvement',
                    adjective: 'improved',
                    adjective: 'improving'
                },
                
                synonyms: ['enhance', 'better', 'develop', 'progress'],
                antonyms: ['worsen', 'decline', 'deteriorate'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e1f5fe" width="400" height="300"/%3E%3Cpath d="M 80,220 L 140,180 L 200,140 L 260,100 L 320,60" stroke="%2329b6f6" stroke-width="4" fill="none"/%3E%3Ccircle cx="80" cy="220" r="8" fill="%230277bd"/%3E%3Ccircle cx="140" cy="180" r="8" fill="%230277bd"/%3E%3Ccircle cx="200" cy="140" r="8" fill="%230277bd"/%3E%3Ccircle cx="260" cy="100" r="8" fill="%230277bd"/%3E%3Ccircle cx="320" cy="60" r="8" fill="%230277bd"/%3E%3Ctext x="350" y="50" font-size="30"%3E📈%3C/text%3E%3Ctext x="200" y="270" text-anchor="middle" font-size="18" fill="%23333"%3EGetting Better%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Improve. Improve. To make something better or become better. Practice helps you improve. Improve.',
                
                scaffolding: {
                    level0: {
                        type: 'independent',
                        prompt: 'What happens when something becomes better?',
                        hint: null
                    },
                    level1: {
                        type: 'contextual',
                        prompt: 'When you practice and get better at something, you...',
                        hint: 'Your skills get better.'
                    },
                    level2: {
                        type: 'phonological',
                        prompt: 'The word starts with "I" and sounds like: Im-prove',
                        hint: 'It has 2 syllables',
                        visualClue: 'I - M - P - R - O - _ _'
                    },
                    level3: {
                        type: 'multipleChoice',
                        prompt: 'What word means to make something better?',
                        options: [
                            { text: 'improve', correct: true },
                            { text: 'approve', correct: false },
                            { text: 'remove', correct: false }
                        ]
                    },
                    level4: {
                        type: 'directTeaching',
                        teaching: 'The word is IMPROVE (I-M-P-R-O-V-E). It means to get better. Example: I improve my English by practicing every day.'
                    }
                }
            }
        ]
    }
};
,
    unit2: {
        id: 'unit-02',
        title: 'Daily Activities',
        description: 'Words for everyday activities',
        totalWords: 15,
        
        words: [
            {
                id: 'w016',
                word: 'wake',
                pronunciation: '/weɪk/',
                partOfSpeech: 'verb',
                syllables: 1,
                tier: 2,
                difficulty: 1.5,
                
                definition: 'To stop sleeping and become awake',
                simpleDefinition: 'To get up from sleep',
                
                examples: [
                    'I wake up at 7 AM.',
                    'She wakes early every day.',
                    'We wake to the sound of birds.',
                    'The alarm wakes me.'
                ],
                
                wordFamily: { noun: 'awakening', adjective: 'awake' },
                synonyms: ['awaken', 'rise', 'get up'],
                antonyms: ['sleep', 'rest'],
                
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fff3e0" width="400" height="300"/%3E%3Ccircle cx="200" cy="130" r="60" fill="%23ffe082"/%3E%3Ctext x="200" y="145" text-anchor="middle" font-size="40"%3E😴%3C/text%3E%3Ctext x="200" y="250" text-anchor="middle" font-size="18" fill="%23333"%3EWaking Up%3C/text%3E%3C/svg%3E',
                
                audioScript: 'Wake. Wake. To stop sleeping and become awake. I wake up at 7 AM. Wake.',
                
                scaffolding: {
                    level0: { type: 'independent', prompt: 'What do you do when your alarm goes off in the morning?', hint: null },
                    level1: { type: 'contextual', prompt: 'When you stop sleeping in the morning, you...', hint: 'You get up from your bed.' },
                    level2: { type: 'phonological', prompt: 'The word starts with "W" and sounds like: wake', hint: 'It has 1 syllable', visualClue: 'W - A - K _' },
                    level3: { type: 'multipleChoice', prompt: 'What word means to stop sleeping?', options: [
                        { text: 'wake', correct: true },
                        { text: 'make', correct: false },
                        { text: 'take', correct: false }
                    ]},
                    level4: { type: 'directTeaching', teaching: 'The word is WAKE (W-A-K-E). It means to stop sleeping. Example: I wake up early.' }
                }
            }
        ]
    }
// Make vocabulary available globally
window.VOCABULARY = VOCABULARY_DATABASE;

// Log for verification
console.log('✅ Vocabulary database loaded:', VOCABULARY_DATABASE.unit1.totalWords, 'words');
