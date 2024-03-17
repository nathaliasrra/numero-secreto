/*Alert() - É uma função do js que exibe um pop-up na tela com uma mensagem */
alert("Boas vindas ao jogo do número secreto");

/*Let - Cria uma váriavel que guarda um valor dentro dela (Os nomes da váriavel devem ser atribuidos de acordo com a sua utilidade) */
let numeroSecreto = 5;

/*Prompt() - O prompt é um pop-up que permite a escrita dentro de uma caixa de texto. Nesse caso o valor escrito no prompt será guardado dentro da váriavel "chute" */
let chute;
let tentativas = 1;

//while() - O while serve para executar um bloco de código não for igual ao número secreto (false) ele executará um bloco de código
while(chute != numeroSecreto) {

   chute = prompt("Escolha um número entre 1 e 10");

   /*If() - É uma condicional que permite a comparação de dois ou mais valores. O primero bloco permite que execute caso a comparação seja verdade (true), caso seja falso (false) ele executará o bloco do else */

    if(chute == numeroSecreto) { //se o chute for igual ao numeroSecerto
        /*Console.log() - É uma função utilizada para executar testes rápidos, evitando quebrar o próprio código caso nao dê certo 
        O console fica localizado no inspecionar do navegador apertando o botão direito do mouse*/
        alert(`Você acertou, adivinhou o número secreto (${numeroSecreto}), com ${tentativas} tentativas.`); //exiba isso

    } else { //se não for igual
        if(chute > numeroSecreto) { // se co chute for maior que o numeroSecreto
            alert(`O número secreto é menor que ${chute}`); //exiba isso
        } else { // se o chute for menor que o numeroSecreto 
            alert(`O número secreto é maior que ${chute}`); //exiba isso
        }
        tentativas++;
    }

}

