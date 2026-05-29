const VOCABULARY_DATABASE = {
    unit1: {
        id: 'unit-01',
        title: 'Easy Words',
        words: [
            { id: 'w001', word: 'hello', pronunciation: '/həˈloʊ/', simpleDefinition: 'A greeting', examples: ['Hello!'], imageUrl: '👋' },
            { id: 'w002', word: 'cat', pronunciation: '/kæt/', simpleDefinition: 'A furry animal', examples: ['I have a cat.'], imageUrl: '🐱' },
            { id: 'w003', word: 'dog', pronunciation: '/dɔːɡ/', simpleDefinition: 'A pet animal', examples: ['The dog barks.'], imageUrl: '🐶' },
            { id: 'w004', word: 'happy', pronunciation: '/ˈhæp.i/', simpleDefinition: 'Feeling joy', examples: ['I am happy.'], imageUrl: '😊' },
            { id: 'w005', word: 'sad', pronunciation: '/sæd/', simpleDefinition: 'Feeling unhappy', examples: ['He is sad.'], imageUrl: '😢' }
        ]
    },
    unit2: {
        id: 'unit-02',
        title: 'Medium Words',
        words: [
            { id: 'w006', word: 'beautiful', pronunciation: '/ˈbjuː.tə.fəl/', simpleDefinition: 'Very pretty', examples: ['A beautiful flower'], imageUrl: '🌹' },
            { id: 'w007', word: 'intelligent', pronunciation: '/ɪnˈtel.ɪ.dʒənt/', simpleDefinition: 'Smart and clever', examples: ['She is intelligent.'], imageUrl: '🧠' },
            { id: 'w008', word: 'dangerous', pronunciation: '/ˈdeɪn.dʒər.əs/', simpleDefinition: 'Not safe', examples: ['Fire is dangerous.'], imageUrl: '⚠️' },
            { id: 'w009', word: 'curious', pronunciation: '/ˈkjʊr.i.əs/', simpleDefinition: 'Wanting to know more', examples: ['A curious child'], imageUrl: '🤔' },
            { id: 'w010', word: 'generous', pronunciation: '/ˈdʒen.ər.əs/', simpleDefinition: 'Likes to give', examples: ['He is generous.'], imageUrl: '🤝' }
        ]
    },
    unit3: {
        id: 'unit-03',
        title: 'Hard Words',
        words: [
            { id: 'w011', word: 'persevere', pronunciation: '/ˌpɜr.səˈvɪr/', simpleDefinition: 'Keep trying despite difficulty', examples: ['Persevere in your studies.'], imageUrl: '💪' },
            { id: 'w012', word: 'ambiguous', pronunciation: '/æmˈbɪɡ.ju.əs/', simpleDefinition: 'Having more than one meaning', examples: ['An ambiguous statement'], imageUrl: '❓' },
            { id: 'w013', word: 'meticulous', pronunciation: '/məˈtɪk.jə.ləs/', simpleDefinition: 'Very careful about details', examples: ['Meticulous work'], imageUrl: '🎯' },
            { id: 'w014', word: 'eloquent', pronunciation: '/ˈel.ə.kwənt/', simpleDefinition: 'Speaking beautifully', examples: ['An eloquent speaker'], imageUrl: '🎤' },
            { id: 'w015', word: 'ephemeral', pronunciation: '/ɪˈfem.ər.əl/', simpleDefinition: 'Lasting a very short time', examples: ['Ephemeral beauty'], imageUrl: '🌸' }
        ]
    },
    unit4: {
        id: 'unit-04',
        title: 'Expert Words',
        words: [
            { id: 'w016', word: 'pragmatic', pronunciation: '/præɡˈmæt.ɪk/', simpleDefinition: 'Practical and realistic', examples: ['A pragmatic approach'], imageUrl: '📋' },
            { id: 'w017', word: 'ubiquitous', pronunciation: '/juːˈbɪk.wə.təs/', simpleDefinition: 'Found everywhere', examples: ['Smartphones are ubiquitous.'], imageUrl: '📱' },
            { id: 'w018', word: 'melancholy', pronunciation: '/ˈmel.ən.kol.i/', simpleDefinition: 'Deep sadness', examples: ['A melancholy mood'], imageUrl: '🌧️' },
            { id: 'w019', word: 'serendipity', pronunciation: '/ˌser.ənˈdɪp.ə.ti/', simpleDefinition: 'Lucky accident', examples: ['Pure serendipity'], imageUrl: '✨' },
            { id: 'w020', word: 'nostalgia', pronunciation: '/nɑːˈstæl.dʒə/', simpleDefinition: 'Missing the past', examples: ['Feeling nostalgia'], imageUrl: '📸' }
        ]
    }
};

window.VOCABULARY = VOCABULARY_DATABASE;
console.log('✅ Vocabulary loaded:', window.VOCABULARY);
