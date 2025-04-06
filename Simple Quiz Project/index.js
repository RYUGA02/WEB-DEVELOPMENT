document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");
  const questions = [
    {
      question:
        "Which property is used in CSS to change the text color of an element?",
      answer: [
        { text: "font-color", correct: false },
        { text: "color", correct: true },
        { text: "text-color", correct: false },
        { text: "background-color", correct: false },
      ],
    },
    {
      question: "Which of the following is a JavaScript framework?",
      answer: [
        { text: "Laravel", correct: false },
        { text: "Django", correct: false },
        { text: "React", correct: true },
        { text: "Flask", correct: false },
      ],
    },
    {
      question: "What does CSS stand for?",
      answer: [
        { text: "Creative Style Sheets", correct: false },
        { text: "Computer Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Colorful Style Sheets", correct: false },
      ],
    },
    {
      question: "Which attribute is used in HTML to define inline styles?",
      answer: [
        { text: "style", correct: true },
        { text: "class", correct: false },
        { text: "font", correct: false },
        { text: "styles", correct: false },
      ],
    },

    {
      question: "Which protocol is used to load web pages?",
      answer: [
        { text: "FTP", correct: false },
        { text: "SMTP", correct: false },
        { text: "HTTP", correct: true },
        { text: "SNMP", correct: false },
      ],
    },
    {
      question: "Which of the following is used to make a website responsive?",
      answer: [
        { text: "Media Queries", correct: true },
        { text: "Float", correct: false },
        { text: "Div", correct: false },
        { text: "Position", correct: false },
      ],
    },

    {
      question: "What does DOM stand for in web development?",
      answer: [
        { text: "Document Object Model", correct: true },
        { text: "Data Object Method", correct: false },
        { text: "Digital Object Map", correct: false },
        { text: "Document Oriented Model", correct: false },
      ],
    },
    {
      question:
        "Which JavaScript method is used to write into an HTML element?",
      answer: [
        { text: "document.innerHTML", correct: false },
        { text: "document.getElement()", correct: false },
        { text: "document.write()", correct: false },
        { text: "element.innerHTML", correct: true },
      ],
    },
    {
      question: "Which of these is NOT a valid HTTP method?",
      answer: [
        { text: "GET", correct: false },
        { text: "FETCH", correct: true },
        { text: "POST", correct: false },
        { text: "DELETE", correct: false },
      ],
    },
    {
      question: "Which input type is used to accept only email in HTML5?",
      answer: [
        { text: "type='text'", correct: false },
        { text: "type='email'", correct: true },
        { text: "type='mail'", correct: false },
        { text: "type='address'", correct: false },
      ],
    },
  ];

  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((ans) => {
      const button = document.createElement("button");
      button.innerHTML = ans.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (ans.correct) {
        button.dataset.correct = ans.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });

  startQuiz();
});
