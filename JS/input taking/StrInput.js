const readline = require('readline');
const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
function main() { 
    let b;
   a.question("write str: ",(num)=>{
    console.log(num);
    a.close();
   }) ;
}

main();