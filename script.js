function result () {
    
 var real = Number(document.getElementById('real').value)
 var moeda = document.getElementById('moeda')
 var text = document.getElementById('result')
 if (moeda.value == 'dolar') {
    var result = (real * 5.12).toFixed(2)
    text.innerHTML = ''
    text.innerHTML += ` R$ ${result}` 
 } else if (moeda.value == 'euro') {
    var result = (real * 5.55).toFixed(2)
    text.innerHTML = ''
    text.innerHTML += ` R$ ${result}`
 } else {
    if (moeda.value == 'libra') {
        var result = (real * 6.19).toFixed(2)
        text.innerHTML = ''
        text.innerHTML += ` R$ ${result}`
    } else {
        window.alert('[ERRO] Escolha uma moeda!')
    }
 }
    
 }
