<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'artemburtovoy007@gmail.com';                 // Our login
$mail->Password = 'jarsucohalaganxz';                           // Our password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('artemburtovoy007@gmail.com', 'Majster-okien.pl');   // От кого письмо 
$mail->addAddress('salefob994@hempyl.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Formulaż ze strony';
$mail->Body    = '
		Użytkownik prosi o kontakt  <br> 
	Imię: ' . $name . ' <br>
	Numer telefonu: ' . $tel . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>