var delay=15000;
setTimeout(function(){
    
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("Você consegue chegar bem perto dele, mas quando chega no local do ovo, o dragão percebe você e te queima inteira.")

}
else if (inicio == 2){
    alert ("Você ataca o dragão, e ele se machuca, mas não é suficiente para detê-lo. ele te ataca de volta e você não resiste")

}
else if (inicio == 3){
    alert ("Você de fato tem jeito com dragões. Você consegue amansar a fera e pegar o ovo. Você foi classificada para a próxima fase.")
    window.location.replace('abigail2.html')
    break;
}
else {
    alert ("Resposta Inválida!")
}
    }
},delay);
document.write ("<h3>Você escolheu Abigail!<br><br> Vamos para a primeira etapa do torneio.<br><br> Nessa etapa você precisa apanhar o ovo do dragão, que cuida deste ovo, como quem cuida <br>da própria vida, mas agora o Dragão parece estar super desconfortável e soltando fogo pra cima.<br> Ele está distraído e essa é a sua maior chance de conseguir pegar o ovo. Você: <br> <br>1- Calcula a melhor rota de acordo com os movimentos que a<br> cabeça do dragão faz para que não seja notada por ele.<br> 2- Vai pra cima do dragão com a força do ódio para pegar <br>o ovo.<br> 3- Você acredita ter talento suficiente para domar <br>a fera e se aproxima com jeito.</3>")
