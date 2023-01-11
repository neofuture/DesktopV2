<?php
ini_set('max_execution_time', '0');
$lang["ru"] = "langRu";
$lang["de"] = "langDe";
$lang["nl"] = "langNl";
$lang["fr"] = "langFr";
$lang["es"] = "langEs";
$lang["it"] = "langIt";
$lang["da"] = "langDa";
$lang["sv"] = "langSv";
$lang["no"] = "langNo";
$lang["pt"] = "langPt";
$lang["fi"] = "langFi";
$lang["zh"] = "langZh";
$lang["pl"] = "langPl";

$english = file_get_contents("../src/app/modules/application/config/locales/langEn.ts");

$object = explode("= {", $english, 2)[1];
$object = trim(trim($object), "};");
$object = explode("\n", $object);

foreach ($lang as $key => $val) {
  $file = ("import {LanguageModel} from '../language-model';\n");
  $file .= ("\n");
//  $file =("// tslint:disable-next-line:variable-name\n");
  $file .= ("export const " . $val . ": LanguageModel = {\n");
  $file .= ("  ");
  foreach ($object as $row) {

    if (strpos($row, '{') !== false or strpos($row, '}') !== false or strpos($row, "// safe") !== false) {
      $file .= ($row . "\n");
    } else {
      $items = explode(": ", $row);
      echo ".";
      $string = trim(trim($items[1], "'"), "',");
      if ($string === "mm" or $string === "cm" or $string === "m<sup>2</sup>" or $string === "English" or @in_array(trim($items[0]), $lang)) {
        $text = $string;
      } elseif (strpos(trim($items[0]), 'language') === 0) {
        $text = $val;
      } else {
        if (is_file('./translations/' . $key . "_" . remove_bs($string))) {
          $text = file_get_contents('./translations/' . $key . "_" . remove_bs($string));
        } else {
          $text = translate("en", $key, $string);
          file_put_contents('./translations/' . $key . "_" . remove_bs($string), $text);
        }
      }

      if (strlen($items[0]) > 0 and $items[0] !== "language") {
        $file .= ($items[0] . ": '" . $text . "',\n");
      }

    }
  }
  $file .= ("};\n");

  $myfile = fopen("../src/app/modules/application/config/locales/" . $val . ".ts", "w") or die("Unable to open file!");
  fwrite($myfile, $file);
  fclose($myfile);
  echo("\nDone " . $val . "\n");
}

function remove_bs($Str)
{
  $StrArr = str_split($Str);
  $NewStr = '';
  foreach ($StrArr as $Char) {
    $CharNo = ord($Char);
    if ($CharNo == 163) {
      $NewStr .= $Char;
      continue;
    } // keep £
    if ($CharNo > 31 && $CharNo < 127) {
      $NewStr .= $Char;
    }
  }
  return $NewStr;
}

$file = ("import {LanguageModel} from './language-model';\n");
$file .= ("\n");
$file .= ("// tslint:disable-next-line:variable-name\n");
$file .= ("export const blank: LanguageModel = {\n");
$file .= ("  ");
foreach ($object as $row) {

  if (strpos($row, '{') !== false or strpos($row, '}') !== false or strpos($row, 'product: ')) {
    $file .= ($row . "\n");
  } else {
    $items = explode(": ", $row);

    if (strlen($items[0]) > 0 and $items[0] !== "language") {
      $string = trim(trim($items[1], "'"), "',");
      $file .= ($items[0] . ": '" . $string . "',\n");
    }

  }
}
$file .= ("};\n");

$myfile = fopen("../src/app/modules/application/config/blank.ts", "w") or die("Unable to open file!");
fwrite($myfile, $file);
fclose($myfile);
echo("Done blank\n");

$file = ("export interface LanguageModel {\n  ");
foreach ($object as $row) {

  if (strpos($row, '{') !== false or strpos($row, '}') !== false) {
    $row = str_replace("},", "};", $row);
    $file .= ($row . "\n");
  } else {
    $items = explode(": ", $row);

    if (strlen($items[0]) > 0) {
      $file .= ($items[0] . ": string;\n");
    }

  }
}
$file .= ("}\n");

$myfile = fopen("../src/app/modules/application/config/language-model.ts", "w") or die("Unable to open file!");
fwrite($myfile, $file);
fclose($myfile);

echo "Done language-model\n";


function translate($sourceLang, $targetLang, $sourceText)
{
  include("config.php");

  $url = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=" . $targetLang;


  $ch = curl_init();
  curl_setopt($ch, CURLOPT_POSTFIELDS, "[".json_encode(array("Text"=>$sourceText))."]");
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      "Content-Type: application/json",
      "Ocp-Apim-Subscription-Key:616b4d52b38548a7808c91ba7870c2f9",
      "Ocp-Apim-Subscription-Region:uksouth"
      )
  );

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  $result = curl_exec($ch);

  print_r(json_decode($result)[0]->translations[0]->text);
  echo "\nTranslated: " . $sourceText . " To " . json_decode($result)[0]->translations[0]->text . "\n";
  return json_decode($result)[0]->translations[0]->text;
}
