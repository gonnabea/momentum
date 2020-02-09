const API_KEY = "b8363208dcff9d217fd0d0a4e6cc4ee7";
const weather = document.getElementById("weather");

const getLocation = coordsObj => {
  localStorage.setItem("location", JSON.stringify(coordsObj));
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      const TodayWeather = json.weather[0].description;
      console.log(json.weather[0]);
      if (temperature > 0)
        weather.innerHTML = `${TodayWeather} 현재 위치 ${place}의 온도는 ${temperature}°C입니다`;
      else {
        weather.innerHTML = `${TodayWeather} 현재 위치 ${place}의 온도는 ${temperature}°C,
        영하의 날씨입니다 따뜻하게 입고 나가세요 😪`;
      }
    });
};

const success = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  getLocation(coordsObj);
  getWeather(latitude, longitude);
};

const fail = () => {
  alert("Can't recognize the location");
};
const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(success, fail);
};

function loadCoords() {
  const loadedCoords = localStorage.getItem("location");
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

loadCoords();
