const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Enter the number: ', (input1) => {
    const n1 = parseFloat(input1);
    console.log(n1 % 2 === 0 ? "Even" : "Odd");
    rl.close();
});
