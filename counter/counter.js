
//NAV BAR
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
       links.classList.toggle("show-links");
});


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

// 



// Counter

// Set Initital Count
let count = 0;

// select value
let value = document.getElementById("value");
// simplified for all 3 buttons (grabbed all buttons by class)
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count --;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = "green";
        } else if ( count < 0 ) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    });
});