export function receivingData(word:string, data:string):number {
  const result = localStorage.getItem(word);

  if (result) {
    const value = JSON.parse(result);
    const { training, correct, incorrect } = value;

    switch (data) {
      case 'Training':
        return training;
      case 'Correct':
        return correct;
      case 'Incorrect':
        return incorrect;
      case '%': {
        if (correct === 0 && incorrect === 0) {
          return 0;
        }
        return +((correct / (incorrect + correct)) * 100).toFixed(2);
      }
      default:
        return 0;
    }
  }
  return 0;
}
