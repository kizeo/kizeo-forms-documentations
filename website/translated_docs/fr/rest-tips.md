---
id: tips
title: Tips
sidebar_label: Tips
---

Ici vous trouverez des exemples concrets d'utilisation en PHP pour établir des fonctions couramment utilisées.

## Premier exemple : une fonction complète pour se connecter au Web Service et obtenir un Token

---

#### File `config.json`

```json
{
    "email_report_error": "youremail@domain.com",
    "debug": true,
    "kizeo_addr": "https://www.kizeoforms.com/",
    "tmp_dir": "../tmp/",
    "log_dir": "../log/",
    "export_dir": "../export/",
    "rest_link": "rest/v3/",
    "login": {
        "username": "USERNAME",
        "password": "PASSWORD",
        "company_code": "COMPANY_CODE"
    }
}
```

#### File `main.php`

```php
<?php
/**
 * PHP REST Sample
 * Created by Vincent Demonchy (Kizeo)
 * Made for PHP 5.4+
 * CURL required
 * Config file ./config.json
 */
use \KizeoWS\Main as KizeoForms;

header('Content-Type: text/plain');
require_once __DIR__ . '/includes/Main.class.php';
if (KizeoForms::generateSettings()) {
	KizeoForms::mainProcess();
} else {
	echo "Process aborded\n";
	print_r(KizeoForms::getReport());
}

```

#### File `includes/Main.class.php`

```php
<?php
namespace KizeoWS;
/**
* Main Class KizeoWS
*/

abstract class Main
{
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
    public static function generateSettings() {
        $file_content = file_get_contents(__DIR__ . '/../config.json');
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
    * Settings
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

    /**
    * Main Process
    */
    public static function mainProcess() {
        static::addHistory('--- Main process started ---', true);

        if (static::doLogin()) {
            static::addHistory('Login done');
        } else {
            static::addIssue('Can\'t connect to Kizeo');
            static::addHistory('Process aborded');
            return false;
        }

        static::addHistory('--- Main process finished ---', true);
        return true;
    }

    /**
    * Login
    */
    private static function doLogin() {
        if (isset(static::$settings['login'])) {
            if (isset(static::$settings['login']['username'])) {
                if (isset(static::$settings['login']['password'])) {
                    if (isset(static::$settings['login']['company_code'])) {
                        $loginReturnData = static::callApi('POST', static::getApiRoot() . 'login', array(
                            'authentified' => false,
                            'data' => array(
                                'user' => static::$settings['login']['username'],
                                'password' => static::$settings['login']['password'],
                                'company' => static::$settings['login']['company_code'],
                            )
                        ));
                        if (isset($loginReturnData['status']) && strtolower($loginReturnData['status']) == 'ok') {
                            if (isset($loginReturnData['data']) && isset($loginReturnData['data']['token'])) {
                                static::$token = $loginReturnData['data']['token'];
                                static::addHistory('Login success - token : ' . static::$token);
                                return true;
                            } else {
                                static::addIssue('Missing token');
                                return false;
                            }
                        } else {
                            static::addIssue('Login failed');
                            return false;
                        }
                    } else {
                        static::addIssue('Missing company_code in login settings');
                        return false;
                    }
                } else {
                    static::addIssue('Missing password in login settings');
                    return false;
                }
            } else {
                static::addIssue('Missing username in login settings');
                return false;
            }
        } else {
            static::addIssue('Missing login settings');
            return false;
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

## Deuxième exemple : une fonction permettant d'envoyer un e-mail à une liste d'utilisateurs

Ici, vous trouverez un ensemble de fonctions vous permettant de vous connecter au serveur, d'obtenir votre token d'identification à partir de vos identifiants, et d'envoyer un mail à chacun de vos utilisateurs.

#### Premièrement, le fichier de configuration à intégrer dans le même dossier que les fichiers PHP

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
    "login": {
        "username": "YOUR_USERNAME",
        "password": "YOUR_PASSWORD",
        "company_code": "YOUR_COMPANY"
    }
}
```

#### Ensuite, voilà le fichier qui lance simplement le programme

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

#### Enfin, dans ce fichier sont définies les fonctions de cet exemple de mailer

#### `Main.class.php`

