let workTittle = document.querySelector('#work')
let breakTittle = document.querySelector('#break')
const audio = new Audio('mp3/alarm.wav')

let workTime = 25
let breakTime = 5

let seconds = "00"

window.onload = function() {
    document.querySelector('#min').innerHTML = workTime
    document.querySelector('#sec').innerHTML = seconds
    
    workTittle.classList.add('active');
}

function start() {
    document.querySelector('#start').style.display = 'none'
    document.querySelector('#restart').style.display = 'flex'

    let workMinutes = workTime -1
    let breakMinutes = breakTime -1
    let breakCount = 0;

    seconds = 59

    function timer() {
        document.querySelector('#min').innerHTML = workMinutes
        document.querySelector('#sec').innerHTML = seconds
        
        seconds = (seconds - 1).toString().padStart(2, "0")

        if (seconds == -1) {
            workMinutes = (workMinutes - 1).toString().padStart(2, "0")
            if (workMinutes == -1) {
                if (breakCount % 2 === 0) {
                    audio.play()
                    workMinutes = breakMinutes
                    breakCount ++

                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                } else {
                    audio.play()
                    workMinutes = workTime
                    breakCount++

                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
                seconds = 59
            } else {
                seconds = 59
            }
        }
    }

    const timerInterval = setInterval(timer, 1000);
}


function reload() {
    location.reload('index.html')
}