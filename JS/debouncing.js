// Debouncing is a programming practice used to ensure that time-consuming tasks 
// do not fire so often, that it stalls the performance of the web page. In other 
// words, it limits the rate at which a function gets invoked.

// Debouncing in JavaScript is a practice used to improve browser 
// performance. There might be some functionality in a web page that requires 
// time-consuming computations. If such a method is invoked frequently, it might 
// greatly affect the performance of the browser, as JavaScript is a single-threaded language. 

let counter =0;
const getData = () =>{
    console.log("Fetching Data ..", counter++)
}

const debounce = function(fn, d){
    let timer;
    return function (){
        let context= this,
        args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getData.apply(context,args)
        },d)
    }
}

const betterFunction = debounce(getData,300)