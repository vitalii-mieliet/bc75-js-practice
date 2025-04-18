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

const getNamesByGender = (arr, gender) => arr.reduce((names, item) => {
    if (item.gender === gender) {
        names.push(item.name);
    };
    return names;    
}, []);
console.log(getNamesByGender(data, "male"));
