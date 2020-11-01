class UI {
  constructor() {
    this.question = document.querySelector('.question');
    this.answerBtns = Array.from(document.querySelectorAll('.answer-btn'));
    this.answerBtnGroup = document.querySelector('.answer-btn-group');
    this.progress = document.querySelector('.progress-bar');
  }

  populateQuestionUi(question, questionNum) {
    const currentQuestion = question[questionNum];
    const randomIndex = Math.floor(Math.random() * 6);
    const options = currentQuestion.incorrect_answers;
    this.question.textContent = this.replaceSpecialCharacters(
      currentQuestion.question
    );
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
  showAnswerAlert(answer) {
    const div = document.createElement('div');
    div.className = 'alert alert-success';
    div.textContent = `The correct answer is ${answer}`;
    this.answerBtnGroup.insertBefore(div, document.querySelector('.row-1'));
  }
  addBtnClasses(target, correctAnswer) {
    if (target.textContent === correctAnswer) {
      target.classList.remove('btn-info');
      target.classList.add('btn-success');
    } else {
      target.classList.remove('btn-info');
      target.classList.add('btn-danger');
      this.answerBtns.forEach((btn) => {
        if (btn.textContent === correctAnswer) {
          btn.classList.remove('btn-info');
          btn.classList.add('btn-success');
        }
      });
    }
  }
  removeAlert() {
    document.querySelector('.alert').remove();
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
  updateScoreAndQuestionNum(){
    
  }
}

export const ui = new UI();
