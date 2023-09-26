//n = "123" ---> not a palindrome
//n = '1221' ---> palindrome

function checkPal(str){
    for(let i=0;i<Math.floor(str.length/2);i++){
        if(str[i]!== str[str.length-i-1]){
            return false
        }
    }
    return true;
}

console.log(checkPal('123'))//false
console.log(checkPal('1221'))//true


//given a number, check if number is prime or not

function checkPrime(n){
    let count=0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            count++;
        }
    }
    if(count==2){
        return true;
    }else{
        return false;
    }
}
function findPrime(n){
    let primeNums = [];
    for(let i=1;i<=n;i++){
        if(checkPrime(i)){
            primeNums.push(i)
        }
    }
    return primeNums
}
console.log(findPrime(10)) // [ 2, 3, 5, 7 ]