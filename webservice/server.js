const http = require('http');

const requestListener = (req, res) => {
    res.setHeader(`Content-type`, `text/html`);
    res.statusCode = 200;

    const { method, url } = req;

    if (url === '/') {
        if (method === 'GET') {
            res.end(`<h1>Ini adalah halaman Homepage</h1>`)
        } else {
            res.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
        }
    } else if (url === '/about') {
         if (method === 'GET') {
            res.end(`<h1> Hallo ini adalah halaman ABOUT </h1>`);
         } else if(method === 'POST') {
                 let body = [];

                 req.on('data', (chunk) => {
                     body.push(chunk);
                 });
         
                 req.on('end', ()=> {
                     body = Buffer.concat(body).toString();
                     const { name } = JSON.parse(body);
                     res.end(`<h2>Hi, ${name} !!</h2>`)
                 })
         } else {
            res.end(`<h1>Halaman yang anda tuju tidak menggunakan ${method} request </h1>`);
         }
    } else {
        res.end(`<h1>Halaman tidak ditemukan !!</1>`)
    }
    
};


const server = http.createServer(requestListener);

const port = 5000;
const host = `localhost`;


server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

