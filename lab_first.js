//Task 1.1
let population = 8000000;
population = 10000000;
console.log(population);

let populationInEachHalf = population / 4;

console.log(`Если страна разделится пополам, то в каждой половине будет ${populationInEachHalf} человек.`);

//Task 1.2
// var population = 8000000;

// population ++;
// console.log("Новое количество население составляет:" + population)

//Task 1.3
// var MyCountryPopulation = 8000000;

// var FinlandPopulation = 6000000;

// if (MyCountryPopulation > FinlandPopulation) {
//     console.log("В моей стране населения больше чем в Финляндии");
// } else {
//     console.log("В Финляндии населения больше чем в моей стране");
// }


//task 1.4
// var MyCountryPopulation = 8000000;

// var AverageCountryPopulation = 33000000;


// if (MyCountryPopulation > AverageCountryPopulation) {
//     console.log("В моей стране больше населения чем Среднее населения страны");
// } else {
//     console.log("Среднее населения больше")
// }


//Task1.5
// var countryName = "Португалия";
// var continent = "Европе";
// var countryPopulation = 11000000;
// var officialLanguage = "порутгальски";

// var description = `${countryName} находится в  ${continent}, количество населения ${countryPopulation} и людя говорят по ${officialLanguage}.`;

// console.log(description);

//Task 3.1
// var countryName = "Portugal";
// var countryPopulation = 11000000; 
// var AverageCountryPopulation = 33000000;
// var differenceBelowAverage = AverageCountryPopulation - countryPopulation;

// if (countryPopulation > AverageCountryPopulation) {
//     console.log(`${countryName}'s population is above average.`);
// } else {
//     console.log(`${countryName}'s population is ${differenceBelowAverage} below average.`);
// }


//Task 4.1
// console.log(Number('9' + '5'));
// console.log('19' - '13' + '17');      
// console.log('19' - '13' + 17);        
// console.log('123' < 57);               
// console.log(5 + 6 + '4' + 9 - 4 - 2);

//Task 5
// var numNeighbours = prompt('How many neighbour countries does your country have?');

// if (numNeighbours == 1) {
//     console.log('Only 1 border!');
// } 

// else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } 

// else {
//     console.log('No borders');
// }

// Task5.6

// const numNeighbours = prompt('How many neighbour countries does your country have?');

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


// Task 5.7
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


//Task 6
// const TotalPopulation = 33000000;
// const Island = false;
// const Language = "english";

// if (TotalPopulation >= 50000000 || !Island || Language == "english") {
//     console.log("You should live in your country :)");
// } else {
//     console.log("Your country does not meet Sarah's criteria :(");
// }


// Task 7 
let language = "kazakh";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log('MOST number of native speakers!');
    break;
  case "spanish":
    console.log('2nd place in number of native speakers');
    break;
  case "english":
    console.log('3rd place');
    break;
  case "hindi":
    console.log('Number 4');
    break;
  case "arabic":
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}


// Task 8.1
// let population = 37000000 > 33000000 ? "'Portugal's population is above average": "Portugal's population is below average";
// console.log(population);

// Task 8.2
// let armanMass = 78;
// let armanHeight = 1.69;

// let kuatMass = 92;
// let kuatHeight = 1.95;

// let armanBMI = armanMass / (armanHeight ** 2);
// let kuatBMI = kuatMass / (kuatHeight ** 2);

// let armanHigherBMI = armanBMI > kuatBMI;

// console.log(`Arman's BMI: ${armanBMI}`);
// console.log(`Kuat's BMI: ${kuatBMI}`);
// console.log(`Does Arman have a higher BMI than Kuat? ${armanHigherBMI}`);


// Task 8.3
// let armanMass = 95;
// let armanHeight = 1.88;

// let kuatMass = 85;
// let kuatHeight = 1.76;

// let armanBMI = armanMass / (armanHeight ** 2);
// let kuatBMI = kuatMass / (kuatHeight ** 2);

// let armanHigherBMI = armanBMI > kuatBMI;

// console.log(`Arman's BMI: ${armanBMI}`);
// console.log(`Kuat's BMI: ${kuatBMI}`);
// console.log(`Does Arman have a higher BMI than Kuat? ${armanHigherBMI}`);



// Task 9
// let armanMass = 95;
// let armanHeight = 1.88;

// let kuatMass = 85;
// let kuatHeight = 1.76;

// let armanBMI = armanMass / (armanHeight ** 2);
// let kuatBMI = kuatMass / (kuatHeight ** 2);

// if (armanBMI > kuatBMI) {
//   console.log(`Arman’s BMI (${armanBMI.toFixed(2)}) is higher than Kuat’s (${kuatBMI.toFixed(2)})!`);
// } else if (kuatBMI > armanBMI) {
//   console.log(`Kuat’s BMI (${kuatBMI.toFixed(2)}) is higher than Arman’s (${armanBMI.toFixed(2)})!`);
// } else {
//   console.log("Arman and Kuat have the same BMI!");
// }



// Task 10 
// let almatyFirstScore = 96;
// let almatySecondScore = 108;
// let almatyThirdScore = 89;

// let astanaFirstScore = 88;
// let astanaSecondScore = 91;
// let astanaThirdScore = 110;

// let averageScoreAlmaty = (almatyFirstScore + almatySecondScore + almatyThirdScore) / 3;
// let averageScoreAstana = (astanaFirstScore + astanaSecondScore + astanaThirdScore) / 3;

// const minimumScore = 100;

// if (averageScoreAlmaty >= minimumScore && averageScoreAstana >= minimumScore) {
//   if (averageScoreAlmaty > averageScoreAstana) {
//     console.log("Almaty wins with an average score of " + averageScoreAlmaty.toFixed(2) + "!");
//   } else if (averageScoreAstana > averageScoreAlmaty) {
//     console.log("Astana wins with an average score of " + averageScoreAstana.toFixed(2) + "!");
//   } else {
//     console.log("It's a draw! Both teams have the same average score of " + averageScoreAlmaty.toFixed(2) + ".");
//   }
// } else {
//   console.log("No team wins the trophy. Both teams must have an average score of at least 100 points.");
// }
