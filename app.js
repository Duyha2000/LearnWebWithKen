const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("data.json", "utf8");
console.log("Dữ liệu trong file data.json:\n", data);

// 1. Đọc file `read-this.txt` và log ra console
// const readThisContent = fs.readFileSync("read-this.txt", "utf8");
// console.log("Nội dung file read-this.txt:\n", readThisContent);

// 2. Đọc file `input.txt` và `append.txt`, log ra console
// const inputContent = fs.readFileSync("input.txt", "utf8");
// console.log("Nội dung file input.txt:\n", inputContent);

// const appendContent = fs.readFileSync("append.txt", "utf8");
// console.log("Nội dung file append.txt:\n", appendContent);

// 3. Gộp nội dung của 2 file trên và ghi vào file `final.txt`
// const finalContent = inputContent + appendContent;
// fs.writeFileSync("final.txt", finalContent);
// console.log("Đã ghi nội dung gộp vào file final.txt!");

// -------------------- Tạo server --------------------
const server = http.createServer((req, res) => {
  // Log ra đường dẫn (URL) người dùng gõ trên trình duyệt
  //   console.log("req.url:", req.url);
  // Đặt header để trình duyệt hiểu chúng ta trả về nội dung HTML
  //   res.setHeader("Content-Type", "text/html");
  // Kiểm tra đường dẫn và trả về nội dung tương ứng
  //   if (req.url === "/") {
  //     res.end("<h1>This is homepage</h1>");
  //   } else if (req.url === "/overview") {
  //     res.end("<h1>This is overview page</h1>");
  //   } else if (req.url === "/product") {
  //     res.end("<h1>This is product page</h1>");
  //   } else {
  //     // Nếu không khớp bất kì đường dẫn nào ở trên
  //     res.end("<h1>PAGE NOT FOUND</h1>");
  //   }
  if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  }
});

// Lắng nghe trên port 8080
server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
