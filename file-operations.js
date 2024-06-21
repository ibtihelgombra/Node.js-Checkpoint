// file-operations.js
const fs = require('fs');

// Write to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File welcome.txt has been created with content: Hello Node');
});

// Read from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Content of hello.txt:', data);
});
