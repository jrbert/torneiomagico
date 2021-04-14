var delay=15000;
setTimeout(function(){

       
        while (escolherPersonagem != 1 || escolherPersonagem != 2 || escolherPersonagem != 3) {
            var escolherPersonagem = prompt ("Digite o número do personagem escolhido")
           

        if (escolherPersonagem == 1){
            alert ("ABIGAIL LABYRINTH!");
            window.location.replace('abigail.html');
            break;
        }
        else if (escolherPersonagem == 2){
            alert ("ZION JINX!")
            window.location.replace('zion.html')
            break;
        }
        else if(escolherPersonagem == 3){
            alert ("ELECTRA SOULTON!")
            window.location.replace('electra.html')
            break;
        }
        else {
            alert ("Resposta inválida!")
            
        }
    }

},delay);
document.write ("<h3> Três bruxos são selecionados para um torneio que acontece de 4 em 4 anos. <br> Nesse torneio eles terão que passar por 3 fases para se tornar o campeão mundial do <br> Torneio Mágico que esse ano acontece em Ravaryn. Cada fase tem suas dificuldades então <br> pense muito bem antes de agir. Que a magia esteja com você.<br> <br> Escolha com qual Personagem deseja jogar e digite o número dele:<br> 1 Abigail Labyrinth (inteligente, ranzinza e orgulhosa.) <br>2 Zion Jinx (emocional, impulsivo e ingênuo.) <br>3 Electra Soulton (séria, lógica e vingativa.)</h3>")


