let aceito = true
let outraChance = true

const buttonOne = document.querySelector('#button-one')

buttonOne.onclick = function() {
    
    if(aceito == true || outraChance == true) {
        alert(`Que felicidade! Estamos muito felizes com sua resposta!`)
        let padrinhos = document.querySelector('#padrinhos')
        padrinhos.innerHTML = `Todos os direitos reservados, <br> mas agora compartilhados com os padrinhos!`
        let funcao = document.querySelector('#function')
        funcao.innerHTML = `Qual sua função? Orar pedindo luz e proteção, guiar pelo bom caminho, ser presente e amigo para todas as horas, brincar, mimar e amar!`

        setTimeout(() => { padrinhos            
            alert(`Bem vindos ao grupo padrinhos da Olívia!`)
            window.open(`https://chat.whatsapp.com/GTRgKlsxVcvEpoHW77nab8`, 'popup')
        }, 7000)
        aceito = false
        outraChance = false
    } else {
        aceito = false
        outraChance = false
    }
}

const buttonTwo = document.querySelector('#button-two')

buttonTwo.onclick = function() {

    if(aceito == true) {
        alert(`Não aceitamos um não como resposta! haha`)
        aceito = false
    } else {
        aceito = false
    }
}