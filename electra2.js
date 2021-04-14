var delay=15000;
setTimeout(function(){
    
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("A ponte quebra e você cai de um abismo gigantesco. Você acaba morrendo na queda.")
   
}
else if (inicio == 2){
    alert (" Você vai devagar na ponte, o centauro tenta te acertar mas você consegue desviar das flechas e foge.")
    window.location.replace('electra3.html')
    break;
}
else if (inicio == 3){
    alert ("O único caminho que te levaria pra longe do centauro seria a ponte. O centauro te alcança e você é acertado por flechas.")
    
}
else {
    alert ("Resposta Inválida!")
}
    }
},delay);
document.write ("<h3>Nessa etapa você precisa fugir de um centauro que tenta te acertar com flechas. <br>No caminho pra fugir só existe uma longa ponte velha de madeira.<br> Esse é o único caminho pra tentar escapar dele e ser classificado para a última fase. <br>O que você faz?<br><br>1- Atravessa a ponte correndo o mais rápido possível.<br>2- Atravessa a ponte com cautela, prestando atenção nos movimentos do centauro.<br>3- Decide fazer outro caminho mais longo para não se arriscar na ponte.</h3>")
