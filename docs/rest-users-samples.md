---
id: users-samples
title: Users samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### You will find here **PHP** code samples.

#### [If cURL doesn't actually work in your environment, this could help you to install it.](rest-curl-install.md)

#### Here is an example of HTTP Request to get the list of all users

```php

<?php

// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/users/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Authorization: YOUR_TOKEN",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));

// Send request and show response
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

```

#### The following example shows how to add a user

```php

<?php

$listId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/users',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Minimal informations to give
  CURLOPT_POSTFIELDS =>  "{\n  \"login\": \"string\",\n  \"password\": \"string\",\n  \"first_name\": \"string\",\n  \"last_name\": \"string\",\n  \"main_group_id\": -1,\n  \"admin\": boolean,\n  \"leader_group\": boolean,\n  \"form_user\": boolean\n}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: YOUR_TOKEN",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));

// Send request and show response
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

```

#### This example gives you a way to update a user

```php

<?php

$userId;
// Initialisation of the request
$curl = curl_init();

// Defintion of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/users/' . $userId,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Definition of parameters in request's body
  // Login is a required field
  CURLOPT_POSTFIELDS =>  "{\n  \"login\":\"string\",\n  \"admin\": false,\n  \"form_user\": false\n}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: YOUR_TOKEN",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));

// Send request and show response
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

```

<!--Java-->

### You will find here **Java** code samples.

#### Here is an example of HTTP Request to get the list of all users

```java

// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/users")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();
```

#### The following example shows how to add a user

```java

// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Parameters in the request's body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"login\": \"string\",\r\n  \"password\": \"string\",\r\n  \"first_name\": \"string\",\r\n  \"last_name\": \"string\",\r\n  \"main_group_id\": -1,\r\n  \"admin\": boolean,\r\n  \"leader_group\": boolean,\r\n  \"form_user\": boolean\r\n}");

// Definition of request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/users")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### This example gives you a way to update a user

```java

string userId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Parameters in the request's body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"login\":\"string\",\n  \"admin\": boolean,\n  \"form_user\": boolean\n}");
// Definition of request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/users/" . userId)
  .put(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

### You will find here **Javascript** code samples.

#### Here is an example of HTTP Request to get the list of all users

```javascript
// Initialisation of the request
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/users',
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        Authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
}

// Send request and show response
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

#### The following example shows how to add a user

```javascript
// Initialisation of the request
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/users',
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        Authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
    // Parameters in request's body
    processData: false,
    data:
        '{\r\n  "login": "string",\r\n  "password": "string",\r\n  "first_name": "string",\r\n  "last_name": "string",\r\n  "main_group_id": -1,\r\n  "admin": boolean,\r\n  "leader_group": boolean,\r\n  "form_user": boolean\r\n}',
}

// Send request and show response
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

#### This example gives you a way to update a user

```javascript
var userId
// Initialisation of the request
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/users/'.userId,
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
        Authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
    // Parameters in request's body
    processData: false,
    data: '{\n  "login":"string",\n  "admin": boolean,\n  "form_user": boolean \n}',
}

// Send request and show response
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
