function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerText += ' Bom dia!'
        img.src = 'foto-manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerText += ' Boa tarde!'
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerText += ' Boa noite!'
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#515154'
    }
}