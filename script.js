let workTittle = document.querySelector('#work')
let breakTittle = document.querySelector('#break')
const audio = new Audio('mp3/alarm.wav')

let workTime = 1
let breakTime = 5
let seconds = "00"

window.onload = function() {
    document.querySelector('#min').innerHTML = workTime
    document.querySelector('#sec').innerHTML = seconds

    workTittle.classList.add('active')
}

function start() {
    document.querySelector('#start').style.display = 'none'
    document.querySelector('#restart').style.display = 'flex'

    let workMinutes = workTime - 1
    let breakMinutes = breakTime - 1

    breakCount = 0
    seconds = 5

    function timer() {
        document.querySelector('#min').innerHTML = workMinutes
        document.querySelector('#sec').innerHTML = seconds
        
        seconds = (seconds -1).toString().padStart(2, "0")
        
        if (seconds == 0) {
            workMinutes = (workMinutes - 1).toString().padStart(2, "0")
            
            seconds = 5
        } 
        if (workMinutes <= -1) {
            document.querySelector('#min').innerHTML = "00"
            document.querySelector('#sec').innerHTML = "00"


            audio.play()
            setInterval(() => {
                audio.pause()
                audio.currentTime = 0;
            }, 1000);

            setInterval(() => {
                workTittle.classList.remove('active')
                breakTittle.classList.add('active')

                document.querySelector('#min').innerHTML = breakMinutes
                document.querySelector('#sec').innerHTML = seconds
                
            }, 2000)

        }
    }

    setInterval(timer, 1000);
}



function reload() {
    location.reload('index.html')
}



