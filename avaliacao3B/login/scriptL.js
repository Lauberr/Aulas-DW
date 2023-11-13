    function validacaoL() {
    let email = document.getElementById('input_email').value
    let senha = document.getElementById('input_password').value
    
    if (email == ""){ 
        alert('Insira um email para efetuar o login!')
        
    } else if (senha == '') {
        alert('Insira um senha para efetuar o login!');

    } else if (email != "admin@email.com.br"){
        alert("Email não cadastrado!")
        
    } else if (senha != "#dw1UTFPR#"){
        alert("Senha inválida!")
        
    } else {
        alert('Usuario autentificado!')

        document.getElementById('input_email').value = '';
        document.getElementById('input_password').value = '';
    }
}

function forgot(){
    return alert('Função ainda não disponível...')
}
