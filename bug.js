const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = fetchData();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(data);
});

function fetchData() {
  // Simulate a random error 50% of the time
  if (Math.random() < 0.5) {
    throw new Error('Failed to fetch data');
  }
  return 'Data fetched successfully';
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});