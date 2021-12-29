const http = require('http');
const fs = require('fs');

/* we are reading file but this time will do with 'stream' method. previous method you can check in 'nod-js-tutorial'. stream method is very clear */
const readStream = fs.createReadStream(__dirname + '/read-me.txt');
/* write stream */
const writeStream = fs.createWriteStream(__dirname + '/write-me.txt');
readStream.on('data', chunk => {
  console.log('new data received ', chunk);
  writeStream.write(chunk);
});

/* STEP 1 [PIPE Method]
elegant way to read and write data, which is pipe  after that we want to sent it client. for that we need to create server*/
const readStream1 = fs.createReadStream(__dirname + '/read-me1.txt');
const writeStream1 = fs.createWriteStream(__dirname + '/write-me1.txt');
readStream1.pipe(writeStream1);

/*  STEP 2 [PIPE Method] */
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  const readStream2 = fs.createReadStream(__dirname + '/read-me2.txt');
  readStream2.pipe(
    res
  ); /* read-me text in the browser.. run node app in terminal and see the result.
  instead of sending plain text to browser we can sent HTML to the browser for that we need to make 2 changes. first we need to change in header ['Content-Type': 'text/plain'] should be ['Content-Type': 'text/html'] and second is change file name [(__dirname + '/read-me2.txt')]  to [(__dirname + '/read-me2.html')] and ofcourse 'read-me2.html' file in the directory should have*/
});
console.log('port 3000');
server.listen(3000, '127.0.0.1');
