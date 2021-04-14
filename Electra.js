var delay=15000;
setTimeout(function(){
    
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("Não tem nada atrás. Apenas um muro. Você morre queimada pela lava que sobe na sala.")
    window.location.replace('zion2.html')

}
else if (inicio == 2){
    alert ("Te leva pro meio do nada, a porta se fecha e some. Você morre por fome e sede.")

}
else if (inicio == 3){
    alert ("Te levaram pra saída, mas sua sandália foi destruída pelo calor da lava. Você foi classificada para a próxima etapa do torneio.")
    window.location.replace('electra2.html')
    break;
}
else {
    alert ("Resposta Inválida!")
}
}
},delay);
document.write ("<h3>Você está numa sala cheia de ouro, mas esse ouro começa a derreter e se transformar em lava. <br>Você tem a sandália e Hermes e pode usá-la para voar e não se queimar, mas ainda<br> precisa achar a saída. O tempo é curto e você precisa escolher entre 3 portas.<br> Em qual porta você vai?<br><br>1- Porta da esquerda.<br>2- Porta do meio.<br>3- Porta da direita.</h3>")
