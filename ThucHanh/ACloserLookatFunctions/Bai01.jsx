const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (
      typeof input === 'number' &&
      input >= 0 &&
      input < this.answers.length
    ) {
      this.answers[input]++;
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document.body.append(document.createElement('button'));
document.querySelector('button').textContent = 'Answer poll';

document
  .querySelector('button')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: testData1 }, 'array');
poll.displayResults.call({ answers: testData1 }, 'string');

poll.displayResults.call({ answers: testData2 }, 'array');
poll.displayResults.call({ answers: testData2 }, 'string');
