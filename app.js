function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//Question prototype

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};


let q1 = new Question(
  "What is the best programming ?",
  ["C#", "javascript", "pyhton", "asp.net"],
  "javascript"
);
let q2 = new Question(
  "What is the most popular language ?",
  ["C#", "visual basic", "nodejs", "javascript"],
  "javascript"
);
let q3 = new Question(
  "What is the best modern programming language ?",
  ["C#", "javascript", "pyhton", "asp.net"],
  "javascript"
);



console.log(q1.checkAnswer("C#"));

