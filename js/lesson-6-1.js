console.log(this); // суворий режим - undefind; не суворий - Window

// function foo() {
//   console.log(this);
// }

// console.log(foo());

// const foo1 = () => {
//   console.log(this);
// };
// console.log(foo1());
//------------------------------------------------------------
// const obj = {
//   name: "Olya",
//   test() {
//     console.log(this);
//   },
// };

// obj.test(); // This  в об'єктах ссилається на сам об'єкт

// const user = {
//   name: "Anna",
//   greet() {
//     const name = "Maria";
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// user.greet();

// const user = {
//   name: "Anna",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const greetFn = user.greet;
// greetFn(); // помилка бо втрачається контекст(This)

//------------------------------------------------------------

// const user = {
//   name: "Vira",
//   sayHi: () => {
//     console.log(this.name);
//   },
// };
// user.sayHi(); // стрілка запам'ятовує контекст при оголошенні де This є undefind

//------------------------------------------------------------
// const dog = {
//   name: "Rex",
//   bark() {
//     const arrowFn = () => {
//       console.log(this);
//       console.log(this.name);
//     };
//     arrowFn();
//   },
// };

// dog.bark(); // батьківська обл є об'єкт (dog)

//------------------------------------------------------------
// const calculator = {
//   value: 10,
//   add(x) {
//     return this.value + x;
//   },
// };

// function compute(fn) {
//   return fn(5);
// }

// console.log(compute(calculator.add));// при передачі метода як колбек This губиться

//------------------------------------------------------------

//!ЗАПАМ'ЯТАТИ
// const group = {
//   title: "Team A",
//   students: ["Ann", "Bohdan", "Olga"],
//   list() {
//     this.students.forEach(function (name) {
//       console.log(this.title + ": " + name);
//     }, this); // передати явно this
//   },
//   list() {
//     this.students.forEach((name) => {
//       console.log(this.title + ": " + name);
//     }); // стрілка запам'товує батьківський контест
//   },
//   list() {
//     const forThis = this;
//     this.students.forEach(function (name) {
//       console.log(forThis.title + ": " + name);
//     }); // зберегти this у змінну
//   },
// };

// group.list();
