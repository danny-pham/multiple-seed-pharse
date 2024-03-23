const seedPhraseGenerator = require('seed-phrase-generator');

function generateMultipleSeedPhrases(count) {
    return new Promise((resolve, reject) => {
        const seedPhrases = [];
        let generatedCount = 0;

        function generateNextSeedPhrase() {
            seedPhraseGenerator.generateSeedPhrase().then(seedPhrase => {
                seedPhrases.push(seedPhrase);
                generatedCount++;

                if (generatedCount === count) {
                    resolve(seedPhrases);
                } else {
                    generateNextSeedPhrase();
                }
            }).catch(error => {
                reject(error);
            });
        }

        generateNextSeedPhrase();
    });
}

module.exports = {
    generateMultipleSeedPhrases: generateMultipleSeedPhrases
};
