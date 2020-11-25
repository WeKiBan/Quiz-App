// IMPORT MODULES
import { api } from './api';
import { ui } from './ui';
import { game } from './game';
import { storage } from './storage';

// EVENT LISTENERS

// Event  listener to open high scores screen
ui.scoresBtn.addEventListener('click', function () {
  ui.hideShowStartScreen();
  ui.hideShowScoresScreen();
});

// Event listener to go back from scores screen
ui.scoresBackBtn.addEventListener('click', function () {
  ui.hideShowStartScreen();
  ui.hideShowScoresScreen();
});

// Event listener on clear scores btn
ui.clearScoresBtn.addEventListener('click', function () {
  storage.clearScoresHistory();
  storage.saveToLocalStorage();
});

// Event listener for div containing answer buttons
ui.answerBtnGroup.addEventListener('click', (e) => {
  // check if clicked target is answer button
  if (e.target.classList.contains('answer-btn')) {
    // stop countdown sound effect
    ui.stopCountDownTimer();
    // clear the timeout
    game.cancelTimeOut();
    // if it is check if the answer is correct
    game.checkAnswer(e.target);
    // check if there are more questions after
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
  e.preventDefault();
});

// Event listener on next question button
ui.nextQuestion.addEventListener('click', function () {
  // add 1 to the current question number
  game.questionNumber++;
  // remove the classes showing correct and incorrect answers on btns
  ui.removeBtnClasses();
  // repopulate the game screen with the next question
  ui.populateQuestionUi();
  // hide the next question btn
  ui.showAndHideNextQuestionButton();
  // play the countdown sound effect
  ui.playCountDownTimer();
  // start timeout function
  game.setTimeout();
});

// Event listener for the category selection on start screen
ui.categorySelections.forEach((image) => {
  // add event listener to each button
  image.addEventListener('click', (e) => {
    // get category from data set on element
    const category = e.target.dataset.category;
    // fetch quiz data
    api.getQUizData(category).then((data) => {
      // initiate game with quiz data and category
      game.initiateGame(data, category);
      // populate the question ui with question data
      ui.populateQuestionUi();
      // hide start screen
      ui.hideShowStartScreen();
      // show gameplay screen
      ui.hideShowGameplayScreen();
      // start countdown timer
      ui.playCountDownTimer();
      // start timeout function
      game.setTimeout();
    });
  });
});

// Add event listener to play again button on home screen
ui.playAgainBtn.addEventListener('click', function (e) {
  // reset the game back to start state
  game.resetGame();
  // fetch new quiz data
  api.getQUizData(game.category).then((data) => {
    // initiate game with quiz data and category
    game.initiateGame(data, game.category);
    // populate the gameplay ui
    ui.populateQuestionUi();
    // update the game score
    ui.updateScore();
    // remove the classes showing answer and incorrect answer on btns
    ui.removeBtnClasses();
    // hide end screen
    ui.showHideEndScreen();
    // show gameplay screen
    ui.hideShowGameplayScreen();
    // start countdown timer
    ui.playCountDownTimer();
    // start timeout function
    game.setTimeout();
  });
});

// Add event listener to return home btn on end game screen
ui.returnHomeBtn.addEventListener('click', function () {
  // reset the game back to start state
  game.resetGame();
  // remove the classes showing answer and incorrect answer on btns
  ui.removeBtnClasses();
  // update the game score
  ui.updateScore();
  // hide end screen
  ui.showHideEndScreen();
  // show start screen
  ui.hideShowStartScreen();
});
