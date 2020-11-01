import { api } from './api';
import { ui } from './ui';
import { game } from './game';

window.addEventListener('DOMContentLoaded', function (e) {
  api.getQUizData().then((data) => {
    game.initiateGame(data)
    ui.populateQuestionUi(game.questions, game.questionNumber);
  });
});



ui.answerBtnGroup.addEventListener('click', (e)=> {
  if(e.target.classList.contains('answer-btn')){
    game.checkAnswer(e.target);
  }
  e.preventDefault();
})
