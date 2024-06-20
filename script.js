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

