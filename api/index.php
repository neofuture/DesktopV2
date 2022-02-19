<?php
require 'vendor/autoload.php';
use Dotenv\Dotenv;

$dotenv = new DotEnv(__DIR__);
$dotenv->load();

$GLOBALS['base'] = __DIR__;

include("./libs/system.class.php");

ini_set('max_execution_time', 0);
ini_set("memory_limit", '20000M');
ini_set('max_execution_time', 60);

$session = '';
$headers = '';

system::processHeaders();

$pdo = system::connectDataset();
$jsonStr = json_decode(file_get_contents('php://input'));
$uri = explode("/", trim(explode("?", $_SERVER['REQUEST_URI'])[0], '/'));

$userDatabase = system::getUserDb($pdo);

$session = $userDatabase;

if($uri[0] === 'v1'){

  include("./libs/v1/user.class.php");
  include("./libs/v1/example.class.php");
  include("./libs/v1/postcodes.class.php");

  include("./libs/v1/contact-manager.class.php");

  if(!$uri[1]) {
    $status['error'] = "Empty Request";
    echo json_encode($status);
    exit;
  }

  if (!class_exists($uri[1])) {
    $status['error'] = '405 class not found';
    $status['statusText'] = 'The class requested does not exist';
    http_response_code(405);
    echo json_encode($status);
    exit;
  }

  if (!method_exists($uri[1], $uri[2])) {
    $status['error'] = '405 method not found';
    $status['statusText'] = 'The method requested does not exist';
    http_response_code(405);
    echo json_encode($status);
    exit;
  }

  $status = call_user_func($uri[1] . "::" . strtolower($uri[2]), $pdo, $jsonStr, $session);
  echo json_encode($status);

  // Create the Transport
  $transport = (new Swift_SmtpTransport('mail.carlfearby.co.uk', 25))
    ->setUsername('me@carlfearby.co.uk')
    ->setPassword('Vertinero2835!');

// Create the Mailer using your created Transport
  $mailer = new Swift_Mailer($transport);

// Create a message
  $message = new Swift_Message('API ACCESSED');

  $messageContent = "<pre>".print_r($_SERVER, true)."</pre>";

  $message->setBody($messageContent, 'text/html')
    ->setFrom('me@carlfearby.co.uk')
    ->setTo("carlfearby@me.com");

// Send the message
  $mailer->send($message);

} else {
  $status['error'] = 'Version Unsupported';
  echo json_encode($status);
}

function base64UrlEncode($text)
{
  return str_replace(
    ['+', '/', '='],
    ['-', '_', ''],
    base64_encode($text)
  );
}
