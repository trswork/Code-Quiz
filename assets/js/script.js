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
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);