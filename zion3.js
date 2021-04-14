var delay=15000;
setTimeout(function(){
   
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("O feitiço funciona por um tempo, Karsus enfraquece, mas vc fica fraco e cai. Karsus aproveita a oportunidade e mata você. GAME OVER.")

}
else if (inicio == 2){
    alert (" Você se torna o mestre de Karsus, levando ele diretamente para uma prisão de Bruxos. A população de Ravaryn decide que você merece ser Campeão do torneio. Você venceu. FIM DE JOGO.")
    break;
}
else if (inicio == 3){
    alert ('O feitiço é muito poderoso, sua varinha não tem força suficiente e se parte. Você perde sua única chance e Karsus mata você. GAME OVER.')
}
else {
    alert ("Resposta Inválida!")
}
}
},delay);
document.write ("<h3>A última etapa é um grande labirinto, cheio de obstáculos e dificuldades.<br> Nessa etapa você precisa simplesmente chegar na saída desse labirinto.<br> Você está indo muito bem, mas acaba sendo interrompida pela<br> presença de um homem estranho com uma aparência monstruosa.<br>Ele se chama Karsus e está prestes a destruir toda Ravaryn.<br> Está em suas mãos impedir que ele faça isso.<br> Você sabe 3 feitiços poderosos e um deles pode acabar<br> com a vida do Karsus. Qual feitiço você usa? <br><br>1- Crucius - Causa dor extrema na pessoa.<br>2- Imperius - Você toma o poder de controlar a pessoa.<br>3- Avada Kedrava - Mata a pessoa atingida.</h3>")