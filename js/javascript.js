var aceito = true
var outraChance = true

var buttonOne = document.querySelector('#buttonOne')

buttonOne.onclick = function() {
    
    if(aceito == true || outraChance == true) {
        alert('Que felicidade! Estamos muito felizes com sua resposta!')
        var padrinhos = document.querySelector('#padrinhos')
        padrinhos.innerHTML = `Todos os direitos reservados, <br> mas agora compartilhados com os padrinhos!`
        padrinhos.style.backgroundColor = 'rosybrown'

        setTimeout(() => { padrinhos
            alert('Bem vindos ao grupo padrinhos da Olívia')
            window.open('https://chat.whatsapp.com/GTRgKlsxVcvEpoHW77nab8', '_blank')
        }, 2000)
        aceito = false
        outraChance = false
    } else {
        aceito = false
        outraChance = false
    }
}

var buttonTwo = document.querySelector('#buttonTwo')

buttonTwo.onclick = function() {
    if(aceito == true) {
        alert('Não aceitamos um não como resposta! haha')
        aceito = false
    } else {
        aceito = false
    }
}