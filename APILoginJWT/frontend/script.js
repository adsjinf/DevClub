document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {

        // Envia as credenciais para um servidor de autenticação
        const response = await fetch('https://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Falha na autenticação');
        }

        const data = await response.json();
        const token = data.token; // O token JWT retornado pelo servidor

        // Armazena o token no armazenamento local
        localStorage.setItem('jwtToken', token);

        document.getElementById('message').textContent = 'Login bem-sucedido!';
        document.getElementById('message').style.color = 'green';

        // Exemplo de uso do token em outra requisição
        const protectedResponse = await fetch('https://localhost:3000/listar-usuarios', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const protectedData = await protectedResponse.json();
        console.log('Dados protegidos:', protectedData);

    } catch (error) {
        document.getElementById('message').textContent = error.message;
    }
});
