---
id: restv3-sample
title: PHP Sample
sidebar_label: PHP Sample
---

## Fichier `config.json`

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

## Fichier `main.php`

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

## Fichier `includes/Main.class.php`

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
