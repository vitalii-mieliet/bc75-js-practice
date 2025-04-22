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

// class Notes {
//   static priority = {
//     high: "high",
//     middle: "middle",
//     low: "low",
//   };
//   constructor() {
//     this.items = [];
//   }

//   getNotes() {
//     return this.items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(noteText) {
//     // this.items = this.items.filter((item) => item.text !== noteText);
//     const index = this.items.findIndex((item) => item.text === noteText);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   updatePriority(noteText, newPriority) {
//     const item = this.items.find((item) => item.text === noteText);
//     if (item) {
//       item.priority = newPriority;
//     }
//   }
// }

// const notes = new Notes();

// console.log(notes);

// notes.addNote({
//   text: "today",
//   priority: Notes.priority.low,
// });
// notes.addNote({
//   text: "tomorrow",
//   priority: Notes.priority.middle,
// });
// notes.addNote({
//   text: "next day",
//   priority: Notes.priority.high,
// });

// console.table(notes.getNotes());

// notes.removeNote("today");

// console.table(notes.getNotes());

// notes.updatePriority("tomorrow", Notes.priority.low);

// console.table(notes.getNotes());

//!========================================================
// Створити клас Worker, у якого є властивості name і salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

class Worker {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return `Worker ${this.name} has salary ${this.salary} dollars`;
  }
}

class WorkerPosition extends Worker {
  constructor(name, salary, position) {
    super(name, salary);
    this.position = position;
  }

  getPosition() {
    return `${this.name} works as ${this.position}`;
  }
}

const workerPosition1 = new WorkerPosition("Neo", 10000, "The one");

console.log(workerPosition1.getPosition());
console.log(workerPosition1.getSalary());

// !=====================================================

// Створи клас Contact для створення контакта з полями name, email і phone.
// Потім створи клас ContactBook, який буде зберігати список контактів
// і надавати методи для додавання, видалення та пошуку контактів.

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    const inList = this.contacts.some(
      (item) => item.name === contact.name || item.phone === contact.phone
    );
    if (inList) {
      console.log("This contact already exist!");
      return;
    }
    this.contacts.push(contact);
  }

  removeContact(name) {
    this.contacts = this.contacts.filter((item) => item.name !== name);
  }

  findContact(name) {
    return (
      this.contacts.find((contact) => contact.name === name) ||
      "Contact not found!!!"
    );
  }

  getContacts() {
    console.table(this.contacts);
  }
}

const contactBook = new ContactBook();
const trinity = new Contact("Trinty", "trinity@zion.com", "111 01 01 0101 01");
const neo = new Contact("Neo", "neo@zion.com", "333 01 01 0101 01");
const morfius = new Contact(
  "Morfius",
  "morfius@zion.com",
  " 222 01 01 0101 01"
);

contactBook.addContact(trinity);
contactBook.addContact(neo);
contactBook.addContact(morfius);

contactBook.getContacts();
contactBook.addContact(morfius);
contactBook.removeContact("Morfius");
contactBook.getContacts();
console.log(contactBook.findContact("Smith"));
