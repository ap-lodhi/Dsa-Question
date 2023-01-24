

/**Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, 
 * by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, 
 * and API calls and improve performance. */

// A Debounce function is a higher-order function that returns another function, to create closure around the function parameters (func, timeout) and the timer variable.

// func: is a function that you want to execute after the debounce time

// timeout: The amount of time you want the debounce function to wait after the last received action before executing func.

// timer: The value used to indicate a running debounce.

// The common use cases are Search box suggestions, text-field auto-saves, and eliminating double-button clicks.

    const makeApicall=()=>{
        console.log("api call ")
    }
    let c =0;
    const debouncer =(fn,delay)=>{
        // should remeber if the  call is called
        let debouncing
        return function(){
            console.log(c++)
            debouncing && clearTimeout(debouncing)
          debouncing =  setTimeout(()=>fn.apply(this,arguments),delay)
        }
  
  
    }

    
window.addEventListener("load",function(){
    var btn = document.getElementById('click');
    btn.addEventListener('click',debouncer(makeApicall,1000))
})