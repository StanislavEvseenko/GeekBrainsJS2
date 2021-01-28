const HTTP = require('http');
const FS = require('fs');

const SERVER = HTTP.createServer((req, res) => {
  const BODY = verifyUrl(req.url);
  res.end(BODY);
});

function verifyUrl(url) {
  try {
    let urlDirectory = './public';
    let urlIndex = 'index.html';
    let urlAddress;
    if (url === '/') {
      urlAddress = urlDirectory + url + urlIndex;
      return FS.readFileSync(urlAddress);
    } else {
      urlAddress = urlDirectory + url;
      return FS.readFileSync(urlAddress);
    }
  } catch (e) {
    console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    return
  }
  
}

const PORT = process.env.PORT || 3000;

SERVER.listen(PORT);

console.log(`Server started on port ${PORT}!`);