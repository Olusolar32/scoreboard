let homeScores = document.getElementById("homeScore");
let guestScores = document.getElementById("guestScore");
let leaderText = document.getElementById("leadingTeam");
let homeCount = 0;
let guestCount = 0;

function updateHome(points) {
  homeCount += points;
  homeScores.textContent = homeCount;
  updateLeader();
}

function updateGuest(points) {
  guestCount += points;
  guestScores.textContent = guestCount;
  updateLeader();
}

function updateLeader() {
  if (homeCount > guestCount) {
    leaderText.textContent = "Home Team is leading the scoreline";
    leaderText.style.color = "#640202f3";
  } else if (homeCount === guestCount) {
    leaderText.textContent = "Both Teams are on fire";
    leaderText.style.color = "#031461";
  } else {
    leaderText.textContent = "Guest Team is leading the scoreline";
    leaderText.style.color = "crimson";
  }
}

function resetGame() {
  homeCount = 0;
  guestCount = 0;
  homeScores.textContent = homeCount;
  guestScores.textContent = guestCount;
  leaderText.textContent = "New Game Started!";
  leaderText.style.color = "#ffffff";
}
// function homeAdd1() {
//   homeCount++;
//   homeScores.textContent = homeCount;
// }

// // console.log(add1());

// function homeAdd2() {
//   homeCount += 2;
//   homeScores.textContent = homeCount;
// }

// function homeAdd3() {
//   homeCount += 3;
//   homeScores.textContent = homeCount;
// }

// function guestAdd1() {
//   guestCount++;
//   guestScores.textContent = guestCount;
// }

// // console.log(add1());

// function guestAdd2() {
//   guestCount += 2;
//   guestScores.textContent = guestCount;
// }

// function guestAdd3() {
//   guestCount += 3;
//   guestScores.textContent = guestCount;
// }
