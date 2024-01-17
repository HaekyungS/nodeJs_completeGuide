const http = require("http");
const fs = require("fs");

const server = http
  .createServer(function (req, res) {
    if (req.url === "/") {
      // index.html 파일을 생성해서 파일을 읽어 page변수에 담는다.
      const page = fs.readFileSync("./index.html");
      // 헤더에 content-type html 설정
      res.setHeader("Content-Type", "text/html");
      res.write(page);
      res.end();
    }
    // url이 message 이면서 post 인 경우
    else if (req.url === "/message" && req.method === "POST") {
      // chunk 변수
      let chunk = "";
      // 수신되는 data 를 chunk 변수에 담기
      req.on("data", (data) => {
        chunk += data;
      });
      // 수신이 다 되는 경우
      req.on("end", () => {
        // chunk console.log로 확인
        console.log(chunk);
        // 변수 decode 로 변환해주기.
        console.log(decodeURIComponent(chunk));
        // 넘어온 데이터에서 필요한 값 부분만 잘라 저장하기 위해 split 사용
        const message = decodeURIComponent(chunk).split("=")[1];
        // 파일로 생성
        fs.writeFileSync("message.text", message);
        // redirection code
        res.statusCode = 302;
        // location을 /로 이동
        res.setHeader("Location", "/");
        res.end();
      });
    }
  })
  .listen(3000);
