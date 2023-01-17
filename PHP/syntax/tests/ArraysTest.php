<?php 

//importar documentos con funcionalidad
use PHPUnit\Framework\TestCase;
use function PHPUnit\Framework\assertEquals;

//clase que no se puede ampliar (final) que extiende a TestCase
final class ArraysTest extends TestCase
{
    
    //void: indicar que no tiene return. Después de los dos puntos, se tipa el tipo de salida: string, number, void...
    public function testArrayIndexado1(): void
    {
        // Consigue la frase esperada utilizando índices del array y concatenación
        $seasons = ["Primavera", "Verano", "Otoño,", "Invierno"]; 
        $phrase = "La estación que más me gusta es el $seasons[1] y la que menos es el $seasons[3]";
        
        $expectedPhrase = "La estación que más me gusta es el Verano y la que menos es el Invierno";
        assertEquals($expectedPhrase, $phrase);
    }

    public function testArrayAsociativo(): void
    {
        // Consigue el email del usuario utilizando la clave del array
        $user = ['name' => 'Carlos', 'email' => 'carlos@correo.com', 'city' => 'Benalmádena']; 
        $userEmail = $user['email']; 

        assertEquals('carlos@correo.com', $userEmail);
    }

    public function testArrayMultidimensional(): void
    {
        // Consigue los datos que se piden en los asserts
        $users = [
          ['name' => 'Carlos', 'email' => 'carlos@correo.com', 'city' => 'Benalmádena'],
          ['name' => 'Carmen', 'email' => 'carmen@correo.com', 'city' => 'Fuengirola'],
          ['name' => 'Carmelo', 'email' => 'carmelo@correo.com', 'city' => 'Torremolinos'],
          ['name' => 'Carolina', 'email' => 'carolina@correo.com', 'city' => 'Málaga'],
        ]; 

        assertEquals('carlos@correo.com', $users[0]['email']);
        assertEquals('Torremolinos', $users[2]['city']);
        assertEquals('Carmen', $users[1]['name']);
    }

}