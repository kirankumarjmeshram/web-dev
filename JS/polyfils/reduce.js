
// arr.reduce((acc, curr, i, arr)=>{},initial value)

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulater = initialValue;
    for( let i=0; i<this.length;i++){
        accumulater = accumulater?cb(accumulater,this[i], i, this):this[i]
    }
    return accumulater
}

const nums = [2,3,5,6];

const sum1 = nums.myReduce((a,b)=> a+b)

const sum2 = nums.myReduce((a,b)=> a+b,10)

console.log(sum1) //16

console.log(sum2)//26