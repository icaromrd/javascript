function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab') 
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '' //limpar o resultado dentro das opções
        for (let c = 1; c <= 10; c = c + 1) {
            let item = document.createElement('option') //para criar elementos em JS que seria do HTML 'option', criar opções.
            item.text = `${n} x ${c} = ${n*c}` //parte de dentro do option
            tab.appendChild(item) //adicionar o elemento filho.
        }
    }
}