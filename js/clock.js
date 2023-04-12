const clock = document.querySelector("p#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `현재시각은 ${hours}시 ${minutes}분 입니다.`;
}

getClock();
setInterval(getClock, 1000); 
