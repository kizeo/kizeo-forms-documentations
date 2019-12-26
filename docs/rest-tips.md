---
id: tips
title: Tips
sidebar_label: Tips
---

Here you will find concrete examples of utilisation in PHP to make currently used functions.

## First example : a program that sends an e-mail to a list of users

You will find here a group of functions that allow you to connect to the server, get a token and send a mail to all of your users.

#### First, the configuration file, to put in the same directory than PHP files

#### `config.json`

```json
{
    "your_email": "youremail@example.com",
    "email_report_error": "youremail@domain.com",
    "debug": true,
    "kizeo_addr": "https://www.kizeoforms.com/",
    "tmp_dir": "/tmp/",
    "log_dir": "/log/",
    "export_dir": "/export/",
    "rest_link": "rest/v3/",
    "token": "YOUR_TOKEN"
}
```

#### File that simply launches the program

#### `main.php`

```php

<?php

use \KizeoWS\Main as KizeoForms;

header('Content-Type: text/plain');
require_once __DIR__ . '/Main.class.php';
if (KizeoForms::generateSettings()) {
    KizeoForms::mainProcess();
} else {
    echo "Process aborted\n";
    print_r(KizeoForms::getReport());
}

```

#### In this file you have the functions to get your users and send them a mail

#### `Main.class.php`

