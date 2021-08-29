const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const infoContainerElement = document.getElementById('info-container')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

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
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
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

//timer/
var total_seconds =60*10;