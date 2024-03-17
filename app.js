/*Alert() - É uma função do js que exibe um pop-up na tela com uma mensagem */
alert("Boas vindas ao jogo do número secreto");

/*Let - Cria uma váriavel que guarda um valor dentro dela (Os nomes da váriavel devem ser atribuidos de acordo com a sua utilidade) */
let numeroMaximo = 10;
//o parseInt() vai tranformar o número aleatório gerado pelo Math.random() em numéro inteiro. O * 10 significa que ele passará a vírgula para a direita e contará até 9, por tanto colocamos o + 1 para incluir o 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
let chute; //o chute vai ser o valor que guardará o que será digitado pelo usuário
let tentativas = 1; // a variável tentativa vai guardar quantas vezes o usuário demorou para acertar o número secreto


//while() - O while serve para executar um bloco de código não for igual ao número secreto (false) ele executará um bloco de código
while(chute != numeroSecreto) {

    /*Prompt() - O prompt é um pop-up que permite a escrita dentro de uma caixa de texto. Nesse caso o valor escrito no prompt será guardado dentro da váriavel "chute" */
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

   /*If() - É uma condicional que permite a comparação de dois ou mais valores. O primero bloco permite que execute caso a comparação seja verdade (true), caso seja falso (false) ele executará o bloco do else */

    if(chute == numeroSecreto) { //se o chute for igual ao numeroSecerto
        //a variável palavraTentativa conserta o erro de português, caso o usuário acerte de primeira será necessário colocar a palavra "tentativa" no singular
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        /*Console.log() - É uma função utilizada para executar testes rápidos, evitando quebrar o próprio código caso nao dê certo 
        O console fica localizado no inspecionar do navegador apertando o botão direito do mouse*/
        alert(`Você acertou, adivinhou o número secreto (${numeroSecreto}), com ${tentativas} ${palavraTentativa}.`); //exiba isso
        break; //isso encerra o loop quando o usuário acertar

    } else { //se não for igual
        if(chute > numeroSecreto) { // se co chute for maior que o numeroSecreto
            alert(`O número secreto é menor que ${chute}`); //exiba isso
        } else { // se o chute for menor que o numeroSecreto 
            alert(`O número secreto é maior que ${chute}`); //exiba isso
        }
        tentativas++; //A contagem de tentativas será colocada fora do else, pois será contada também as vezes que o usuário acertar ou seja, será contado os erros e o acerto
    }

}

