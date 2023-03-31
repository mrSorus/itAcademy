const rainbow = document.querySelector('.rainbow');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let currentColor = colors[colors.length - 1];
let currentElement = rainbow;

while (currentColor) {
  const newElement = document.createElement('div');
  newElement.className = currentColor;
  newElement.style.backgroundColor = currentColor;
  
  currentElement.appendChild(newElement);
  currentElement = newElement;
  currentColor = colors.pop();
}

rainbow.removeChild(rainbow.children[0]);