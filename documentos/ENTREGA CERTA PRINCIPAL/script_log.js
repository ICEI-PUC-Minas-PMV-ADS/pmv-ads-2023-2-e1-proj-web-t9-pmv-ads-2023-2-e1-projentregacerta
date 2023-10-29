const usuario8 = localStorage.getItem("usuario1");
const password8 = localStorage.getItem("password1");
const selecao8 = localStorage.getItem("selecao1");

var elem0 = document.getElementById('btnLogin');
elem0.addEventListener('click', function (fLogin) {
    const usuario0 = document.getElementById('usuario').value;
    const password0 = document.getElementById('password').value;
    if (usuario0 == "" || password0 == "") {
        alert("Os campos e-mail e senha são obrigatórios");
    }
    else {
        if (usuario0 == usuario8 && password0 == password8){
            alert("Login com sucesso");
    
            if (selecao8 == 0)
            {
                location.href = "homeEmpregador.html";
            }
            if (selecao8 == 1)
            {
                location.href = "homeMotoboy.html";
            }
       
        }
        else{
            alert("Nome de usuário e senha não conferem");
            }
    }
}, false);

//alert(selecaoMotoboy);
//alert(selecaoEmpregador);