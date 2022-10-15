let disableTimer = false;
let homePoints = 0;
let guestPoints = 0;
let currentTimeSeconds = 0;
let currentTimeMinutes = 0;
const home = document.getElementById("homescore");
const guest = document.getElementById("guestscore");
const timer = document.getElementById("time");
const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");

startTimerBtn.addEventListener("click", startTimer)
stopTimerBtn.addEventListener("click", stopTimer)

function add1home () {
    homePoints++;
    home.textContent = homePoints;
}
function add2home () {
    homePoints += 2;
    home.textContent = homePoints;
}
function add3home () {
    homePoints += 3;
    home.textContent = homePoints;
}
function add1guest () {
    guestPoints++;
    guest.textContent = guestPoints;
}
function add2guest () {
    guestPoints += 2;
    guest.textContent = guestPoints;
}
function add3guest () {
    guestPoints += 3;
    guest.textContent = guestPoints;
}
function reset() {
    guestPoints = 0;
    homePoints = 0;
    guest.textContent = guestPoints;
    home.textContent = homePoints;
}

timer.innerHTML = `<h2>Time: ${formatTime(currentTimeSeconds, currentTimeMinutes)}</h2>`;
function Timer() {
    currentTimeSeconds++;
    timer.innerHTML = `<h2>Time: ${formatTime(currentTimeSeconds, currentTimeMinutes)}</h2>`;
    if(currentTimeSeconds >= 60) {
        currentTimeSeconds = 0;
        currentTimeMinutes++;
        timer.innerHTML = `<h2>Time: ${formatTime(currentTimeSeconds, currentTimeMinutes)}</h2>`
    }
}

function formatTime(timeSeconds, timeMinutes) {
    return timeSeconds < 10 ? (`${timeMinutes}:0${timeSeconds}`) : (`${timeMinutes}:${timeSeconds}`)
}

let intervalId;

function startTimer() {
        intervalId = setInterval(Timer, 1000);
}
function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

