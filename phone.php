<?php

	$server = $_SERVER['HTTP_HOST'];
	$name = $_POST['name'];
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (empty($phone))
	{
		echo "I can not send!";
		exit;
	}
	
	$success_url = 'index.html?succes'; 

	
	$mail_header = "MIME-Version: 1.0\r\n";
	$mail_header.= "Content-type: text/html; charset=UTF-8\r\n";
	$mail_header.= "From: Тема <informer@$server>\r\n";
	$mail_header.= "Reply-to: Reply to Name <reply@$server>\r\n";
	
	$to = "svetodizain2@yandex.ru"; //заменить почту на свою
	$subject = "Заявка с сайта: $server";
	
				$message = "<strong>Имя:</strong> $phone<br><br> 
				<strong>Телефон:</strong> $phone<br><br> 

				
	<br><strong>Время письма:</strong> ".date("d.m.Y H:i:s")."";
	if (mail($to,$subject,$message,$mail_header))
	header('Location: '. 'thanks.html');
	else echo 'Oshibka otpravki - otklyuchena funkciya (php mail). Obratites v podderzhku xostinga';


		?>