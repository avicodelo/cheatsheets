<?php

$option = "A";

switch($optionId){
  case ("A"):
    $optionText = "Leer menú";
    break;
  case ("B"):
    $optionText = "Editar menú";
    break;
  case ("C"):
    $optionText = "Eliminar menú";
    break;
  default:
    $optionText = "Opción no disponible";
    break;
}