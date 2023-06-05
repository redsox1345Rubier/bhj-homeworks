let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    
    const progress = document.getElementById( 'progress' );
    const formData = new FormData(form);

    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable)
            progress.value = e.loaded / e.total;
    }
    
    xhr.open('POST', form.action, true);
    xhr.send(formData);
});