var delay=15000;
setTimeout(function(){
    
    while (inicio != 1 || inicio != 2 || inicio != 3){
    var inicio = prompt ("Digite o número de acordo com a opção desejada:")

if (inicio == 1) {
    alert ("Você foi esperta e conseguiu chegar intacta no final da floresta. Classificada para a próxima e última fase.")
    window.location.replace('abigail3.html')
    break;
}
else if (inicio == 2){
    alert ("Eles voam muito rápido e atacam você. Você foi desclassificada.")
}
else if (inicio == 3){
    alert ("São muitos, você não dá conta e é atacada. Você foi desclassificada.")
}
else {
    alert ("Resposta Inválida!")
}
}
},delay);
document.write ("<h3>Nessa etapa você precisa atravessar uma floresta cheia de diabretes da cornualha,<br> que são criaturinhas chatas que voam e podem te atacar.<br> Você tem que sair intacta do outro lado da floresta.<br> Você decide usar sua capa de invisibilidade, mas ela prende no galho de uma <br>árvore e rasga, perdendo sua magia. O que vc faz?<br> <br> 1- Você pega galhos de uma árvore e vai se camuflando até a saída da floresta.<br> 2- Você corre desesperadamente e tenta ser mais rápida que eles.<br> 3- Você usa feitiços pra ir derrubando os diabretes.</h3>")
