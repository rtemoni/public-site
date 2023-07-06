var timerInterval;
var countdownDate = new Date("2023-07-07T09:00:00").getTime();

countdown(); // Start the countdown

function countdown() {
    callUpdateCountdown();
    var timerInterval = setInterval(function () {
        callUpdateCountdown();
    }, 1000);
}

function callUpdateCountdown() {
    now = new Date().getTime();
    distance = countdownDate - now;

    // Update the countdown elements
    if (distance < 0) {
        clearInterval(timerInterval);
        updateCountdown(0); // Display "00" for all units
    } else {
        updateCountdown(distance);
    }
}

function updateCountdown(distance) {
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown elements
    document.getElementById("days").textContent = padNumber(days);
    document.getElementById("hours").textContent = padNumber(hours);
    document.getElementById("minutes").textContent = padNumber(minutes);
    document.getElementById("seconds").textContent = padNumber(seconds);

    // Pad number with leading zeros
    function padNumber(number) {
        return number.toString().padStart(2, '0');
    }
}

// Change body background based on active nav item
var navLinks = document.querySelectorAll('#navbarNav .nav-link');
navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
        var activeNavItem = event.target.getAttribute('id');
        if (activeNavItem != "ctf-website") {
            var body = document.body;
            // Add class based on active nav item
            body.classList = 'body-bg-' + activeNavItem;
        }
    });
});
