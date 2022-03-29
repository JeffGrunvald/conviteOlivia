var aceito = true
var naoaceito = true

function sim() {

    if(aceito==true) {
        funcaoSim()
    }
    aceito = false
}

function funcaoSim() {
    alert('Que felicidade! Estamos muito felizes com sua resposta!')
    document.getElementById('padrinhos').innerHTML = `Todos os direitos reservados, <br> mas agora compartilhados com os padrinhos!`
    setTimeout(function padrinhos() {
        alert('Bem vindos ao grupo padrinhos da Olívia')
        window.open('https://chat.whatsapp.com/GTRgKlsxVcvEpoHW77nab8', '_blank')
    }, 2000)
}

function nao() {

    if(naoaceito==true) {
        funcaoNao()
    }
    naoaceito = false
}

function funcaoNao() {
    alert('Não aceitamos um não como resposta! haha')
}