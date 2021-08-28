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

var questions = [
    {
        prompt: "Which tag starts and ends an HTML document?\n(a)HTML,/HTML\n (b) OPEN,/CLOSE\n (c) (HTML),(/HTML)\n (d) StartHTML, endHTML ",
        answer: "a"
    },
    {
        prompt: "Which of the following is not considered a JavaScript operator?\n\ (a) new\n\ (b) this\n\ (c) delete\n\ (d) typeof",
        answer: "b"
    },
    {
        prompt: "Which character is used in a closing tag?\n\ (a) &\n\ (b) *\n\ (c) #\n\ (d)/",
        answer: "d"
    },
    {
        prompt: "What kind of programming language is CSS?\n\ (a) Technique\n\ (b) Style\n\ (c) Order\n\ (d) Hierarchal",
        answer: "b"
    },
    {
        prompt: "Code that is placed within a title tag will show up where?\n\ (a) Center aligned in the body of a page\n\ (b) At the bottom of a page\n\ (c) In the body of a page\n\ (d)On the title bar in a browser",
        answer: "d"
    },
    {
        prompt: "In JavaScript, Window.prompt() method return true or false value?\n\ (a) False\n\ (b) True",
        answer: "a"
    }
    
]

var score = 0;

for (var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);

    if(response == questions[i].answer){
        score++;
        alert("correct");
    } else {
        alert("incorrect";)
    }
    }
alert("you got " + score + "/" + questions.length);

