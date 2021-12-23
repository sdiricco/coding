//index.js
const http = require('http');
const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.end(`<h1>Benvenuto nel sito</h1>`)
    }
    else if (req.url === '/contatti') {
        res.end(`<h1>Benvenuto nella sezione contatti</h1>`)
    }
    else{
        res.end(`<h1>Errore</h1><p>Torna alla <a href="/">home</a></p>`)
    }
})

server.listen(8080);