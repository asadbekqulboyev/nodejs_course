const http = require('http')
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
    
        if(req.url ==='/'){
            fs.readFile(path.join(__dirname,'templates','index.html'),'utf-8',(err,conten)=>{
                if(err) throw err
                res.end(conten)

            })
            
            
        }else if(req.url === '/about'){
            fs.readFile(path.join(__dirname,'templates','about.html'),'utf-8',(err,conten)=>{
                if(err) throw err
                res.end(conten)
            })
        }else if(req.url === '/contact'){
            fs.readFile(path.join(__dirname,'templates','contact.html'),'utf-8',(err,conten)=>{
                if(err) throw err
                res.end(conten)
            })
        }else if(req.url=='/api/admin'){
            // res.writeHead(200,{'Content-Type':'text/plain'})
            const admin = { admin: 'Asadbek', 'surname': 'Familya', 'status': '1' }
            res.end(JSON.stringify(admin))
        }
    } else if (req.method === 'POST') {
        const body = [];
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
        req.on('data', dates => {
            body.push(Buffer.from(dates))
        })
        req.on('end' , ()=>{
            const message = body.toString().split('=')[1]
            res.end('Ism qoshildi ' + message)
        })
    }
});

server.listen(3000, () => {
    // console.log('Server has started on port 3000');
});
