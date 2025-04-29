// При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".
// const tableEl = document.querySelector("#productTable")
// const divEl = document.querySelector("#productDetails")

// tableEl.addEventListener("click", showDetails)
// function showDetails({ target }) {
//     console.log(target.nodeName)
//     if (target.nodeName !== "TD") {
//         return
//     }
//     const parent = target.parentNode;
//     const product = parent.firstElementChild.textContent.toLowerCase();
//     const price = parent.lastElementChild.textContent;
//     divEl.textContent = `Ви вибрали ${product} за ${price}`
// }
// tippy('#myButton', {
//     content: 'My tooltip!',
//     theme: 'space'
//       });


const myBtn = document.querySelector('#myButton');
myBtn.addEventListener('click', () => {
    Swal.fire({
  title: 'Hello!',
  text: 'Welcome to the club',
  icon: 'success',
  confirmButtonText: 'Go On'
})
})


