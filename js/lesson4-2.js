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