tema = document.getElementById('Tema');
claro = document.getElementById('Claro');
escuro = document.getElementById('Escuro');
corFonte = document.getElementById('corFonte')

function deixarClaro(){
    tema.style.backgroundColor = "white";
    corFonte.style.color = "black";
}

function deixarEscuro(){
    tema.style.backgroundColor = "Black";
    corFonte.style.color = "white";
}

calculadora = document.getElementById('calculadora')
soma = document.getElementById('soma');
divisao = document.getElementById('divisão');
mutiplicacao = document.getElementById('mutiplicação');
subtracao = document.getElementById('subtração');
resultado = document.getElementById('resultado');



    
function somar(n1,n2){
    resultado = n1 + n2
    soma.innerHTML = resultado;
    console.log("Resultado da soma é: " + resultado)
}

function dividir() {
    resultado = n1 / n2
    console.log("Resultado da divisão é: " + resultado)
}

function multiplicar() {
    resultado = n1 * n2
    console.log("Resultado da multiplicação: " + resultado)
}

function subtrair() {
    resultado = n1 - n2
    console.log("Resultado da subtração é: " + resultado)
}

