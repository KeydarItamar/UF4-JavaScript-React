function esPar(){
    let num = document.getElementById('inpuNum').value
    let result = document.getElementById('rp-numPar')
    result.innerHTML = ''
        return new Promise((resolve, reject) => {
            if (num % 2 === 0) {
              resolve(`${num} es divisible entre dos`);
              result.innerHTML = `${num} es divisible entre dos`
              result.style.color = 'green'
            } else {
              reject(`${num} no es divisible entre dos`);
              result.innerHTML = `${num} NO es divisible entre dos`
              result.style.color = 'red'
            }
        })  
}

function esMayor(){
    let num = document.getElementById('mayorQue').value
    let result2 = document.getElementById('rp-numMayor')
    let resultado = new Promise( (resolve, reject) => {
        if(num > 0 && num <= 10){
            resolve('todo bien')
            result2.innerHTML = `${num} es mayor que cero y menor o igual a 10`
            result2.style.color = 'green'
        }else{
            reject(`El numero: ${num} se sale de los limites.`)
            result2.innerHTML = `El numero: ${num} se sale de los limites.`
            result2.style.color = 'red'
        }
    })    
}   

function esVocal() {
    return new Promise((resolve, reject) => {
        let letra = document.getElementById('esVocal').value.toLowerCase();
        let resultLetra = document.getElementById('rp-esVocal');
        let arr = ['a', 'e', 'i', 'o', 'u'];
        if (arr.includes(letra)) {
            resolve (
                resultLetra.innerHTML = `${letra} es una vocal`,
                resultLetra.style.color = 'green'
            );
        } else {
            reject(
                resultLetra.innerHTML = `${letra} NO es una vocal`,
                resultLetra.style.color = 'red' 
            );
        }
    });
}

function division(numA, numB){
    return new Promise((resolve, reject) => {
       if(numB != 0){ 
        resolve(
            resultado = numA / numB,
            resultDiv = document.getElementById('rp-div'),
            resultDiv.innerHTML = resultado,
            resultDiv.style.color = 'green'
        )
    }else{
        reject(
            'Division no es posible',
            resultDiv = document.getElementById('rp-div'),
            resultDiv.innerHTML = 'Division no es posible',
            resultDiv.style.color = 'red'
         )
    } 
    })
}