const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the first number: ', (input1) => {
    const n1 = parseFloat(input1);
    rl.question('Enter the second number: ', (input2) => {
        const n2 = parseFloat(input2); 
        const sum = n1 + n2;
        console.log('Sum:', sum); 
        rl.close(); 
    });
});
