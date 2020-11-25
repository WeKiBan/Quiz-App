// Imported modules
import { game } from './game';

// Create UI class
class UI {
  constructor() {
    // Query selectors for ui
    // querySelectors start state
    this.startScreen = document.querySelector('.start-screen-state');
    this.categorySelections = Array.from(
      document.querySelectorAll('.image-div')
    );
    // querySelectors scores state
    this.scoresBtn = document.querySelector('.scores-btn');
    this.scoresState = document.querySelector('.scores-state');
    this.scoresBackBtn = document.querySelector('.back-btn');
    this.clearScoresBtn = document.querySelector('.clear-history-btn');

    // querySelectors game state
    this.gamePlayScreen = document.querySelector('.game-play-state');
    this.progress = document.querySelector('.progress-bar');
    this.progressText = document.querySelector('.progress-text');
    this.nextQuestion = document.querySelector('.next-question');
    this.score = document.querySelector('.score');
    this.question = document.querySelector('.question');
    this.answerBtns = Array.from(document.querySelectorAll('.answer-btn'));
    this.answerBtnGroup = document.querySelector('.answer-btn-group');

    // querySelectors end state
    this.playAgainBtn = document.querySelector('.play-again');
    this.returnHomeBtn = document.querySelector('.return-home');
    this.endScore = document.querySelector('.end-score');
    this.endScreen = document.querySelector('.end-screen-state');

    // Audio variables
    this.correct = new Audio('./audio/correct_answer.mp3');
    this.incorrect = new Audio('./audio/wrong_answer.mp3');
    this.countdown = new Audio('./audio/countdown.mp3');
  }

  // Populate the question ui
  populateQuestionUi() {
    // Get current question
    const currentQuestion = game.questions[game.questionNumber];
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * 6);
    // Get the incorrect answers
    const options = currentQuestion.incorrect_answers;
    // Remove any special characters from question text
    this.question.textContent = this.replaceSpecialCharacters(
      currentQuestion.question
    );
    // Update the progress bar
    this.updateProgressBar();
    // Insert correct answer at random index
    options.splice(randomIndex, 0, currentQuestion.correct_answer);
    // loop through each of the answer options
    for (let i = 0; i < options.length; i++) {
      // replace any special characters i text and add one option to each of the btns in ui
      this.answerBtns[i].textContent = this.replaceSpecialCharacters(
        options[i]
      );
    }
  }
  // Function to replace any special characters in text
  replaceSpecialCharacters(str) {
    // create text area
    var textArea = document.createElement('textarea');
    // add str to text area
    textArea.innerHTML = str;
    // grab text from area and return it which removes any of the special characters
    return textArea.value;
  }

  // function to add classes to buttons to show correct and incorrect answers
  addBtnClasses(target, correctAnswer) {
    // replace any special characters in correct answer
    correctAnswer = ui.replaceSpecialCharacters(correctAnswer);
    // check if btn pressed is incorrect answer
    if (target.textContent !== correctAnswer) {
      // if incorrect remove btn-info class
      target.classList.remove('btn-info');
      // and add btn danger class to turn btn red
      target.classList.add('btn-danger');
    }
    // loop through each of the answer btns
    this.answerBtns.forEach((btn) => {
      // disable the btns so they cant be clicked
      btn.disabled = 'true';
      // check if button has the correct answer
      if (btn.textContent === correctAnswer) {
        // if correct remove btn-info class
        btn.classList.remove('btn-info');
        // and add btn-success class to turn green
        btn.classList.add('btn-success');
      }
    });
  }

  // function to reveal answer if timeout
  timeoutRevealAnswer() {
    // set correct answer
    const correctAnswer = this.replaceSpecialCharacters(
      game.questions[game.questionNumber].correct_answer
    );
    // loop through each of the answer btns
    this.answerBtns.forEach((btn) => {
      // disable the btns so they cant be clicked
      btn.disabled = 'true';
      // check if button has the correct answer
      if (btn.textContent === correctAnswer) {
        // if correct remove btn-info class
        btn.classList.remove('btn-info');
        // and add btn-success class to turn green
        btn.classList.add('btn-success');
      }
    });
    if (game.questionNumber + 1 < game.questionAmount) {
      // if more questions remain show next question button
      ui.showAndHideNextQuestionButton();
    } else {
      // if no more questions set timeout function 1 second
      setTimeout(function () {
        // hide the game play screen
        ui.hideShowGameplayScreen();
        // set end screen score
        ui.setScoreEndScreen();
        // show the end quiz screen
        ui.showHideEndScreen();
      }, 1000);
    }
  }

  // function to remove any of the classes for correct or incorrect answers from btns
  removeBtnClasses() {
    // loop through each btn
    this.answerBtns.forEach((btn) => {
      // re-enable
      btn.disabled = '';
      //remove all of the classes
      btn.classList.remove('btn-info');
      btn.classList.remove('btn-success');
      btn.classList.remove('btn-danger');
      // re-add btn info class
      btn.classList.add('btn-info');
    });
  }
  // Function to play sound effect when
  playSoundEffect(result) {
    // check if result is correct
    if (result === 'correct') {
      // if correct play this sound effect
      this.correct.play();
    } else {
      // if incorrect play this one
      this.incorrect.play();
    }
  }
  // Function to start countdown timer sound effect
  playCountDownTimer() {
    this.countdown.play();
  }
  // Function to stop countdown timer sound effect
  stopCountDownTimer() {
    this.countdown.pause();
    this.countdown.currentTime = 0;
  }
  // function to start timeout function countdown which reveals answers at finish
  answerTimeoutStart() {}

  // Function to update the score
  updateScore() {
    this.score.textContent = game.score;
  }
  // Function to show and hide question button
  showAndHideNextQuestionButton() {
    this.nextQuestion.classList.toggle('hide');
  }

  // Function to hide and show start screen
  hideShowStartScreen() {
    this.startScreen.classList.toggle('display-none');
  }

  // Function to hide and show gameplay screen
  hideShowGameplayScreen() {
    this.gamePlayScreen.classList.toggle('display-none');
  }
  // Function to hide and show high scores screen
  hideShowScoresScreen() {
    this.scoresState.classList.toggle('display-none');
  }
  // Function to show and hide end screen
  showHideEndScreen() {
    this.endScreen.classList.toggle('display-none');
  }
  setScoreEndScreen() {
    this.endScore.textContent = `${game.score}/${game.questionAmount}`;
  }

  // Function to update progress bar
  updateProgressBar() {
    // get percentage of questions left
    const percentage =
      ((game.questionNumber + 1) / game.questions.length) * 100;
    //set progress bar width with percentage
    this.progress.style.width = `${percentage}%`;
    // set progress bar text with current question number and total question number
    this.progressText.textContent = `Question ${game.questionNumber + 1} / ${
      game.questionAmount
    }`;
  }
}

// initiate ui and export
export const ui = new UI();
