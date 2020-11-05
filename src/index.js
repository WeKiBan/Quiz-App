import { api } from './api';
import { ui } from './ui';
import { game } from './game';

ui.answerBtnGroup.addEventListener('click', (e) => {
  if (e.target.classList.contains('answer-btn')) {
    game.checkAnswer(e.target);
    if(game.questionNumber + 1 < game.questionAmount){
    ui.showAndHideNextQuestionButton();
    } else {
      setTimeout(function(){
        ui.hideShowGameplayScreen();
        ui.setScoreEndScreen();
        ui.showHideEndScreen();
      }, 1000); 
    }
  }
  e.preventDefault();
});

ui.nextQuestion.addEventListener('click', function () {
    game.questionNumber++;
    ui.removeBtnClasses();
    ui.populateQuestionUi(game.questions, game.questionNumber);
    ui.showAndHideNextQuestionButton();
});

ui.categorySelections.forEach((image) => {
  image.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    api.getQUizData(category).then((data) => {
      game.initiateGame(data, category);
      ui.populateQuestionUi(game.questions, game.questionNumber);
      ui.hideShowStartScreen();
      ui.hideShowGameplayScreen();
    });
  });
});

ui.playAgainBtn.addEventListener('click', function (e) {
  game.resetGame();
  api.getQUizData(game.category).then((data) => {
    game.initiateGame(data, game.category);
    ui.populateQuestionUi(game.questions, game.questionNumber);
    ui.updateScore(game.score);
    ui.removeBtnClasses();
    ui.showHideEndScreen();
    ui.hideShowGameplayScreen();
  });
});

ui.returnHomeBtn.addEventListener('click', function(){
  game.resetGame();
  ui.removeBtnClasses();
  ui.updateScore(game.score);
  ui.showHideEndScreen();
  ui.hideShowStartScreen();
})
