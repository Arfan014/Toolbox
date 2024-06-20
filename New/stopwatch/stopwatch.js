//NAV BAR
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
       links.classList.toggle("show-links");
});

// LINKS

let homeLink = document.getElementById("homeLink");
    homeLink.addEventListener("click", function () {
        
    })



// CLOCK

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0) {
        h = 12;
    }
    if(h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("myclock").innerText = time;
    document.getElementById("myclock").textContent = time;

    setTimeout(showTime, 100)
}

showTime();


// STOPWATCH



// STOPWATCH
window.onload = function () {

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");
    let Interval ;

    startBtn.addEventListener("click", () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    })

    stopBtn.addEventListener("click", () => {
        clearInterval(Interval);
    })

    resetBtn.addEventListener("click", () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerText = tens;
        appendSeconds.innerText = seconds;
    })



    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerText = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerText = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerText = "0" + seconds;
            tens = 0;
            appendTens.innerText = "0" + 0;
        }
        
        if (seconds > 9) {
            appendSeconds.innerText = seconds;
        }
    }
}