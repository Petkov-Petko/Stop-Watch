document.addEventListener("DOMContentLoaded", () => {
 addEventListener("click", (event) => {
    if (event.target.id === "start") {
      startTimer();
      document.querySelector("#start").disabled = true;
    }else if (event.target.id === "stop") {
        stopTimer();
    }else if (event.target.id === "reset") {
        resetTimer();
    }
  });
});
let interval = null;
const timer = document.querySelector("#timer");
let seconds = 0;
let hours = 0;

function startTimer() {
  interval = setInterval(() => {
    seconds += 1;
    if (seconds === 60) {
      hours += 1;
      seconds = 0;
    }
    timer.innerHTML = `${String(hours).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  document.querySelector("#start").disabled = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    hours = 0;
    timer.innerHTML = `${String(hours).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
}   