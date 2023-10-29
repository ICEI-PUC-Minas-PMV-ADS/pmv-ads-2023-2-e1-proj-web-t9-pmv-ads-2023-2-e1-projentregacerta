var elem1 = document.getElementById('btnCadastro');
elem1.addEventListener('click', function (fCadastro) {
const usuario1 = document.getElementById('e-mail-cadastro').value;
const password1 = document.getElementById('senha-cadastro').value;
const conferepassword1 = document.getElementById('confere-senha-cadastro').value;
const nomeusuario = document.getElementById('nomecompleto').value;
var selecao1 = document.querySelector('input[name="tipo"]:checked').value;



if (usuario1 == "" || password1 == "" || conferepassword1 == ""){
    alert("Os campos e-mail e senha são obrigatórios");
}
if (conferepassword1 != password1){
    alert ("As senhas não conferem");
}
if (usuario1 != "" && password1 == conferepassword1){
    alert("Cadastro efetuado com sucesso");
    localStorage.setItem("selecao1", selecao1);
    localStorage.setItem("usuario1", usuario1);
    localStorage.setItem("password1", password1);
    localStorage.setItem("nomeusuario", nomeusuario);
    location.href = "login.html";    
 
}
    }, false);

