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

function mudaOperacao(objeto) {
	var valor = parseInt(objeto.value);
	switch(valor){
     
       case 1: 
          
         document.getElementById("opera").value = "+";
      break;
      
       case 2: 
          
          document.getElementById("opera").value = "-";
       break;
       
       case 3:   
         
         document.getElementById("opera").value = "/";
       break;
       
       case 4:
         
         document.getElementById("opera").value = "X";
         break;
  }
}

/*
	Caça balão
*/

function addBola() {

	var el = document.getElementById('parque');
    var coordenadas = el.getBoundingClientRect();
    var resLeft = coordenadas.left;
    var resTop = coordenadas.top;
    //alert (resLeft);

    var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	var p1 = Math.floor(Math.random() * 400);
	var p2 = Math.floor(Math.random() * 280);
	bola.setAttribute("style", "left:"+(resLeft+p1)+"px; top:"+(resTop+p2)+"px;");
	bola.setAttribute("onclick", "estourar(this)");

	document.getElementById('parque').appendChild(bola);

	if (parseInt(document.getElementById("pontuacao").value) == 5) {
		window.clearInterval(Intervalo);
		alert("Você venceu!!");

	}
}

function estourar(elemento) {
	document.getElementById("pontuacao").value = parseInt(document.getElementById("pontuacao").value)+1;
	document.getElementById('parque').removeChild(elemento);
	

}
var Intervalo;

function iniciar(){

    Intervalo = window.setInterval(addBola, 1000);

}

