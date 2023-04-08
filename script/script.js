// const array = [
// {
// 	type: 'radio',
// 	id: 'age',
// 	value: 1,
// 	options: [1,2,3,4]
// }
// ]

// const form = document.querySelector('#form');

// array.forEach(el => {
// 	if (Array.isArray(el.options)){
// 		el.options.forEach(options => {
// 			const label = document.createElement('label');
// 			const title = document.createElement('span')
// 			const chekboxElement = document.createElement('input')

// 			chekboxElement.type = 'radio';
// 			chekboxElement.id = options;
// 			chekboxElement.name = el.id;
// 			chekboxElement.value = options;

// 			title.innerText = option;

// 			label.append(title);
// 			form.append(chekboxElement);
// 			form.append(label)
// 		})
// 	}
// })

// setTimeout(() => console.log(2), 100)

// console.time('test')
// for (let i = 0; i < 1000000; i++){
// 	const div = document.createElement('div')
// 	document.body.append(div)
// }
// console.timeEnd('test')

// const div = document.querySelector('#div');

// div.addEventListener('mouseover', (e) =>{
// 	const width = e.target.offsetWidth;

// 	const id = setInterval(() => {
// 		if(width > 50) {
// 			e.target.style.width = '${parentInt - 1}px'
// 		} else clearInterval(id);
// 	},100)
// })

// class MyError extends Error {
// 	constructor(message){
// 		super(message)
// 		this.name = 'MyError'
// 	}
// }

// throw new MyError('my error')

// try {
	
// } catch (error) {
// 	if(error.name === 'MyError')
	
// }

const data = undefined;

// 1. нет длинны массива
// 2. вместо массива undefined
// 3. нет элемента формы

try {
	try {
		if (!data.length) throw {
			
		}
	} catch (error) {
		console.log('error 1')
	}
} catch (error) {
	
}