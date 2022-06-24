const getID = (element) => document.querySelector(`#${element}`);

let outputColor = getID('output-color');
let outputCode = getID('output-code');
let copyBtn = getID('copy-btn');
let randomGeneratedBtn = getID('randomGenerated-btn');

let color1 = getID('color1');
let color2 = getID('color2');
let gradient = getID('gradient');

color1.addEventListener('input', generateColor);
color2.addEventListener('input', generateColor);
gradient.addEventListener('input', generateColor);

function generateColor() {
	outputColor.style.background = `linear-gradient(to right, ${color1.value}, ${gradient.value}%, ${color2.value})`;

	outputCode.value = `${color1.value}, ${gradient.value}%, ${color2.value}`;
}

copyBtn.addEventListener('click', () => {
	outputCode.select();
	outputCode.focus();
	navigator.clipboard.writeText(outputCode.value);
	alert(`The color code is ${outputCode.value}`);
});

generateColor();

function getRandomColor(event) {
	event.preventDefault();

	let inputColor1 =
		'#' +
		Math.floor(Math.random() * (0xffffff + 1))
			.toString(16)
			.padStart(6, '0');

	let inputColor2 =
		'#' +
		Math.floor(Math.random() * (0xffffff + 1))
			.toString(16)
			.padStart(6, '0');

	let inputGradient = Math.floor(Math.random() * 100) + 1;

	color1.value = `${inputColor1}`;
	color2.value = `${inputColor2}`;
	gradient.value = inputGradient;

	generateColor(color1.value, color2.value, gradient.value);
}

randomGeneratedBtn.addEventListener('click', getRandomColor);
