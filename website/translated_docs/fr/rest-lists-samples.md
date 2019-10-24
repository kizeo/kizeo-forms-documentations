---
id: lists-samples
title: Lists samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### Vous trouverez ici des exemples de code en **PHP**.

#### [Si cURL n'est pas déjà préinstallé, voici un lien qui pourrait vous aider à l'installer.](rest-curl-install.md)

#### Voici un exemple de requête HTTP en PHP pour obtenir la liste de toutes les listes externes :

```php

<?php

// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
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

#### L'exemple suivant montre comment récupérer tous les détails d'une liste externe

```php

<?php

$listId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
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

#### Voici un exemple de comment mettre à jour une liste externe

```php

<?php

$listId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/lists/' . $listId,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Ajout des paramètres dans le corps de la requête
  CURLOPT_POSTFIELDS =>  "{\n  \"items\": [\n    \"item1\", \"item2\", \"item3\"\n  ]\n}",
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

### Vous trouverez ici des exemples de code en **Java**.

#### Voici un exemple de requête HTTP en Java pour obtenir la liste de toutes les listes externes :

```java

// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Définition des entêtes de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/lists")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### L'exemple suivant montre comment récupérer tous les détails d'une liste externe

```java

string listId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Définition des entêtes de la requête avec l'identifiant de la liste dans l'URL
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/lists/" . listId)
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### Voici un exemple de comment mettre à jour une liste externe

```java

string listId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Définition des entêtes et du corps (body) de la requête avec l'identifiant de la liste dans l'URL
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"items\": [\r\n    \"item1\", \"item2\", \"item3\"\r\n  ]\r\n}");
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/lists/" . listId)
  .put(body)
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

## Exemple de code Javascript (jQuery Ajax)

### Vous trouverez ici des exemples de code en **Javascript**.

#### Voici un exemple de requête HTTP en Javascript pour obtenir la liste de toutes les listes externes :

```javascript
// Définition des paramètres et des entêtes de la requête
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

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

#### L'exemple suivant montre comment récupérer tous les détails d'une liste externe

```javascript
var listId
// Définition des paramètres et des entêtes de la requête avec l'identifiant de la liste dans l'URL
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

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

#### Voici un exemple de comment mettre à jour une liste externe

```javascript
var listId
// Définition des paramètres et des entêtes de la requête avec l'identifiant de la liste dans l'URL
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
    // Ajout des données dans le corps de la requête
    processData: false,
    data: '{\r\n  "items": [\r\n    "test1", "test2", "test3"\r\n  ]\r\n}',
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
