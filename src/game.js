// imported modules
import { ui } from './ui';

// CLASS FOR GAME
class Game {
  constructor() {
    // quiz questions
    this.questions;
    // current question number
    this.questionNumber = 0;
    // amount of questions in quiz
    this.questionAmount = 10;
    // score
    this.score = 0;
    // quiz category
    this.category;
    // time out function variable
    this.timeOut;
  }

  // function to initiate game
  initiateGame(questions, category) {
    // set current questions
    this.questions = questions.results;
    // set quiz category
    this.category = category;
  }

  // function to update to next question
  nextQuestion() {
    // update current question number
    this.questionNumber++;
  }
  // function to check answer btn pressed
  checkAnswer(target) {
    // get answer given from btn pressed
    const answerGiven = target.textContent;
    // get correct answer from question data
    const correctAnswer = this.questions[this.questionNumber].correct_answer;
    // add the classes to btns to show correct and incorrect answer
    ui.addBtnClasses(target, correctAnswer);
    // check if answer given is correct answer
    if (answerGiven === correctAnswer) {
      // if it is update the score and play correct sound effect
      this.score++;
      ui.playSoundEffect('correct');
    } else {
      // if its incorrect play incorrect sound effect
      ui.playSoundEffect('incorrect');
    }
    // update the score in ui
    ui.updateScore(this.score);
  }
  // set timeout
  setTimeout() {
    this.timeOut = setTimeout(() => {
      ui.timeoutRevealAnswer();
    }, 10000);
  }

  // Function to clear timeout
  cancelTimeOut() {
    // clear the timeout
    clearTimeout(this.timeOut);
  }

  // reset the game data
  resetGame() {
    // reset current question number to 0
    this.questionNumber = 0;
    // reset score to 0
    this.score = 0;
  }
}

// initiate new game class and export
export const game = new Game();