```php

<?php
namespace KizeoWS;
/**
* Main Class KizeoWS
*/

abstract class Main
{
    // Tableau représentant les paramètres de configuration
    private static $settings;
    private static $reportingArray = array(
        'history' => array(),
        'issues' => array(),
        'done' => array(),
    );
    private static $token = false;              // Variable stockant le token d'identification
    private static $tempToDelete = array();
    private static $usersList = array();        // Variable stockant la liste des utilisateurs
    private static $userMails = array();        // Variable stockant la liste des adresses mail des utilisateurs


    // Fonction d'écritures des tableaux du suivi du programme
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

    // Fonction d'ouverture du fichier de configuration et de stockage dans le tableau de paramètres
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

    // Fonctions donnant les chemins vers les fichiers de log/export/temporaire
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
    * Fonction permettant de vérifier si les configurations sont correctes et correctement chargées
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

    /**
    * Processus principal utilisant les fonctions pour réaliser le résultat voulu
    */
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
    * Fonction effectuant le login et stockant le token
    */
    private static function doLogin() {
        if (isset(static::$settings['login'])) {
            if (isset(static::$settings['login']['username'])) {
                if (isset(static::$settings['login']['password'])) {
                    if (isset(static::$settings['login']['company_code'])) {
                        $loginReturnData = static::callApi('POST', static::getApiRoot() . 'login', array(
                            'authentified' => false,
                            'data' => array(
                                'user' => static::$settings['login']['username'],
                                'password' => static::$settings['login']['password'],
                                'company' => static::$settings['login']['company_code'],
                            )
                        ));
                        if (isset($loginReturnData['status']) && strtolower($loginReturnData['status']) == 'ok') {
                            if (isset($loginReturnData['data']) && isset($loginReturnData['data']['token'])) {
                                static::$token = $loginReturnData['data']['token'];
                                static::addHistory('Login success - token : ' . static::$token);
                                return true;
                            } else {
                                static::addIssue('Missing token');
                                return false;
                            }
                        } else {
                            static::addIssue('Login failed');
                            return false;
                        }
                    } else {
                        static::addIssue('Missing company_code in login settings');
                        return false;
                    }
                } else {
                    static::addIssue('Missing password in login settings');
                    return false;
                }
            } else {
                static::addIssue('Missing username in login settings');
                return false;
            }
        } else {
            static::addIssue('Missing login settings');
            return false;
        }
    }

    // Fonction permettant la récupération de la liste des utilisateurs
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


    // Fonction pour extraire les adresses emails des utilisateurs à partir de la liste

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

    // Fonction d'envoi de mail collectif
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
    * Fonctions utiles pour encapsuler les requêtes HTTP
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

## Troisième exemple : une fonction permettant de voir quels formulaires, listes et données ont été modifiés

Ici, vous trouverez un ensemble de fonctions vous permettant de vous connecter au serveur, d'obtenir votre token d'identification à partir de vos identifiants, et d'obtenir le nombre et la liste des formulaires, données et listes qui ont été modifiés.

#### Premièrement, le fichier de configuration à intégrer dans le même dossier que les fichiers PHP

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
    "login": {
        "username": "YOUR_USERNAME",
        "password": "YOUR_PASSWORD",
        "company_code": "YOUR_COMPANY"
    }
}
```

#### Ensuite, voilà le fichier qui lance simplement le programme

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

#### Enfin, dans ce fichier sont définies les fonctions de cet exemple de récapitulatif de journée

#### `Main.class.php`

