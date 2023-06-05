let TextArea = document.getElementById('editor');

TextArea.addEventListener('input', () => {
	localStorage.setItem('text', TextArea.value);
});

let val = localStorage.getItem('text');
if (val) TextArea.value = val;