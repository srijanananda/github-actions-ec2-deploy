const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head><title>My CI/CD App</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px; background: #1a1a2e; color: white;">
        <h1 style="color: #00d4ff;">🚀 Auto-Deployed via GitHub Actions!</h1>
        <p>Every git push automatically updates this page.</p>
        <p><strong>Version:</strong> 1.0.0</p>
        <p><strong>Deployed at:</strong> ${new Date().toISOString()}</p>
        <hr style="border-color: #00d4ff; margin: 30px auto; width: 50%;">
        <p style="color: #aaa;">Running on AWS EC2 | Deployed by GitHub Actions</p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`App running at http://${hostname}:${port}/`);
});