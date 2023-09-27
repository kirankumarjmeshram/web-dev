const readline = require('readline');
const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
function main() { 
   a.question("write str: ",(num)=>{
    console.log(num);
    a.close();
   }) ;
}

main();