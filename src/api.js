import { ui } from './ui';

class Api {
  async getQUizData(category) {
    let apiURL;
    if (ui.difficulty.value === 'Any') {
      apiURL = `https://opentdb.com/api.php?amount=${ui.questionsAmount.value}&category=${category}&type=multiple`;
    } else {
      apiURL = `https://opentdb.com/api.php?amount=${ui.questionsAmount.value}&category=${category}&difficulty=${ui.difficulty.value}&type=multiple`;
    }
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  }
}

export const api = new Api();
