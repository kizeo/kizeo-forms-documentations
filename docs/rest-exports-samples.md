---
id: exports-samples
title: Exports samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### You will find here **PHP** samples.

#### [If cURL doesn't actually work in your environment, this could help you to install it.](rest-curl-install.md)

#### Here is an example of a HTTP request to get the list of all exports available :

```php

<?php

$formId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/exports',
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

#### Following example shows how to export data of a form to CSV or Excel :

```php

<?php

$formId;
$format;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data/multiple/' . $format,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Parameters in request's body
  CURLOPT_POSTFIELDS => "{\n  \"data_ids\": [\n    \"dataId1\",\n    \"dataId2\",\n    \"dataId3\"\n  ]\n}",
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

#### Here is an example to export data to standard PDF :

```php

<?php

$formId;
$exportId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/multiple_data/exports/' . $exportId . '/pdf',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Parameters in request's body
  CURLOPT_POSTFIELDS => "{\n  \"data_ids\": [\n    \"dataId1\",\n    \"dataId2\",\n    \"dataId3\"\n  ]\n}",
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

### You will find here **Java** samples.

#### Here is an example of a HTTP request to get the list of all exports available :

```java

string formId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of the request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/exports")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### Following example shows how to export data of a form to CSV or Excel :

```java

string formId;
string format;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Parameters in request's body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}");
// Definition of the request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data/multiple/" . format)
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### Here is an example to export data to standard PDF :

```java

string formId;
string exportId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Parameters in request's body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}");
// Definition of the request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/multiple_data/exports/" . exportId . "/pdf")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

###  You will find here __Javascript__ samples.

#### Here is an example of a HTTP request to get the list of all exports available :

```javascript

var formId;
// Initialisation of the request
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/exports",
  "method": "GET",
  // Definition of request's headers
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  }
}

// Send request and show response
$.ajax(settings).done(function (response) {
  console.log(response);
});

```

#### Following example shows how to export data of a form to CSV or Excel :

```javascript

var formId;
var format;
// Initialisation and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data/multiple/" . format,
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  },
  // Parameters in request's body
  "processData": false,
  "data": "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}"
}

// Send request and show response
$.ajax(settings).done(function (response) {
  console.log(response);
});

```

#### Here is an example to export data to standard PDF :

```javascript

var formId;
var exportId;
// Initialisation and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/multiple_data/exports/" . exportId . "/pdf",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache"
  },
  // Parameters in request's body
  "processData": false,
  "data": "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}"
}

// Send request and show response
$.ajax(settings).done(function (response) {
  console.log(response);
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
