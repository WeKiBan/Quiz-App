import { ui } from './ui';
import { api } from './api';

class Game {
  constructor() {
    this.questions;
    this.questionNumber = 0;
    this.questionAmount;
    this.score = 0;
    this.category;
  }

  initiateGame(questions, category) {
    this.questions = questions.results;
    this.questionAmount = ui.questionsAmount.value;
    this.category = category;
  }
  nextQuestion() {
    this.questionNumber++;
  }
  checkAnswer(target) {
    const answerGiven = target.textContent;
    const correctAnswer = this.questions[this.questionNumber].correct_answer;
    ui.addBtnClasses(target, correctAnswer);
    if (answerGiven === correctAnswer) {
      this.score++;
      ui.playSoundEffect('correct');
    } else {
      ui.playSoundEffect('incorrect');
    }
    ui.updateScore(this.score);
  }
  resetGame(){
    this.questionNumber = 0;
    this.score = 0;
  }
}

export const game = new Game();
