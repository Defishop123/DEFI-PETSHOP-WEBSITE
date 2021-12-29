function send(params){
    var tempParams ={
         to_name: document.getElementById('toName').value,
        from_name: document.getElementById('email').value,
        message: document.getElementById('msg').value,
    };
    emailjs.send('service_8z8y4me', 'template_nwm5ws2',tempParams).then(function(response) {
        alert('SUCCESS!', response.status, response.text);
            }, function(error) {
        alert('FAILED...', error);
    });
}
