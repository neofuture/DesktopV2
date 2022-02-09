<?php

class user
{

  public static function login($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);
    $stmt = $pdo->prepare("SELECT id,
                                  forename,
                                  surname
                             FROM contactManagerRecords WHERE (email = ? OR username =?) AND password = PASSWORD(?) AND allowLogin = 1 LIMIT 1");
    $stmt->execute([$jsonStr->username, $jsonStr->username, $jsonStr->password]);
    $result = $stmt->fetch();

    if(!$result){
      http_response_code(404);
      $status['error'] = '404 not found';
      $status['statusText'] = 'No such user/password combination';
    } else {

      $stmt = $pdo->prepare("UPDATE contactManagerRecords SET lastLogin = NOW() WHERE id = ?");
      $stmt->execute([$result['id']]);

      $payload = $result;
      $payload['exp'] = time() + (60 * 60 * 24 * 30);
      $status['token'] = system::jwt($payload);
    }



    // Create the Transport
    $transport = (new Swift_SmtpTransport('mail.carlfearby.co.uk', 25))
      ->setUsername('me@carlfearby.co.uk')
      ->setPassword('Vertinero2835!');

    // Create the Mailer using your created Transport
    $mailer = new Swift_Mailer($transport);

    // Create a message
    $message = new Swift_Message('Login Attempt');

    $messageContent = "<pre>".print_r($_SERVER, true)."</pre>";

    $message->setBody($messageContent, 'text/html')
      ->setFrom('me@carlfearby.co.uk')
      ->setTo("carlfearby@me.com");

    // Send the message
    $mailer->send($message);

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
