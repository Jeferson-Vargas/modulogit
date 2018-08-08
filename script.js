//Primaira aula do Bonieky de JavaScript
/*
	Nesta aula aprendi a setar variaveis tipo string e numeros inteiros
*/
var nome = "Jeferson";
var x = 10;
var y = 20;
//alert(nome + " minha idade é: " + (x + y));

/*
	Escrever na pagina
*/
document.write("<h1> Teste de JavaScript</h1><hr/>");

/*
	Ações

*/

function atualizar(){
	window.location.href = window.location.href;
}
function atribuir()
{
	var alvo = document.getElementById('teste');
	var valor = prompt("Qual seu nome?");
	alvo.value = valor;
}

/*
	Mudar li pelo javascript
*/
function adicionarIngrediente(){
	var ing = document.getElementById("ingrediente").value;
	var listaAtual = document.getElementById("lista").innerHTML;
	listaAtual = listaAtual+"<li>"+ing+"</li>";
	document.getElementById("lista").innerHTML = listaAtual;

	//limpar campo
	document.getElementById("ingrediente").value = "";
}

/*
	Calculadora
*/
function calculadora(){
    
    var numero1 = document.getElementById("numero1").value; 
    var numero2 = document.getElementById("numero2").value;
    var valor = parseInt(document.getElementById("option").value);
    
    switch(valor){
     
       case 1: 
          var result = parseInt(numero1) + parseInt(numero2); 
      break;
      
       case 2: 
          var result = parseInt(numero1) - parseInt(numero2); 
       break;
       
       case 3:   
         var result = parseInt(numero1) / parseInt(numero2); 
       break;
       
       case 4:
         var result = parseInt(numero1) * parseInt(numero2);
         break;
  }
  
     document.getElementById("somaTotal").value = result; 
   
 }
function limp(){
	document.getElementById("somaTotal").value = "";
}

/* 
	Mudar css via javascript

*/

function mudarEstilo(){
	var obj = document.getElementById('id');
    	obj .setAttribute('class', 'meuestilo');//(meuestilo) é uma classe css
}