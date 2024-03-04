// Retrieve score from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

// Calculate number of correct and wrong answers
const totalQuestions = 8; // Assuming there are 8 questions
const correctAnswers = parseInt(score);
const wrongAnswers = totalQuestions - correctAnswers;

// Display score on the page
document.getElementById('score').innerText = score + "/" + totalQuestions;

// Display number of correct and wrong answers on the page
document.getElementById('correct').innerText = correctAnswers;
document.getElementById('wrong').innerText = wrongAnswers;
