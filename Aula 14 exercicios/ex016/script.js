function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value) // a variável ini vem como string, aqui é uma conversão para número.
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        
        if (i < f) {
            for (let c = i; c <= f; c += p /* c = c + p*/) {
                res.innerHTML += ` ${c}` // esse += é uma concatenação.
        }
        
        } else {
            for (let c = i; c >= f; c -= p /* c = c - p*/) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}