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

  public static function record($pdo, $jsonStr, $session) {
    $pdo = system::connectUserDataset('api_crm_dev');

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if($token['expired'] === false && $token['signatureValid'] === true){

      $sql = "INSERT INTO contactManagerRecords (title, forename, surname, address, address2, town, county, postcode, country, notes, jobTitle, department, work, fax, mobile, email, groupId, categoryId, statusId, typeId, website, division, company, accountNumber, username, password, allowLogin, added, updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";
      $stmt= $pdo->prepare($sql);
      $stmt->execute([$jsonStr->title, $jsonStr->forename, $jsonStr->surname, $jsonStr->address, $jsonStr->address2, $jsonStr->town, $jsonStr->county, $jsonStr->postcode, $jsonStr->country, $jsonStr->notes, $jsonStr->jobTitle, $jsonStr->department, $jsonStr->work, $jsonStr->fax, $jsonStr->mobile, $jsonStr->email, $jsonStr->group,$jsonStr->category, $jsonStr->status, $jsonStr->type, $jsonStr->website, $jsonStr->division, $jsonStr->company, $jsonStr->accountNumber, $jsonStr->username, $jsonStr->password, $jsonStr->allowLogin]);


      //        title, forename, surname, address, address2, town, county, postcode, country, notes, jobTitle, department, work, fax, mobile, email, group, category, status, type, website, division, company, accountNumber, username, password, allowLogin


      //$jsonStr->title, $jsonStr->forename, $jsonStr->surname, $jsonStr->address, $jsonStr->address2, $jsonStr->town, $jsonStr->county, $jsonStr->postcode, $jsonStr->country, $jsonStr->notes, $jsonStr->jobTitle, $jsonStr->department, $jsonStr->work, $jsonStr->fax, $jsonStr->mobile, $jsonStr->email, $jsonStr->group,$jsonStr->category, $jsonStr->status, $jsonStr->type, $jsonStr->website, $jsonStr->division, $jsonStr->company, $jsonStr->accountNumber, $jsonStr->username, $jsonStr->password, $jsonStr->allowLogin


      $status['method'] = $_SERVER['REQUEST_METHOD'];
      $status['json'] = $jsonStr;
      return $status;
    }
  }
}
