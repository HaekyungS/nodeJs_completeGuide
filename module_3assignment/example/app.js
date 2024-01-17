const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      const page = fs.readFileSync("./index.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(page);
      res.end();
    } else if (req.url === "/create-user" && req.method === "POST") {
      let chunk = "";
      req.on("data", (data) => {
        chunk += data;
      });
      req.on("end", () => {
        const user = decodeURIComponent(chunk).split("=")[1];
        //  유저 이름을 전달하기 위해 쿠키에 유저 이름을 담아서 전달했다. 그 과정에서 노출을 대비해 유저이름은 encode를 진행.
        res.writeHead(302, { location: "/user", "set-cookie": `${encodeURI(user)}` });
        res.end();
      });
    } else if (req.url === "/user") {
      // 쿠키에 담아두었던 유저 이름을 decode하여 유저 변수에 담아준다.
      const user = decodeURIComponent(req.headers.cookie);
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8 " });
      res.write(`<h1>입력하신 유저이름은 아래와 같습니다.</h1><li>${user}</li>`);
      res.end();
    }
  })
  .listen(3000);
