function pedido() {

    const codigo = document.querySelector('.codigo').value
    const qtd = document.querySelector('.qtd').value

    const resultado =  document.querySelector('.resultado')

    let respostas = ''

    switch (codigo) {
        case "100":
            valor = qtd * 13.90
            respostas = resultado.innerHTML = `<p>Seu Cachorro Quente vai ficar R$ ${valor}</p>`
            break;

        case "101":
            valor = qtd * 7.30
            respostas = resultado.innerHTML = `<p>Seu Bauru Simples vai ficar R$ ${valor}</p>`
            break;

        case "102":
            valor = qtd * 10.60
            respostas = resultado.innerHTML = `<p>Seu Bauru com ovo vai ficar  R$${valor}</p>`
            break;

        case "103":
            valor = qtd * 12.40
            respostas = resultado.innerHTML = `<p>Seu Hamburguer vai ficar R$ ${valor}</p>`
            break;

        case "104":
            valor = qtd * 14.50
            respostas = resultado.innerHTML = `<p>Seu X Salada vai ficar R$ ${valor}</p>`
            break;

        case "105":
            valor = qtd * 10.00
            respostas = resultado.innerHTML = `<p>O  Refrigerante vai ficar R$ ${valor}</p>`
            break;


        default:
            respostas = resultado.innerHTML = `<p>Pizza não encontrada</p>`
            break;
    }

}