```php

<?php
namespace KizeoWS;
/**
* Main Class KizeoWS
*/

abstract class Main
{
    // Array of configuration settings
    private static $settings;
    private static $reportingArray = array(
        'history' => array(),
        'issues' => array(),
        'done' => array(),
    );
    private static $token = false;
    private static $tempToDelete = array();
    private static $usersList = array();        // Keep in memory users list
    private static $userMails = array();        // Keep in memory users mail list



    private static function addHistory($string, $alwaysDisplay = false) {
        if (!isset(static::$settings['debug']) || static::$settings['debug'] || $alwaysDisplay) {
            echo $string . "\n";
        }
        static::$reportingArray['history'][] = $string;
    }
    private static function addIssue($string) {
        static::addHistory($string);
        static::$reportingArray['issues'][] = $string;
    }
    private static function addDone($string) {
        if (!isset(static::$settings['debug']) || static::$settings['debug']) {
            echo $string . "\n";
        }
        static::$reportingArray['done'][] = $string;
    }
    private static function addTempToDelete($path) {
        static::$tempToDelete[] = $path;
    }

    // Function that read the configuration file and fill the settings array
    public static function generateSettings() {
        $file_content = file_get_contents(__DIR__ . '/config.json');
        static::addHistory('Opening config file');
        if ($file_content !== false) {
            $decodedJSON = json_decode($file_content, true);
            if ($decodedJSON != null) {
                static::addHistory('Config file read');
                static::$settings = $decodedJSON;
                if (static::checkSettings()) {
                    return true;
                } else {
                    static::addIssue('Fatal issue in config');
                    return false;
                }
            } else {
                static::addIssue('Can\'t read config file');
                return false;
            }
        } else {
            static::addIssue('Can\'t find config file');
            return false;
        }
    }
    public static function removeTemp() {
        foreach (static::$tempToDelete as $key => &$value) {
            if (file_exists($value) && !is_dir($value)) {
                unlink($value);
                unset(static::$tempToDelete[$key]);
            }
        }
    }

    // Function giving path to log/export/temp directories
    private static function getTempDir() {
        return __DIR__ . '/' . static::$settings['tmp_dir'];
    }
    private static function getExportDir() {
        return __DIR__ . '/' . static::$settings['export_dir'];
    }
    public static function getLogDir() {
        return __DIR__ . '/' . static::$settings['log_dir'];
    }
    public static function getReport() {
        return static::$reportingArray;
    }
    /**
    * Function to check if settings are correctly filled
    */
    private static function checkSettings() {
        if (!isset(static::$settings['kizeo_addr'])) {
            static::$settings['kizeo_addr'] = "https://www.kizeoforms.com/";
            static::addHistory('Missing kizeo_addr in config, use https://www.kizeoforms.com/ as default');
        }
        if (!isset(static::$settings['debug'])) {
            static::$settings['debug'] = false;
            static::addHistory('Missing debug in config, use false as default');
        }
        if (!isset(static::$settings['rest_link'])) {
            static::$settings['rest_link'] = "rest/v3/";
            static::addHistory('Missing rest_link in config, use rest/v3/ as default');
        }
        if (!isset(static::$settings['tmp_dir'])) {
            static::$settings['tmp_dir'] = "../tmp/";
            static::addHistory('Missing tmp_dir in config, use ../tmp/ as default');
        }
        if (!isset(static::$settings['export_dir'])) {
            static::$settings['export_dir'] = "../export";
            static::addHistory('Missing export_dir in config, use ../export as default');
        }
        if (!isset(static::$settings['log_dir'])) {
            static::$settings['export_dir'] = "../log";
            static::addHistory('Missing export_dir in config, use ../log as default');
        }

        if (is_dir(static::getTempDir()) && is_dir(static::getExportDir())) {
            return true;
        } else if (!is_dir(static::getTempDir())) {
            static::addIssue('Temp dir ' . static::getTempDir() . ' invalid');
            return false;
        } else if (!is_dir(static::getExportDir())) {
            static::addIssue('Export dir ' . static::getExportDir() . ' invalid');
            return false;
        } else {
            static::addIssue('Impossible case');
            return false;
        }
    }

    public static function mainProcess() {
        static::addHistory('--- Main process started ---', true);

        if (static::doLogin()) {
            static::addHistory('Login done');
        } else {
            static::addIssue('Can\'t connect to Kizeo');
            static::addHistory('Process aborted');
            return false;
        }

        if (static::getUsersList()) {
            static::addHistory('Users list charged');
        } else {
            static::addIssue('Can\'t get users list');
            static::addHistory('Process aborted');
        }

        static::getMails();
        static::sendMails();

        static::addHistory('--- Main process finished ---', true);
        return true;
    }

    /**
    * Function that gets token
    */
    private static function doLogin()
    {
        if (isset(static::$settings['token'])) {
            static::$token = $settings['token'];
            static::addHistory('Login success - token : ' . static::$token);
            return true;
        } else {
            static::addIssue('Missing login settings');
            return false;
        }
    }

    // Function that get all users list
    private static function getUsersList() {
        if (static::$token != false) {
            $usersListData = static::callApi('GET', static::getApiRoot() . 'users', array());
            if (isset($usersListData['status']) && strtolower($usersListData['status']) == 'ok') {
                if (isset($usersListData['data'])) {
                    static::$usersList = $usersListData['data'];
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }


    // Function to keep mail addresses

    private static function getMails() {
        foreach(static::$usersList['users'] as $user){
            static::$userMails[] = $user['email'];
        }
        if (count(static::$userMails) != 0) {
            static::addHistory('Users mails list :');
            static::addHistory(json_encode(static::$userMails));
        }
        return true;
    }

    // Function that sends the email to all users
    private static function sendMails() {
        $subject = 'Subject of your mail';
        $message = 'Enter your message here';
        $mailHeaders = 'From: <' . static::$settings['your_email'] . '>';

        foreach(static::$userMails as $mailToSend) {
            if($mailToSend != null){
                if(mail($mailToSend, $subject, $message, $mailHeaders)) {
                    static::addHistory('Mail sent to ' . $mailToSend);
                }
                else {
                    static::addIssue('Failed to send your mail');
                }
            }
        }
    }


    /**
    * Utilities
    */
    private static function getApiRoot() {
        return static::$settings['kizeo_addr'] . static::$settings['rest_link'];
    }
    private static function callApi($method, $url, $additionalSettings = array()) {
        $curl = curl_init();

        if (!isset($additionalSettings['data'])) {
            $additionalSettings['data'] = false;
        }
        if (!isset($additionalSettings['json_output'])) {
            $additionalSettings['json_output'] = true;
        }
        if (!isset($additionalSettings['authentified'])) {
            $additionalSettings['authentified'] = true;
        }

        $data = ($additionalSettings['data']) ? json_encode($additionalSettings['data']) : false;

        $httpHeader = array();
        if ($additionalSettings['authentified']) {
            $httpHeader[] = 'Authorization: '. static::$token;
        }
        if ($additionalSettings['json_output']) {
            $httpHeader[] = 'Content-Type: application/json';
        }

        switch ($method) {
            case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data) {
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                $httpHeader[] = 'Content-Length: '.strlen($data);
            }
            break;
            case "GET":
            break;
            case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
            default:
        }
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $httpHeader);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);
        print_r(curl_error($curl));
        curl_close($curl);
        if ($additionalSettings['json_output']) {
            return json_decode($result, true);
        } else {
            return $result;
        }
    }
}

```

