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
// є функція, шо виводить в консоль привітання, та обʼєкт з властивістю name
// виклич функцію sayHi в контексті обʼєкта user
// function sayHi() {
//   console.log(`Hello, ${this.name}`);
// }
// const user = { name: "Sasha" };
// sayHi.call(user)
// sayHi.call({name:"Anna"})

// функція introduce приймає 2 параметри - city і age
// виклич функцію в контексті обʼєкта person, передаючи аргументи окремо (та масивом)

// function introduce(city, age) {
//   console.log(`${this.name} from ${city}, age ${age}`);
// }

// const person = { name: "Nina" }
// introduce.call(person,"Dnipro",25)
// introduce.apply(person,["Dnipro",25])

// Обʼєкт user1 містить метод greet. Виклич цей метод в контексті обʼєкта user2
// const user1 = {
//   name: "Alice",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const user2 = { name: "Bob" };
// user1.greet.call(user2)

// const cat = {
//   name: "Murka",
//   meow() {
//     console.log(`${this.name} says Meow`);
//   },
// };

// const meow = cat.meow.bind(cat);
// meow();

// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();

// Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// const user={
//   name: "Anton",
//   loginOk(){
// console.log(`${this.name} logged in`)
//   },
//   loginFail(){
//     console.log(`${this.name} failed to log in`)
//   }
// }
// askPassword(user.loginOk.bind(user),user.loginFail.bind(user))
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта


// const array = [1, 2, 3, 4];
// console.log(array);

// Створи обʼєкт boss з властивостями name, status і sayHi, який виводитиме повідомлення "Привіт, <name>"
// Створи обʼєкт worker, прототипом якого буде boss. У обʼєкта будуть власні властивості - name, position i salary

const boss = {
    name: "Vova",
    status: "vip",
    sayHi() {
        console.log(`Привіт, ${this.name}`);
    }
}

const worker = Object.create(boss);
worker.name = "Tolya";
worker.position = "worker";
worker.salary = 1000;

// console.log(worker);
// console.log(worker.name);
// console.log(worker.status);
// console.log(worker.age);

// worker.sayHi();
// boss.sayHi();

for (const key in worker) {
    if (worker.hasOwnProperty(key)) {
        console.log(`${key} \n\n`);
    }
}

for (const key of Object.keys(worker)) {
    console.log(key);
}
