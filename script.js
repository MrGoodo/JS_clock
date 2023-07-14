const hourSpan = document.querySelector(".hour");
const minSpan = document.querySelector(".min");
const secSpan = document.querySelector(".sec");

const getClock = (clock) => {
  return String(clock).length === 1 ? `0${clock}` : clock;
};

const renderClock = () => {
  const date = new Date();

  hourSpan.innerText = getClock(date.getHours());
  minSpan.innerText = getClock(date.getMinutes());
  secSpan.innerText = getClock(date.getSeconds());
};

setInterval(renderClock, 1000);
