---
id: lists-samples
title: Lists samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### You will find here **PHP** code samples.

#### [If cURL doesn't actually work in your environment, this could help you to install it.](rest-curl-install.md)

#### Here is an example of HTTP Request to get the list of all external lists :

```php

<?php

// Initialisation of HTTP request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/lists',
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

#### The following example shows how to get details of an external list

```php

<?php

$listId;
// Initialisation of HTTP request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/lists/' . $listId,
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

#### This example gives you a way to update an external list

```php

<?php

$listId;
// Initialisation of HTTP request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/lists/' . $listId,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Definition of parameters in request's body
  CURLOPT_POSTFIELDS =>  "{\n  \"items\": [\n    \"item1\", \"item2\", \"item3\"\n  ]\n}",
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

#### Here is an example of HTTP Request to get the list of all external lists :

```java

// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/lists")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### The following example shows how to get details of an external list

```java

string listId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/lists/" . listId)
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### This example gives you a way to update an external list

```java

string listId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of request's headers and body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"items\": [\r\n    \"item1\", \"item2\", \"item3\"\r\n  ]\r\n}");
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/lists/" . listId)
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

#### Here is an example of HTTP Request to get the list of all external lists :

```javascript
// Definition of request's headers parameters
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/lists',
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

#### The following example shows how to get details of an external list

```javascript
var listId
// Definition of request's headers parameters
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/lists/'.listId,
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

#### This example gives you a way to update an external list

```javascript
var listId
// Definition of request's headers parameters
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/lists/'.listId,
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
        Authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
    // Data defined in request's body
    processData: false,
    data: '{\r\n  "items": [\r\n    "test1", "test2", "test3"\r\n  ]\r\n}',
}

// Send request and show response
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
