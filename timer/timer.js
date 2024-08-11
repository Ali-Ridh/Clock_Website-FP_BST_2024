let countdown;
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let isRunning = false;

function updateDisplay() {
    let hrs = String(hours).padStart(2, '0');
    let mins = String(minutes).padStart(2, '0');
    let secs = String(seconds).padStart(2, '0');
    let millis = String(milliseconds).padStart(2, '0');
    document.getElementById('timer').innerHTML = `${hrs}:${mins}:${secs}:${millis}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            if (milliseconds > 0) {
                milliseconds--;
            } else if (seconds > 0) {
                milliseconds = 99;
                seconds--;
            } else if (minutes > 0) {
                milliseconds = 99;
                seconds = 59;
                minutes--;
            } else if (hours > 0) {
                milliseconds = 99;
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                clearInterval(countdown);
                isRunning = false;
                alert("Time's up!");
                return;
            }
            updateDisplay();
        }, 10);
    }
}

function pause() {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    }
}

function reset() {
    clearInterval(countdown);
    isRunning = false;
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    updateDisplay();
}

// Initial display update
updateDisplay();