```php

<?php
namespace KizeoWS;
/**
* Main Class KizeoWS
*/

abstract class Main
{
    // Tableau représentant les paramètres de configuration
    private static $settings;
    private static $reportingArray = array(
        'history' => array(),
        'issues' => array(),
        'done' => array(),
    );
    private static $token = false;              // Variable stockant le token d'identification
    private static $tempToDelete = array();


    // Fonction d'écritures des tableaux du suivi du programme
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

    // Fonction d'ouverture du fichier de configuration et de stockage dans le tableau de paramètres
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

    // Fonctions donnant les chemins vers les fichiers de log/export/temporaire
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
    * Fonction permettant de vérifier si les configurations sont correctes et correctement chargées
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

    /**
    * Processus principal utilisant les fonctions pour réaliser le résultat voulu
    */
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
    * Fonction effectuant le login et stockant le token
    */
    private static function doLogin() {
        if (isset(static::$settings['login'])) {
            if (isset(static::$settings['login']['username'])) {
                if (isset(static::$settings['login']['password'])) {
                    if (isset(static::$settings['login']['company_code'])) {
                        $loginReturnData = static::callApi('POST', static::getApiRoot() . 'login', array(
                            'authentified' => false,
                            'data' => array(
                                'user' => static::$settings['login']['username'],
                                'password' => static::$settings['login']['password'],
                                'company' => static::$settings['login']['company_code'],
                            )
                        ));
                        if (isset($loginReturnData['status']) && strtolower($loginReturnData['status']) == 'ok') {
                            if (isset($loginReturnData['data']) && isset($loginReturnData['data']['token'])) {
                                static::$token = $loginReturnData['data']['token'];
                                static::addHistory('Login success - token : ' . static::$token);
                                return true;
                            } else {
                                static::addIssue('Missing token');
                                return false;
                            }
                        } else {
                            static::addIssue('Login failed');
                            return false;
                        }
                    } else {
                        static::addIssue('Missing company_code in login settings');
                        return false;
                    }
                } else {
                    static::addIssue('Missing password in login settings');
                    return false;
                }
            } else {
                static::addIssue('Missing username in login settings');
                return false;
            }
        } else {
            static::addIssue('Missing login settings');
            return false;
        }
    }


    /**
    *  Fonctions liées au récapitulatif de la journée
    **/


    // Fonction d'extraction et d'affichage des formulaires modifiés aujourd'hui
    private static function getTodayUpdatedFormsandData(){
        // Définition d'une date de comparaison à aujourd'hui minuit pour sélectionner les formulaires modifiés aujourd'hui
        $today = date_create();
        date_time_set($today, 00, 00, 00);

        // Récupération de tous les formulaires
        $forms = static::callApi('GET', static::getApiRoot() . 'forms', array());

        // Tri des formulaires pour garder ceux qui ont été modifiés aujourd'hui
        $todayForms = array();

        foreach($forms['forms'] as $f){
            $formDate = date_create_from_format('Y-m-d H:i:s', $f['update_time']);
            if ($formDate > $today){
                $todayForms[] = array($f['id'], $f['name'], array());
            }
        }
        static::addHistory('Il y a ' . count($todayForms) . ' formulaires modifiés aujourd\'hui.');


        $todayDatas = array();
        // Récupération des données récentes pour les formulaires
        foreach($forms['forms'] as $TF){
            $requestBody = array();
            // Définition des filtres avancés à utiliser
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
            // Appel du tri avancé sur les données pour obtenir celles postérieures à aujourd'hui minuit
            $datas = static::callApi('POST', static::getApiRoot() . 'forms/' . $TF['id'] . '/data/advanced', $requestBody);
            if (isset($datas['status']) && $datas['status'] != 'ok'){
                echo($datas['message']);
            }
            else {
                $todayDatas[] = $datas;
            }
        }
        // Affichage des formulaires récemment modifiés s'il y en a
        if (count($todayForms) > 0 ){
            foreach($todayForms as $TF){
                static::addHistory('Formulaire d\'id : ' . $TF['0'] . ' et de nom : ' . $TF['1']);
            }
        }
        static::addHistory('');
        static::addHistory('Il y a '. $nbNewDatas = count($todayDatas) . ' données créées ou modifiées aujourd\'hui');

        // Affichage des données récemment créées s'il y en a
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

    // Fonction d'extraction et d'affichage des listes modifiées aujourd'hui
    private static function getTodayUpdatedLists(){
        // Définition d'une date de comparaison à aujourd'hui minuit pour sélectionner les listes modifiées aujourd'hui
        $today = date_create();
        date_time_set($today, 00, 00, 00);

        // Récupération de toutes les listes
        $lists = static::callApi('GET', static::getApiRoot() . 'lists', array());

        // Tri des listes pour garder celles qui ont été modifiées aujourd'hui
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
    * Fonctions utiles pour encapsuler les requêtes HTTP
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
