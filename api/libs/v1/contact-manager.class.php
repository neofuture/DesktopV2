<?php

class contactManager
{

  public static function init($pdo, $jsonStr, $session)
  {

    $pdo = system::connectUserDataset($session);
    $token = system::getBearerToken();

    $token = system::validateJwt($token);

    if ($token['expired'] === false && $token['signatureValid'] === true) {

      $stmt = $pdo->prepare("SELECT * FROM contactManagerCategories ORDER by sortOrder");
      $stmt->execute();
      $categories = $stmt->fetchAll();

      foreach ($categories as $cat => $catVal) {
        $categories[$cat]['colours'] = json_decode($categories[$cat]['colours']);

        if ($jsonStr->recordType === 1) {
          $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ?";
          $stmt = $pdo->prepare($sql);
          $stmt->execute([$categories[$cat]['id'], $jsonStr->recordType]);
        }

        if ($jsonStr->recordType === 2) {
          $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ? AND addedBy = ?";
          $stmt = $pdo->prepare($sql);
          $stmt->execute([$categories[$cat]['id'], $jsonStr->recordType, $token['payload']->id]);
        }

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

  public static function getSettings($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);

    if ($token['expired'] === false && $token['signatureValid'] === true) {

      $stmt = $pdo->prepare("SELECT * FROM contactManagerCategories WHERE typeId = 1 ORDER by sortOrder");
      $stmt->execute();
      $categories1 = $stmt->fetchAll();

      foreach ($categories1 as $key => $val) {
        $categories1[$key]['colours'] = json_decode($categories1[$key]['colours']);

        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$categories1[$key]['id']]);
        $count = $stmt->fetch();

        $categories1[$key]['count'] = $count['count'];
      }


      $stmt = $pdo->prepare("SELECT * FROM contactManagerCategories WHERE typeId = 2 ORDER by sortOrder");
      $stmt->execute();
      $categories2 = $stmt->fetchAll();

      foreach ($categories2 as $key => $val) {
        $categories2[$key]['colours'] = json_decode($categories2[$key]['colours']);

        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$categories2[$key]['id']]);
        $count = $stmt->fetch();

        $categories2[$key]['count'] = $count['count'];
      }

      $stmt = $pdo->prepare("SELECT * FROM contactManagerGroups ORDER by sortOrder");
      $stmt->execute();
      $groups = $stmt->fetchAll();

