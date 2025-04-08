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

let a = 1;
let b = a++ + ++a; //= (1+3)
console.log(b);
