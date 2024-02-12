// Task 1.1
// function describeCountry(){
//     let country = "Finland";
//     let population = 6000000;
//     let capitalCity = "Helsinki";
//     console.log(`${country} has ${population} and its capital city ${capitalCity}`)
// }
// describeCountry();


function describeRep(country, population, capital){
    return (`${country} has ${population} and its capital city ${capital}`)
}
describeRep("astana", 12, "xgdfza")

console.log(describeRep)

// Task 2.1
function percentageOfWorld1(population) {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return `${population} million people is about ${percentage.toFixed(1)}% of the world population.`;
}

const chinaPercentage = percentageOfWorld1(1441);
const indiaPercentage = percentageOfWorld1(1393);
const usaPercentage = percentageOfWorld1(331);
console.log(chinaPercentage);
console.log(indiaPercentage);
console.log(usaPercentage);


// Task 2.2
const percentageOfWorld2 = function(population) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return `${population} million people is about ${percentage.toFixed(1)}% of the world population.`;
};

const chinaPercentage2 = percentageOfWorld2(1441);
const indiaPercentage2 = percentageOfWorld2(1393);
const usaPercentage2 = percentageOfWorld2(331);

console.log(chinaPercentage2);
console.log(indiaPercentage2);
console.log(usaPercentage2);



// Task 3.1
const percentageOfWorld3 = (population) => {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return `${population} million people is about ${percentage.toFixed(1)}% of the world population.`;
};

const chinaPopulation = 1421;
const indiaPopulation = 1393;
const usaPopulation = 331;

const chinaPercentage3 = percentageOfWorld3(chinaPopulation);
const indiaPercentage3 = percentageOfWorld3(indiaPopulation);
const usaPercentage3 = percentageOfWorld3(usaPopulation);

console.log(chinaPercentage3);
console.log(indiaPercentage3);
console.log(usaPercentage3);


// Task 4
function describePopulation(country, population) {
    const worldPopulation = 7900; 
    
    const percentageOfWorld = (population / worldPopulation) * 100;
    return `${country} has ${population} million people, which is about ${percentageOfWorld.toFixed(1)}% of the world.`;
}

const country = "China";
const population = 1441;
const result = describePopulation(country, population);
console.log(result);



function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

const chinaDescription = describePopulation('China', 1441);
const indiaDescription = describePopulation('India', 1393);
const usaDescription = describePopulation('USA', 331);


console.log(chinaDescription);
console.log(indiaDescription);
console.log(usaDescription);


// Task 5
function days_of_a_year(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; 
    } else {
        return 365; 
    }
}

console.log(days_of_a_year(2021));
console.log(days_of_a_year(2020)); 



// Task 6

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgYesyl, avgYertys) {
    if (avgYesyl >= 2 * avgYertys) {
        console.log(`Yesyl wins (${avgYesyl.toFixed(1)} vs. ${avgYertys.toFixed(1)})`);
    } else if (avgYertys >= 2 * avgYesyl) {
        console.log(`Yertys wins (${avgYertys.toFixed(1)} vs. ${avgYesyl.toFixed(1)})`);
    } else {
        console.log("No team wins. It's a draw.");
    }
}


const yesylScores1 = [44, 23, 71];
const yertysScores1 = [65, 54, 49];

const avgYesyl1 = calcAverage(...yesylScores1);
const avgYertys1 = calcAverage(...yertysScores1);

checkWinner(avgYesyl1, avgYertys1);


const yesylScores2 = [85, 54, 41];
const yertysScores2 = [23, 34, 27];

const avgYesyl2 = calcAverage(...yesylScores2);
const avgYertys2 = calcAverage(...yertysScores2);

checkWinner(avgYesyl2, avgYertys2);
