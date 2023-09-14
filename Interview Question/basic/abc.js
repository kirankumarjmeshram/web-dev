// function myFunc() {
//     console.log(this)        }
//     const obj = {
//          bool: true,
//          myFunc: myFunc,
//    }
//     obj.myFunc()//{ bool: true, myFunc: [Function: myFunc] }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function myFunction(arr) {   let data = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 1));
// console.log(data)  }
// myFunction(arr)

// let arr =[[11, 21, 23],
//      [14, 15, 26],
//      [17, 28, 19]]

// let sum = 0
// let i = 0
// while ( i < 3 ){
//     let a = arr[ i ][ Math.floor(3 / 2) ]
//     console.log({a})//[21,15,28]
// 	sum += a;
//          i++;
// }
// console.log(sum)//64

//console.log(typeof(null) === typeof({})) // true

// function checkPal(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkPal('MALAYALAM'))// true
// console.log(checkPal('NAME'))// false