document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Envía los datos del formulario al servidor para crear una nueva cuenta de usuario
    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('User registered successfully!');
        window.location.href = 'stories.html'; // Redirige al usuario a la página de creación de historias
    } else {
        alert('Error registering user. Please try again.');
    }
});
