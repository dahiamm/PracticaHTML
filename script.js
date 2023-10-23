document.querySelector('form').addEventListener('submit', function(event) {
    var inputs = document.querySelectorAll('input[type=text]');
    var isValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Todos los campos son obligatorios.');
    }
});


