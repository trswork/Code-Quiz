const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const showResultButton = document.getElementById('showresults-btn')
const infoContainerElement = document.getElementById('info-container')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultScreenElement = document.getElementById('resultScreen')
const resultboxElement = document.getElementById('resultBox');
let shuffledQuestions, currentQuestionIndex

let index = 0;
let score = 0;
let wrong = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
showResultButton.addEventListener('click', endGame)

function startGame() {
    startButton.classList.add('hide')
    infoContainerElement.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion(question)
  }
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else if (endGame) {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    } else {
        showResultButton.innerText = 'Show Results'
        showResultButton.classList.remove('hide')
    }
  }
  function checkAnswer(option) {
    score++;
    let optionClicked = $(option).data("opt");
    // console.log(questions[index]);
    if (optionClicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    } else {
        $(option).addClass("wrong");
        wrong++;
    }
    $(".scoreBox span").text(score);
}
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Which tag starts and ends an HTML document?',
        answers: [
          { text: 'HTML,/HTML', correct: true },
          { text: 'OPEN,/CLOSE', correct: false },
          { text: '(HTML),(/HTML)', correct: false },
          { text: 'StartHTML, endHTML', correct: false }
        ]
      },
      {
        question: 'Which of the following is not considered a JavaScript operator?',
        answers: [
          { text: 'new', correct: false },
          { text: 'this', correct: true },
          { text: 'delete', correct: false },
          { text: 'typeof', correct: false }
        ]
      },
    {
        question: 'Which character is used in a closing tag?',
        answers: [
          { text: '&', correct: false },
          { text: '*', correct: false },
          { text: '#', correct: false },
          { text: '/', correct: true }
        ]
      },
      {
        question: 'What kind of programming language is CSS?',
        answers: [
          { text: 'Technique', correct: false },
          { text: 'Style', correct: true },
          { text: 'Order', correct: false },
          { text: 'Hierarchal', correct: false }
        ]
      },
    {
        question: 'Code that is placed within a title tag will show up where?',
        answers: [
          { text: 'Center aligned in the body of a page', correct: false },
          { text: 'At the bottom of a page', correct: false },
          { text: 'In the body of a page', correct: false },
          { text: 'On the title bar in a browser', correct: true }
        ]
      },
    {
        question: 'In JavaScript, Window.prompt() method return true or false value?',
        answers: [
          { text: 'False', correct: true },
          { text: 'True', correct: false }
        ]
      },
]


$(function () {
    // timer code start from here

    let totaTime = 45; // 45 seconds for timer
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totaTime - counter) / 60); // calculating min
        sec = totaTime - min * 60 - counter;

        $(".timerBox span").text(min + ":" + sec);

        if (counter == totaTime) {
            alert("See Results");
            result();
            clearInterval(timer);
        }
    }, 1000); // timer set for 1 seconds interval
    // timer code end here

    // print Question
    printQuestion(index);
});

// Function to print question start
function printQuestion(i) {
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}
// Function to print question end

// Function to check answer start

function checkAnswer(option) {
    attempt++;

    let optionClicked = $(option).data("opt");

    // console.log(questions[index]);

    if (optionClicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    } else {
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score);

}

// Function to check answer end
function endGame() {
    showResultsButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    resultScreenElement.classList.remove('hide')
    resultboxElement.classList.remove(hide)
    showResult()
  }

function showResult(j) {
    if (
        j == 1 &&
        index < questions.length - 1 &&
        !confirm(
            "Quiz has not finished yet. Press ok to skip quiz & get you final result."
        )
    ) {
        return;
    }
    result();
}

// Function for result end

// Result function start
function result() {
    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}
// Result function end
