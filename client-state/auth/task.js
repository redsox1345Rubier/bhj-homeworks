function auth(user_id) {
	let div = document.getElementById('welcome');
	let span = document.getElementById('user_id');
	let signin = document.getElementById('signin');
	div.classList.add('welcome_active');
	span.innerText = user_id;
	signin.classList.remove('signin_active');
}

let id = localStorage.getItem('name');
if (id) {
	auth(id);
}

let form = document.getElementById('signin__form');
let xhr = new XMLHttpRequest();

function checkLogin() {
	let responseObj = xhr.response;
	let json = JSON.parse(responseObj);

	if (json.success) {
		auth(json.user_id);
		localStorage.setItem('name', json.user_id);

	} else {
		alert('Неверный логин/пароль');
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let formData = new FormData(form);

	xhr.onload = checkLogin;

	xhr.open('POST', form.action, true);
	xhr.send(formData);
});
