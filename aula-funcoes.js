//Exercício
// Crie uma função para verificar se um valor é Truthy

function VerificarTrue(valor){
    return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado1,lado2,lado3,lado4){
    let perimetro = lado1+lado2+lado3+lado4;
    return perimetro;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome){
    return nome + ' ' + sobrenome;
}

// Crie uma função que verifica se um número é par

function verificaPar(numero){

    if(typeof(numero) != 'number'){
        return 'Voce nao inseriu um numero'
    }else{
        if(numero%2 == 0){
            console.log('É par');
        }else{
            console.log('nao é par');
        }
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)]

function verificaDado(dado){
    return typeof(dado);
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'click' ocorrer.

addEventListener('click', function(){
    console.log('Thiago David');
});


// Corrija o erro abaixo


var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visita`;
   }

   function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
   }
