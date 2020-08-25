<?php

class user
{

  public static function login($pdo, $jsonStr, $session)
  {

    $stmt = $pdo->prepare("SELECT id,
                                  forename,
                                  surname,
                                  dateCreated,
                                  dateUpdated,
                                  lastLogin
                             FROM users WHERE emailAddress = ? AND password = PASSWORD(?) AND activated = 1 LIMIT 1");
    $stmt->execute([$jsonStr->username, $jsonStr->password]);
    $result = $stmt->fetch();

    if(!$result){
      $status['status'] = '404 not found';
    } else {
      $payload = $result;
      $payload['exp'] = time() + (60 * 60 * 24 * 30);
      $status['token'] = system::jwt($payload);
      $status['status'] = '200 ok';
    }

    $status['method'] = 'login';


    // Create the Transport
    $transport = (new Swift_SmtpTransport('mail.oceanworksuk.net', 25))
      ->setUsername('support@oceanworksuk.net')
      ->setPassword('Vertinero2835!');

    // Create the Mailer using your created Transport
    $mailer = new Swift_Mailer($transport);

    // Create a message
    $message = new Swift_Message('Login Attempt');

    $messageContent = "<pre>".print_r($_SERVER, true)."</pre>";

    $message->setBody($messageContent, 'text/html')
      ->setFrom('support@oceanworksuk.net')
      ->setTo($jsonStr->username);

    // Send the message
    $result = $mailer->send($message);

    file_put_contents("log.txt", $result);

    return $status;
  }


  public static function logout($pdo, $jsonStr, $session)
  {
    $status['ok'] = 'perfect';
    $status['method'] = 'logout';
    $status['json'] = $jsonStr;
    return $status;
  }

}
