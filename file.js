const fs = require('fs');
//sync

// fs.writeFileSync('./test.txt', 'Hey There');

//async
// fs.writeFile('./test.txt', 'Hey There SYNC', (err) => { });

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", "${Date} He Abdullah\n");

fs.cpSync("./test.txt", "./copy.txt");

console.log(fs.statSync("./test.txt").isFile());
