// console.log(`start`);

// const promise = new Promise((resolve, reject) => {
// 	console.log(`promise`);
// setTimeout(() => resolve(`done`), Math.random() * 1000)
// setTimeout(() => reject(`error`), Math.random() * 1000)
// })

// promise.then((data) =>{
// 	console.log(data);
// })
// .catch((data) =>{
// 	console.error(data);
// })
// .finally(() => { 
// 	console.log(`finally`);
// })

// console.log(`end`);



// const createScript = (path, resolve, reject) => {
// 	const script = document.createElement(`script`);
// 	script.src = path;
// 	if (resolve) script.onload = resolve;
// 	if (reject) script.onerror = reject;

// 	document.documentElement.append(script);
// }

// createScript(`./test/js`, 
// () => test(),
// () => console.log(`script does not exit`)
// )



// const createScript = (path) => {
// 	return new Promise((resolve, reject) => {

// 		const script = document.createElement(`script`);
// 		script.src = path;

// 		script.onload = resolve;
// 		script.onerror = reject;

// 	document.documentElement.append(script);
// 	})
// }



// createScript(`./test.js`)
// .then(() => test())
// .then(data => {
// 	console.log(data);
// })
// .catch(() => console.log(`dont`))



// шляпа
// const createScript = async (path, resolve, reject) => {
// 	const script = document.createElement(`script`);
// 	script.src = path;
// 	document.documentElement.append(script);

// 	await script.onload 
// 	resolve();
// 	if (reject) script.onerror = reject;

	
// }

// createScript(`./test.js`, 
// () => test(),
// () => console.log(`script does not exit`)
// )



// async function func () {

// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(reject(`error`), 1000)
// 	})
// try {
// 	const result = await promise;

// 	console.log(result);
// } catch (e) {
// 	console.error(e);
// }
// 	console.log(`hello`);
// }

// func()



(async () => {
const createScript = (path) => {
	return new Promise((resolve, reject) => {

		const script = document.createElement(`script`);
		script.src = path;

		script.onload = resolve;
		script.onerror = reject;

	document.documentElement.append(script);
	})
}


try{
	const promiseRace = await Promise.race([createScript(`./test.js`),createScript(`./test.js`),createScript(`./test.js`)])
	console.log(promiseRace);
	}catch (e) { console.log(`dont`)
	}
})()