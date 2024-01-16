const fs = require("fs");

// fs => file system의 줄임말.
// writeFileSync(파일명, 파일 내 들어갈 텍스트)
// 파일명 부분에 경로를 포함해서 쓰면 해당 경로에 생김.
fs.writeFileSync("../hello.txt", "생겨봐");
