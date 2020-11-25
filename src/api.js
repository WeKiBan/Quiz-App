// Import modules
import{ game } from './game'

// Create api class
class Api {
  // function to fetch quiz data
  async getQUizData(category) {
    // create apiurl variable
    const apiURL = `https://opentdb.com/api.php?amount=${game.questionAmount}&category=${category}&type=multiple`;

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
