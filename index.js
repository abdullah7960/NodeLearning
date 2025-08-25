const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    // console.log("New Req Rec.");
    // console.log(req.headers);
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {

        // res.end("Hello From Server Again");
        switch (myUrl.pathname) {
            case '/': res.end("HomePage");
                break
            case '/about':
                const username = myUrl.query.myName;

                res.end(`Hy, ${username}`);
                break
            default: res.end("Not foumd")
        }
    });
});



myServer.listen(8000, () => console.log("Server Started!"));