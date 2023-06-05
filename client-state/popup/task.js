let modal = document.getElementById("subscribe-modal");

if (!getCookie()['хрен']) {
	modal.classList.add('modal_active');
}


let modalClose = document.querySelector('div.modal__close');
modalClose.onclick = () => {
	modal.classList.remove('modal_active');
	document.cookie = 'хрен=член';

}

function getCookie() {
	return document.cookie.split('; ').reduce((acc, item) => {
		const [name, value] = item.split('=');
		acc[name] = value;
		return acc;
	}, {});
}