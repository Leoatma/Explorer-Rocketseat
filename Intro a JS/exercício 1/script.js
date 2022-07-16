/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. */

let userAccept;


function activeButton() { 

while (userAccept != 2) {  

  userAccept = Number(prompt(` 
  Olá, você tem certeza que deseja participar? 
  Digite 1 para Sim; 
  Digite 2 para sair;
  `));    

  switch (userAccept) {

    case (1):
     
      let userName = prompt("Por favor nos informe o seu nome:");
      let numbOne = Number(prompt(`${userName}, para continuarmos, digite agora o primeiro número:`));
      let numbTwo = Number(prompt(`${userName}, digite o segundo número:`)); 
        
      const sum = (numbOne + numbTwo);
      const subt = (numbOne - numbTwo);
      const mult = (numbOne * numbTwo);
      const div = ((numbOne / numbTwo).toFixed(2));
      const rest = (numbOne % numbTwo);
      let sameNumber;
      let numberType;

      if(sameNumber = (numbOne == numbTwo)) {
        sameNumber = "iguais";
       } else {
        sameNumber = "diferentes";
       }        
        
       if ((sum % 2) != 0) {
         numberType = "ímpar";
       } else {
         numberType = "par";
       }        

        alert(`São dois números ${sameNumber}.`);
        alert(`A soma deles é ${sum}, que é um número ${numberType}.`);
        alert(`A subtração é ${subt}.`);
        alert(`A multiplicação é ${mult}.`);
        alert(`A divisão é ${div}.`);
        alert(`Eles têm como resto de divisão ${rest}.`)
        alert("Obrigado!");

        userAccept = 2;
        break;

      case (2):
        alert(`Ok, até logo! Miauu!!`);
        
      break;

    default:      
      alert("Deu azar!! Tente novamente!");
    }    
  }

} 
    

  
