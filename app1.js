const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/user') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h2>Hello User</h2><p>You should work harder and master Node.js...</p></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/create-user") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split("=")[1]);
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
    }
});

server.listen(3000);