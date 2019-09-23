---
id: curl-install
title: How to activate cURL (PHP)
---

If you are not able to run our code samples, and you receive errors like following :

```php
Error : Call to undefined function curl_init(). // Or another cURL function
```

Don't worry, first try to make the following operations : 

If you're using WAMP, you will just have to activate cURL extension by clicking on `php_curl` in `PHP->PHP extensions`. If you're not using WAMP, let's read next.

## First step : cURL extension activation
At first, open the file named `php.ini` and in it, search the following line : 
```php
;extension=php_curl.dll
```
When you found it, you have to uncomment it. To do this, delete the `";"` that is at the beginning of the line, and save the file.

## Second step : Environment variable modification

If it hasn't been done before, you will also have to modify the `PATH` environment variable to make cURL extension work. 


### If you don't know how to modify this variable, here is how to process (on Windows 10) :  
- Open a file browser  
- Right click on __My Computer__ then left click on __Properties__
- Click on __Advanced system settings__
- In __Advanced system settings__ tab, click on __Environment variables__
- Select variable named __Path__ then click on __Modify__
- Write the __PHP directory full path__ then click on __Ok__
- Cliquer sur __Apply__


## Last step : Re-launching the Apache service

To save and apply all your modifications you will have to re-launch your Apache service, and then cURL should work.
