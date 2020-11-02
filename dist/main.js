(()=>{"use strict";const e=new class{constructor(){this.questions,this.questionNumber=0,this.questionAmount,this.score=0}initiateGame(e){this.questions=e.results,this.questionAmount=t.questionsAmount.value}nextQuestion(){this.questionNumber++}checkAnswer(e){const s=e.textContent,n=this.questions[this.questionNumber].correct_answer;t.addBtnClasses(e,n),s===n?(this.score++,t.playSoundEffect("correct")):t.playSoundEffect("incorrect"),t.updateScore(this.score)}},t=new class{constructor(){this.question=document.querySelector(".question"),this.answerBtns=Array.from(document.querySelectorAll(".answer-btn")),this.answerBtnGroup=document.querySelector(".answer-btn-group"),this.progress=document.querySelector(".progress-bar"),this.progressText=document.querySelector(".progress-text"),this.nextQuestion=document.querySelector(".next-question"),this.score=document.querySelector(".score"),this.questionsAmount=document.querySelector("#question-amount"),this.difficulty=document.querySelector("#difficulty"),this.categorySelections=Array.from(document.querySelectorAll(".image-title")),this.startScreen=document.querySelector(".start-screen-state"),this.gameplayScreen=document.querySelector(".game-play-state"),this.settingsBtn=document.querySelector(".setting-btn")}populateQuestionUi(e,t){const s=e[t],n=Math.floor(6*Math.random()),o=s.incorrect_answers;this.question.textContent=this.replaceSpecialCharacters(s.question),this.updateProgressBar(),o.splice(n,0,s.correct_answer);for(let e=0;e<o.length;e++)this.answerBtns[e].textContent=this.replaceSpecialCharacters(o[e])}replaceSpecialCharacters(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}addBtnClasses(e,s){s=t.replaceSpecialCharacters(s),e.textContent!==s&&(e.classList.remove("btn-info"),e.classList.add("btn-danger")),this.answerBtns.forEach((e=>{e.disabled="true",e.textContent===s&&(e.classList.remove("btn-info"),e.classList.add("btn-success"))}))}removeBtnClasses(){this.answerBtns.forEach((e=>{e.disabled="",e.classList.remove("btn-info"),e.classList.remove("btn-success"),e.classList.remove("btn-danger"),e.classList.add("btn-info")}))}playSoundEffect(e){const t=new Audio("./audio/correct_answer.mp3"),s=new Audio("./audio/wrong_answer.mp3");"correct"===e?t.play():s.play()}updateScore(e){this.score.textContent=e}showAndHideNextQuestionButton(){this.nextQuestion.classList.toggle("hide")}hideShowStartScreen(){this.startScreen.classList.toggle("display-none")}hideShowGameplayScreen(){this.gameplayScreen.classList.toggle("display-none"),this.settingsBtn.classList.toggle("display-none")}updateProgressBar(){const t=(e.questionNumber+1)/e.questions.length*100;this.progress.style.width=t+"%",this.progressText.textContent=`Question ${e.questionNumber+1} / ${e.questions.length}`}},s=new class{async getQUizData(e){let s;s="Any"===t.difficulty.value?`https://opentdb.com/api.php?amount=${t.questionsAmount.value}&category=${e}&type=multiple`:`https://opentdb.com/api.php?amount=${t.questionsAmount.value}&category=${e}&difficulty=${t.difficulty.value}&type=multiple`;const n=await fetch(s);return await n.json()}};t.answerBtnGroup.addEventListener("click",(s=>{s.target.classList.contains("answer-btn")&&(e.checkAnswer(s.target),t.showAndHideNextQuestionButton()),s.preventDefault()})),t.nextQuestion.addEventListener("click",(function(){e.questionNumber++,t.removeBtnClasses(),t.populateQuestionUi(e.questions,e.questionNumber),t.showAndHideNextQuestionButton()})),t.categorySelections.forEach((n=>{n.addEventListener("click",(n=>{const o=n.target.dataset.category;s.getQUizData(o).then((s=>{e.initiateGame(s),t.populateQuestionUi(e.questions,e.questionNumber),t.hideShowStartScreen(),t.hideShowGameplayScreen()}))}))}))})();