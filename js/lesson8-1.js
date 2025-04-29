// 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка
// При кліку на картку:
// - Додавай або прибирай клас active на картці.
// - Виводь повну інформацію про обраний елемент у окремий <div class="details"></div>.
// const tweets = [
//   {
//     id: "000",
//     name: "Alex",
//     gender: "male",
//     likes: 5,
//     tags: ["js", "nodejs"],
//     hobbies: ["cycling", "gaming"],
//     about: "Full-stack розробник, люблю велосипеди та ігри.",
//   },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//     hobbies: ["drawing", "travelling"],
//     about: "Фронтенд ентузіаст, обожнюю мистецтво і подорожі.",
//   },
//   {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//     hobbies: ["reading", "cooking"],
//     about: "Постійно вчуся новому. Люблю книги й кулінарні експерименти.",
//   },
//   {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//     hobbies: ["football", "photography"],
//     about: "Верстальник і майбутній React-розробник. Фанат футболу.",
//   },
//   {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//     hobbies: ["hiking", "tech reviews"],
//     about: "Мандрівник у душі та оглядач техно-новинок.",
//   },
//   {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//     hobbies: ["yoga", "baking"],
//     about: "Йога, випічка та розробка — три мої любові.",
//   },
//   {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//     hobbies: ["chess", "gaming"],
//     about: "Геймер і шахіст. Кодинг — це моя нова гра.",
//   },
// ];

// function createMarkup(arr) {
//   return arr
//     .map(({ id, name, tags, likes, gender }) => {
//       return `<li class="stats-item ${
//         gender === "male" ? "male" : "female" // we can skip
//       }" id=${id}>
//         <p class="stats-name">${name}</p>
//         <p class="stats-likes">${likes} likes</p>
//         <p class="stats-tags">tags: ${tags}</p>
//       </li>`;
//     })
//     .join("");
// }

// const list = document.querySelector(".stats");
// const details = document.querySelector(".details");

// list.insertAdjacentHTML("beforeend", createMarkup(tweets));

// list.addEventListener("click", getInfo);

// function getInfo(e) {
//   const li = e.target.closest("li");

//   if (!li) {
//     return;
//   }
//   const activeItem = list.querySelector(".stats-item.active")
//   if (activeItem) {
//     activeItem.classList.remove("active")
//   }
//    li.classList.add("active")
//   const tweet = tweets.find((item) => item.id === li.id);
//   const markup = `
//         <h2>${tweet.name}</h2>
//         <p><strong>Likes:</strong> ${tweet.likes}</p>
//         <p><strong>Tags:</strong> ${tweet.tags.join(", ")}</p>
//         <p><strong>Hobbies:</strong> ${tweet.hobbies}</p>
//         <p><strong>About:</strong> ${tweet.about}</p>
//       `
//   details.innerHTML = markup;
// }


// 9. При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.
let sum = 0;
let stat = {};
const calcBtn = document.querySelector(".statList");
const result = document.querySelector("#resultSection");
const resultBtn = document.querySelector("#resultButton");

calcBtn.addEventListener("click", sumResult);
resultBtn.addEventListener("click", showResult);

function sumResult(event) {
  // if (!event.target.classList.contains("calcButton"))
  //   return;

  if (event.target.nodeName !== "BUTTON")
    return;
  // console.log(event.target)
  const number = event.target.dataset.number;
  const key = event.target.textContent;
  if (stat[key]) {
    stat[key] += 1; 
  } else {
    stat[key] = 1;
    }
  sum += +number;
  // console.log(stat);
}

function showResult() {
  let markup = `Загальна кількість - ${sum} <br>`
  const statArray = Object.entries(stat);
  for (const [key, value] of statArray) {
   
    markup += `${key} була натиснута ${value} разів. <br>`
  }
  result.innerHTML = markup;
  stat = {};
  sum = 0;
}

