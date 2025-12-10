let score = 0;
let currentQuestion = 0;
const totalQuestions = 10;

function generateQuestion() {
  const a = Math.floor(Math.random() * 12) + 1;
  const b = Math.floor(Math.random() * 12) + 1;
  const op = Math.random() > 0.5 ? "*" : "/";
  const questionText = op === "*" ? `${a} × ${b}` : `${a*b} ÷ ${a}`;
  const answer = op === "*" ? a*b : b;
  return { questionText, answer };
}

const questionDiv = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedbackDiv = document.getElementById("feedback");
const scoreDiv = document.getElementById("score");
const submitBtn = document.getElementById("submit");

let currentQ = generateQuestion();
questionDiv.textContent = `Question 1: ${currentQ.questionText}`;

submitBtn.addEventListener("click", () => {
  const userAnswer = Number(answerInput.value);
  if (userAnswer === currentQ.answer) {
    feedbackDiv.textContent = "Correct!";
    score++;
  } else {
    feedbackDiv.textContent = `Wrong! Correct answer: ${currentQ.answer}`;
  }
  currentQuestion++;
  if(currentQuestion < totalQuestions){
    currentQ = generateQuestion();
    questionDiv.textContent = `Question ${currentQuestion+1}: ${currentQ.questionText}`;
    answerInput.value = "";
  } else {
    questionDiv.textContent = "Game Over!";
    feedbackDiv.textContent = score === totalQuestions ? "🎉 Congratulations! Perfect Score!" : `Your Score: ${score}/${totalQuestions}`;
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
  }
  scoreDiv.textContent = `Score: ${score}`;
});
