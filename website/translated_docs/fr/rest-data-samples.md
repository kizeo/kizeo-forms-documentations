---
id: data-samples
title: Data samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### Vous trouverez ici des exemples de code en **PHP**.

#### [Si cURL n'est pas déjà préinstallé, voici un lien qui pourrait vous aider à l'installer.](rest-curl-install.md)

#### Voici un exemple permettant de transférer des données (PUSH)

```php

<?php

$formId;
// Initialisation de la requête
$curl = curl_init();

// Définition des paramètres et entêtes de la requête
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data/push",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Définition de la donnée dans le corps de la requête
  CURLOPT_POSTFIELDS => "{\n  \"recipient_user_id\": \"integer\",\n  \"fields\": {\n    \"field_id\": {\n      \"value\": \"string\"\n    }\n  }\n}",
  CURLOPT_HTTPHEADER => array(
    "Authorization: YOUR_TOKEN",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));

// Envoi de la requête et affichage de la réponse
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

### Vous trouverez ici des exemples de code en **Java**.

#### Voici un exemple permettant de faire une recherche avancée dans les données d'un formulaire

```java

string formId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Ajout des filtres à appliquer dans le corps de la requête
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"global_filters\": \"\",\r\n  \"filters\": [\r\n    {\r\n      \"field\": \"field_name\",\r\n      \"operator\": \"comparison_operator\",\r\n      \"type\": \"simple\",\r\n      \"val\": \"compare_value\"\r\n    }\r\n  ],\r\n  \"order\": [\r\n    {\r\n      \"col\": \"order_data\", \r\n      \"type\": \"col_type\"\r\n    }\r\n  ]\r\n}");
// Définition des entêtes et des paramètres de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data/advanced")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### Voici un exemple permettant d'enregistrer des données sans enregistrer le formulaire

```java

string formId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Ajout des filtres à appliquer dans le corps de la requête
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"recipient_user_id\": \"integer\",\r\n  \"fields\": {\r\n    \"field_id\": {\r\n      \"value\": \"string\"\r\n    }\r\n  }\r\n}");
// Définition des entêtes et des paramètres de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/push")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

### Vous trouverez ici des exemples de code en **Javascript**.

#### Voici un exemple permettant de faire une recherche avancée dans les données d'un formulaire

```javascript

var formId;
// Initialisation de la requête et définition des entêtes
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
  // Ajout des filtres à appliquer dans le corps de la requête
  "processData": false,
  "data": "{\r\n  \"global_filters\": \"\",\r\n  \"filters\": [\r\n    {\r\n      \"field\": \"field_name\",\r\n      \"operator\": \"comparison_operator\",\r\n      \"type\": \"simple\",\r\n      \"val\": \"compare_value\"\r\n    }\r\n  ],\r\n  \"order\": [\r\n    {\r\n      \"col\": \"order_data\",\r\n      \"type\": \"col_type\"\r\n    }\r\n  ]\r\n}"
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);
});

```

#### Voici un exemple permettant d'enregistrer des données sans enregistrer le formulaire

```javascript

var formId;
// Initialisation de la requête et définition des entêtes
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
  // Ajout des filtres à appliquer dans le corps de la requête
  "processData": false,
  "data": "{\r\n  \"recipient_user_id\": \"integer\",\r\n  \"fields\": {\r\n    \"field_id\": {\r\n      \"value\": \"string\"\r\n    }\r\n  }\r\n}"
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
