// Get buttons and add observables to monitor clicks
const startButton = document.querySelector('#startCountdown');
const startObs = Rx.Observable.fromEvent(startButton, 'click');

//input for hours minuuts abd seconds from the user..
const userInputHr = document.querySelector('#userHour');
const userInputMin = document.querySelector('#userMinute');
const userInputSec = document.querySelector('#userSecond');

// Get elements where countdown will be displayed
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Function to convert seconds to hours, minutes and seconds
const toTime = (time) => ({
    hours: Math.floor(time / 3600),
    minutes: Math.floor((time % 3600 / 60)),
    seconds: Math.floor(time % 3600 % 60)
});

// function that apouts the time to the console 
const render = (time) => {
    //  display the remining time 
    if((time.seconds) > 0 || (time.minutes) > 0 || (time.hours) > 0) {
        
        let hourValue = time.hours;
        hours.innerHTML = hourValue + ":";

        let minuteValue = time.minutes;
        minutes.innerHTML = minuteValue + ":";

        let secondValue = time.seconds;
        seconds.innerHTML = secondValue;

    } else {
        // when time is over display all seros 
        hours.innerHTML = "0:";
        minutes.innerHTML = "0:";
        seconds.innerHTML = "0";
    }
}

// Subscribe to the start button click
app$ = startObs.subscribe(() => {

    // converting user input into milliseconds
    let userHour = (userInputHr.value * 60 * 60 * 1000);
    let userMin = (userInputMin.value) * 60 * 1000;
    let userSec = (userInputSec.value) * 1000;

    // computing total number of seconds from time inputed 
    let total = userSec + userMin + userHour;
    total = total / 1000;

    let timer$ = Rx.Observable.interval(1000);

    timer$
        .take(total)
        .map((val) => (total - 1) - val)
        .map(toTime)
        .subscribe((time) => {
            toTime(time);
            render(time);
            console.log('Countdown', time);
        });
});