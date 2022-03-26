function mostrarErro(mensagem) {
    document.getElementById("sucesso").style.display = "none";
    document.getElementById("erro").style.display = "block";
    document.getElementById("erro").innerText = mensagem;
}
function mostrarSucesso(usuario) {
    document.getElementById("erro").style.display = "none";
    document.getElementById("sucesso").style.display = "block";
    document.getElementById("sucesso").innerText = `Obrigado pelo contato, ${usuario}!`;
}
function enviarMensagem() {
const email = document.getElementById("email").value;
const emailRegex = /^([a-zA-Z0-9.]{1,32})@[a-z0-9.]{1,16}\.com$/;

const found = email.match(emailRegex);

if (found == null) {
    mostrarErro("Erro no envio: Endereço de mail inválido");
    return;
}

const mensagem = document.getElementById("mensagem").value;
if (mensagem.length == 0) {
    mostrarErro("Erro no envio: Insira uma mensagem");
    return;
}

mostrarSucesso(found[1]);
}
