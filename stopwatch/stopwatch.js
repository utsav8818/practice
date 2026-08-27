let startBttn = document.querySelector(".start_bttn");
let resetBttn = document.querySelector(".reset_bttn");
let hour = 0,
  minute = 0,
  second = 0;
let pageHour = document.querySelector(".hour");
let pageMinute = document.querySelector(".minute");
let pageSecond = document.querySelector(".second");
let stopWatch = null;
let pause_bttn = document.querySelector(".pause_bttn");

startBttn.addEventListener("click", startTime);
pause_bttn.addEventListener("click", pauseTime);
resetBttn.addEventListener("click", stopTime);

function startTime() {
  if (stopWatch != null) return;
  stopWatch = setInterval(() => {
    pageSecond.innerHTML = second;
    second++;
    if (second === 59) {
      second = 0;
      minute++;
      pageMinute.innerHTML = minute;
    }
    if (minute === 59) {
      minute = 0;
      hour++;
      pageHour.innerHTML = hour;
    }
    // if(second<10){
    //     pageSecond.innerHTML = "0"+ second;
    // }
    pageSecond.innerHTML = second < 10 ? `0${second}`:second;
    if (minute < 10) {
      pageMinute.innerHTML = "0" + minute;
    }
    if (hour < 10) {
      pageHour.innerHTML = "0" + hour;
    }
  }, 1000);
}

function pauseTime() {
  clearInterval(stopWatch);
  stopwatch = null;
}
function stopTime() {
  clearInterval(stopWatch);
  hour = 0;
  minute = 0;
  second = 0;
  pageHour.innerHTML = "0" + hour;
  pageMinute.innerHTML = "0" + minute;
  pageSecond.innerHTML = "0" + second;
  stopWatch = null;
}
