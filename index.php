<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="estilo.css" />
    <!-- <script src="main.js"></script> -->
</head>
<body>
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

	?>
	<hr/>
	<form class="formulario" method="POST">
		<input type="text" name="email" placeholder="email..."></br></br>
		<input type="password" name="senha" placeholder="senha..."></br></br>
		<input type="submit" value="Enviar Dados">
	</form>
	<div class="teste">
		<form class="formulario" method="POST">
		<input type="text" name="texto" />
		</form>	
	</div>
</body>
</html>