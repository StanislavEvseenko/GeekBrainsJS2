const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const body = verifyUrl(req.url);
    res.end(body);
});

function verifyUrl(url) {
    try {
        let urlDirectory = './public';
        let urlIndex = 'index.html';
        let urlAddress;
        if (url === '/') {
            urlAddress = urlDirectory + url + urlIndex;
            return fs.readFileSync(urlAddress);
        } else {
            urlAddress = urlDirectory + url;
            return fs.readFileSync(urlAddress);
        }
    } catch (e) {
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
        return
    }
    
}

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started on port ${port}!`);