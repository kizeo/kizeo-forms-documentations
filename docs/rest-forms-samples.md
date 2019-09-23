---
id: forms-samples
title: Forms samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### You'll find here **PHP** code samples.

#### [If cURL doesn't actually work in your environment, this could help you to install it.](rest-curl-install.md)

#### Here is an example of a HTTP request to get the list of all forms :

```php

<?php

// Initialisation of the request
$curl = curl_init();

// Definition of the Headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/',
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

#### The following example shows how to get details of a chosen form

```php

<?php

$formId;
// Initialisation of the request
$curl = curl_init();

// Definition of the Headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId,
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

<!--Java-->

### You'll find here **Java** code samples.

#### Here is an example of a HTTP request to get the list of all forms :

```java

OkHttpClient client = new OkHttpClient();

// Definition of request's parameters
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request and show response
Response response = client.newCall(request).execute();

```

#### The following example shows how to get details of a chosen form

```java

string formId;
OkHttpClient client = new OkHttpClient();

// Definition of request's parameters
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId)
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request and show response
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

### You'll find here **Javascript** code samples.

#### Here is an example of a HTTP request to get the list of all forms :

```javascript
// Definition of request's parameters
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/forms/',
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

#### The following example shows how to get details of a chosen form

```javascript
var formId
// Definition of request's parameters
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/forms/'.formID,
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

<!--END_DOCUSAURUS_CODE_TABS-->
