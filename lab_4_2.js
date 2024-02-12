// Task 1
// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// const testBill = 100;
// const tipForTestBill = calcTip(testBill);
// console.log(`Tip for bill value ${testBill}: ${tipForTestBill}`);

// const bills = [125, 555, 44];
// const tips = bills.map(calcTip);
// console.log("Tips:", tips);

// const totals = bills.map((bill, index) => bill + tips[index]);
// console.log("Totals:", totals);


// Task 3
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['JavaScript', 'Python', 'Rust', 'C++'],
//   answers: new Array(4).fill(0), 
  
//   registerNewAnswer() {
//     const input = prompt(`${this.question}\n${this.options.join('\n')} \n(Write option number)`);
//     const answer = parseInt(input);
    
//     if (this.isValidAnswer(answer)) {
//       this.answers[answer]++;
//       this.displayResults();
//     } else {
//       this.displayInvalidInputAlert();
//     }
//   },
  
//   isValidAnswer(answer) {
//     return !isNaN(answer) && answer >= 0 && answer < this.options.length;
//   },

//   displayInvalidInputAlert() {
//     alert('Invalid input. Please enter a valid option number.');
//   },

//   displayResults(type = 'array') {
//     const results = type === 'string' ? this.answers.join(', ') : this.answers;
//     console.log('Poll results:', results);
//   }
// };

// poll.registerNewAnswer();
// poll.registerNewAnswer();
// poll.registerNewAnswer();

// const testData1 = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({answers: testData1}, 'string');
// poll.displayResults.call({answers: testData2}, 'string');



// Task 4
// const checkDogs = (dogsAliya, dogsSaule) => {
//   const aliyaCopy = dogsAliya.slice(1, 4);
//   const allDogs = [...aliyaCopy, ...dogsSaule];

//   allDogs.forEach((age, index) => {
//     const dogType = age >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${index + 1} is ${dogType}, and is ${age} years old`);
//   });
// };


// const aliyaData1 = [3, 5, 2, 12, 7];
// const sauleData1 = [4, 1, 15, 8, 3];
// checkDogs(aliyaData1, sauleData1);

// const aliyaData2 = [9, 16, 6, 8, 3];
// const sauleData2 = [10, 5, 6, 1, 4];
// checkDogs(aliyaData2, sauleData2);


// Task 2
// const Arman = {
//   fullName: "Arman Halykov",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// const Kuat = {
//   fullName: "Kuat Mamyrkhanuly",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// Arman.calcBMI();
// Kuat.calcBMI();

// if (Arman.bmi > Kuat.bmi) {
//   console.log(`${Arman.fullName}'s BMI (${Arman.bmi.toFixed(1)}) is higher than ${Kuat.fullName}'s (${Kuat.bmi.toFixed(1)})!`);
// } else if (Kuat.bmi > Arman.bmi) {
//   console.log(`${Kuat.fullName}'s BMI (${Kuat.bmi.toFixed(1)}) is higher than ${Arman.fullName}'s (${Arman.bmi.toFixed(1)})!`);
// } else {
//   console.log(`${Arman.fullName} and ${Kuat.fullName} have the same BMI (${Arman.bmi.toFixed(1)})!`);
// }

