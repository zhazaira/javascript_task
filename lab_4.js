// Task 1
const populations = [657, 23432, 143, 634];
console.log("The array has 4 elements:", populations.length === 4);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
let percentages = populations.map(percentageOfWorld1);

console.log("Percentages of world population for the countries:", percentages);


// Task 2
let neighbours = ["Russia", "China", "Turkey", "Uzbekistan"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country.");
}
let indexOfSweden = neighbours.indexOf("Sweden");
if (indexOfSweden !== -1) { 
    neighbours[indexOfSweden] = "Republic of Sweden"; 
}
console.log(neighbours);



// Task 3
// let myCountry = {
//     country: "Kazakhstan",
//     capital: "Astana",
//     language: "Kazakh, English",
//     population: 8000000,
//     neighbours: ["Uzbekistan"]
// };
// console.log(myCountry);


// // Task 4
// console.log(`${myCountry.country} имеет ${myCountry.population} миллионов жителей, говорящих на ${myCountry.language.split(',')[0].trim().toLowerCase()}, ${myCountry.neighbours.length} соседней страны и столицу по имени ${myCountry.capital}.`);
// myCountry.population += 2000000;
// myCountry['population'] -= 2000000;
// console.log("Обновленное население:", myCountry.population);


// Task 5 
// let myCountry = {
//     country: "Kazakhstan",
//     capital: "Astana",
//     language: "Kazakh, English",
//     population: 8000000,
//     neighbours: ["Uzbekistan"],
    
//     describe: function() {
//         console.log(`${this.country} has ${this.population} million people, ${this.language.split(',')[0].trim().toLowerCase()}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//     },

//     checkIsland: function() {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);


// Task 6 
// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting.`);
// }


// Task 7 
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100; 
// }
// let populations = [1441, 1380, 331, 273]; 
// let percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }
// let percentages = [percentageOfWorld1(1441), percentageOfWorld1(1380), percentageOfWorld1(331), percentageOfWorld1(273)];
// console.log("Manually created 'percentages' array:", percentages);
// console.log("Computed 'percentages2' array using a for loop:", percentages2);


// // Task 8
// let listOfNeighbours = [['Канада', 'Мексика'], ['Испания'], ['Норвегия', 'Швеция', 'Казахстан']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     let neighbours = listOfNeighbours[i];
//     for (let j = 0; j < neighbours.length; j++) {
//         console.log("Сосед:", neighbours[j]);
//     }
// }


// Task 9
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// let populations = [1441, 1380, 331, 273];
// let i = 0;
// let percentages3 = [];
// while (i < populations.length) {
//     let percentage = percentageOfWorld1(populations[i]);
//     percentages3.push(percentage);
//     i++;
// }
// console.log("Массив процентов (percentages3):", percentages3);







