// // Є два масиви:
// // const fruits = ["apple", "banana"];
// // const vegetables = ["carrot", "tomato"];
// // // Створи новий масив, де овочі йдуть першими, а потім фрукти, але також додай "water" на початок і "salt" в кінець — використовуючи лише spread.
// // const products = ["water", ...vegetables, ...fruits, "salt"];

// // console.log(products);
// // Очікуваний результат:
// // ["water", "carrot", "tomato", "apple", "banana", "salt"]

// // Напиши функцію, яка приймає довільний набір символів і повертає об’єкт з першим елементом у полі head, а решта — в tail.
// // function splitArray(firstElement, ...args){
// // return {head: firstElement, tail: args}
// // }

// // console.log(splitArray("a", "b", "c", "d")); // { head: 'a', tail: ['b', 'c', 'd'] }

// // Доповни обʼєкт playlist методами для взаємодії з існуючими властивостями:
// // changeName(newName) - змінює назву плейліста (властивість name),
// // addTrack(track) - додає новий трек до існуючих,
// // updateRating(newRating) - оновлює рейтинг плейліста (властивість rating),
// // getTrackCount() - повертає кількість треків

// // const playlist = {
// //     name: "My amazing playlist",
// //     rating: 5,
// //     tracks: ["track-1", "track-2", "track-3"],
// //     changeName(newName) {
// //         this.name = newName;
// //     },
// //     addTrack(track) {
// //         this.tracks.push(track);
// //     },
// //     updateRating(newRating) {
// //         this.rating += newRating;
// //     },
// //     getTrackCount() {
// //         return this.tracks.length;
// //     },
// //   };

// // playlist.changeName("My new playlist");
// // playlist.updateRating(7);
// // playlist.addTrack("track-4");
// // console.log(playlist.getTrackCount());

// // Створіть об'єкт calculator з наступними методами:
// // read(a, b) - приймає два аргумента і зберігає їх
// // як властивості об'єкта
// // sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// // mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// // raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// // * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

// // const calc = {
// //     read(a, b) {
// //         if (typeof a === 'number' && typeof b === 'number') {
// //             this.a = a;
// //             this.b = b;
// //         }
// //         else { console.log('a and b must be numbers') };
// //     },
// //     sum() {
// //         if (this.exist()) {
// //             return this.a +this.b
// //         } return 'Not values'
// //     },
// //     mult() {
// //          if (this.exist()) {
// //             return this.a * this.b
// //         } return 'Not values'
// //      },
// //     raise() {
// //          if (this.exist()) {
// //             return this.a ** this.b
// //         } return 'Not values'
// //      },
// //     exist() {
// //         return this.a && this.b
// //     },
// // }

// // calc.read(8, 45)
// // console.log(calc.sum());
// // console.log(calc.mult());
// // console.log(calc.raise());

// // Додати метод getinfo в об'єкт user, який повертатиме дані про юзера
// // у форматі: "Name: Peter. Surname: Parker. Age: 22. Position: spider-man."

// // function getInfo(){
// //     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`
// // }

// // const user = {
// //   name: "Peter",
// //   surname: "Parker",
// //   age: 22,
// //   position: "spider-man",
// // };

// // user.getInfo = getInfo
// // console.log(user.getInfo());

// // const user1 = {
// //   name: "Peter1",
// //   surname: "Parker1",
// //   age: 21,
// //   position: "spider-man11",
// // };
// // user1.getInfo = getInfo
// // console.log(user1.getInfo());

// // Створи обʼєкт person з властивостю name і методом sayHi(), якій має виводити в консоль привітання "Привіт, мене звати <name>".
// // Присвой метод sayHi() обʼєкту user, щоб він виводив привітання для user

// // const user = {
// //   name: "Mango",
// // };

// // const person = {
// //     name: 'Peter',
// //     sayHi() {
// //         console.log(`Привіт, мене звати ${this.name}`);
// //     }
// // }

// // user.sayHi = person.sayHi
// // user.sayHi()
// // person.sayHi()
// // console.log(person.sayHi);

// // Створіть телефонну книгу - об'єкт phonebook,
// // у якого є властивість contacts (список контактів)
// // та методи управління книгою:

// // add(data) - приймає об'єкт data, де передається
// // name і email, category може передаватись чи ні,

// // всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// // (name i email - обов'язкові параметри, які треба передавати
// // при додаванні нового контакта,

// // category - може передаватись чи ні, якщо ні - має
// // приймати значення "default",

// // id та createdAt генеруються відповідними методами:
// // generateId() і getDate());
// // і додає newContact до списку контактів contacts;

// // *не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо

// // list() - виводить список контактів у вигляді таблиці;

// // filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);

// // delete(name) - видаляє контакт з заданим ім'ям;

// // updateName(oldName, newName) - змінює ім'я контакта;

// const phonebook = {
//   contacts: [],
//   add(data) {
//     const newContact = {
//       name: data.name,
//       email: data.email,
//       category: data.category ?? "default",
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   list() {
//     console.table(this.contacts);
//   },
//   filtered(category) {
//     const filteredContacts = [];
//     // for (let i = 0; i < this.contacts.length; i++){
//     //   if (this.contacts[i].category === category) {
//     //     filteredContacts.push(this.contacts[i])
//     //   }
//     // }
//     for (const contact of this.contacts) {
//       if (contact.category === category) {
//         filteredContacts.push(contact);
//       }
//     }
//     console.table(filteredContacts);
//   },
//   delete(name) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === name) {
//         this.contacts.splice(i, 1);
//       }
//     }
//   },
//   updateName(oldName, newName) {
//     // for (const contact of this.contacts) {
//     //   if (contact.name === oldName) {
//     //     contact.name = newName;
//     //   }
//     // }
// //     for (let i = 0; i < this.contacts.length; i++) {
// //       if (this.contacts[i].name === oldName) {
// //         this.contacts.splice(i, 1, { ...this.contacts[i], name: newName });
// //       }
// //     }
// //   },

// //   generateId() {
// //     return "#" + Math.random().toString(36).substr(2, 9);
// //   },
// //   getDate() {
// //     return Date.now();
// //   },
// // };
// // phonebook.add({
// //   name: "Mango",
// //   email: "mango@mail.com",
// //   category: "friends",
// // });

// // phonebook.add({
// //   name: "Poly",
// //   email: "poly@hotmail.com",
// // });

// // phonebook.add({
// //   name: "Katy",
// //   email: "katy@hotmail.com",
// //   category: "friends",
// // });
// // phonebook.delete("Mango");
// // phonebook.updateName("Poly", "Sara");
// // console.log(phonebook.filtered("friends"));
// // phonebook.list();

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},
  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},
  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},
  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};
