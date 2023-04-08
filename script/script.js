const array = [
{
	type: 'radio',
	id: 'age',
	value: 1,
	options: [1,2,3,4]
}
]

const form = document.querySelector('#form');

array.forEach(el => {
	if (Array.isArray(el.options)){
		el.options.forEach(options => {
			const label = document.createElement('label');
			const title = document.createElement('span')
			const chekboxElement = document.createElement('input')

			chekboxElement.type = 'radio';
			chekboxElement.id = options;
			chekboxElement.name = el.id;
			chekboxElement.value = options;

			title.innerText = option;

			label.append(title);
			form.append(chekboxElement);
			form.append(label)
		})
	}
})