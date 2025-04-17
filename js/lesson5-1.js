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
