const clock = document.getElementById("js-clock");

const setCurrentTime = () => {
  const timeZoneRecog = new Date().getTimezoneOffset();

  const hourDiff = timeZoneRecog / 60;

  let hours = new Date().getUTCHours() - hourDiff;
  const minutes = new Date().getUTCMinutes();
  const seconds = new Date().getUTCSeconds();

  if (hours > 24) {
    hours = hours - 24;
  }

  clock.innerHTML = `${hours >= 10 ? hours : `0${hours}`}:${
    minutes >= 10 ? minutes : `0${minutes}`
  }:${seconds >= 10 ? seconds : `0${seconds}`}`;
};

setInterval(setCurrentTime, 1000);
