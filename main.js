// // Home team score
// let homeScore = document.getElementById("home-score");
// // Home team ""reset" button
// let resetHomeScore = document.getElementById("reset-home-score");
// // Home initial count
// let countHome = 0;


// // Add 1 point for home team
// function add1PointsHome() {
//     countHome += 1
//     homeScore.textContent = count
// }

// // Add 2 points for home team
// function add2PointsHome() {
//     countHome += 2;
//     homeScore.textContent = count;
// }

// // Add 3 points for home team
// function add3PointsHome() {
//     countHome += 3;
//     homeScore.textContent = count;
// }

// // Reset score for home team
// function resetHome() {
//     homeScore.textContent = 0;
//     countHome = 0;
// }


// // // Guest team score
// // let guestScore = document.getElementById("guest-score");
// // // Guest team "reset" button
// // let resetGuestScore = document.getElementById("reset-guest-score");

// // // Guest initial count
// // let countGuest = 0;

// // // Add 1 point for guest team
// // function add1PointsGuest() {
// //     countGuest += 1;
// //     guestScore.textContent = count;
    
// // }

// // // Add 2 points for guest team
// // function add2PointsGuest() {
// //     countGuest += 2;
// //     guestScore.textContent = count;
// // }

// // // Add 3 points for guest team
// // function add3PointsGuest() {
// //     countGuest += 3;
// //     guestScore.textContent = count;
// // }

// // // Reset score for guest team
// // function resetGuest() {
// // guestScore.textContent = 0;
// // countGuest = 0;
  
// // }


//Selectors

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

// === Button Function - Home === \\

// Button - 1 - Home

homeScoreBtnOne.addEventListener("click", function () {
  homeScoreEl.textContent++;
});

// Button - 2 - Home

homeScoreBtnTwo.addEventListener("click", function () {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
});

// Button - 3 - Home

homeScoreBtnThree.addEventListener("click", function () {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
});

// Reset - Home

resetHomeScore.addEventListener("click", function () {
  homeScoreEl.textContent = 0;
});

// === Button Function - Guest === \\

// Button - 1 - Guest

guestScoreBtnOne.addEventListener("click", function () {
  guestScoreEl.textContent++;
});

// Button - 2 - Guest

guestScoreBtnTwo.addEventListener("click", function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
});

// Button - 3 - Guest

guestScoreBtnThree.addEventListener("click", function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

// Reset - Guest

resetGuestScore.addEventListener("click", function () {
  guestScoreEl.textContent = 0;
});

