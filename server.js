const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const body = verifyUrl(req.url);
    res.end(body);
});

function verifyUrl(url) {
    let urlDirectory = './public';
    let urlIndex = 'index.html';
    let urlAddress;
    if (url == '/') {
        urlAddress = urlDirectory + url + urlIndex;
        return fs.readFileSync(urlAddress);
    } else {
        urlAddress = urlDirectory + url;
        return fs.readFileSync(urlAddress);
    }
}

server.listen(3000);

console.log('Server started!');