      foreach ($groups as $key => $val) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE `group` = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$groups[$key]['id']]);
        $count = $stmt->fetch();

        $groups[$key]['count'] = $count['count'];
      }


      $stmt = $pdo->prepare("SELECT * FROM contactManagerStatus ORDER by sortOrder");
      $stmt->execute();
      $status = $stmt->fetchAll();

      foreach ($status as $key => $val) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE status = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$status[$key]['id']]);
        $count = $stmt->fetch();

        $status[$key]['count'] = $count['count'];
      }

      $stmt = $pdo->prepare("SELECT * FROM contactManagerTypes ORDER by sortOrder");
      $stmt->execute();
      $types = $stmt->fetchAll();

      foreach ($types as $key => $val) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE type = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$types[$key]['id']]);
        $count = $stmt->fetch();

        $types[$key]['count'] = $count['count'];
      }

      $return['categories1'] = $categories1;
      $return['categories2'] = $categories2;
      $return['groups'] = $groups;
      $return['status'] = $status;
      $return['types'] = $types;
    }

    return $return;
  }

  public static function setRecord($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {
      if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $sql = "INSERT INTO contactManagerRecords (recordType, title, forename, surname, address, address2, town, county, postcode, country, jobTitle, department, work, fax, mobile, email, `group`, category, status, type, website, company, accountNumber, username, password, allowLogin, added, updated, addedBy, updatedBy, addedByName, updatedByName) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, PASSWORD(?), ?, NOW(), NOW(), ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->recordType, $jsonStr->title, $jsonStr->forename, $jsonStr->surname, $jsonStr->address, $jsonStr->address2, $jsonStr->town, $jsonStr->county, $jsonStr->postcode, $jsonStr->country, $jsonStr->jobTitle, $jsonStr->department, $jsonStr->work, $jsonStr->fax, $jsonStr->mobile, $jsonStr->email, $jsonStr->group, $jsonStr->category, $jsonStr->status, $jsonStr->type, $jsonStr->website, $jsonStr->company, $jsonStr->accountNumber, $jsonStr->username, $jsonStr->password, $jsonStr->allowLogin, $token['payload']->id, $token['payload']->id, $token['payload']->forename . ' ' . $token['payload']->surname, $token['payload']->forename . ' ' . $token['payload']->surname]);

        $stmt = $pdo->query("SELECT LAST_INSERT_ID()");
        $id = $stmt->fetchColumn();

      }

      if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $sql = "UPDATE contactManagerRecords SET recordType = ?, title = ?, forename = ?, surname = ?, address = ?, address2 = ?, town = ?, county = ?, postcode = ?, country = ?, jobTitle = ?, department = ?, work = ?, fax = ?, mobile = ?, email = ?, `group` = ?, category = ?, status = ?, type = ?, website = ?, company = ?, accountNumber = ?, username = ?, password = PASSWORD(?), allowLogin = ?, updated = NOW(), updatedBy = ?, updatedByName  = ? WHERE id= ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->recordType, $jsonStr->title, $jsonStr->forename, $jsonStr->surname, $jsonStr->address, $jsonStr->address2, $jsonStr->town, $jsonStr->county, $jsonStr->postcode, $jsonStr->country, $jsonStr->jobTitle, $jsonStr->department, $jsonStr->work, $jsonStr->fax, $jsonStr->mobile, $jsonStr->email, $jsonStr->group, $jsonStr->category, $jsonStr->status, $jsonStr->type, $jsonStr->website, $jsonStr->company, $jsonStr->accountNumber, $jsonStr->username, $jsonStr->password, $jsonStr->allowLogin, $token['payload']->id, $token['payload']->forename . ' ' . $token['payload']->surname, $jsonStr->id]);

        $id = $jsonStr->id;
      }

      $index = contactManager::getRecordIndex($pdo, $jsonStr, $id);

      if ($jsonStr->recordType === 1) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->category, $jsonStr->recordType]);
      }

      if ($jsonStr->recordType === 2) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ? AND addedBy = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->category, $jsonStr->recordType, $token['payload']->id]);
      }

      $count = $stmt->fetch();
      $status['category'] = $jsonStr->category;
      $status['title1'] = $jsonStr->forename . ' ' . $jsonStr->surname;
      $status['title2'] = $jsonStr->company;
      $status['totalRecords'] = $count['count'];
      $status['status'] = 'ok';
      $status['index'] = $index;
      return $status;
    }
  }

  public static function deleteRecord($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {


      $sql = "SELECT category, recordType FROM contactManagerRecords WHERE id = ?";
      $stmt = $pdo->prepare($sql);
      $stmt->execute([$jsonStr->id]);
      $record = $stmt->fetch();

      $sql = "DELETE FROM contactManagerRecords WHERE id = ?";
      $stmt = $pdo->prepare($sql);
      $stmt->execute([$jsonStr->id]);


      if ($record['recordType'] === 1) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$record['category'], $record['recordType']]);
      }

      if ($record['recordType'] === 2) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ? AND addedBy = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$record['category'], $record['recordType'], $token['payload']->id]);
      }

      $count = $stmt->fetch();
      $status['totalRecords'] = $count['count'];

      return $status;
    }
  }

  public static function getRecordIndex($pdo, $jsonStr, $id)
  {
    $sql = "SELECT COUNT(*) FROM contactManagerRecords WHERE category = ? AND recordType = ? AND id < ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$jsonStr->category, $jsonStr->recordType, $id]);
    $index = $stmt->fetchColumn();
    return $index + 1;
  }

  public static function saveObject($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {

      $table_map = array(
        'Category' => 'contactManagerCategories',
        'Type' => 'contactManagerTypes',
        'Group' => 'contactManagerGroups',
        'Status' => 'contactManagerStatus'
      );

      $table = $table_map[$jsonStr->object];

      if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        if ($jsonStr->object === 'Category') {
          $sql = "SELECT sortOrder FROM " . $table . " WHERE typeId = ? ORDER BY sortOrder DESC LIMIT 1";
          $stmt = $pdo->prepare($sql);
          $stmt->execute([$jsonStr->typeId]);
          $result = $stmt->fetch();

          $sql = 'INSERT INTO ' . $table . ' (`name`, `defaultOption`, `colours`, `editable`, `sortOrder`, `typeId`) VALUES (?, 0, ?, 1, ?, ?)';
          $stmt = $pdo->prepare($sql);
          $result['sortOrder'] = $result['sortOrder'] + 1;
          $stmt->execute([$jsonStr->name, json_encode($jsonStr->colours), $result['sortOrder'], $jsonStr->typeId]);
        } else {
          $sql = "SELECT sortOrder FROM " . $table . " ORDER BY sortOrder DESC LIMIT 1";
          $stmt = $pdo->prepare($sql);
          $stmt->execute();
          $result = $stmt->fetch();

          $sql = 'INSERT INTO ' . $table . ' (`name`, `defaultOption`, `editable`, `sortOrder`) VALUES (?, 0, 1, ?)';
          $stmt = $pdo->prepare($sql);
          $result['sortOrder'] = $result['sortOrder'] + 1;
          $stmt->execute([$jsonStr->name, $result['sortOrder']]);
        }
      }

      if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $sql = 'UPDATE ' . $table . ' SET name = ?, colours = ?  WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->name, json_encode($jsonStr->colours), $jsonStr->id]);
      }

      $status['status'] = 'ok';
      return $status;
    }
  }

  public static function deleteObject($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {
      $status['request'] = $_SERVER['REQUEST_METHOD'];
      if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

        $table_map = array(
          'Category' => 'contactManagerCategories',
          'Type' => 'contactManagerTypes',
          'Group' => 'contactManagerGroups',
          'Status' => 'contactManagerStatus'
        );

        $table = $table_map[$_GET['object']];

        $sql = 'DELETE FROM ' . $table . ' WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$_GET['id']]);


      }
      $status['status'] = 'ok';
      return $status;
    }
  }

  public static function setObjectOrder($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {
      $table_map = array(
        'Category' => 'contactManagerCategories',
        'Type' => 'contactManagerTypes',
        'Group' => 'contactManagerGroups',
        'Status' => 'contactManagerStatus'
      );

      $table = $table_map[$jsonStr->object];

      foreach ($jsonStr->order as $key => $value) {
        $sql = 'UPDATE ' . $table . ' SET sortOrder = ?  WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$key + 1, $value]);

      }

      $status['status'] = 'ok';
      return $status;
    }
  }

  public static function getRecord($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {


      if ($jsonStr->recordType === 1) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->category, $jsonStr->recordType]);
      }

      if ($jsonStr->recordType === 2) {
        $sql = "SELECT count(*) as count FROM contactManagerRecords WHERE category = ? AND recordType = ? AND addedBy = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->category, $jsonStr->recordType, $token['payload']->id]);
      }

      $count = $stmt->fetch();

      $return['totalRecords'] = $count['count'];
      $return['id'] = 0;
      if ($count > 0) {
        if ($jsonStr->recordType === 1) {
          $sql = "SELECT * FROM contactManagerRecords WHERE category = ? AND recordType = ? ORDER BY company, surname, forename LIMIT ?, 1";
          $stmt = $pdo->prepare($sql);
          $stmt->execute([$jsonStr->category, $jsonStr->recordType, $jsonStr->recordIndex - 1]);
        }
        if ($jsonStr->recordType === 2) {
          $sql = "SELECT * FROM contactManagerRecords WHERE category = ? AND recordType = ?  AND addedBy = ? ORDER BY company, surname, forename LIMIT ?, 1";
          $stmt = $pdo->prepare($sql);
          $stmt->execute([$jsonStr->category, $jsonStr->recordType, $token['payload']->id, $jsonStr->recordIndex - 1]);
        }
        $record = $stmt->fetch();

        if ($record) {
          $record['added'] = date(DATE_ATOM, strtotime($record['added']));
          $record['updated'] = date(DATE_ATOM, strtotime($record['updated']));
          $record['lastLogin'] = date(DATE_ATOM, strtotime($record['lastLogin']));
          if ($record['password'] === '*06F9E801FB5F7E5A43762DCC13D994656B962B1A') {
            $record['password'] = '';
          }
          if (strlen($record['password']) > 0) {
            $record['password'] = 'secret';
          }
        }

        $return['record'] = $record;
//        $return['id'] = $record['id'];
      }

      return $return;
    }
  }

  public static function realTimeSearch($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {
      if ($jsonStr->recordType === 1) {
        $sql = "SELECT id, forename, surname, company, category FROM contactManagerRecords WHERE recordType = ? AND (forename LIKE ? OR surname LIKE ? OR company LIKE ? OR address LIKE ? OR address2 LIKE ? OR town LIKE ? OR county LIKE ? OR company LIKE ? OR work LIKE ? OR mobile LIKE ? OR website LIKE ? OR email LIKE ? OR accountNumber LIKE ? OR mobile LIKE ? OR postcode LIKE ?) ORDER BY company, surname, forename LIMIT 10";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->recordType, '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%']);
        $records = $stmt->fetchAll();
      }
      if ($jsonStr->recordType === 2) {
        $sql = "SELECT id, forename, surname, company, category FROM contactManagerRecords WHERE recordType = ? AND (forename LIKE ? OR surname LIKE ? OR company LIKE ? OR address LIKE ? OR address2 LIKE ? OR town LIKE ? OR county LIKE ? OR company LIKE ? OR work LIKE ? OR mobile LIKE ? OR website LIKE ? OR email LIKE ? OR accountNumber LIKE ? OR mobile LIKE ? OR postcode LIKE ?) AND addedBy = ? ORDER BY company, surname, forename LIMIT 10";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$jsonStr->recordType, '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', '%' . $jsonStr->term . '%', $token['payload']->id]);
        $records = $stmt->fetchAll();
      }

      return $records;
    }
  }

  public static function setDefault($pdo, $jsonStr, $session)
  {
    $pdo = system::connectUserDataset($session);

    $token = system::getBearerToken();

    $token = system::validateJwt($token);
    if ($token['expired'] === false && $token['signatureValid'] === true) {
      $table_map = array(
        'Category' => 'contactManagerCategories',
        'Type' => 'contactManagerTypes',
        'Group' => 'contactManagerGroups',
        'Status' => 'contactManagerStatus'
      );

      $table = $table_map[$jsonStr->object];

      $sql = "UPDATE " . $table . " SET defaultOption = 0 ";
      $stmt = $pdo->prepare($sql);
      $stmt->execute();

      $sql = "UPDATE " . $table . " SET defaultOption = 1 WHERE id = ? ";
      $stmt = $pdo->prepare($sql);
      $stmt->execute([$jsonStr->id]);

    }
  }

}
