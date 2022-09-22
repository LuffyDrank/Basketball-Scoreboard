let homePoints = 0;
let guestPoints = 0;
let home = document.getElementById("homescore");
let guest = document.getElementById("guestscore");

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