<?php

class example
{

  public static function test($pdo, $jsonStr, $session)
  {
    $token = system::getBearerToken();

    $status['token'] = system::validateJwt($token);

    $status['response'] = 'This was successful';
    $status['json'] = $jsonStr;
    return $status;
  }

  public static function success($pdo, $jsonStr, $session)
  {
    $token = system::getBearerToken();
    $tokenValidity = system::validateJwt($token);

    if ($tokenValidity['expired'] === false && $tokenValidity['signatureValid'] === true) {
      $status['response'] = 'This was successful';
      $status['json'] = $jsonStr;
    } else {
      $status['error'] = '403 forbidden';
      $status['statusText'] = 'Action is forbidden, Your token has expired';
      http_response_code(403);
    }
    return $status;
  }

  public static function badRequestError($pdo, $jsonStr, $session)
  {
    $status['error'] = '400 bad request';
    $status['statusText'] = 'This is an automatically generated error, generated in the back end API';
    http_response_code(400);
    return $status;
  }

  public static function notFoundError($pdo, $jsonStr, $session)
  {
    $status['error'] = '404 not found';
    $status['statusText'] = 'This is an automatically generated error, generated in the back end API';
    http_response_code(404);
    return $status;
  }

  public static function serverError($pdo, $jsonStr, $session)
  {
    $status['error'] = '500 internal server error';
    $status['statusText'] = 'This is an automatically generated error, generated in the back end API';
    http_response_code(500);
    return $status;
  }
}
