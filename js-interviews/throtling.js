// throtlling 
/** Throttling is used to call a function after every millisecond or a particular interval of time 
 * only the first click is executed immediately */
const makeApicall=()=>{
    console.log("api call ")
}
let c =0;
const throttle =(fn,wait)=>{
    //.. present time ,last  call time  was  made  
    let lastCall = 0
    return function(){

        if(Date.now()- lastCall >wait) {
            lastCall = Date.now()
            fn.apply(this,arguments)
        }
        
    }
}

window.addEventListener("load",function(){
    var btn = document.getElementById('click');
    btn.addEventListener('click',throttle(makeApicall,1000))
})