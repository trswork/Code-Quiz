//create the Start Quiz Button
var startquiz = document.createElement("button");
    button.innerHTML = "Start Quiz";

//append button
var body = document.getElementsByClassName("btn-primary");
btn-primary.appendChild(button);

//add event
button.addEventListener ("click", function() {
    alert("start quiz");
});

//timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
};