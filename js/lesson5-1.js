// Напиши функцію calculate(a, b, operation), яка приймає два числа і функцію-колбек
// operation, що виконує певну дію (додавання, множення тощо).
// Функція має повертати результат виконання певної математичної дії

// function count(x, y) {
//   return x + y;
// }

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// console.log(calculate(12, 10, count));
// =======================

// console.log(
//   calculate(3, 5, function (a, b) {
//     return a * b;
//   })
// );
// ======================
// * Напиши дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та повертає результат виклику callback-функції
//greet(name) - коллбек, що приймає ім'я і повертає рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не порожній (якщо так - повертай повідомлення "Error")

// function greet(name) {
//   return `Привіт, ${name}`;
// }

// function letMeSeeYourName(callback) {
//   const userName = prompt("Enter your name");

//   if (!userName) {
//     return "Error";
//   }

//   return callback(userName);
// }

// console.log(letMeSeeYourName(greet));
//
// * ===
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий його у консоль

// function showProduct(product) {
//   console.log(product);
// }

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   callback(product);
// }

// makeProduct("Bread", 120, showProduct);
// makeProduct("Water", 110, showProduct);
// makeProduct("Oil", 10, showProduct);

// =======================================
// *Зробити рефакторінг функції на стрілочну (з явним і неявним поверненням)
// function add(a, b, c) {
//   return a + b + c;
// }

// const add = (a, b, c) => {
//   return a + b + c;
// };
// console.log(add(1, 4, 6));

// ! ===============================

// const add1 = (a, b, c) => a + b + c;

// console.log(add1(12, 11, 4));
// ================================================

// const showName = (userName) => ({ name: userName });

// console.log(showName("Oleg"));

// =============================================

//? ForEach нічого не повертає, просто перебирає

// const numbers = [1, 4, 5, 6, 7, 9];

// numbers.forEach((el, index, array) => {
//   console.log(el);
//   console.log(index);
//   console.log(array);
// });

//------------------------------------------------------------
//  * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   }

// const logItems = (items) => {
//   items.forEach((el, i) => {
//     console.log(`${i + 1} - ${el}`);
//   });
// };

// logItems(["Mango", "Poly", "Ajax"]);
// console.log("");
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//------------------------------------------------------------

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 * Додай перевірку, що аргумент - це число
 */
// function calculateAverage(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total / args.length;
//   }

// const calculateAverage = (...args) => {
//   let total = 0;
//   let counter = 0;
//   args.forEach((el) => {
//     if (typeof el === "number") {
//       total += el;
//       counter += 1;
//     }
//   });
//   return total / counter || 0;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(14, 8, "a", 2)); // 8
// console.log(calculateAverage("qwe", false)); // 0

//------------------------------------------------------------

//? Map повертає масив тієї ж довжини: не змінює оригінал

//  * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (array) => {
//   return array.map((el) => {
//     return el.model;
//   });
// };

//! Це функція
// const getModels = (array) => array.map((el) => el.model);

// console.log(getModels(allCars));

//! Це масив
// const getModels = allCars.map((el) => el.model);

// console.log(getModels);

//! Це функція
// const getRandomValues = (arr, prop) => {
//   //   if (!arr[0][prop]) {
//   //     return "No such property";
//   //   }

//   if (!arr[0].hasOwnProperty(prop)) {
//     return "No such property";
//   }
//   return arr.map((el) => {
//     return el[prop];
//   });
// };

// console.log(getRandomValues(allCars, "amount"));

// console.log(getRandomValues(allCars, "model"));

//------------------------------------------------------------

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (array, discount) => {
//   return array.map((el) => {
//     return { ...el, price: el.price - el.price * discount };
//   });
// };

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));
// console.log([1, 2, 3, 4, 5].map(() => {}));

const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 2, price: 22455 },
  { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
];

const data = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

console.log(
  data.map((el) => {
    return el.tags;
  })
);

console.log(
  data.flatMap((el) => {
    return el.tags;
  })
);
