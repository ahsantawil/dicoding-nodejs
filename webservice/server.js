const http = require('http');

const requestListener = (req, res) => {
    res.setHeader(`Content-type`, `text/html`);
    res.statusCode = 200;

    const { method } = req;

    if (method === 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', ()=> {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            res.end(`<h2>Hi, ${name} !!</h2>`)
        })
    }
    
};


const server = http.createServer(requestListener);

const port = 5000;
const host = `localhost`;


server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

