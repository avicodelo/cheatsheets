<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
    
</head>

<body>

    <?php require_once 'menu.php'; ?>

<table>
<tr>
<th>Name</th>
<th>Email</th>
<th>Age</th>
<th>City</th>
</tr>
<?php 
    
$people = [
    ['name' => 'Carlos', 'email' => 'carlos@correo.com', 'age' => 20, 'city' => 'Benalmádena'],
    ['name' => 'Carmen', 'email' => 'carmen@correo.com', 'age' => 15, 'city' => 'Fuengirola'],
    ['name' => 'Carmelo', 'email' => 'carmelo@correo.com', 'age' => 17, 'city' => 'Torremolinos'],
    ['name' => 'Carolina', 'email' => 'carolina@correo.com', 'age' => 18, 'city' => 'Málaga'],
  ]; 



  foreach ($people as $value) {
    echo "<tr>
    <td>$value[name]</td>
    <td>$value[email]</td>
    <td>$value[age]</td>
    <td>$value[city]</td>
</tr>";
  }


?>

</table>

    
<script src="./main.js"></script>
</body>
</html>