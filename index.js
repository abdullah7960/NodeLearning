const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello From Home Page');
})

app.get('/about', (req, res) => {
    return res.send("Hello From About Page");
})


// function myHandler(req, res) {
//     // console.log("New Req Rec.");
//     // console.log(req.headers);
//     if (req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()} :${req.method} ${req.url} New Request Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {

//         // res.end("Hello From Server Again");
//         switch (myUrl.pathname) {
//             case '/': res.end("HomePage");
//                 break
//             case '/about':
//                 const username = myUrl.query.myName;

//                 res.end(`Hy, ${username}`);
//                 break
//             case '/signup':
//                 if (req.method == 'GET') res.end('This is a signup Form');
//                 else if (req.method == "POST") {
//                     req.end("Success");
//                 }
//             default: res.end("Not foumd")
//         }
//     });
// }

const myServer = http.createServer(app);



myServer.listen(8000, () => console.log("Server Started!"));