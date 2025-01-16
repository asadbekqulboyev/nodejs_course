const http  = require('http')
console.log(http);
const server = http.createServer((request,response)=>{
    
    console.log(request.url);
    response.write('<h1>uygdcusgbvhello</h1> ')
    response.end()
})
server.listen(3000,()=>{
    console.log('server has started on port 3000');
})