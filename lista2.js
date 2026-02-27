//Criar um programa que mostre se um número é positivo ou negativo

let num1 = 99;
if (num1>=0) {
    console.log(`O numero ${num1} é positivo`);
} else {
    console.log(`O numero ${num1} é negativo`)
}

//Criar um programa que mostre se um ano é bissexto.
let ano = 2020;
if (ano % 4 === 0) {
    console.log('É bissexto.')
} else {
    console.log('Não é bissexto.');
}

//Criar um programa que mostre uma senha e a mensagem acesso permitido
let senha = "123456"
if (senha === "123456") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

//Criar um programa que mostre um desconto de 5% para compras maiores que R$100
let valorCompra = 150;
if (valorCompra > 100) {
    let desconto = valorCompra * 0.05;
    let valorFinal = valorCompra - desconto;
    console.log(``)
}
//Criar um programa que classifique uma pessoa como criança, adolescente ou adulto de acordo com a idade

//Criar um programa que mostre qual tipo de triângulo de acordo com seus lados (equilatero, Isóceles e escalneo)

//Criar um programa que mostre conceitos A B C ou D e acordo com as notas: >9.5; Entre 9.4 e 8.5 B; Entre 8.4 e 7.0 C; <6.9 D