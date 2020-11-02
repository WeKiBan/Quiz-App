import { api } from './api';
import { ui } from './ui';
import { game } from './game';

ui.answerBtnGroup.addEventListener('click', (e) => {
  if (e.target.classList.contains('answer-btn')) {
    game.checkAnswer(e.target);
    ui.showAndHideNextQuestionButton();
  }
  e.preventDefault();
});

ui.nextQuestion.addEventListener('click', function () {
  game.questionNumber++;
  ui.removeBtnClasses();
  ui.populateQuestionUi(game.questions, game.questionNumber);
  ui.showAndHideNextQuestionButton();
});

ui.categorySelections.forEach(image => {
  image.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    api.getQUizData(category).then(data => {
      game.initiateGame(data);
      ui.populateQuestionUi(game.questions, game.questionNumber);
      ui.hideShowStartScreen();
      ui.hideShowGameplayScreen();
    })
  });
});