## Second example : a program that tells you every modification made today

You will find here a group of functions that allow you to connect to the server, get a token and get the list of all modifications done today.  

#### First, the configuration file, to put in the same directory than PHP files


#### `config.json`
```json

{
    "your_email": "youremail@example.com",
    "email_report_error": "youremail@domain.com",
    "debug": true,
    "kizeo_addr": "https://www.kizeoforms.com/",
    "tmp_dir": "/tmp/",
    "log_dir": "/log/",
    "export_dir": "/export/",
    "rest_link": "rest/v3/",
    "token": "YOUR_TOKEN"
}

```  

#### File that simply launches the program

#### `main.php`

```php

<?php

use \KizeoWS\Main as KizeoForms;

header('Content-Type: text/plain');
require_once __DIR__ . '/Main.class.php';
if (KizeoForms::generateSettings()) {
    KizeoForms::mainProcess();
} else {
    echo "Process aborted\n";
    print_r(KizeoForms::getReport());
}

```  


#### In this file you have the functions to get lists, forms and data modified today

#### `Main.class.php`  

```php

<?php
namespace KizeoWS;
/**
* Main Class KizeoWS
*/

abstract class Main
{
    // Array of configuration settings
    private static $settings; 
    private static $reportingArray = array(
        'history' => array(),
        'issues' => array(),
        'done' => array(),
    );
    private static $token = false;              
    private static $tempToDelete = array();


    private static function addHistory($string, $alwaysDisplay = false) {
        if (!isset(static::$settings['debug']) || static::$settings['debug'] || $alwaysDisplay) {
            echo $string . "\n";
        }
        static::$reportingArray['history'][] = $string;
    }
    private static function addIssue($string) {
        static::addHistory($string);
        static::$reportingArray['issues'][] = $string;
    }
    private static function addDone($string) {
        if (!isset(static::$settings['debug']) || static::$settings['debug']) {
            echo $string . "\n";
        }
        static::$reportingArray['done'][] = $string;
    }
    private static function addTempToDelete($path) {
        static::$tempToDelete[] = $path;
    }

    // Function that read configuration file and constructs the settings array
    public static function generateSettings() {
        $file_content = file_get_contents(__DIR__ . '/config.json');
        static::addHistory('Opening config file');
        if ($file_content !== false) {
            $decodedJSON = json_decode($file_content, true);
            if ($decodedJSON != null) {
                static::addHistory('Config file read');
                static::$settings = $decodedJSON;
                if (static::checkSettings()) {
                    return true;
                } else {
                    static::addIssue('Fatal issue in config');
                    return false;
                }
            } else {
                static::addIssue('Can\'t read config file');
                return false;
            }
        } else {
            static::addIssue('Can\'t find config file');
            return false;
        }
    }
    public static function removeTemp() {
        foreach (static::$tempToDelete as $key => &$value) {
            if (file_exists($value) && !is_dir($value)) {
                unlink($value);
                unset(static::$tempToDelete[$key]);
            }
        }
    }

    // Functions giving paths of log/export/temp directories
    private static function getTempDir() {
        return __DIR__ . '/' . static::$settings['tmp_dir'];
    }
    private static function getExportDir() {
        return __DIR__ . '/' . static::$settings['export_dir'];
    }
    public static function getLogDir() {
        return __DIR__ . '/' . static::$settings['log_dir'];
    }
    public static function getReport() {
        return static::$reportingArray;
    }
    /**
    * Function verifying the definition of settings
    */
    private static function checkSettings() {
        if (!isset(static::$settings['kizeo_addr'])) {
            static::$settings['kizeo_addr'] = "https://www.kizeoforms.com/";
            static::addHistory('Missing kizeo_addr in config, use https://www.kizeoforms.com/ as default');
        }
        if (!isset(static::$settings['debug'])) {
            static::$settings['debug'] = false;
            static::addHistory('Missing debug in config, use false as default');
        }
        if (!isset(static::$settings['rest_link'])) {
            static::$settings['rest_link'] = "rest/v3/";
            static::addHistory('Missing rest_link in config, use rest/v3/ as default');
        }
        if (!isset(static::$settings['tmp_dir'])) {
            static::$settings['tmp_dir'] = "../tmp/";
            static::addHistory('Missing tmp_dir in config, use ../tmp/ as default');
        }
        if (!isset(static::$settings['export_dir'])) {
            static::$settings['export_dir'] = "../export";
            static::addHistory('Missing export_dir in config, use ../export as default');
        }
        if (!isset(static::$settings['log_dir'])) {
            static::$settings['export_dir'] = "../log";
            static::addHistory('Missing export_dir in config, use ../log as default');
        }

        if (is_dir(static::getTempDir()) && is_dir(static::getExportDir())) {
            return true;
        } else if (!is_dir(static::getTempDir())) {
            static::addIssue('Temp dir ' . static::getTempDir() . ' invalid');
            return false;
        } else if (!is_dir(static::getExportDir())) {
            static::addIssue('Export dir ' . static::getExportDir() . ' invalid');
            return false;
        } else {
            static::addIssue('Impossible case');
            return false;
        }
    }

    
    public static function mainProcess() {
        static::addHistory('--- Main process started ---', true);

        if (static::doLogin()) {
            static::addHistory('Login done');
        } else {
            static::addIssue('Can\'t connect to Kizeo');
            static::addHistory('Process aborted');
            return false;
        }

        static::getTodayUpdatedFormsandData();
        static::getTodayUpdatedLists();

        static::addHistory('--- Main process finished ---', true);
        return true;
    }

    /**
    * Function that gets token
    */
    private static function doLogin()
    {
        if (isset(static::$settings['token'])) {
            static::$token = $settings['token'];
            static::addHistory('Login success - token : ' . static::$token);
            return true;
        } else {
            static::addIssue('Missing login settings');
            return false;
        }
    }


    /** 
    *  Functions doing the recap of the day
    **/


    // Function that extracts forms modified today
    private static function getTodayUpdatedFormsandData(){
        
        $today = date_create();
        date_time_set($today, 00, 00, 00);

        // Get all the forms
        $forms = static::callApi('GET', static::getApiRoot() . 'forms', array());

        // Keep forms modified today
        $todayForms = array();

        foreach($forms['forms'] as $f){
            $formDate = date_create_from_format('Y-m-d H:i:s', $f['update_time']);
            if ($formDate > $today){
                $todayForms[] = array($f['id'], $f['name'], array());
            }
        }
        static::addHistory('Il y a ' . count($todayForms) . ' formulaires modifiés aujourd\'hui.');


        $todayDatas = array();
        // Get data modified today
        foreach($forms['forms'] as $TF){
            $requestBody = array();
            // Definition of advanced filter
            $requestBody['data'] = '{
  "global_filters": "",
  "filters": [
    {
      "field": "_answer_time",
      "operator": ">",
      "type": "simple",
      "val": "' . $today->format('Y-m-d H:i:s') . '"
    }
  ],
  "order": [
    {
      "col": "",
      "type": ""
    }
  ]
}';
            // Get filtered data to keep only those modified today
            $datas = static::callApi('POST', static::getApiRoot() . 'forms/' . $TF['id'] . '/data/advanced', $requestBody);
            if (isset($datas['status']) && $datas['status'] != 'ok'){
                echo($datas['message']);
            }
            else {
                $todayDatas[] = $datas;
            }
        }
        // Show forms
        if (count($todayForms) > 0 ){
            foreach($todayForms as $TF){
                static::addHistory('Formulaire d\'id : ' . $TF['0'] . ' et de nom : ' . $TF['1']);
            }
        }
        static::addHistory('');
        static::addHistory('Il y a '. $nbNewDatas = count($todayDatas) . ' données créées ou modifiées aujourd\'hui');

        // Show data
        if ($nbNewDatas > 0){
            for ($i = 0 ; $i < $nbNewDatas ; $i++){
                $nbNew = count($todayDatas[$i]['data']);
                for ($j = 0 ; $j < $nbNew ; $j++){
                    static::addHistory('Donnée d\'id : ' . $todayDatas[$i]['data'][$j]['_id'] . ' sur formulaire d\'id : ' 
                        . $todayDatas[$i]['data'][$j]['_form_id'] . ' par le user n° ' . $todayDatas[$i]['data'][$j]['_user_id'] . '. ' );
                }
            }
            static::addHistory('');
        }
    }

    // Function that extracts lists modified today
    private static function getTodayUpdatedLists(){
        
        $today = date_create();
        date_time_set($today, 00, 00, 00);

        // Get all the lists
        $lists = static::callApi('GET', static::getApiRoot() . 'lists', array());

        // Filter list to keep only those modified today
        $todayLists = array();
    
        foreach($lists['lists'] as $l){
            $listDate = date_create_from_format('Y-m-d H:i:s', $l['update_time']);
            if ( $listDate > $today){
                $todayLists[] = array($l['id'], $l['name']);
            }
        }

        static::addHistory('Il y a ' . count($todayLists) . ' listes modifiées aujourd\'hui');
        if (count($todayLists) > 0 ){
            foreach($todayLists as $TL){
                static::addHistory('Liste d\'id : ' . $TL['0'] . ' et de nom : ' . $TL['1']);
            }
        }
        static::addHistory('');
    }


    /**
    * Utilities
    */
    private static function getApiRoot() {
        return static::$settings['kizeo_addr'] . static::$settings['rest_link'];
    }
    private static function callApi($method, $url, $additionalSettings = array()) {
        $curl = curl_init();

        if (!isset($additionalSettings['data'])) {
            $additionalSettings['data'] = false;
        }
        if (!isset($additionalSettings['json_output'])) {
            $additionalSettings['json_output'] = true;
        }
        if (!isset($additionalSettings['authentified'])) {
            $additionalSettings['authentified'] = true;
        }

        $data = ($additionalSettings['data']) ? json_encode($additionalSettings['data']) : false;

        $httpHeader = array();
        if ($additionalSettings['authentified']) {
            $httpHeader[] = 'Authorization: '. static::$token;
        }
        if ($additionalSettings['json_output']) {
            $httpHeader[] = 'Content-Type: application/json';
        }

        switch ($method) {
            case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data) {
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                $httpHeader[] = 'Content-Length: '.strlen($data);
            }
            break;
            case "GET":
            break;
            case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
            default:
        }
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $httpHeader);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);
        print_r(curl_error($curl));
        curl_close($curl);
        if ($additionalSettings['json_output']) {
            return json_decode($result, true);
        } else {
            return $result;
        }
    }
}

``` 
