<<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="estilo.css" />
    <!-- <script src="main.js"></script> -->
</head>
<body>
<?php
    if (isset($_POST['nome']))
    {
        echo "enviado";
    }
    else {
        echo "nao enviado";
    }
?>
<form method="POST">
    <input type="text" name="nome" placeholder="Nome..." />
    <input type="submit" valor="Enviar" />
    </form>
    
</body>
</html>