// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// console.log(fs.readFile(path));

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
//         if(req.url ==='/'){
//             fs.readFile(path.join(__dirname,'templates','index.html'),'utf-8',(err,conten)=>{
//                 if(err) throw err
//                 res.end(conten)
//             })
//         }else if(req.url === '/about'){
//             fs.readFile(path.join(__dirname,'templates','about.html'),'utf-8',(err,conten)=>{
//                 if(err) throw err
//                 res.end(conten)
//             })
//         }else if(req.url === '/contact'){
//             fs.readFile(path.join(__dirname,'templates','contact.html'),'utf-8',(err,conten)=>{
//                 if(err) throw err
//                 res.end(conten)
//             })
//         }
//     } else if (req.method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//         body.push(chunk)})
//         req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString();
//         const message = decodeURIComponent(parsedBody.split('=')[1]); 
//         res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//         res.end(`Name successfully added: ${message}`)});
//     }
// });

// server.listen(3000, () => {
//     console.log('Server has started on port 3000');
// });
