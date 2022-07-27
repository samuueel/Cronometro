let sec = 00
let min = 00
let mili = 00

let internal
let isRunning = false;

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function watch() {
    mili++
    if (mili == 60) {
        sec++
        mili = 0
        if (sec == 60) {
            min++
            sec = 0
        }
    }
    document.querySelector('#cronometro').textContent = twoDigits(min)+'m:'+twoDigits(sec)+'s:'+twoDigits(mili)+'ms';
}

function start() {
    if (isRunning === false) {
        watch()
        internal = setInterval(watch, 10);  
    }
    isRunning = true;
}

function pause() {
    clearInterval(internal);
    isRunning = false;
}

function restart() {
    sec = 00
    min = 00
    mili = 00
    clearInterval(internal);
    document.querySelector('#cronometro').textContent = '00m:00s:00ms';
    isRunning = false;
}