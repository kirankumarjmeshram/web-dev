
//arr.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
    let temp = [];
    for(let i=0;i<this.length;i++){
        // here this representing that array where myMap method is implementing
        temp.push(cb(this[i],i,this));
        // so here this = array,
    }
    return temp;
}

const nums = [2,3,5,6];

const multiplyThree = nums.myMap((num)=>num*3);

console.log(multiplyThree) // [ 6, 9, 15, 18 ]