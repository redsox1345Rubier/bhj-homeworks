let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onload = function() {
	let img = document.getElementById('loader');
	img.classList.remove('loader_active');

	let responseObj = xhr.response;
	let json = JSON.parse(responseObj);

	let Item = document.getElementById('items');

	for (let value of Object.values(json.response.Valute)) {
		let divCurrency = document.createElement('div');
		divCurrency.classList.add('item__currency');
		divCurrency.innerText = 'руб.';

		let divItem = document.createElement('div');
		divItem.classList.add('item');

		let divValue = document.createElement('div');
		divValue.classList.add('item__value');
		divValue.innerText = value.Value;

		let divCode = document.createElement('div');
		divCode.classList.add('item__code');
		divCode.innerText = value.CharCode;

		divItem.appendChild(divCode);
		divItem.appendChild(divValue);
		divItem.appendChild(divCurrency);

		Item.appendChild(divItem);
	}
}