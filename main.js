const startButton = document.getElementById("Start");
let start = false;

const toggleCountdown = () => {
    const countDown = document.getElementById("Countdown");
    if (countDown.style.display === 'flex'){
        countDown.style.display = 'none';
    } else {
        countDown.style.display = 'flex';
    }
}

startButton.addEventListener("click",() => {
    start = true;
    toggleCountdown();
});

if (start) {
    console.log("works");
}