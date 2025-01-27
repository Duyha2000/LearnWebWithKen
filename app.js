const http = require("http");
const fs = require("fs");

const readThis = fs.readFileSync("read-this.txt");
// // console.log(`${readThis}`);
const readInput = fs.readFileSync("input.txt");
const readAppend = fs.readFileSync("append.txt");
// // console.log(`${readInput} ${readAppend}`);
//  readFileSync() và writeFileSync()
fs.writeFileSync("final.txt", `${readInput} ${readAppend}`);

const readJson = JSON.parse(fs.readFileSync("data.json"));
console.log(readJson);

const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type: application/json");
  if (req.url === "/") {
    res.write(readThis);
    res.write(readInput);
    res.end();
  } else if (req.url === "/overview") {
    res.end("<h1>This is overview page</h1>");
  } else if (req.url === "/product") {
    res.end("<h1>This is Product page</h1>");
  } else if (req.url === "/api") {
    res.end(readJson);
  } else if (req.url.startsWith("/api/")) {
    // split:
    console.log(req.url); // /api/...
    const id = Number(req.url.split("/")[2]);
    console.log(id); // 2

    const item = readJson?.students?.find((obj) => obj.id == id);
    console.log(item);

    // res.end(JSON.stringify(readJson[id]));
  } else {
    res.end("<h1>PAGE NOT FOUND</h1>"); // 1 dòng dùng res.end
  }
  // http://localhost:8080/api/2
  // Đường dẫn /api/:id => gửi về đối tượng tương ứng
});

server.listen(8080, () => {
  console.log("Server is running on port 8080!");
});

// GET, POST, PUT/ PATCH: update, DELETE
