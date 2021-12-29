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
