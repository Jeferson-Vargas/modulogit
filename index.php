<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Page Title</title>
    <link rel="stylesheet" href="estilo.css" />
    <script type="text/javascript" src="script.js"></script>
</head>
<body onload="iniciar()">
<?php
		if (empty($_POST['email']) == false) 
		{
			if (empty($_POST['senha']) == false) 
			{

				$email = $_POST['email'];
				$senha = $_POST['senha'];

                echo "<h1>bem vindo: ".$email;
				echo " sua senha é: ".$senha."</h1>";
			} 
			else
			{
				echo "Informe sua senha.";
			}
		}
		else
		{
			echo "Informe seu email.";
		}
		//header("Location: index.php");
	?>
	<hr/>
	<div class="container">
		<div class="formulario">
			<form method="POST">
				<input type="text" name="email" placeholder="email..." required="email"></br></br>
				<input type="password" name="senha" placeholder="senha..." required="senha"></br></br>
				<input type="submit" value="Enviar Dados">
			</form>
		</div>
	</div>
	<div class="area">
		<div class="botao">
			<button onclick="atualizar()">Atualizar</button>
		</div>
	</div>

	<hr/>
	<h1>Atribuir valor via javascript</h1>
	<input type="text" id="teste"></br></br>
	<button id="Inserir" onclick="atribuir()">Inserir</button>
	<hr/>

	<h1>Alterar lista pelo javascript!</h1>

	<input type="text" id="ingrediente" />

	<button onclick="adicionarIngrediente()">Adicionar</button></br>

	<ul id="lista">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
	<hr/>
	<div class="areaCalc">
		<div class="calculadora">
			<fieldset>
           		<legend>Calculadora Simples</legend>
				<h2>Escolha o tipo de Operação: </h2>
              	<select id="option" onchange="mudaOperacao(this)">
                	<option value="1" selected="selected"> Somar </option >
                	<option value="2"> Subtrair </option >
                	<option value="3"> Dividir </option >
                	<option value="4"> Multiplicar </option >
               	</select>
               	<br/><br/>
               
               	<input type="text" name="numero" id="numero1"><br/>
               	
                <input type="text" name="operacao" id="opera" disabled /><br/>
               	
                <input type="text" name="numero" id="numero2"><br/><br/>

                 Total: <input type="text" id="somaTotal" class="formtTotal" disabled /> 

                <button type="button" onclick="calculadora()">enviar</button>
                <button type="reset" onclick="limp()">Limpar</button><br/><br/>
			</fieldset>
		</div>
	</div>
	<br/>
	<hr/>
	<h1>Estoura balões</h1>
	<div class="parkContent" >
		<div class="parkMold">
			<div id="parque" class="parque" >
				
			</div>

		</div>

	</div>
	<div class="ponto"><input type="text" value="0" id="pontuacao"/></div>

</body>
</html>