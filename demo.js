const multipleSeedPhrase = require('./multiple-seed-phrase');

async function main() {
    try {
        // number of seed phrases
        const count = 5;

        const seedPhrases = await multipleSeedPhrase.generateMultipleSeedPhrases(count);

        console.log('Seed Phrases:');
        seedPhrases.forEach((seedPhrase, index) => {
            console.log(`${index + 1}. ${seedPhrase}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
