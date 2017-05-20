<?php


if (empty($_POST['nombre']) || empty($_POST['apellido']) || empty($_POST['correo'])  || empty($_POST['telefono'])  || empty($_POST['mensaje'])  )
{
    header('Location: contacto.html') ;
    return ;
    exit ;
}
else
{
        $nombre   = $_POST['nombre'] ;
        $apellido = $_POST['apellido'] ;
        $email     = $_POST['correo'] ;
        $telefono  = $_POST['telefono'] ;
        $mensaje   = $_POST['mensaje'] ;



        $nombre = $nombre . " " . $apellido ;

        $to      = 'ventas@dulcinita.pe';
        // $to      = 'webmaster@lifedigital.pe';
        $subject = "Consulta desde la página web";

        /*$nombres = "" ;
        $email = "webmaster@lifedigital.pe" ;
        $telefono = "" ;
        $mensaje = "holaslasllas " ;*/

        $message = "
            <html>
            <head>
            <title>Dulcinita</title>
            </head>
            <body>
                <h3>Solicitud de Información </h3>
                <p> <strong> Nombres :</strong> $nombre </p>
                <p> <strong> Email :</strong> $email </p>
                <p> <strong> Telefono :</strong> $telefono </p>
                <p> <strong> Mensaje :</strong> $mensaje </p>
            </body>
            </html>
        ";



        // print_r($message );

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: Dulcinita <webmaster@dulcinita.pe>' . "\r\n";
        $headers .= 'Cc:   alopezyovera@gmail.com' . "\r\n";
        $headers .= 'Cc:   rruiz@lifedigital.pe' . "\r\n";
        $headers .= 'Bcc: webmaster@dulcinita.pe' . "\r\n";
        // $headers .= 'Bcc: rruiz@lifedigital.pe' . "\r\n";
        $rpt = mail($to,$subject,$message,$headers);

            header('Location: contacto.html');
}