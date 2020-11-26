class Storage {
  constructor() {
    // local storage keys
    this.LOCAL_STORAGE_LIST_KEY = 'highScores';
    // high scores
    this.highScores =
      JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)) || [];
  }
  // Function to add score
  addHighScore(name, score, category) {
    // create score object
    const scoreData = {
      name,
      score,
      category,
    };
    // push score to high scores array
    this.highScores.push(scoreData);
  }
  // function to save to local storage
  saveToLocalStorage() {
    // saves lists to local storage
    localStorage.setItem(
      this.LOCAL_STORAGE_LIST_KEY,
      JSON.stringify(this.highScores)
    );
  }

  // function to clear scores history
  clearScoresHistory(){
    this.highScores = [];
  }
}

export const storage = new Storage();
