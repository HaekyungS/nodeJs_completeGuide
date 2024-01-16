const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise in setTimeOut Done");
    }, 1500);
  });
  //   리턴값이 프로미스니까 프로미스가 반환.
  return promise;
};

setTimeout(() => {
  console.log("setTimerout timer is done");
  //   fetchData 함수 실행 -> 함수 내 프로미스 내 setTimeout
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("hello");
console.log("hi");
