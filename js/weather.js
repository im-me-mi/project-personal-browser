const API_KEYS = "e82f9e933332547f57e6ff98ba9efc95";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const geo = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const temp = data.main.temp;
      geo.innerText = data.name;
      weather.innerText = `/ ${temp}도 ${data.weather[0].main}`;
    });
}

function onGoError() {
  alert("위치를 설정할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGoError);
