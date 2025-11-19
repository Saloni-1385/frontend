const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], correct: 1 },
  { question: "Capital of India?", options: ["Delhi", "Mumbai", "Chennai"], correct: 0 },
  { question: "Browser language?", options: ["Java", "JavaScript", "C"], correct: 1 },
  { question: "HTML stands for?", options: ["HTML", "HyperText", "HyperText Markup"], correct: 2 },
  { question: "CSS stands for?", options: ["Colors", "Cascading Style Sheets", "Computer Style"], correct: 1 },
];

const quizContainer = document.getElementById('quiz');

function buildQuiz() {
  quizContainer.innerHTML = questions.map((q, index) => `
    <div class="question">
      ${q.question}
    </div>
    <div class="answers" data-index="${index}">
      ${q.options.map((opt, i) => `
        <button type="button" data-answer="${i}">${opt}</button>
      `).join('')}
    </div>
  `).join('');
}


quizContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const answerDiv = e.target.parentElement;
    [...answerDiv.children].forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
  }
});

document.getElementById('submitBtn').addEventListener('click', () => {
  questions.forEach((q, i) => {
    const answerDiv = document.querySelector(`div.answers[data-index="${i}"]`);
    const buttons = answerDiv.querySelectorAll('button');
    const selectedBtn = answerDiv.querySelector('button.selected');
    buttons.forEach(btn => {
      btn.classList.remove('correct', 'incorrect');
      if (selectedBtn) {
        if (parseInt(selectedBtn.getAttribute('data-answer'),10) === q.correct) {
          selectedBtn.classList.add('correct');
        } else if (btn === selectedBtn) {
          btn.classList.add('incorrect');
        }
      }
    });
  });
});

buildQuiz();