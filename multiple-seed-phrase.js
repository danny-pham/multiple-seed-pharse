const seedPhraseGenerator = require('seed-phrase-generator');

function generateMultipleSeedPhrases(count) {
    return new Promise((resolve, reject) => {
        const seedPhrases = [];
        let generatedCount = 0;

        function generateNextSeedPhrase() {
            const seedPhrase = seedPhraseGenerator.generateSeedPhrase(); // Không sử dụng async/await
            seedPhrases.push(seedPhrase);
            generatedCount++;

            if (generatedCount === count) {
                resolve(seedPhrases);
            } else {
                generateNextSeedPhrase();
            }
        }

        generateNextSeedPhrase();
    });
}

module.exports = {
    generateMultipleSeedPhrases: generateMultipleSeedPhrases
};
