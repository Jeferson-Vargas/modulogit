<?php
if (empty($_POST['email']) == false) 
{
	$email = $_POST['email'];
	$senha = $_POST['senha'];
	if (empty($_POST['senha']) == false) {
		header("Location: index.php");

		echo "<h1>bem vindo: ".$email;
		echo " sua senha é: ".$senha."</h1>";
	} else
	{
		echo "senha errada";
	}
	

}
else
{
	echo ($_POST['email']);
}

?>