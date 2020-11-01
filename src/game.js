import { ui } from './ui';

class Game {
  constructor() {
    this.questions;
    this.questionNumber = 0;
    this.score = 0;
  }
  
  initiateGame(questions) {
    this.questions = questions.results;
  }
  nextQuestion() {
    this.questionNumber++;
  }
  checkAnswer(target) {
    const answerGiven = target.textContent;
    const correctAnswer = this.questions[this.questionNumber].correct_answer;
    ui.showAnswerAlert(correctAnswer);
    ui.addBtnClasses(target, correctAnswer);
    if (answerGiven === correctAnswer) {
      this.score++;
      ui.playSoundEffect('correct');
    } else {
      ui.playSoundEffect('incorrect');
    }
  }
}

export const game = new Game();
