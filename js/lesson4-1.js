// Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

//------------------------------------------------------------
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// for (const element of Object.entries(user)) {
//   console.log(`${element[0]}: ${element[element.length - 1]}`);
// }

// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }
//------------------------------------------------------------

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const valuesSalary = Object.values(salaries);
// let sum = 0;

// for (const item of valuesSalary) {
//   sum += item;
// }
// console.log(sum);
//------------------------------------------------------------
// const a = {};

// const b = {};

// const c = {
//   e: 10,
//   d: "Hello",
// };

// c[b] = 30;
// // c[a] = 15;

// console.log(c);

//------------------------------------------------------------

// Напишіть ф-цію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів і
// рядок з назвою фрукта.
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;

//   for (const fruit of fruits) {
//     if (fruitName === fruit.name) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Яблуко"));

// Напиши функцію, яка приймає масив обʼєктів - список покупок, підраховує загальну вартість
// і повертає повідомлення у форматі "Сума вашого замовлення = <total>".
// Якщо функція отримує пустий масив - поверни повідомлення "Ваша корзину пуста"

// const cart = [
//   { name: "Milk", price: 25, quantity: 2 },
//   { name: "Bread", price: 18, quantity: 1 },
//   { name: "Butter", price: 40, quantity: 3 },
// ];

// function totalPrice(array) {
//     if (array.length === 0) {
// return "Ваша корзинa пуста"
//     }

//     let price = 0
//     for (const product of array) {
//         price += product.price * product.quantity;
// }
// return `Сума вашого замовлення = ${price}`
// }

// console.log(totalPrice(cart))
// console.log(totalPrice([]))

// Побудуй обʼєкт із масиву: Створи новий об’єкт, де ключ — це id, а значення — name.

// const users = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Ivan" },
//   { id: 3, name: "Oleh" },
// ];

// const userObj = {}

// for (const user of users) {
//     const key = user.id
//     const value = user.name
// userObj[key] = value

// }
//  console.log(userObj)

// //  Результат:
// // {
// //   1: 'Anna',
// //   2: 'Ivan',
// //   3: 'Oleh'
// // }

// Побудуй обʼєкт зі статистикою кількостей: Створи об’єкт, де ключ — назва товару, а значення — загальна кількість.

// const purchases = [
//   { name: "Milk", quantity: 2 },
//   { name: "Bread", quantity: 1 },
//   { name: "Bread", quantity: 3 },
//   { name: "Milk", quantity: 3 },
//   { name: "Butter", quantity: 1 },
// ];

// const statsObj = {};
// for (const element of purchases) {
//   const key = element.name;
//   const value = element.quantity;
//   if (statsObj[key]) {
//     statsObj[key] += value;
//   } else {
//     statsObj[key] = value;
//   }
//   console.log(statsObj);
// }

// // ➡️ Результат:
// // {
// //   Milk: 5,
// //   Bread: 4,
// //   Butter: 1
// // }
