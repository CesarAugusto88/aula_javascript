function clicou(){
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //alert("Obrigado por clicar!");

}

function redirecionar(){
    window.open("https://www.facebook.com");

}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar = 0;
function validaIdade(idade){
    //var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var num1 = parseInt(prompt("Primeiro número:"));
var num2 = parseInt(prompt("Segundo número:"));
alert("Soma = " + soma(num1, num2));

alert(setReplace("Vai Japão", "Japão", "Brasil"));

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
console.log(validar);*/

/*var d = new Date();
alert(d)
alert(d.getTime());
alert(d.getDay()+"/"+(d.getMonth()+1));
*/

/*var array = [0, 1, 2, 3, 4]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index]);    
}/*

/*var count = 0;
while (count < 5){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
console.log("Bem vindo(a)!")*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome:"maçã", cor:"vermelha"},
              {nome:"pêra", cor:"verde"},
              {nome:"laranja", cor:"amarelo"},
              {nome:"uva", cor:"roxo"}]
              
console.log(frutas);
alert(frutas[3].nome);*/

/*var lista = ["maçã", "pêra", "laranja"];

lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.toString()[0]);
console.log(lista.toString());
console.log(lista.join(" - "));//tamém em string mas com separação
console.log(lista);
console.log(lista.reverse());*/

/*var nome = "Cesar Augusto";
var n1 = 31;
var n2 = 10;
frase = "Japão é o melhor time do planeta!";
alert(nome + " tem " + idade + " anos")
// exibe o resultado no inpecionar elementos no navegador
console.log(nome)
console.log(n1 % n2)
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/