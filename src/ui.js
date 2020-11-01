import { game } from './game';

class UI {
  constructor() {
    this.question = document.querySelector('.question');
    this.answerBtns = Array.from(document.querySelectorAll('.answer-btn'));
    this.answerBtnGroup = document.querySelector('.answer-btn-group');
    this.progress = document.querySelector('.progress-bar');
    this.progressText = document.querySelector('.progress-text');
    this.nextQuestion = document.querySelector('.next-question');
    this.score = document.querySelector('.score');
  }

  populateQuestionUi(question, questionNum) {
    const currentQuestion = question[questionNum];
    const randomIndex = Math.floor(Math.random() * 6);
    const options = currentQuestion.incorrect_answers;
    this.question.textContent = this.replaceSpecialCharacters(
      currentQuestion.question
    );
    this.updateProgressBar();
    options.splice(randomIndex, 0, currentQuestion.correct_answer);
    for (let i = 0; i < options.length; i++) {
      this.answerBtns[i].textContent = this.replaceSpecialCharacters(
        options[i]
      );
    }
  }
  replaceSpecialCharacters(str) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }
  addBtnClasses(target, correctAnswer) {
    correctAnswer = ui.replaceSpecialCharacters(correctAnswer);
    
    if (target.textContent !== correctAnswer) {
      target.classList.remove('btn-info');
      target.classList.add('btn-danger');
    }
    this.answerBtns.forEach((btn) => {
      btn.disabled ='true';
      if (btn.textContent === correctAnswer) {
        btn.classList.remove('btn-info');
        btn.classList.add('btn-success');
      }
    });
  }
  /* remove the classes on the btns */
  removeBtnClasses() {
    this.answerBtns.forEach((btn) => {
      btn.disabled = '';
      btn.classList.remove('btn-info');
      btn.classList.remove('btn-success');
      btn.classList.remove('btn-danger');
      btn.classList.add('btn-info');
    });
  }
 
  playSoundEffect(result) {
    const correct = new Audio('./audio/correct_answer.mp3');
    const incorrect = new Audio('./audio/wrong_answer.mp3');
    if (result === 'correct') {
      correct.play();
    } else {
      incorrect.play();
    }
  }
  updateScore(score) {
    this.score.textContent = score;
  }
  showAndHideNextQuestionButton() {
    if (this.nextQuestion.classList.contains('hide')) {
      this.nextQuestion.classList.remove('hide');
    } else {
      this.nextQuestion.classList.add('hide');
    }
  }
  updateProgressBar() {
    const percentage =
      ((game.questionNumber + 1) / game.questions.length) * 100;

    
    this.progress.style.width = `${percentage}%`;
    this.progressText.textContent = `Question ${game.questionNumber + 1} / ${
      game.questions.length
    }`;
  }
}

export const ui = new UI();
