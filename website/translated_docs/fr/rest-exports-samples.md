---
id: exports-samples
title: Exports samples
sidebar_label: Samples
---
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### Vous trouverez ici des exemples de code en **PHP**.

#### [Si cURL n'est pas déjà préinstallé, voici un lien qui pourrait vous aider à l'installer.](rest-curl-install.md)

#### Voici un exemple de requête HTTP en PHP pour obtenir la liste de tous les exports disponibles :

```php

<?php

$formId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
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

#### L'exemple suivant montre comment obtenir des données d'un formulaire au format CSV ou Excel :

```php

<?php

$formId;
$format;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/data/multiple/' . $format,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Ajout des paramètres dans le corps de la requête
  CURLOPT_POSTFIELDS => "{\n  \"data_ids\": [\n    \"dataId1\",\n    \"dataId2\",\n    \"dataId3\"\n  ]\n}",
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

#### Voici un exemple de code pour exporter des données au format PDF standard :

```php

<?php

$formId;
$exportId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/forms/' . $formId . '/multiple_data/exports/' . $exportId . '/pdf',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Ajout des paramètres dans le corps de la requête
  CURLOPT_POSTFIELDS => "{\n  \"data_ids\": [\n    \"dataId1\",\n    \"dataId2\",\n    \"dataId3\"\n  ]\n}",
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

## Exemple de code Java (OK HTTP)

---

### Vous trouverez ici des exemples de code en **Java**.

#### Voici un exemple de requête HTTP en Java pour obtenir la liste de tous les exports disponibles :

```java

string formId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Définition des paramètres et des entêtes de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/exports")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### L'exemple suivant montre comment obtenir des données d'un formulaire au format CSV ou Excel :

```java

string formId;
string format;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Ajout des paramètres dans le corps de la requête
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}");
// Définition des paramètres et des entêtes de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/data/multiple/" . format)
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### Voici un exemple de code pour exporter des données au format PDF standard :

```java

string formId;
string exportId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Ajout des paramètres dans le corps de la requête
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}");
// Définition des entêtes de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId . "/multiple_data/exports/" . exportId . "/pdf")
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

#### Voici un exemple de requête HTTP en Javascript pour obtenir la liste de tous les exports disponibles :

```javascript

string formId;
// Initialisation de la requête
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId . "/exports",
  "method": "GET",
  // Définition des entêtes de la requête
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  }
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);
});

```

#### L'exemple suivant montre comment obtenir des données d'un formulaire au format CSV ou Excel :

```javascript

string formId;
string format;
// Initialisation et définition des entêtes de la requête
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
  // Ajout des paramètres dans le corps de la requête
  "processData": false,
  "data": "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}"
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);
});

```

#### Voici un exemple de code pour exporter des données au format PDF standard :

```javascript

string formId;
string exportId;
// Initialisation et définition des entêtes de la requête
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
  // Ajout des paramètres dans le corps de la requête
  "processData": false,
  "data": "{\r\n  \"data_ids\": [\r\n    \"dataId1\"\r\n  ]\r\n}"
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
