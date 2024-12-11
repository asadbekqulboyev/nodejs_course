const fs = require('fs');
const path = require('path');
// fs.mkdir(path.join(__dirname, 'notes','december.txt'), (err) => {
//     if (err) throw new Error()
//     console.log('Error')
// }
// )
// fs.mkdir(path.join(__dirname,'notes'),error=>{
//     if(error) throw new Error()
//     console.log('Folder was create succesfull');
// })
fs.writeFile(path.join(__dirname, 'notes','december.txt'),'Node jsni organyapman',(err)=>{
    if(err) throw new Error()
        console.log('New successfull');
        
        
})