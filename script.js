const http = require('http')

const serve = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('hello\n');
  
  res.end(`<h1>hello guys I am Ronit now BYE BYE</h1>`);
})
serve.listen(3000, () => console.log(`listening to port 3000`));

