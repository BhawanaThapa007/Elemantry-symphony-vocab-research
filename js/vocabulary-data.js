const VOCABULARY_DATABASE = {
    unit1: {
        id: 'unit-01',
        title: 'Test Unit',
        totalWords: 1,
        words: [
            {
                id: 'w001',
                word: 'hello',
                pronunciation: '/həˈloʊ/',
                partOfSpeech: 'noun',
                definition: 'A greeting',
                simpleDefinition: 'A way to say hi',
                examples: ['Hello there!'],
                imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e8f5e9" width="400" height="300"/%3E%3Ctext x="200" y="150" text-anchor="middle" font-size="100"%3E👋%3C/text%3E%3C/svg%3E',
                audioScript: 'Hello'
            }
        ]
    }
};

window.VOCABULARY = VOCABULARY_DATABASE;
console.log('✅ Vocabulary loaded:', VOCABULARY_DATABASE);
