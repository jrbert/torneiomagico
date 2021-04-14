var delay=15000;
setTimeout(function(){
    
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("Crescem 6 cabeças instataneamente na serpente e você é atacado por ela.")

}
else if (inicio == 2){
    alert ("Foi certeiro. Você consegue atacar o único ponto mortal da serpente. Você foi classificado para a última etapa.")
    window.location.replace('zion3.html')
    break;
}
else if (inicio == 3){
    alert ("Antes que você consiga pegar a varinha, a serpente te ataca e você acaba morrendo.")
}
else {
    alert ("Resposta Inválida!")
}
}
},delay);
document.write ("<h3>Nessa etapa você precisa enfrentar uma serpente de 3 cabeças.<br> Para que você seja classificado para a etapa final do torneio,<br> você precisa precisa acabar com essa criatura.<br> O que você faz?<br><br>1- Você usa a espada e corta as cabeças dela.<br>2- Você enfia a espada no meio do corpo da serpente.<br>3- Você usa um feitiço pra desmaiar a criatura e assim atacar.</h3>")
