
// arr.reduce((acc, curr, i, arr)=>{},initial value)

Array.prototype.myForEach = function (cb) {
    for( let i=0; i<this.length;i++){
        cb(this[i], i, this)
    }
    
}

const nums = [2,3,5,6];

nums.myForEach((el)=>console.log(el))
// 2
// 3
// 5
// 6