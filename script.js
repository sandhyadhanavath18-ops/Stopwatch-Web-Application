let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const display = document.getElementById("display");
const lapList = document.getElementById("laps");

function updateDisplay() {

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    display.innerHTML = h + ":" + m + ":" + s;
}

function startWatch() {

    if (timer !== null) return;

    timer = setInterval(function () {

        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

}

function pauseWatch() {

    clearInterval(timer);
    timer = null;

}

function resetWatch() {

    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    lapList.innerHTML = "";

}

function addLap() {

    if (hours == 0 && minutes == 0 && seconds == 0)
        return;

    let lap = document.createElement("li");

    lap.innerHTML = display.innerHTML;

    lapList.appendChild(lap);

}

document.getElementById("start").addEventListener("click", startWatch);
document.getElementById("pause").addEventListener("click", pauseWatch);
document.getElementById("reset").addEventListener("click", resetWatch);
document.getElementById("lap").addEventListener("click", addLap);

updateDisplay();