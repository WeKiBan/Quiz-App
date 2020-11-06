// Import modules
import { ui } from './ui';

// Create api class
class Api {
  // function to fetch quiz data
  async getQUizData(category) {
    // create apiurl variable
    let apiURL;
    // if difficulty setting is any
    if (ui.difficulty.value === 'Any') {
      // set api url to this
      apiURL = `https://opentdb.com/api.php?amount=${ui.questionsAmount.value}&category=${category}&type=multiple`;
    } else {
      // otherwise set api url to this
      apiURL = `https://opentdb.com/api.php?amount=${ui.questionsAmount.value}&category=${category}&difficulty=${ui.difficulty.value}&type=multiple`;
    }
    // fetch the data
    const response = await fetch(apiURL);
    // convert response to json
    const data = await response.json();
    // return the result
    return data;
  }
}

// initiate new api and export
export const api = new Api();
