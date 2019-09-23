---
id: data-samples
title: Data samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### You'll find here **PHP** code samples.

#### [If cURL doesn't actually work in your environment, this could help you to install it.](rest-curl-install.md)

#### Here is an example of a HTTP request to get the list of all data of a form :

```php

<?php

$formid;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data',
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

#### The following example shows how to read the unread data of a form

```php

<?php

$formId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data/readnew',
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

With the function to mark data as read :

```php

<?php

$formId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/markasread",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Parameters in request's body
  CURLOPT_POSTFIELDS => "{\n  \"data_ids\": [\n    dataId1, dataId2\n  ]\n}",
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

#### Here is an example to make an advanced research on the data of a form

```php

<?php

$formId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data/advanced",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Filters to apply in request's body
  CURLOPT_POSTFIELDS => "{\n  \"global_filters\": \"\",\n  \"filters\": [\n    {\n      \"field\": \"field_name\",\n      \"operator\": \"comparison_operator\",\n      \"type\": \"simple\",\n      \"val\": \"compare_value\"\n    }\n  ],\n  \"order\": [\n    {\n      \"col\": \"order_data\",\n      \"type\": \"col_type\"\n    }\n  ]\n}",
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

#### How to save data without saving form

```php

<?php

$formId;
// Initialisation of the request
$curl = curl_init();

// Definition of request's headers
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data/push",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Parameters in request's body
  CURLOPT_POSTFIELDS => "{\n  \"recipient_user_id\": \"integer\",\n  \"fields\": {\n    \"field_id\": {\n      \"value\": \"string\"\n    }\n  }\n}",
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

#### Here is an example of a HTTP request to get the list of all data of a form :

```java

string formId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of the request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/".formId."/data")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### The following example shows how to read the unread data of a form

```java

string formId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of the request's headers
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/".formId."/data/readnew")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

With the function to mark data as read :

```java

string formId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of the request's headers and body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"data_ids\": [\r\n    dataId1, dataId2\r\n  ]\r\n}");
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/".formId."/markasread")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### Here is an example to make an advanced research on the data of a form

```java

string formId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of the request's headers and body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"global_filters\": \"\",\r\n  \"filters\": [\r\n    {\r\n      \"field\": \"field_name\",\r\n      \"operator\": \"comparison_operator\",\r\n      \"type\": \"simple\",\r\n      \"val\": \"compare_value\"\r\n    }\r\n  ],\r\n  \"order\": [\r\n    {\r\n      \"col\": \"order_data\", \r\n      \"type\": \"col_type\"\r\n    }\r\n  ]\r\n}");

Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/".formId."/data/advanced")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

#### How to save data without saving form

```java

string formId;
// Initialisation of the request
OkHttpClient client = new OkHttpClient();

// Definition of the request's headers and body
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"recipient_user_id\": \"integer\",\r\n  \"fields\": {\r\n    \"field_id\": {\r\n      \"value\": \"string\"\r\n    }\r\n  }\r\n}");

Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/".formId."/push")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Send request
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

### You'll find here **Javascript** code samples.

#### Here is an example of a HTTP request to get the list of all data of a form :

```javascript

var formId;
// Initialisation of the request and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data",
  "method": "GET",
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

#### The following example shows how to read the unread data of a form

```javascript

var formId;
// Initialisation of the request and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data/readnew",
  "method": "GET",
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

With the function to mark data as read :

```javascript

var formId;
// Initialisation of the request and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/markasread",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache"
  },
  // Definition of data to send in request's body
  "processData": false,
  "data": "{\r\n  \"data_ids\": [\r\n    dataId1, dataId2\r\n  ]\r\n}"
}

// Send request and show response
$.ajax(settings).done(function (response) {
  console.log(response);
});
```

#### Here is an example to make an advanced research on the data of a form

```javascript

var formId;
// Initialisation of the request and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data/advanced",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  },
  // Definition of filters to apply
  "processData": false,
  "data": "{\r\n  \"global_filters\": \"\",\r\n  \"filters\": [\r\n    {\r\n      \"field\": \"field_name\",\r\n      \"operator\": \"comparison_operator\",\r\n      \"type\": \"simple\",\r\n      \"val\": \"compare_value\"\r\n    }\r\n  ],\r\n  \"order\": [\r\n    {\r\n      \"col\": \"order_data\",\r\n      \"type\": \"col_type\"\r\n    }\r\n  ]\r\n}"
}

// Send request and show response
$.ajax(settings).done(function (response) {
  console.log(response);
});

```

#### How to save data without saving form

```javascript

var formId;
// Initialisation of the request and headers' definition
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/push",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  },
  // Definition of filters to apply
  "processData": false,
  "data": "{\r\n  \"recipient_user_id\": \"integer\",\r\n  \"fields\": {\r\n    \"field_id\": {\r\n      \"value\": \"string\"\r\n    }\r\n  }\r\n}"
}

// Send request and show response
$.ajax(settings).done(function (response) {
  console.log(response);
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
