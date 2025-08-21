const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    // console.log("New Req Rec.");
    // console.log(req.headers);
    const log = `${Date.now()} : ${req.url} New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {

        // res.end("Hello From Server Again");
        switch (req.url) {
            case '/': res.end("HomePage");
                break
            case '/about': res.end("I am Abdulah");
                break
            default
            '404': res.end("Not foumd")
        }
    });
});



myServer.listen(8000, () => console.log("Server Started!"));