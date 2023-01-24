

/**Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, 
 * by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, 
 * and API calls and improve performance. */

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