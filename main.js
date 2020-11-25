/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! namespace exports */
/*! export api [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => /* binding */ api\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// Import modules\n\n\n// Create api class\nclass Api {\n  // function to fetch quiz data\n  async getQUizData(category) {\n    // create apiurl variable\n    const apiURL = `https://opentdb.com/api.php?amount=${_game__WEBPACK_IMPORTED_MODULE_0__.game.questionAmount}&category=${category}&type=multiple`;\n\n    // fetch the data\n    const response = await fetch(apiURL);\n    // convert response to json\n    const data = await response.json();\n    // return the result\n    return data;\n  }\n}\n\n// initiate new api and export\nconst api = new Api();\n\n\n//# sourceURL=webpack://Quiz-App/./src/api.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! export game [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => /* binding */ game\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n// imported modules\n\n\n// CLASS FOR GAME\nclass Game {\n  constructor() {\n    // quiz questions\n    this.questions;\n    // current question number\n    this.questionNumber = 0;\n    // amount of questions in quiz\n    this.questionAmount = 1;\n    // score\n    this.score = 0;\n    // quiz category\n    this.category;\n    // time out function variable\n    this.timeOut;\n  }\n\n  // function to initiate game\n  initiateGame(questions, category) {\n    // set current questions\n    this.questions = questions.results;\n    // set quiz category\n    this.category = category;\n  }\n\n  // function to update to next question\n  nextQuestion() {\n    // update current question number\n    this.questionNumber++;\n  }\n  // function to check answer btn pressed\n  checkAnswer(target) {\n    // get answer given from btn pressed\n    const answerGiven = target.textContent;\n    // get correct answer from question data\n    const correctAnswer = this.questions[this.questionNumber].correct_answer;\n    // add the classes to btns to show correct and incorrect answer\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.addBtnClasses(target, correctAnswer);\n    // check if answer given is correct answer\n    if (answerGiven === correctAnswer) {\n      // if it is update the score and play correct sound effect\n      this.score++;\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSoundEffect('correct');\n    } else {\n      // if its incorrect play incorrect sound effect\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.playSoundEffect('incorrect');\n    }\n    // update the score in ui\n    _ui__WEBPACK_IMPORTED_MODULE_0__.ui.updateScore(this.score);\n  }\n  // set timeout\n  setTimeout() {\n    this.timeOut = setTimeout(() => {\n      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.timeoutRevealAnswer();\n    }, 10000);\n  }\n\n  // Function to clear timeout\n  cancelTimeOut() {\n    // clear the timeout\n    clearTimeout(this.timeOut);\n  }\n\n  // reset the game data\n  resetGame() {\n    // reset current question number to 0\n    this.questionNumber = 0;\n    // reset score to 0\n    this.score = 0;\n  }\n}\n\n// initiate new game class and export\nconst game = new Game();\n\n\n//# sourceURL=webpack://Quiz-App/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n// IMPORT MODULES\n\n\n\n\n\n// EVENT LISTENERS\n\n// Event  listener to open high scores screen\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.scoresBtn.addEventListener('click', function () {\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowStartScreen();\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowScoresScreen();\n});\n\n// Event listener to go back from scores screen\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.scoresBackBtn.addEventListener('click', function () {\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowStartScreen();\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowScoresScreen();\n});\n\n// Event listener on clear scores btn\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.clearScoresBtn.addEventListener('click', function () {\n  _storage__WEBPACK_IMPORTED_MODULE_3__.storage.clearScoresHistory();\n  _storage__WEBPACK_IMPORTED_MODULE_3__.storage.saveToLocalStorage();\n});\n\n// Event listener for div containing answer buttons\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.answerBtnGroup.addEventListener('click', (e) => {\n  // check if clicked target is answer button\n  if (e.target.classList.contains('answer-btn')) {\n    // stop countdown sound effect\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.stopCountDownTimer();\n    // clear the timeout\n    _game__WEBPACK_IMPORTED_MODULE_2__.game.cancelTimeOut();\n    // if it is check if the answer is correct\n    _game__WEBPACK_IMPORTED_MODULE_2__.game.checkAnswer(e.target);\n    // check if there are more questions after\n    if (_game__WEBPACK_IMPORTED_MODULE_2__.game.questionNumber + 1 < _game__WEBPACK_IMPORTED_MODULE_2__.game.questionAmount) {\n      // if more questions remain show next question button\n      _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showAndHideNextQuestionButton();\n    } else {\n      // if no more questions set timeout function 1 second\n      setTimeout(function () {\n        // hide the game play screen\n        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowGameplayScreen();\n        // set end screen score\n        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.setScoreEndScreen();\n        // show the end quiz screen\n        _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showHideEndScreen();\n      }, 1000);\n    }\n  }\n  e.preventDefault();\n});\n\n// Event listener on next question button\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.nextQuestion.addEventListener('click', function () {\n  // add 1 to the current question number\n  _game__WEBPACK_IMPORTED_MODULE_2__.game.questionNumber++;\n  // remove the classes showing correct and incorrect answers on btns\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.removeBtnClasses();\n  // repopulate the game screen with the next question\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.populateQuestionUi();\n  // hide the next question btn\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showAndHideNextQuestionButton();\n  // play the countdown sound effect\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.playCountDownTimer();\n  // start timeout function\n  _game__WEBPACK_IMPORTED_MODULE_2__.game.setTimeout();\n});\n\n// Event listener for the category selection on start screen\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.categorySelections.forEach((image) => {\n  // add event listener to each button\n  image.addEventListener('click', (e) => {\n    // get category from data set on element\n    const category = e.target.dataset.category;\n    // fetch quiz data\n    _api__WEBPACK_IMPORTED_MODULE_0__.api.getQUizData(category).then((data) => {\n      // initiate game with quiz data and category\n      _game__WEBPACK_IMPORTED_MODULE_2__.game.initiateGame(data, category);\n      // populate the question ui with question data\n      _ui__WEBPACK_IMPORTED_MODULE_1__.ui.populateQuestionUi();\n      // hide start screen\n      _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowStartScreen();\n      // show gameplay screen\n      _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowGameplayScreen();\n      // start countdown timer\n      _ui__WEBPACK_IMPORTED_MODULE_1__.ui.playCountDownTimer();\n      // start timeout function\n      _game__WEBPACK_IMPORTED_MODULE_2__.game.setTimeout();\n    });\n  });\n});\n\n// Add event listener to play again button on home screen\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.playAgainBtn.addEventListener('click', function (e) {\n  // reset the game back to start state\n  _game__WEBPACK_IMPORTED_MODULE_2__.game.resetGame();\n  // fetch new quiz data\n  _api__WEBPACK_IMPORTED_MODULE_0__.api.getQUizData(_game__WEBPACK_IMPORTED_MODULE_2__.game.category).then((data) => {\n    // initiate game with quiz data and category\n    _game__WEBPACK_IMPORTED_MODULE_2__.game.initiateGame(data, _game__WEBPACK_IMPORTED_MODULE_2__.game.category);\n    // populate the gameplay ui\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.populateQuestionUi();\n    // update the game score\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.updateScore();\n    // remove the classes showing answer and incorrect answer on btns\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.removeBtnClasses();\n    // hide end screen\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showHideEndScreen();\n    // show gameplay screen\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowGameplayScreen();\n    // start countdown timer\n    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.playCountDownTimer();\n    // start timeout function\n    _game__WEBPACK_IMPORTED_MODULE_2__.game.setTimeout();\n  });\n});\n\n// Add event listener to return home btn on end game screen\n_ui__WEBPACK_IMPORTED_MODULE_1__.ui.returnHomeBtn.addEventListener('click', function () {\n  // reset the game back to start state\n  _game__WEBPACK_IMPORTED_MODULE_2__.game.resetGame();\n  // remove the classes showing answer and incorrect answer on btns\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.removeBtnClasses();\n  // update the game score\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.updateScore();\n  // hide end screen\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showHideEndScreen();\n  // show start screen\n  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideShowStartScreen();\n});\n\n\n//# sourceURL=webpack://Quiz-App/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! namespace exports */
/*! export storage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => /* binding */ storage\n/* harmony export */ });\nclass Storage {\n  constructor() {\n    // local storage keys\n    this.LOCAL_STORAGE_LIST_KEY = 'highScores';\n    // high scores\n    this.highScores =\n      JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)) || [];\n  }\n  // Function to add score\n  addHighScore(score, category, date) {\n    // create score object\n    const scoreData = {\n      score,\n      category,\n      date,\n    };\n    // push score to high scores array\n    this.highScores.push(scoreData);\n  }\n  // function to save to local storage\n  saveToLocalStorage() {\n    // saves lists to local storage\n    localStorage.setItem(\n      this.LOCAL_STORAGE_LIST_KEY,\n      JSON.stringify(this.highScores)\n    );\n  }\n\n  // function to clear scores history\n  clearScoresHistory(){\n    this.highScores = [];\n  }\n}\n\nconst storage = new Storage();\n\n\n//# sourceURL=webpack://Quiz-App/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! namespace exports */
/*! export ui [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ui\": () => /* binding */ ui\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// Imported modules\n\n\n// Create UI class\nclass UI {\n  constructor() {\n    // Query selectors for ui\n    // querySelectors start state\n    this.startScreen = document.querySelector('.start-screen-state');\n    this.categorySelections = Array.from(\n      document.querySelectorAll('.image-div')\n    );\n    // querySelectors scores state\n    this.scoresBtn = document.querySelector('.scores-btn');\n    this.scoresState = document.querySelector('.scores-state');\n    this.scoresBackBtn = document.querySelector('.back-btn');\n    this.clearScoresBtn = document.querySelector('.clear-history-btn');\n\n    // querySelectors game state\n    this.gamePlayScreen = document.querySelector('.game-play-state');\n    this.progress = document.querySelector('.progress-bar');\n    this.progressText = document.querySelector('.progress-text');\n    this.nextQuestion = document.querySelector('.next-question');\n    this.score = document.querySelector('.score');\n    this.question = document.querySelector('.question');\n    this.answerBtns = Array.from(document.querySelectorAll('.answer-btn'));\n    this.answerBtnGroup = document.querySelector('.answer-btn-group');\n\n    // querySelectors end state\n    this.playAgainBtn = document.querySelector('.play-again');\n    this.returnHomeBtn = document.querySelector('.return-home');\n    this.endScore = document.querySelector('.end-score');\n    this.endScreen = document.querySelector('.end-screen-state');\n\n    // Audio variables\n    this.correct = new Audio('./audio/correct_answer.mp3');\n    this.incorrect = new Audio('./audio/wrong_answer.mp3');\n    this.countdown = new Audio('./audio/countdown.mp3');\n  }\n\n  // Populate the question ui\n  populateQuestionUi() {\n    // Get current question\n    const currentQuestion = _game__WEBPACK_IMPORTED_MODULE_0__.game.questions[_game__WEBPACK_IMPORTED_MODULE_0__.game.questionNumber];\n    // Generate a random index\n    const randomIndex = Math.floor(Math.random() * 6);\n    // Get the incorrect answers\n    const options = currentQuestion.incorrect_answers;\n    // Remove any special characters from question text\n    this.question.textContent = this.replaceSpecialCharacters(\n      currentQuestion.question\n    );\n    // Update the progress bar\n    this.updateProgressBar();\n    // Insert correct answer at random index\n    options.splice(randomIndex, 0, currentQuestion.correct_answer);\n    // loop through each of the answer options\n    for (let i = 0; i < options.length; i++) {\n      // replace any special characters i text and add one option to each of the btns in ui\n      this.answerBtns[i].textContent = this.replaceSpecialCharacters(\n        options[i]\n      );\n    }\n  }\n  // Function to replace any special characters in text\n  replaceSpecialCharacters(str) {\n    // create text area\n    var textArea = document.createElement('textarea');\n    // add str to text area\n    textArea.innerHTML = str;\n    // grab text from area and return it which removes any of the special characters\n    return textArea.value;\n  }\n\n  // function to add classes to buttons to show correct and incorrect answers\n  addBtnClasses(target, correctAnswer) {\n    // replace any special characters in correct answer\n    correctAnswer = ui.replaceSpecialCharacters(correctAnswer);\n    // check if btn pressed is incorrect answer\n    if (target.textContent !== correctAnswer) {\n      // if incorrect remove btn-info class\n      target.classList.remove('btn-info');\n      // and add btn danger class to turn btn red\n      target.classList.add('btn-danger');\n    }\n    // loop through each of the answer btns\n    this.answerBtns.forEach((btn) => {\n      // disable the btns so they cant be clicked\n      btn.disabled = 'true';\n      // check if button has the correct answer\n      if (btn.textContent === correctAnswer) {\n        // if correct remove btn-info class\n        btn.classList.remove('btn-info');\n        // and add btn-success class to turn green\n        btn.classList.add('btn-success');\n      }\n    });\n  }\n\n  // function to reveal answer if timeout\n  timeoutRevealAnswer() {\n    // set correct answer\n    const correctAnswer = this.replaceSpecialCharacters(\n      _game__WEBPACK_IMPORTED_MODULE_0__.game.questions[_game__WEBPACK_IMPORTED_MODULE_0__.game.questionNumber].correct_answer\n    );\n    // loop through each of the answer btns\n    this.answerBtns.forEach((btn) => {\n      // disable the btns so they cant be clicked\n      btn.disabled = 'true';\n      // check if button has the correct answer\n      if (btn.textContent === correctAnswer) {\n        // if correct remove btn-info class\n        btn.classList.remove('btn-info');\n        // and add btn-success class to turn green\n        btn.classList.add('btn-success');\n      }\n    });\n    if (_game__WEBPACK_IMPORTED_MODULE_0__.game.questionNumber + 1 < _game__WEBPACK_IMPORTED_MODULE_0__.game.questionAmount) {\n      // if more questions remain show next question button\n      ui.showAndHideNextQuestionButton();\n    } else {\n      // if no more questions set timeout function 1 second\n      setTimeout(function () {\n        // hide the game play screen\n        ui.hideShowGameplayScreen();\n        // set end screen score\n        ui.setScoreEndScreen();\n        // show the end quiz screen\n        ui.showHideEndScreen();\n      }, 1000);\n    }\n  }\n\n  // function to remove any of the classes for correct or incorrect answers from btns\n  removeBtnClasses() {\n    // loop through each btn\n    this.answerBtns.forEach((btn) => {\n      // re-enable\n      btn.disabled = '';\n      //remove all of the classes\n      btn.classList.remove('btn-info');\n      btn.classList.remove('btn-success');\n      btn.classList.remove('btn-danger');\n      // re-add btn info class\n      btn.classList.add('btn-info');\n    });\n  }\n  // Function to play sound effect when\n  playSoundEffect(result) {\n    // check if result is correct\n    if (result === 'correct') {\n      // if correct play this sound effect\n      this.correct.play();\n    } else {\n      // if incorrect play this one\n      this.incorrect.play();\n    }\n  }\n  // Function to start countdown timer sound effect\n  playCountDownTimer() {\n    this.countdown.play();\n  }\n  // Function to stop countdown timer sound effect\n  stopCountDownTimer() {\n    this.countdown.pause();\n    this.countdown.currentTime = 0;\n  }\n  // function to start timeout function countdown which reveals answers at finish\n  answerTimeoutStart() {}\n\n  // Function to update the score\n  updateScore() {\n    this.score.textContent = _game__WEBPACK_IMPORTED_MODULE_0__.game.score;\n  }\n  // Function to show and hide question button\n  showAndHideNextQuestionButton() {\n    this.nextQuestion.classList.toggle('hide');\n  }\n\n  // Function to hide and show start screen\n  hideShowStartScreen() {\n    this.startScreen.classList.toggle('display-none');\n  }\n\n  // Function to hide and show gameplay screen\n  hideShowGameplayScreen() {\n    this.gamePlayScreen.classList.toggle('display-none');\n  }\n  // Function to hide and show high scores screen\n  hideShowScoresScreen() {\n    this.scoresState.classList.toggle('display-none');\n  }\n  // Function to show and hide end screen\n  showHideEndScreen() {\n    this.endScreen.classList.toggle('display-none');\n  }\n  setScoreEndScreen() {\n    this.endScore.textContent = `${_game__WEBPACK_IMPORTED_MODULE_0__.game.score}/${_game__WEBPACK_IMPORTED_MODULE_0__.game.questionAmount}`;\n  }\n\n  // Function to update progress bar\n  updateProgressBar() {\n    // get percentage of questions left\n    const percentage =\n      ((_game__WEBPACK_IMPORTED_MODULE_0__.game.questionNumber + 1) / _game__WEBPACK_IMPORTED_MODULE_0__.game.questions.length) * 100;\n    //set progress bar width with percentage\n    this.progress.style.width = `${percentage}%`;\n    // set progress bar text with current question number and total question number\n    this.progressText.textContent = `Question ${_game__WEBPACK_IMPORTED_MODULE_0__.game.questionNumber + 1} / ${\n      _game__WEBPACK_IMPORTED_MODULE_0__.game.questionAmount\n    }`;\n  }\n}\n\n// initiate ui and export\nconst ui = new UI();\n\n\n//# sourceURL=webpack://Quiz-App/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;