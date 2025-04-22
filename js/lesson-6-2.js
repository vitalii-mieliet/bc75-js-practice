// // Створи клас User для створення користувача з такими властивостями:
// // a. userName - ім'я, рядок
// // b. age - вік, число
// // c. numberOfPosts - кількість постів, число
// // d. topics - масив тем на яких спеціалізується користувач
// // конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// // Додай метод getInfo(), який повертає рядок:
// // `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// // Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// // де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {
//   constructor(params) {
//     this.userName = params.userName;
//     this.age = params.age;
//     this.numberOfPosts = params.numberOfPosts;
//     this.topics = params.topics;
//   }

//   getInfo() {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`;
//   }

//   updateNumberOfPosts(amout) {
//     this.numberOfPosts += amout;
//   }
// }

// const user = new User({
//   userName: "Aleks",
//   age: 120,
//   numberOfPosts: 65535,
//   topics: ["Sport", "elfs", "space"],
// });

// user.updateNumberOfPosts(0);
// console.log(user.getInfo());

// Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set email(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClietnData() {
//     return {
//       clientLogin: this.#login,
//       clientEmail: this.#email,
//     };
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("mars", "mars@gmail");

// console.log(client.getClietnData);

// client.email = "marsik@mail";

// console.log(client.getClietnData.clientEmail);

//------------------------------------------------------------
// Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)

class Notes {
  static priority = {
    high: "high",
    middle: "middle",
    low: "low",
  };
  constructor() {
    this.items = [];
  }

  getNotes() {
    return this.items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(noteText) {
    // this.items = this.items.filter((item) => item.text !== noteText);
    const index = this.items.findIndex((item) => item.text === noteText);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updatePriority(noteText, newPriority) {
    const item = this.items.find((item) => item.text === noteText);
    if (item) {
      item.priority = newPriority;
    }
  }
}

const notes = new Notes();

console.log(notes);

notes.addNote({
  text: "today",
  priority: Notes.priority.low,
});
notes.addNote({
  text: "tomorrow",
  priority: Notes.priority.middle,
});
notes.addNote({
  text: "next day",
  priority: Notes.priority.high,
});

console.table(notes.getNotes());

notes.removeNote("today");

console.table(notes.getNotes());

notes.updatePriority("tomorrow", Notes.priority.low);

console.table(notes.getNotes());
