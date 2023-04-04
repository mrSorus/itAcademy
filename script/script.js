// 1. создать пустую форму
// 2. перебрать массив данных, создать массив для новых элементов
// 3. на каждой итерации создать элемент формы
// - поле type - определяет тип документа
// - id - id и name 
// - value - его текущее значение
// - options - доступные опции (несколько элементов)
// 4. создаем кнопку с обработчиками
// 5. добавляем элементы в форму

// const input = document.querySelector("#text");
// const checkbox = document.querySelector("#checkbox");

// document.addEventListener('change', (e) => {
//   console.log(e.target.value);
// })

// const elements = document.querySelectorAll('body *');

// elements.forEach(element => {
// element.addEventListener('click', (e) => {
//   console.log(e.currentTarget);
// })
// });

// const root = document.querySelector('#parent');
const body = document.body;

// root.addEventListener('click', (e) => {
//   console.log(e)
// })

// const customClick = new Event('click', {
//   clientX: 100,
//   clientY: 200
// })

// body.addEventListener('click', (e) => {
//   console.log(e);
//   root.dispatchEvent(customClick);
// })



// root.dispatchEvent(customClick);

body.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const heigt = event.target.offsetHeight;
  const wight = event.target.offsetWidth;
  console.log(wight, heigt);
  console.log("Координаты клика мышью: " + x + ", " + y);
});