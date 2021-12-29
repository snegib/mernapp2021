const http = require('http');

/*  http.createServer(Here we are making request to that server, to do that we pass a function here and this function will take two param, request and response. Now, let me show you that the request object here comes loaded with details about the request that has been made. And then the response object will be something that we can use to send a response back to the client. But before we start sending a response, I just want to talk about how we do that and the relationship to headers. )  
So when we make a request to a server and when we respond with some data. We also respond with headers, and you can think of headers as extra information about the request or the response. Much like the head section in an email page. It'll tell the browser a little bit more about the Gmail document, but it's not actually shown in the browser. Now, one thing here is we can put in this header is the content type.
That way, the browser knows what to expect. So it's going to be in plain text or HTML or Jason. */
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world');
});
console.log('port 3000');

server.listen(3000, '127.0.0.1'); /* http://127.0.0.1:3000/ */
