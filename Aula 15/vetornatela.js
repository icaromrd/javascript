let valores = [8, 1, 7, 5, 4, 2, 9]

/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

 for (let pos in valores) { //para cada posição na variável composta (valores) 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }   