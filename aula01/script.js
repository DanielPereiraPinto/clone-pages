let num = document.querySelector('input#idnum')
let lista = document.querySelector('select#idlista')
let resultado = document.querySelector('div#resultado')
let valores = []             // array

function isNumero(n){        // verifica se o numero é valido
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}                                         // verifica se o número já esta na lista
function inLista(n,list){                 // recebe como parametro, número e a lista
    if (list.indexOf(Number(n)) != -1){   // busca a posição do vetor, usando o valor
        return true                       // quando o valor não existe, retorna -1
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))                  // adiciona ao array
        let item = document.createElement('option')      //cria um novo elemento
        item.text = `Valor ${num.value} adicionado.`     //adiciona valores ao elemento
        lista.appendChild(item)            //adiciona o elemento criado na variavel -> lista
        resultado.innerHTML = ''
    }else{
        alert('Valor inválido ou já adicionado na lista!!!')
    }
    num.value = ''    //limpou o campo número
    num.focus()       //deixa o cursor no campo número
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione os valores antes de finalizar!!!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){          //percorre o array
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} números adicionados.</p>`
        resultado.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos: ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos números adicionados é ${media}.</p>`
    }
}