var elem1 = document.getElementById('btnCadastro');
elem1.addEventListener('click', function (fCadastro) {
    const usuario1 = document.getElementById('e-mail-cadastro').value;
    const password1 = document.getElementById('senha-cadastro').value;
    const conferepassword1 = document.getElementById('confere-senha-cadastro').value;
    const jatemcadastro = 0;
    let usuarioValid1 = {
        usuarioCheck: '',
        passworCheck: '',
        selecaoCheck: ''
    }


    let listaUsuario = {
        usuarioCad: 'admin',
        passwordCad: 'admin',
        selecaoCad: 1

    }

    localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));


    if (usuario1 == "" || password1 == "" || conferepassword1 == "") {
        alert("Os campos e-mail e senha são obrigatórios");
    }
    if (conferepassword1 != password1) {
        alert("As senhas não conferem");
    }

    if (usuario1 != "" && password1 == conferepassword1) {


        listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));
        listaUsuario.forEach((item) => {
            if (usuario1 == item.usuarioCad) {
                usuarioValid1 = {
                    usuarioCheck: item.usuarioCad,
                    passworCheck: item.passwordCad,
                    selecaoCheck: item.selecaoCad
                }
                auxCheck = 1;
            }
        })


        if (auxCheck == 1) {
            alert("Cadastro não efetuado, usuário já existente");
        } else {

            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
            listaUsuario.push(
                {
                    usuarioCad: document.getElementById('e-mail-cadastro').value,
                    passwordCad: document.getElementById('senha-cadastro').value,
                    selecaoCad: document.querySelector('input[name="tipo"]:checked').value

                }

            )
        }
        alert("Cadastro efetuado com sucesso");
        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
        location.href = "login.html";    


    }

}, false);
