const daysLeft = document.getElementById("days");
const hoursLeft = document.getElementById("hours");
const minutesLeft = document.getElementById("minutes");
const secondsLeft = document.getElementById("seconds");

const updateCountdown = () => {
  let desiredDate = new Date("Sep 15 2023");
  let currentDate = new Date();

  let diff = desiredDate - currentDate;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysLeft.textContent = days;
  hoursLeft.textContent = hours;
  minutesLeft.textContent = minutes;
  secondsLeft.textContent = seconds;
};

setInterval(updateCountdown, 1000);

// updateCountdown();
