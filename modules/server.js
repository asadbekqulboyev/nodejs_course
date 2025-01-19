const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>Send Name</h1> 
            <form method='post' action='/'>
                <input name="name" placeholder='Ismingizni kiriting'/>
                <button type='submit'>Send Name</button>
            </form>
        `);
    } else if (req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk); // Kichik qismlarni yig'amiz
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // To'liq ma'lumotni yig'ish
            const message = decodeURIComponent(parsedBody.split('=')[1]); // Form ma'lumotini ajratish
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`Name successfully added: ${message}`); // Javob berish
        });
    }
});

server.listen(3000, () => {
    console.log('Server has started on port 3000');
});
