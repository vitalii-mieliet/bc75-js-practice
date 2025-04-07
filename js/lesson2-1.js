
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

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes === 0) {
//     timestring = `${hours} h.`
// } else {
//     timestring = `${hours} h. ${minutes} m.`
// }

// timestring = minutes === 0 ?  `${hours} h.` : `${hours} h. ${minutes} m.`
// console.log(timestring)


//   Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
//   Якщо до дедлайну 0 днів - виведи рядок "Today"
//   Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
//   Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
//   Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"

const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//     alert("Today")
// }
// else if(daysUntilDeadline === 1) { 
//     alert("Tomorrow")
// }
// else if (daysUntilDeadline === 2) {
//    alert("Overmorrow")
// }
// else {
//     alert ("Date in the future")
// }

let result = ""
switch (daysUntilDeadline) {
    case 0:
        result = "Today";
        // alert("Today");
        break;
    case 1:
        result = "Tomorrow";
        // alert("Tomorrow");
        break;
    case 2:
        result = "Overmorrow";
        // alert("Overmorrow");
        break;
    
    default:
        result = "Date in the future";
        // alert("Date in the future");
}
alert(result);