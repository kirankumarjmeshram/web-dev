const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question('Enter a number: ', (input) => {
    const num = Number(input);

    if (isNaN(num)) {
      console.log('Invalid input. Please enter a valid number.');
    } else {
      console.log('You entered: ' + num);
    }

    rl.close();
  
  });
}

main();
