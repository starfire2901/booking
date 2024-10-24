document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('form-title').innerText = 'Cadastro';
    document.getElementById('switch-text').innerHTML = 'Já tem conta? <a href="#" id="switch-to-login">Faça login aqui</a>';
    
    document.getElementById('switch-to-login').addEventListener('click', function() {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('form-title').innerText = 'Login';
        document.getElementById('switch-text').innerHTML = 'Não tem conta? <a href="#" id="switch-to-signup">Cadastre-se aqui</a>';
    });
});

document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Login com email: ${email} e senha: ${password}`);
        // Aqui você pode implementar o envio dos dados para o servidor
    } else {
        alert('Preencha todos os campos.');
    }
});

document.getElementById('signup-btn').addEventListener('click', function() {
    const cpf = document.getElementById('cpf').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (cpf && firstName && lastName && phone && email && password) {
        alert(`Cadastro realizado com sucesso! \nCPF: ${cpf}, Nome: ${firstName} ${lastName}, Contato: ${phone}, Email: ${email}`);
        // Aqui você pode implementar o envio dos dados para o servidor
    } else {
        alert('Preencha todos os campos.');
    }
});
