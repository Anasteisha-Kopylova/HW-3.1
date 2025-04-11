const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is a day of your birth?', (a) => {
    rl.question('What is month of your birth?', (b) => {
        rl.question('What is year of your birth?', (c) => {

            console.log(`Random order: ${[a, b, c].sort(() => Math.random() - 0.5).join(' | ')}`);
            rl.close();
        })
    })
})