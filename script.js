const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const input = document.querySelector('.input');
const ball = document.querySelector('img');

const answersArr = [
	'Tak!',
	'Nie.',
	'Może.',
	'Ciężko powiedzieć...',
	'Nie chcesz znać odpowiedzi na to pytanie... :/',
];

const shakeBall = () => {
	ball.classList.add('shake-animaton');
	setTimeout(checkInput, 1000);

	//function that postpone shaking of the ball for 1s and triger after that time function checkInput
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
		error.textContent = '';

		//checking if input value is not empty and if the sentence is finished by quetion mark
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".';
		answer.textContent = '';

		//condition that question must be with '?'
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie!';
		answer.textContent = '';

		//if someone is not filling the imput the outcome of the error will be 'you must ask question'
	}

	ball.classList.remove('shake-animaton');
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;

	//genereting the number from 0-4 to simulate the ansewer from the ball
};

ball.addEventListener('click', shakeBall);
