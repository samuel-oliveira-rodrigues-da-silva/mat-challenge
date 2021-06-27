function numb (){
  var mem = parseInt(Math.random()*3+1)
  if(mem == 1){
var num = parseInt(Math.random()*88+11)
var raiz = num*num
var resp = window.prompt(`Qual é a raíz quadrada de ${raiz}?`)
if(resp == num){
    alert(`Você acertou, era ${num}`)
}
else{
    alert(`Você errou, era ${num}`)
}
  }
else if(mem == 2){
var num = parseInt(Math.random()*88+11)
var pot = num*num
var resp = window.prompt(`Quanto é ${num} elevado à 2?`)
if(resp == pot){
    alert(`Você acertou, era ${pot}`)
}
else{
    alert(`Você errou, era ${pot}`)
}
}


else if(mem == 3){

var num = parseInt(Math.random()*88+11)
var num2 = parseInt(Math.random()*88+11)
var resul = num*num2
var resp = window.prompt(`Quanto é ${num} vezes ${num2}?`)
if(resp == resul){
    alert(`Você acertou, era ${resul}`)
}
else{
    alert(`Você errou, era ${resul}`)
}

}

}