const os  = require('os')

console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())



const  free = os.freemem()
console.log(`${free/1024/1024 /1024}`)  // it will give  free memory in our  pc  in gb 



const  total = os.totalmem()
console.log(`${total/1024/1024/1024}`)