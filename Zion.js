var delay=15000;
setTimeout(function(){
    
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("Você foi muito sábio e conseguiu deixar a emoção pra agir com a razão. Você consegue chegar no topo da montanha. Você foi classificado para a próxima fase.")
    window.location.replace('zion2.html')
    break;

}
else if (inicio == 2){
    alert ("Não funciona, pois o frio fica cada vez mais intenso e você acaba congelando.")

}
else if (inicio == 3){
    alert ("A tocha acende e você segue, mas quando você chega mais longe, ela apaga e você acaba congelando.")
}
else {
    alert ("Resposta Inválida!")
}
}
},delay);
document.write ("<h3>Nessa primeira etapa você precisa subir até o topo da montanha de gelo, <br>mas quanto mais você sobe, mais a temperatura desce.<br> A montanha é super íngreme e escorregadia. Necessita que você vá bem devagar.<br> Como você faz pra chegar no topo sem morrer de frio?<br><br>1 - Você usa sua espada para matar um urso que encontra no começo da montanha e usa<br> sua pele para se aquecer.<br>2 - Você tenta ir correndo pra se aquecer com o calor do próprio corpo.<br>3 - Você usa um feitiço pra acender uma tocha.</h3>")
