<?php

class contactManager
{
  public static function init($pdo, $jsonStr, $session) {
    $pdo = system::connectUserDataset('api_crm_dev');

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if($token['expired'] === false && $token['signatureValid'] === true){

      $stmt = $pdo->prepare("SELECT * FROM contactManagerCategories ORDER by sortOrder");
      $stmt->execute();
      $categories = $stmt->fetchAll();

      foreach($categories as $cat=>$catVal){
        $categories[$cat]['colours'] = json_decode($categories[$cat]['colours']);

        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ?";
        $stmt= $pdo->prepare($sql);
        $stmt->execute([$categories[$cat]['id']]);
        $count = $stmt->fetch();
        $categories[$cat]['count'] = $count['count'];
      }

      $stmt = $pdo->prepare("SELECT * FROM contactManagerGroups ORDER by sortOrder");
      $stmt->execute();
      $groups = $stmt->fetchAll();

      $stmt = $pdo->prepare("SELECT * FROM contactManagerStatus ORDER by sortOrder");
      $stmt->execute();
      $status = $stmt->fetchAll();

      $stmt = $pdo->prepare("SELECT * FROM contactManagerTypes ORDER by sortOrder");
      $stmt->execute();
      $types = $stmt->fetchAll();

      $return['categories'] = $categories;
      $return['groups'] = $groups;
      $return['status'] = $status;
      $return['types'] = $types;
    }
    return $return;
  }

  public static function setRecord($pdo, $jsonStr, $session) {
    $pdo = system::connectUserDataset('api_crm_dev');

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if($token['expired'] === false && $token['signatureValid'] === true){

      $sql = "INSERT INTO contactManagerRecords (title, forename, surname, address, address2, town, county, postcode, country, notes, jobTitle, department, work, fax, mobile, email, `group`, category, status, type, website, division, company, accountNumber, username, password, allowLogin, added, updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";
      $stmt= $pdo->prepare($sql);
      $stmt->execute([$jsonStr->title, $jsonStr->forename, $jsonStr->surname, $jsonStr->address, $jsonStr->address2, $jsonStr->town, $jsonStr->county, $jsonStr->postcode, $jsonStr->country, $jsonStr->notes, $jsonStr->jobTitle, $jsonStr->department, $jsonStr->work, $jsonStr->fax, $jsonStr->mobile, $jsonStr->email, $jsonStr->group,$jsonStr->category, $jsonStr->status, $jsonStr->type, $jsonStr->website, $jsonStr->division, $jsonStr->company, $jsonStr->accountNumber, $jsonStr->username, $jsonStr->password, $jsonStr->allowLogin]);

      $status['method'] = $_SERVER['REQUEST_METHOD'];
      $status['json'] = $jsonStr;
      return $status;
    }
  }

  public static function getRecord($pdo, $jsonStr, $session) {
    $pdo = system::connectUserDataset('api_crm_dev');

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if($token['expired'] === false && $token['signatureValid'] === true){
      $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ?";
      $stmt= $pdo->prepare($sql);
      $stmt->execute([$jsonStr->category]);
      $count = $stmt->fetch();

      $return['totalRecords'] = $count['count'];
      $return['id'] = 0;
      if($count>0){
        $sql = "SELECT id, title, forename, surname, address, address2, town, county, postcode, country, notes, jobTitle, department, work, fax, mobile, email, `group`, category, status, type, website, division, company, accountNumber, username, allowLogin, added, updated FROM contactManagerRecords WHERE category = ? ORDER BY company, surname, forename LIMIT ?, 1";
        $stmt= $pdo->prepare($sql);
        $stmt->execute([$jsonStr->category, $jsonStr->recordIndex - 1, ]);
        $record = $stmt->fetch();

        if($record){
          $record['added'] = date(DATE_ATOM, strtotime($record['added']));
          $record['updated'] = date(DATE_ATOM, strtotime($record['updated']));
        }

        $return['record'] = $record;
        $return['id'] = $record['id'];
      }

      return $return;
    }
  }
}
