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

// Set Background and Greating
function setBgGreet(){
    const body = document.querySelector('body')
    let today = new Date()
    let hour = today.getHours()

    if(hour < 12){
        // Morning
        body.style.background = 'url(https://images.unsplash.com/photo-1454916286212-0ea211dc68d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
        body.style.backgroundPosition = 'center'
        body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Morning'
        body.style.color = '#000'
    }else if (hour < 20){
        // Afternoon
        body.style.background = 'url(https://images.unsplash.com/photo-1619589032701-b20a3e33fde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)'
        body.style.backgroundPosition = 'center'
        body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Afternoon'
        body.style.color = '#000'
    }else{
        // Night
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)'
        body.style.backgroundPosition = 'center'
        body.style.backgroundSize = 'cover'
        greeting.textContent = 'Good Night'
        body.style.color = '#fff'
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]'
    } else{
        name.textContent = localStorage.getItem('name')
    }
}

// Set Name

function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerHTML)
            name.blur()
        }
    }else{
        localStorage.setItem('name', e.target.innerHTML)
    }
}

// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]'
    } else{
        focus.textContent = localStorage.getItem('focus')
    }
}

// Set Focus

function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerHTML)
            focus.blur()
        }
    }else{
        localStorage.setItem('focus', e.target.innerHTML)
    }
}

name.addEventListener('keypress',setName)
name.addEventListener('blur',setName)
focus.addEventListener('keypress',setFocus)
focus.addEventListener('blur',setFocus)



// Run
showTime()
setBgGreet();
getName();
getFocus();
