// arr.filter((num, i, array)=>{})

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for(let i=0; i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp;
}

const nums = [2,3,5,6];

const moreThan4 = nums.myFilter((num)=> num>4);

console.log(moreThan4) // [ 5, 6 ]