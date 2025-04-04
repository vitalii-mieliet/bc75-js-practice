// console.log(Number("5"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("Jacob"));
// console.log(Number("25px"));
// console.log(String(5));
// console.log(String(true));
// console.log(String(false));
// console.log(String(null)); //
// console.log(String(undefined));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean("0"));

// console.log("5" * 2);
// console.log("10" - 5);
// console.log(5 + true);
// console.log(5 - true);
// console.log("5" + true);
// console.log(Number("5") + 1);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("" - 1);
// console.log("" * 2);

// console.log(Math.ceil(1.3));
// console.log(Math.floor(1.7));
// console.log(Math.round(1.5));
// console.log(Math.max(3, 7, 2));
// console.log(Math.min(3, 7, 2));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(25));
// console.log(Math.random());

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(5, 10));

// console.log(5 > 4);
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("a" > "A");
// console.log("Papaya" < "papaya");
// console.log("Papaya" === "papaya");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log (Number.isNaN(NaN))

// // Метод charCodeAt(index) повертає числовий код символу (unicode) за вказаним індексом у рядку.
// // string.charCodeAt(index)
// // index — позиція символу (нумерація починається з 0).
// // Якщо index виходить за межі рядка, повертає NaN.
// console.log ("a".charCodeAt(0))
// console.log ("A".charCodeAt(0))

// console.log(3 > 2 > 1);

// const elementWidth = "50px";
// const elementHeight = "200.74px";

// const fullElementWidth = Number.parseInt(elementWidth);
// const fullElementHeight = Number.parseInt(elementHeight);

// console.log(fullElementWidth);
// console.log(fullElementHeight);

// const floatElementWidth = Number.parseFloat(elementWidth);
// const floatElementHeight = Number.parseFloat(elementHeight);

// console.log(floatElementWidth);
// console.log(floatElementHeight);

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
// маси тіла людини. Для цього необхідно розділити вагу на
// квадрат висоти.
// Вага та висота будуть спеціально передані як рядки.
//  Індекс маси тіла необхідно округлити до однієї цифри після коми.

// function calcBMI(weight, height) {
//   const bodyWeight = parseFloat(weight);
//   const bodyHeight = parseFloat(height);
//   const bodyIndex = bodyWeight / bodyHeight ** 2;
//   return Number(bodyIndex.toFixed(1));
// }

// const bmi = calcBMI("88.3kg", "1.75sm");
// console.log(bmi); // 28.8

// Наступна функція має повертати true, якщо параметр age більше чи дорівнює 18. В іншому випадку - false.

function checkAge() {
    const age = prompt("Чи є вам 18 років?")
    return age >= 18; 

}

console.log(checkAge());
