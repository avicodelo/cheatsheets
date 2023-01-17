
<?php

function spanishDaysOfTheWeek($dayOfTheWeek) {

    // $dayOfTheWeek = date("l");
    
    switch($dayOfTheWeek){
        case ("Monday"):
            $dayOfTheWeekES = "Lunes";
            break;
        case ("Tuesday"):            
            $dayOfTheWeekES = "Martes";
            break;
        case ("Wednesday"):
            $dayOfTheWeekES = "Miércoles";
            break;
        case ("Thursday"):            
            $dayOfTheWeekES = "Jueves";
            break;
        case ("Friday"):
            $dayOfTheWeekES = "Viernes";
            break;
        case ("Saturday"):
            $dayOfTheWeekES = "Sábado";
            break;
        case ("Sunday"):
            $dayOfTheWeekES = "Domingo";
            break;
      }

    return $dayOfTheWeekES;
}

$day = date('l');
$dayInSpanish = spanishDaysOfTheWeek($day);

//los globals muestran la información de la página: _GET, _POST, coockies...
print_r($GLOBALS);
?>

<html>
<head>
<title>Test Exercise</title>
<link rel="stylesheet" href="main.css">
</head>
<body>

<?php 
//importa un archivo 
require_once 'menu.php'; 
?>


<h1>Hola, Carlos</h1>
<p>Hoy es <strong><?php echo $dayInSpanish; ?></strong>. ¿Qué tal estás?</p>
</body>
</html>
