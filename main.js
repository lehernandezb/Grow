const startButton = document.getElementById("Start");
const pauseButton = document.getElementById("Pause");
const restartButton = document.getElementById("Restart");
const hourInput = document.getElementById("Hour");
const minuteInput = document.getElementById("Minute")
const countDown = document.getElementById("Countdown");

let timer = null;
let timeLeft = 0;
let isRunning = false;

function timeToDisplay(second) {
    const remainder = second % 60
    const remainder2 = second % 3600
    const minute = ((second - remainder) / 60) % 60;
    const hour = (second - remainder2) / 3600;
    return addZero(hour) + " : " + addZero(minute) + " : " + addZero(remainder);
}

function addZero(int){
    if (int < 10) {
        return "0"+ int.toString();
    } else{
        return int.toString();
    }
}

const toggleCountdown = () => {
    if (isRunning) {
        countDown.innerText = timeToDisplay(timeLeft);

        timer = setInterval(() => {
            timeLeft--;
            countDown.innerText = timeToDisplay(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timer);
                countDown.innerText = "00 : 00 : 00 \n Time is Up!"
            }

        }, 1000);
    }

}

const addRestartAndPause = () => {
    if (startButton.style.display = 'flex'){
        startButton.style.display = 'none';
        pauseButton.style.display = 'flex';
        restartButton.style.display = 'flex'
    }
}

startButton.addEventListener("click",() => {
    const hour = parseInt(hourInput.value) || 0;
    const minute = parseInt(minuteInput.value) || 0;

    timeLeft = (minute + hour * 60) * 60;
    countDown.style.display = 'flex';
    isRunning = true;

    clearInterval(timer);
    toggleCountdown();
    addRestartAndPause();
});

pauseButton.addEventListener("click", () => {
    if (timeLeft <= 0) return;

    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        pauseButton.innerText = "Resume Time";
    } else {
        isRunning = true;
        pauseButton.innerText = "Pause Time";
        toggleCountdown();
    }
});

restartButton.addEventListener("click", () => {
    const hour = parseInt(hourInput.value) || 0;
    const minute = parseInt(minuteInput.value) || 0;

    timeLeft = (minute + hour * 60) * 60;
    isRunning = true;

    clearInterval(timer);
    toggleCountdown();
});