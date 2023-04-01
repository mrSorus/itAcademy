// console.log(`hello word`);

// function calc(a) {
//   let sum = 0;

//   return function(b) {
//     console.log(sum);
//     sum = sum + b;
//     return calc;
//   }
// }
// calc(1)(2)(3);

// const divElements = document.querySelectorAll(".test");

// const clickHandler = function(e){
//   console.log(this);
//   console.log(e);
// }

// divElements.forEach(el => {
//   el.addEventListener('click', clickHandler)
// })

const root = document.querySelector('#parent');

root.addEventListener("click", function (e){
  console.log(e.target.dataset.property);
})