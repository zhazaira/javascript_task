//date

// const now = new Date();
// console.info(now)

// const num = 10;
// console.log("Variable" + num + ".")

 // var num_1 = 5.4
 // var num_2 = 15
 // console.log("Result" + (num_1 - num_2))

 // console.log("Math:" + (Math.LOG10E * 44))

 // var num_3 = 3
 // num_3--;
 // console.log("Res:" + num_3)

 // function method() {
 //   console.log("Method in action")
 // }
 // method()

 //function info(word) {
 //   console.log(word + "!");
 // }
 // info("Hello")

// var number = 10
// function form() {
//    console.log(number)
// }
// form()

// var number = 10
// function form() {
//    var number = 99
//   console.log(number)
// }
// form()
// console.log(number)





// function info() {
//     number = 10;
// }
// info()
// let secret;
// console.log(secret)

// let num = "asd12"
// console.log(Number(num))


// const digits = '123asd';
// console.log(Number(digits))


// function callfunc(apple, orange){
//     console.log(`${apple} + "fruit")`)
    
//     }
//     callfunc()


// function calculateCircleArea(circleRadius) {
//     const area = 3.14 * circleRadius ** 2;
//     return area;
// }

// const circleArea = calculateCircleArea(6);
// console.log(circleArea)



// function sum(x, y) {
//     return x + y;
// }
// console.log(sum(2, 4))


// let func = (arg1, arg2, ...argN) => expression;


// let sayHi = () => alert("Hello!");

// sayHi();

// Создайте стрелочную функцию, которая принимает два аргумента и возвращает их сумму.
// let func = (x, y) => x + y;
// console.log(func(1, 3))


// Напишите стрелочную функцию, которая принимает число и возвращает его квадрат.
// function square(n){
//     return n ** 2;
// }
// console.log(square(3))
// let square = (n) => n ** 2;
// console.log(square(9));

// Создайте массив чисел и используйте стрелочную функцию для создания нового массива, содержащего квадраты каждого числа из первого массива.
// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map((num) => num ** 2);

// console.log(squaredNumbers);


//Напишите стрелочную функцию которая принимает строки и возвращает его длину
// let getLength = (str) => str.length;

// let myString = "Пример строки";
// console.log(getLength(myString)); 

// Создайте объект с полями "имя" и "возраст", затем напишите стрелочную функцию, которая принимает объект и выводит в консоль строку вида "Имя: {имя}, Возраст: {возраст}".
// let name = "Zhazira";
// let age = 12;
// console.log(`Name ${name}, Age ${age}`);


// Используйте стрелочную функцию для фильтрации массива чисел, оставляя только четные числа.
// let array = [6, 8, 9, 24, 5];
// let evenNumbers = array.filter((num) => num % 2 === 0);
// console.log(evenNumbers);


// Напишите стрелочную функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые начинаются с буквы "A".
// let strings = ["Apple", "Banana", "Orange", "Avocado", "Grapes"];

// let filterStringsStartingWithA = (arr) => arr.filter((str) => str.charAt(0).toUpperCase() === 'A');

// let result = filterStringsStartingWithA(strings);
// console.log(result);


// Создайте объект, представляющий книгу, с полями "название" и "автор", затем напишите стрелочную функцию, которая принимает объект книги и выводит в консоль строку вида "Книга: {название}, Автор: {автор}".
// let book = {
//     literature: "Shekspir",
//     year: 12,
// }
// let result = book;
// console.log(`Literaure: ${result.literature}, year: ${result.year}`)


// Используйте стрелочную функцию для нахождения максимального значения в массиве чисел.
// let array = [10123, 1424234, 5, 4324, 2839274832];
// let maximun = (num) => Math.max(...num);
// let find = maximun(array);
// console.log(find)










// Experiment
// var array = ["inst", "tiktok", "whts"];
// for (i=0;i<array.length;i++){
//     document.write(array[i] + "<br/>");

// }



// const friend1 = "Aselya";
// const friend2 = "Dariga";
// const friend3 = "Aliya";

// const friends = ["Iman", "Ernar", "Adilet"];
// console.log(friends);

// const y = new Array(2005, 2004, 2007);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Aihan';
// console.log(friends);


// const firstName = 'Zhazira';
// const zhaz = [firstName, 'Madina', 2045 - 1994, "pm", friends];
// console.log(zhaz);
// console.log(zhaz.length);



// const calcAge = function(birthYEar) {
//     return 2037 - birthYEar;
// }
// const years = [2005, 2006, 2009, 1990, 2008];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);







// let dictionaries = [1231, 543534, 6758];
// dictionaries.push(77, 3563);
// console.log(dictionaries)


// let number = [6537, 48256, 4349023];
// let deleteElements = number.pop(-1);
// console.log(deleteElements)


// let add = ["h", "az", "ira"];
// add.unshift("Z");
// console.log(add)

// let arr = [321, 213, 432, 3412, 461345243, 1432432];
// arr.splice(1, 3);
// console.log(arr)



// let func = function number(a, b) {
//     return a + b 
// }

// let num = (a, b) => a + b;




// console.log("Lifting weights repetitions 1 👻");
// console.log("Lifting weights repetitions 2 👻");
// console.log("Lifting weights repetitions 3 👻");

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetitions ${rep} 👻`)
// }



// var date = new Date();


// date.setMinutes(42);
// date.setFullYear(23);
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());

// var arr = [70, 534,5, 9,7, 12];
// // console.log(arr.join("==="));
// console.log(arr.sort())

// class Person {
//     constructor(name, age, happiness){
//         this.name = name;
//         this.age = age;
//         this.happiness = happiness
//     }
//     info() {
//         console.log("Имя" + this.name + "Возраст" + this.age)
//     }
// }

// var aliya = new Person("Aliya", 18, true);
// aliya.info();


// const massive = [2, 634, 23, 2352];
// // massive.push(12);
// // console.log(massive)

// const massive2 = massive.slice();
// massive2.push("assd")
// console.log(massive2)

// const sedan = {
//     color:'gray', 
//     volume: 1
// }

// const mers = {
//     enginePower: 200, 
//     volume: 2
// }

// const camry = {
//     number: 123
// }

// Object.setPrototypeOf(mers, sedan);
// console.log(mers.volume)

// console.log(sedan.number)