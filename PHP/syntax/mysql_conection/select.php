<?php

$server = 'localhost';
$user = 'user';
$password = 'pass';
$database = 'basededatos';

try {
  $conn = new PDO("mysql:host=$server; dbname=$database", $user, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $conn->prepare("SELECT * FROM productos");
  $stmt->execute();

  $stmt->setFetchMode(PDO::FETCH_ASSOC);
  $results = $stmt -> fetchAll();
  foreach($results as $result) {
    print_r($result);
  }
} catch(PDOException $e) {
    echo "Error: " . $sql . "<br>" . $e->getMessage();
}

// Una vez terminado, cerramos la conexión
$conn = null;