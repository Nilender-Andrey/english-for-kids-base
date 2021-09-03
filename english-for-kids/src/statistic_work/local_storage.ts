export function changeDataLocalStorage(word:string, numTraining = 0, numCorrect = 0, numIncorrect = 0):void {
  const result = localStorage.getItem(word);
  if (!result) {
    localStorage.setItem(word, JSON.stringify({ training: numTraining, correct: numCorrect, incorrect: numIncorrect }));
  } else {
    const data = JSON.parse(result);
    let { training, correct, incorrect } = data;
    training += numTraining;
    correct += numCorrect;
    incorrect += numIncorrect;
    localStorage.setItem(word, JSON.stringify({ training, correct, incorrect }));
  }
}
