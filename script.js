const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const css = document.querySelector('h3');
const body = document.querySelector('body');
const rdmBtn = document.querySelector('.random');

// Generate random background colour on load
window.onload = randomBg();

color1.addEventListener('input', changeBg);

color2.addEventListener('input', changeBg);

rdmBtn.addEventListener('click', randomBg);

function changeBg() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	displayCSS();
}

function displayCSS() {
	css.innerText = body.style.background + ';';
}

// Uses function found on W3Docs - https://www.w3docs.com/snippets/javascript/how-to-build-a-hex-color-generator-in-javascript.html

function generateColor() {
	return `#${Math.random().toString(16).slice(2, 8)}`;
}

// Generates 2 colours for background
function randomBg() {
	const rdmColor1 = generateColor();
	const rdmColor2 = generateColor();
	body.style.background = `linear-gradient(to right, ${rdmColor1}, ${rdmColor2})`;
	setInput(rdmColor1, rdmColor2);
	displayCSS();
}

// Sets color inputs to colours of current background

function setInput(inputColor1, inputColor2) {
	console.log(inputColor1, inputColor2);
	color1.value = inputColor1;
	color2.value = inputColor2;
}
