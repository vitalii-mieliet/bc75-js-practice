// const courses = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
// console.table(courses);
// console.log(courses.length);
// console.log(courses[0]);
// console.log(courses[courses.length - 1]);
// // courses[3] = "Next.js";
// let elemIndex = courses.indexOf("React");
// courses[elemIndex] = "Next.js";
// console.table(courses);
// courses.length = 0;
// console.log(courses[10]);

// const a = [1, 2, 3];
// const b = a;

// console.log("a", a);
// console.log("b", b);

// a[0] = 500;

// console.log("a", a);
// console.log("b", b);

// console.log(a === b);

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log("a", a);
// console.log("b", b);

// a[0] = 500;

// console.log("a", a);
// console.log("b", b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

// console.log(a.toString() === b.toString());

// const courses = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

// const fullCopyCourses = courses.slice();

// console.log(fullCopyCourses);

// const partCopyCourses = courses.slice(0, 3);

// console.log(partCopyCourses);

// console.log(courses.slice(1, -1));

// const coursesString = courses.join(" ");

// console.log(coursesString);

// console.log(coursesString.split(" "));

// const newCourses = ["TypeScript", "Next.js"];

// const allCourses = courses.concat(newCourses);

// console.log(allCourses);

// const courses = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

// console.log(courses.includes("CSS"));

// console.log(courses.push("Next.js"));

// console.log(courses.pop());

// console.log(courses.unshift("Figma"));

// console.log(courses.shift());

// console.log(courses);

// const courses = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

// for (const course of courses) {
//   console.log(course);
// }

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// function arrayList(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// arrayList(fruits);

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = "8 11 10";

// const array = values.split(" ");

// // const area = array[0] * array[1];

// let area = 1;
// for (const element of array) {
//   area *= element;
// }

// console.log(area);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// for (let i = 0; i < namesArray.length; i++) {
//   console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let totalSum = 0;
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         totalSum += number 
//     } 
// }
// console.log(totalSum);


/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the wonderful future";

// function showWords(words) {
//     const trimWords = words.trim().split(' ').slice(1, -1);
//     for (const word of trimWords) {
// console.log(word);
//     }
// }
// showWords(string)


/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 100, 23, 37];
let minNumber = values[0];

for (const value of values) {
    if (minNumber > value) {
        minNumber = value;
    }
}
console.log(minNumber);
