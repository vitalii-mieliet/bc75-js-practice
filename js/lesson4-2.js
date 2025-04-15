// Є два масиви:
// const fruits = ["apple", "banana"];
// const vegetables = ["carrot", "tomato"];
// // Створи новий масив, де овочі йдуть першими, а потім фрукти, але також додай "water" на початок і "salt" в кінець — використовуючи лише spread.
// const products = ["water", ...vegetables, ...fruits, "salt"];


// console.log(products);
// Очікуваний результат:
// ["water", "carrot", "tomato", "apple", "banana", "salt"]

// Напиши функцію, яка приймає довільний набір символів і повертає об’єкт з першим елементом у полі head, а решта — в tail.
// function splitArray(firstElement, ...args){
// return {head: firstElement, tail: args}
// }


// console.log(splitArray("a", "b", "c", "d")); // { head: 'a', tail: ['b', 'c', 'd'] }

// Доповни обʼєкт playlist методами для взаємодії з існуючими властивостями:
// changeName(newName) - змінює назву плейліста (властивість name),
// addTrack(track) - додає новий трек до існуючих,
// updateRating(newRating) - оновлює рейтинг плейліста (властивість rating),
// getTrackCount() - повертає кількість треків

// const playlist = {
//     name: "My amazing playlist",
//     rating: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     changeName(newName) {
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating += newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
//   };

// playlist.changeName("My new playlist");
// playlist.updateRating(7);
// playlist.addTrack("track-4");
// console.log(playlist.getTrackCount());

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

// const calc = {
//     read(a, b) {
//         if (typeof a === 'number' && typeof b === 'number') {
//             this.a = a;
//             this.b = b;
//         }
//         else { console.log('a and b must be numbers') };
//     },
//     sum() { 
//         if (this.exist()) {
//             return this.a +this.b
//         } return 'Not values'
//     },
//     mult() {
//          if (this.exist()) {
//             return this.a * this.b
//         } return 'Not values'
//      },
//     raise() {
//          if (this.exist()) {
//             return this.a ** this.b
//         } return 'Not values'
//      },
//     exist() {
//         return this.a && this.b 
//     },
// }

// calc.read(8, 45)
// console.log(calc.sum());
// console.log(calc.mult());
// console.log(calc.raise());

// Додати метод getinfo в об'єкт user, який повертатиме дані про юзера
// у форматі: "Name: Peter. Surname: Parker. Age: 22. Position: spider-man."

// function getInfo(){
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`
// }

// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// };

// user.getInfo = getInfo
// console.log(user.getInfo());

// const user1 = {
//   name: "Peter1",
//   surname: "Parker1",
//   age: 21,
//   position: "spider-man11",
// };
// user1.getInfo = getInfo
// console.log(user1.getInfo());

// Створи обʼєкт person з властивостю name і методом sayHi(), якій має виводити в консоль привітання "Привіт, мене звати <name>".
// Присвой метод sayHi() обʼєкту user, щоб він виводив привітання для user

const user = {
  name: "Mango",
};

const person = {
    name: 'Peter',
    sayHi() {
        console.log(`Привіт, мене звати ${this.name}`); 
    }
}

user.sayHi = person.sayHi
user.sayHi()
person.sayHi()
console.log(person.sayHi);

