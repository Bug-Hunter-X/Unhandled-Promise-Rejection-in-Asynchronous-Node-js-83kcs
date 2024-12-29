const http = require('http');

const server = http.createServer((req, res) => {
  // Use try...catch to handle potential errors
  try {
    const data = fetchData();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
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