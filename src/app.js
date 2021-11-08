// DOM Elements

const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus')

// Show time

function showTime(){
    let today = new Date()
    let hour = today.getHours()
    let min = today.getMinutes()
    let seconds = today.getSeconds()

    // Set AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12hr Format

    hour = hour % 12 || 12;

    // Output Time

    let aux = `${hour}:${addZero(min)}:${addZero(seconds)} ${amPm}`
    time.innerHTML = aux;

    setTimeout(showTime,1000);
}

// Add Zeros

function addZero(n){
    return ((parseInt(n, 10) < 10 ? '0' : '') + n);
}

// Run
showTime()