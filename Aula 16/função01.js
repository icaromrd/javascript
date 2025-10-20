function parimp(n) { //n é o parâmetro
    if (n % 2 == 0) { //esse bloco todo de if é a ação.
        return 'Par!' //retorno
    } else {
        return 'Ímpar!' //retorno
    }
}
let res = parimp(7) //parimp é a chamada.
console.log(res)