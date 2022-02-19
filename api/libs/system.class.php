<?php

use Carbon\Carbon;

class system
{
  public static function connectDataset()
  {
    $opt = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES => false,
    ];

    include("config.php");

    $db = "api";
    $dsn = "mysql:host=$host;dbname=$db;";
    $pdo = new PDO($dsn, $user, $pass, $opt);

    return $pdo;
  }

  public static function connectUserDataset($userDb)
  {
    $opt = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES => false,
    ];
    include("config.php");

    $db = "api_crm_dev";
    $dsn = "mysql:host=$host;dbname=$db;";
    $pdo = new PDO($dsn, $user, $pass, $opt);

    return $pdo;
  }

  public static function processHeaders()
  {
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
      header('Access-Control-Allow-Origin: *');
      header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS");
      header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers, Authorization');
      exit;
    }

    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  }

  public static function uuid()
  {
    return strtolower(sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535)));

  }

  public static function jwt($payload)
  {
    $secret = getenv('SECRET');
    $header = json_encode([
      'typ' => 'JWT',
      'alg' => 'HS256'
    ]);
    $base64UrlHeader = base64UrlEncode($header);
    $base64UrlPayload = base64UrlEncode(json_encode($payload));
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    $base64UrlSignature = base64UrlEncode($signature);
    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

    return $jwt;
  }

  public static function validateJwt($jwt)
  {

    $secret = getenv('SECRET');
    $tokenParts = explode('.', $jwt);
    $header = base64_decode($tokenParts[0]);
    $payload = base64_decode($tokenParts[1]);
    $signatureProvided = $tokenParts[2];
    $expiration = @Carbon::createFromTimestamp(json_decode($payload)->exp);
    $tokenExpired = (Carbon::now()->diffInSeconds($expiration, false) < 0);
    $base64UrlHeader = base64UrlEncode($header);
    $base64UrlPayload = base64UrlEncode($payload);
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    $base64UrlSignature = base64UrlEncode($signature);
    $signatureValid = ($base64UrlSignature === $signatureProvided);


    $result['header'] = json_decode($header);
    $result['payload'] = json_decode($payload);

    if ($tokenExpired) {
      $result['expired'] = true;
    } else {
      $result['expired'] = false;
    }

    if ($signatureValid) {
      $result['signatureValid'] = true;
    } else {
      $result['signatureValid'] = false;
    }
    return $result;
  }

  public static function getAuthorizationHeader()
  {
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
      $headers = trim($_SERVER["Authorization"]);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
      $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
      $requestHeaders = apache_request_headers();
      $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
      if (isset($requestHeaders['Authorization'])) {
        $headers = trim($requestHeaders['Authorization']);
      }
    }
    return $headers;
  }

  public static function getBearerToken()
  {
    $headers = system::getAuthorizationHeader();
    if (!empty($headers)) {
      if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
        return $matches[1];
      }
    }
    return null;
  }
  public static function getUserDb($pdo) {
    $origin = $_SERVER['HTTP_ORIGIN'];
    $origin = str_replace("https://", '', $origin);
    $origin = str_replace("http://", '', $origin);
    $origin = explode(":", $origin);
    $origin = explode(".", $origin[0]);
    $origin = $origin[0];

    $stmt = $pdo->prepare("SELECT `database` FROM `registrations` WHERE `hostname` = ? LIMIT 1");
    $stmt->execute([$origin]);
    $result = $stmt->fetch();

    return $result['database'];
  }
}

