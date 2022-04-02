//Crie um objeto com seus dados pessoais
//Deve possuir pelo menos duas prorpiedades nome e sobrenome

var Dados = {
    nome: 'Thiago',
    sobrenome: 'David',
    idade: 23,
    cidade: 'Campos do Jordao',
}


//Crie um método no objeto anterior que mostre o seu nome completo

Dados.nomecompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    nome: 'Tobias',
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latePara: 'homem',
}