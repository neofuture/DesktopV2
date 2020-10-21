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
    $status['error'] = "Class does not exist";
    echo json_encode($status);
    exit;
  }

  if (!method_exists($uri[1], $uri[2])) {
    $status['error'] = "Class Method does not exist";
    echo json_encode($status);
    exit;
  }

  $status = call_user_func($uri[1] . "::" . strtolower($uri[2]), $pdo, $jsonStr, $session);
  echo json_encode($status);
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
