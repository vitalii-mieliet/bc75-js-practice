// console.log("Hello guys!!! 9 or 10?");
// console.log(10);
// console.log("10");
// console.log("9");

const userName = "Fulhensio";
const userAge = 25;
const isDeveloper = false;

// console.log(typeof userName);
// console.log(typeof userAge);
// console.log(typeof isDeveloper);

// console.log(typeof true);
// console.log(typeof "true");

// console.log(typeof typeof 1);

// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);

// alert("Hello");
// const answer = prompt("Enter your answer:");
// console.log(answer);
// const confirmation = confirm("Are you adult?");
// console.log(confirmation);

// let test = "hello";
// console.log(test);
// test = "hello World";
// console.log(test);

// const x = 15;
// const y = 10;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x ** y);
// console.log(x % y);

//  * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;

// const sum = apples + grapes;
// const diff = grapes - apples;
// const result = `Виведи на екран загальну кількість ${sum} Різницю яблук та винограду ${diff}.`;
// console.log(result);


// const firstName = "Chelsy";
// const lastName = "Emerald";
// const fullName = firstName + " " + lastName;
// const fullName = `${firstName} ${lastName}`
// console.log(fullName);

// const message = `How long is this string?`;
// const messageLength = message.length;
// const firstLetter = message[0];
// const lastLetter = message[messageLength -1];
// console.log(messageLength, firstLetter, lastLetter);

// Напиши функцію, яка приямає 2 числа і повертає їх сумму
// function summ(x, y) {
//     return x + y
// } 
// console.log (summ(10, 5))

// Оголоси функцію favoriteLanguage, яка буде повертати повідомлення
// "I love <language>! I have been studying it for <years> years."
// де language і years - це параметри, які очікує функція, мова (рядок)
// і роки (число).
// в результаті виклику функції в консолі має бути повідомлення:
// console.log(favoriteLanguage("JavaScript", 5)); // "I love JavaScript! I have been studying it for 5 years."

function favoriteLanguage(language, years) {
    return `I love ${language}! I have been studying it for ${years} years.`
}
console.log(favoriteLanguage("JavaScript", 5));
