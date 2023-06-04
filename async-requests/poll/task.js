let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.onload = function() {
	let responseObj = xhr.response;
	let json = JSON.parse(responseObj);
	let pollTitle = document.getElementById('poll__title');
	let pollAnswers = document.getElementById('poll__answers');
	pollTitle.innerText = json.data.title;
	let answers = json.data.answers;
	for (let i = 0; i < answers.length; i++) {
		let button = document.createElement('button');
		button.classList.add("poll__answer");
		button.innerText = answers[i];
		button.addEventListener('click', function() {
			alert('Спасибо, ваш голос засчитан!')
		})
		pollAnswers.appendChild(button);
	}
}