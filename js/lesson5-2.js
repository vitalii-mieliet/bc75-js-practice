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

// Напишіть функцію getUsersByGender, яка повертає масив корристувачів тільки певного гендера

// const getUsersByGender = (arr, gender) => arr.filter(item => item.gender === gender);
// console.log(getUsersByGender(data, "male"));

// Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// const getUsersWithJs = arr => arr.filter(item => item.tags.includes("js"));
// console.log(getUsersWithJs(data));

// Напишіть функцію getUsernameById, яка шукатиме користувача по айді і повертатиме його імʼя.
// Якщо користувач не знайден - повертай повідомлення "User not found"

// const getUsernameById = (arr, id) => {
//     const user = arr.find(item => item.id === id);
//     if (user) {
//         return user.name;
//     }
//     return "User not found";
// };
// console.log(getUsernameById(data, "009"));

// Напиши функцію getAllLikes, що повертає загальну кількість лайків усіх користувачів

// const getAllLikes = arr => arr.reduce((sum, item) => sum + item.likes, 0);
// console.log(getAllLikes(data));

// Напиши функцію getNamesByGender, яка перебирає масив
// обʼєктів і повертає масив імен користувачів конкретної статі

// const getNamesByGender = (arr, gender) =>
//   arr.reduce((names, item) => {
//     if (item.gender === gender) {
//       names.push(item.name);
//     }
//     return names;
//   }, []);
// console.log(getNamesByGender(data, "male"));

// !Чи у всіх корситувачів є тег JS

// const isAllHaveJs = data.every((user) => user.tags.includes("js"));

// console.log(isAllHaveJs);

// const isUnliked = data.some((user) => user.likes < 5);

// console.log(isUnliked);

// const numbers = [99, 53, 2, 35, 100];
// console.log(numbers.toSorted());
// console.log(numbers.toSorted((a, b) => a - b));

// const letters = ["b", "B", "a", "A"];
// console.log("letters", letters.toSorted());
// console.log(
//   "letters",
//   letters.toSorted((a, b) => a.localeCompare(b))
// );

// !Напишіть функцію sortedByName, яка сортує масив обʼєктів по імені користувача

// const sortedByName = (arr) =>
//   arr.toSorted((a, b) => a.name.localeCompare(b.name));

// console.log(sortedByName(data));

// Напишіть функцію getStatisticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// const getStatisticsOfTags = (array) =>
//   array
//     .flatMap((user) => user.tags)
//     .reduce((stats, tag) => {
//       console.log(stats);
//       console.log(tag, stats[tag]);
//       if (stats[tag]) {
//         stats[tag] += 1;
//       } else {
//         stats[tag] = 1;
//       }

//       return stats;
//     }, {});

// console.log(getStatisticsOfTags(data));

// Напишіть функцію getStatisticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// function getStatisticsOfTags(array) {
//   const tags = array.flatMap((el) => {
//     return el.tags;
//   });
//   console.log(tags);
//   const statistic = tags.reduce((newObj, tag) => {
//     if (newObj.hasOwnProperty(tag)) {
//       newObj[tag] += 1;
//     } else {
//       newObj[tag] = 1;
//     }

//     return newObj;
//     // newObj.js = 1
//     // newObj['js'] = 1;
//     // newObj[tag] = 1; // tag = "js"
//   }, {});
//   return statistic;
// }

// console.log(getStatisticsOfTags(data));
//------------------------------------------------------------
// Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// const getSortedUniqueTags = (array) => {
//   return array
//     .flatMap((el) => {
//       return el.tags;
//     })
//     .filter((item, idx, arr) => {
//       // console.log(item, idx);
//       // console.log(item, arr.indexOf(item));
//       return idx === arr.indexOf(item);
//     })
//     .toSorted((a, b) => a.localeCompare(b));
// };

// console.log(getSortedUniqueTags(data));

//!===========================================================

const users = [
  { id: 1, name: "Anna", age: 22, email: "anna@gmail.com" },
  { id: 2, name: "Tom", age: 17, email: "tom@yahoo.com" },
  { id: 3, name: "Lena", age: 30, email: "lena@gmail.com" },
  { id: 4, name: "Ivan", age: 25, email: "ivan@outlook.com" },
  { id: 5, name: "Maria", age: 18, email: "maria@gmail.com" },
  { id: 6, name: "Jhon", age: 27, email: "jhon@outlook.com" },
  { id: 7, name: "Valeriy", age: 14, email: "valeriy@gmail.com" },
  { id: 8, name: "Olia", age: 21, email: "olia@yahoo.com" },
];

//   1. Знайди всіх дорослих з переліку користувачів
//   2. Виведи імена всіх користувачів в алфавітному порядку
//   3. Знайди всіх користувачів, хто користується поштою gmail
//   4. Знайди користувача за id (запитуй айді через промпт)
//   5. Підрахуй середній вік всіх користувачів
//   6. Виведи імена всіх користувачів у порядку зменшення їх віку
//   7. Перевір чи всі користувачі повнолітні
//   8. Чи є хоч один користувач з email на yahoo?
//   9. Створити масив повідомлень для кожного користувача
//   10. Додай кожному користувачу властивість greeting, що буде вітати користувача "Привіт, <name>"
//    11. Створити масив повідомлень для всіх неповнолітніх користувачів з вітанням і попередженням
// "Привіт, <name>! Ти ще неповнолітній(-ня), будь обережним!"

//!===========================================================
