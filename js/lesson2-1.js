
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

// const daysUntilDeadline = 5;

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

//   Виконай рефакторинг коду попередньої задачі використовуючи switch.

// let result = ""
// switch (daysUntilDeadline) {
//     case 0:
//         result = "Today";
//         // alert("Today");
//         break;
//     case 1:
//         result = "Tomorrow";
//         // alert("Tomorrow");
//         break;
//     case 2:
//         result = "Overmorrow";
//         // alert("Overmorrow");
//         break;
    
//     default:
//         result = "Date in the future";
//         // alert("Date in the future");
// }
// alert(result);


//  Напиши скрипт вибору опції доставки товару.
//  Опція зберігається у змінній option: 1 - самовивіз, 2 - курʼєр, 3 - пошта (запитуй у користувача через prompt)
//  У змінну message запишіть повідомлення залежно від опції.
//  - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Курʼєр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам зателефонує менеджер'

// function deliveryProduct() {
//     const option = +prompt("Оберіть тип доставки");
//     switch (option) {
//         case 1:
//             return "Ви можете забрати товар завтра з 12:00 в нашому офісі";
//         case 2:
//             return "Курʼєр доставить замовлення завтра з 9:00 до 18:00";
//         case 3:
//             return "Посилка буде відправлена сьогодні";
//         default:
//             return "Вам зателефонує менеджер";
//     }
// }

// console.log(deliveryProduct());



// Логічне І повертає значення останнього операнда, якщо всі операнди правдиві,
// або значення першого хибного операнда, що зустрівся
// console.log(5 && 4); //4
// console.log(5 && 0); //0
// console.log(false && 0); //false
// console.log(5 && "mango"); //"mango"
// console.log(0 && "mango"); //0


// Логічне АБО повертає значення останнього операнда, якщо всі операнди хибні,
// або значення першого правдивого операнда, що зустрівся
// console.log(false || 5);  //5
// console.log(5 || 0);  //5
// console.log(5 || 10);  //5
// console.log(false || null); //null
// console.log(true || null); //true


// Логічне НІ приводить операнд до логічного значення і заміняє його на протилежне
// console.log(!5); //false
// console.log(!false); // true


// console.log(true && 3); //3
// console.log(false && 3); //false
// console.log(true && 4 && "kiwi");  //"kiwi"
// console.log(true && 0 && "kiwi"); //0
// console.log(true || 3);  //true
// console.log(true || 3 || 4); //true
// console.log(true || false || 7); //true
// console.log(null || 2 || undefined); //2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); //3


//   Напиши скрипт перевірки підписки користувача при доступі до контента
//   - Є три типа підписки: free, pro і vip.
//   - Отримати доступ можуть тільки користувачі pro і vip

// const sub = "free";
// const canAccessContent = sub === "pro" || sub === "vip";
// console.log("Чи є доступ до контенту? ", canAccessContent);



//   Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
//   Для цього, користувач має бути:
//   - другом
//   - онлайн
//   - без режима не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат? ", canOpenChat);






// Напиши код, який буде питати
// логін за допомогою prompt и логіровати результат
// в консоль браузера

// Якщо користувач вводить "admin",
// то prompt запрашує пароль.
// Якщо нічого не ввели чи нажали Cancel
// вивести в alert рядок "Cancel!"
// В противному випадку вивести рядок "Who are you?!"
// Пароль перевіряти так:
// Якщо введен пароль "123456",
// то вивести рядок "Welcome, boss!"
// в іншому випадку виводити рядок "Wrong password!"
const login=prompt("enter login")
console.log(login)
if (login=== "admin" ){
    const password=prompt("enter password")
    if (password==="123456" ){
        alert("Welcome, boss!")
        
    }
    else {
        alert("Wrong password!")
    }

}
else if (login===""|| login===null){
    alert("Cancel!")
}
else {
    alert("Who are you?!")
}
