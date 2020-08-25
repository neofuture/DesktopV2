<?php

class example
{

  public static function test($pdo, $jsonStr, $session) {

    $token = system::getBearerToken();

    $status['token'] = system::validateJwt($token);

    $status['status'] = '200 ok';
    $status['method'] = 'test';
    $status['json'] = $jsonStr;
    return $status;
  }
}
