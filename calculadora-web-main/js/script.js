function calculadora(){
    let operaçao = document.getElementById('campoOperaçao').value
    let sinal = operaçao.split('')[1]
    let num1 = parseInt(operaçao.split('')[0])
    let num2 = parseInt(operaçao.split('')[2])
    let resultado
    if (sinal == '+'){
        resultado = adiçao(num1, num2)
    }else if (sinal == '-'){
        resultado = subtraçao(num1, num2)
    }else if (sinal == ('x' || 'X') ){
        resultado = multiplicaçao(num1, num2)
    }else if (sinal == '/'){
        resultado = divisão(num1, num2)
    }
    alert(resultado) 
    //document.getElementById('campoOperaçao').value = resultado
    
}




function adiçao(a, b){
    let resultado = a + b
    return resultado
  }
  
  function subtraçao(a, b){
    let resultado = a - b
    return resultado
  }
  
  function multiplicaçao(a, b){
    let resultado = a * b
    return resultado
  }
  
  function divisão(a, b){
    let resultado = a / b
    return resultado
  }