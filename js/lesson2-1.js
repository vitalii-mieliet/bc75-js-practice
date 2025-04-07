
// const a = 10; // global

// if (true) {
//   const a = 25; // block
//   const b = 33;
//     // console.log(a);
//     // console.log(b);
// }
// console.log(a);
// console.log(b);

//   Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
//   рядка формату "14 h. 26 m.". Якщо значення змінної minutes дорівнює 0,
//   то виводь рядок "14 г.", без хвилин.

const hours = 14;
const minutes = 26;
let timestring;

// if (minutes === 0) {
//     timestring = `${hours} h.`
// } else {
//     timestring = `${hours} h. ${minutes} m.`
// }

timestring = minutes === 0 ?  `${hours} h.` : `${hours} h. ${minutes} m.`
console.log(timestring)
