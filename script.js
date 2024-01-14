
function carregar() {
    var cabecalho = window.document.getElementById("cabecalho")
    var rodape = window.document.getElementById("rodape")
    var corpo = window.document.getElementById("corpo")
    var msg = window.document.getElementById("msg")
    var foto = window.document.getElementById("foto")
    var data = new Date() // Esse comando pega a data atual do seu device
    var hora = data.getHours() // Esse comando pega somente a hora atual do seu device, é possível pegar outras imformações como outros comandos, como dia, por exemplo
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6) {
        foto.innerHTML = `<img src="fotoManha.png" alt="Foto do dia"></img>`
        corpo.style.backgroundColor = "rgb(247, 216, 41)"
        rodape.style.color = "black"
        cabecalho.style.color = "black"
    } if (hora >= 12) {
        foto.innerHTML = `<img src="fotoTarde.png" alt="Foto do dia"></img>`
        corpo.style.backgroundColor = "rgb(243, 108, 46)"
    } if (hora >= 18 || hora <= 5) {
        foto.innerHTML = `<img src="fotoNoite.png" alt="Foto do dia"></img>`
        corpo.style.backgroundColor = "rgb(40, 52, 105)"
        rodape.style.color = "white"
        cabecalho.style.color = "white"
    }
}
// Não sei se é a melhor forma de fazer isso, mas funcionou