// let name = {
//     firstname :  "Kirankumar J",
//     lastname : "Meshram",
//     printFulName: function () {
//         console.log(this.firstname, this.lastname)
//     }
// }

let name = {
    firstname :  "Kirankumar J",
    lastname : "Meshram",
}

let  printFulName =  function (hometown, state) {
    console.log(this.firstname, this.lastname +" from "+hometown+" , "+ state)
}

//name.printFulName.call(name);// Kirankumar J Meshram
printFulName.call(name, "Nagpur","MH")//Kirankumar J Meshram from Nagpur// Kirankumar J Meshram from Nagpur , MH

let name2 = {
    firstname :  "Sachin",
    lastname : "Tendulkar",
}

//name.printFulName.call(name2);//Sachin Tendulkar

printFulName.call(name2);//Sachin Tendulkar// Sachin Tendulkar from undefined

//apply
printFulName.apply(name2, ['Mumbai', 'MH'])//Sachin Tendulkar from Mumbai , MH

//bind

let printMyName = printFulName.bind(name2, "Mumbai","MH")

console.log(printMyName)//[Function: bound printFulName]
printMyName()//Sachin Tendulkar from Mumbai , MH