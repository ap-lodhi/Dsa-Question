const  fs = require('fs')


// creating folder 
fs.mkdirSync('anil')   

// creating file  and adding data into it  
fs.writeFileSync('anil/bio.txt', 'my name is  anil patel')

fs.appendFileSync('anil/bio.txt', 'i am fullstack developer ')

// reading the data 
const data  =fs.readFileSync('anil/bio.txt','utf8');


console.log(data)
org_data = data.toString()
console.log(org_data)



// Reanme the file  
fs.renameSync('anil/bio.txt', 'anil/myBio.txt')

// to delete  the file 

fs.unlinkSync('anil/myBio.txt')  


// to delete  the folder 

fs.rmdirSync('anil')
