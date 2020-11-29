const validaCPF = cpf => {
    if (cpf.length !== 11) return false
    let numeros = cpf.substring(0, 9)
    const digitos = cpf.substring(9)
    let soma = 0
    for (let i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    if (resultado !== Number(digitos.charAt(0))) return false
    soma = 0
    numeros = cpf.substring(0, 10)
    for (let k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    if (resultado !== Number(digitos.charAt(1))) return false
    return true
}

const validacao = () => {
    let cpf = document.querySelector('#cpf').value
    let resultado = validaCPF(cpf)
    document.querySelector('#success').style.display = 'none'
    document.querySelector('#error').style.display = 'none'

    if (resultado) {
        document.querySelector('#success').style.display = 'block'
    } else {
        document.querySelector('#error').style.display = 'block'
    }
}

document.querySelector('form button').addEventListener('click', () => validacao())