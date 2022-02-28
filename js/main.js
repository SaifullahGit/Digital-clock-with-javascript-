function digitalclock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = 'AM';
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = "PM";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let finalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("Time").innerText = finalTime;
    document.getElementById("small").innerText = timeFormat;
}
setInterval(digitalclock, 1000);