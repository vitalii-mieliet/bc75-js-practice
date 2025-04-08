// const message = "  This is string's methods!";
// const fullCopyMessage = message.slice();
// console.log(fullCopyMessage);
// const partCopyMessage = message.slice(0, 11);
// console.log(partCopyMessage + "...");

// const lowerMessage = message.toLowerCase();
// const upperMessage = message.toUpperCase();
// console.log(lowerMessage);
// console.log(upperMessage);

// console.log(message.includes("s"));
// console.log(message.includes("S"));

// console.log(message.startsWith("t"));
// console.log(message.startsWith("T"));

// console.log(message.endsWith("!"));

// const index = message.indexOf("I");
// console.log(index);

// const trimMessage = message.trim();
// console.log(trimMessage);

//   Напиши функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
//   параметра символом /. Якщо ні, додай до кінця
//   значення url цей символ і поверни оновлене значення з функції, але тільки в тому випадку,
//   якщо в url є підрядок "my-site".
// В іншому випадку поверни з функції адресу в незмінному вигляді

// const url = "https://my-site.com/about";
// function checkUrl(url) {
//   if (!url.endsWith("/") && url.includes("my-site")) {
//     return `${url}/`;
//   }
//   return url;
// }
// console.log(checkUrl(url));

// Запроси в користувача повідомлення через prompt.
// Якщо повідомлення містить:
// слово "hello" або "hi" → alert("Greeting detected")
// слово "bye" або "goodbye" → alert("Farewell detected")
// Якщо нічого з вищезгаданого — alert("Standard message")
// Якщо нічого не введено або натиснуто Cancel — alert("No message entered.")

// let message = prompt('Enter your message');
// if (!message) {
//   alert('No message entered');
// } else {
//   message = message.toLowerCase();
//   if (message.includes('hello') || message.includes('hi')) {
//     alert('Greeting detected');
//   } else if (message.includes('bye') || message.includes('goodbye')) {
//     alert('Farewell detected');
//   } else {
//     alert('standart message');
//   }
// }

// console.log('before FOR');

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// console.log('After FOR');

// for (let i = 10; i >= 1; i -= 1) {
//   console.log(i);
// }
// let a = 5;
// // console.log(++a);
// // console.log(a++);

// let b = 10;
// // console.log(--b);
// console.log(b--);

// let a = 1;
// let b = a++ + ++a; //= (1+3)
// console.log(b);

// Використай цикл while, щоб вивести в console всі числа від 0 до 10 включно.

// let number = 0;
// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// Використай цикл do..while, щоб вивести в console числа від 5 до 1 включно

// let number = 0;
// do {
//   console.log(number);
//   number--;
// } while (number >= 1);

// Напиши цикл for, який виводить у консоль браузера
//  числа за зростанням від a до b, але тільки якщо число кратне 5.

// const a = 3;
// const b = 54;

// for (let i = a; i <= b; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(max, min) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//     console.log(i);
//   }
//   return sum;
// }
// console.log(getNumbers(124, 23));

// Напишіть функцію, яка перевертатиме рядок у зворотньому порядку

// function getStrings(string) {
//   let reverseString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverseString += string[i];
//   }
//   return reverseString;
// }
// console.log(getStrings("Hello World"));
