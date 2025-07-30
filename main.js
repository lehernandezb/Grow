const startButton = document.getElementById("Start");
const pauseButton = document.getElementById("Pause");
const restartButton = document.getElementById("Restart");
const hourInput = document.getElementById("Hour");
const minuteInput = document.getElementById("Minute")

function timeToDisplay(minute) {
    let remainder = minute % 60
    let hour = (minute - remainder) / 60;
    return addZero(hour) + " : " + addZero(remainder);
}

function addZero(int){
    if (int < 10) {
        return "0"+ int.toString();
    } else{
        return int.toString();
    }
}

const toggleCountdown = () => {
    const countDown = document.getElementById("Countdown");
    if (countDown.style.display === 'flex'){
        countDown.style.display = 'none';
    } else {
        countDown.style.display = 'flex';
    }

    const hour = parseInt(hourInput.value) || 0;
    const minute = parseInt(minuteInput.value) || 0;
    let time = minute + (hour * 60);

    countDown.innerText = timeToDisplay(time);

    const timer = setInterval(() => {
        time--;
        countDown.innerText = timeToDisplay(time);

        if (time <= 0) {
            clearInterval(timer);
            countDown.innerText = "00 : 00"
        }

    }, 60000);

}

const addRestartAndPause = () => {
    if (startButton.style.display = 'flex'){
        startButton.style.display = 'none';
        pauseButton.style.display = 'flex';
        restartButton.style.display = 'flex'
    }
}

startButton.addEventListener("click",() => {
    toggleCountdown();
    addRestartAndPause();
});
