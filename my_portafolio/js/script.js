document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('formResult').innerHTML = `
        <div class="alert alert-success" role="alert">
            Muchas gracias, ${name}! Su mensaje ha sido enviado exitosamente.
        </div>
    `;

    // Reset form fields
    document.getElementById('contactForm').reset();
});
