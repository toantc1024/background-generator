var input1 = document.querySelector('#color1'),
	input2 = document.querySelector('#color2'),
	deg = document.querySelector('#deg'),
	random = document.querySelector('.random'),
	randomAll = document.querySelector('.randomAll'),
	h3 =  document.querySelector('h3');
input1.value = '#eb4034';
input2.value = '#3734eb';

function updateAngle() {
	document.querySelector('.groupDeg').children[1].innerText = deg.value + " deg";
}
function applyBackground(first, second, angle) {
	if(angle === 0) {
		angle = "to right";
	} else {
		angle = angle + "deg";
	}
	document.body.style.background = 'linear-gradient(' + angle  + ', ' + first + ',' + second + ')';
	h3.innerText = 'background: '+document.body.style.background+";";
}

function getRandomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function getRandomAngle() {
	return (Math.random() * 361 ) << 0;
}

function randomGradient(allMode) {
	var firstRandom = getRandomColor(),
	secondRandom = getRandomColor();
	if(allMode === true) {
		var thirdRandom = getRandomAngle();
		deg.value = thirdRandom;
		updateAngle();
	}
	input1.value = firstRandom;
	input2.value = secondRandom;
	applyBackground(input1.value, input2.value, deg.value);
}
applyBackground(input1.value, input2.value, 0); 
//Init value

input1.addEventListener('input', () => {
	applyBackground(input1.value, input2.value, 0);
});

input2.addEventListener('input', () => {
	applyBackground(input1.value, input2.value, 0);
});	

deg.addEventListener('input', () => {
	updateAngle();
	applyBackground(input1.value, input2.value, this.value);
});

h3.addEventListener('click', () => { 
	navigator.clipboard.writeText(this.innerText.toLocaleLowerCase());
	//Click h3 to copy to clipboard
});

random.addEventListener('click', () => {
	randomGradient(false);
});
randomAll.addEventListener('click', () => {
	randomGradient(true);
});