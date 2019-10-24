---
id: users-samples
title: Users samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### Vous trouverez ici des exemples de code en **PHP**.

#### [Si cURL n'est pas déjà préinstallé, voici un lien qui pourrait vous aider à l'installer.](rest-curl-install.md)

#### Voici un exemple de requête HTTP en PHP pour obtenir la liste de tous les utilisateurs :

```php

<?php

// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/users/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "authorization: YOUR_TOKEN",
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

#### L'exemple suivant montre comment créer un nouvel utilisateur

```php

<?php

$listId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/users',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Ajout des paramètres dans le corps de la requête
  CURLOPT_POSTFIELDS =>  "{\n  \"login\": \"string\",\n  \"password\": \"string\",\n  \"first_name\": \"string\",\n  \"last_name\": \"string\",\n  \"main_group_id\": -1,\n  \"admin\": boolean,\n  \"leader_group\": boolean,\n  \"form_user\": boolean\n}",
  CURLOPT_HTTPHEADER => array(
    "authorization: YOUR_TOKEN",
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

#### Voici un exemple de comment mettre à jour un utilisateur

```php

<?php

$userId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.kizeoforms.com/rest/v3/users/' . $userId,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // Définition des paramètres à modifier pour l'utilisateur dans le corps de la requête
  // Dans cet exemple, on retire à l'utilisateur ses droits "admin" et "form_user"
  CURLOPT_POSTFIELDS =>  "{\n  \"login\":\"string\",\n  \"admin\": false,\n  \"form_user\": false\n}",
  CURLOPT_HTTPHEADER => array(
    "authorization: YOUR_TOKEN",
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

#### Voici un exemple de requête HTTP en Java pour obtenir la liste de toutes les listes externes :

```java

// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Ajout des entêtes de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/users")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();
```

#### L'exemple suivant montre comment créer un nouvel utilisateur

```java

// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Ajout des paramètres dans le corps de la requête
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n  \"login\": \"string\",\r\n  \"password\": \"string\",\r\n  \"first_name\": \"string\",\r\n  \"last_name\": \"string\",\r\n  \"main_group_id\": -1,\r\n  \"admin\": boolean,\r\n  \"leader_group\": boolean,\r\n  \"form_user\": boolean\r\n}");

// Ajout des entêtes de la requête
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/users")
  .post(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

#### Voici un exemple de comment mettre à jour un utilisateur

```java

string userId;
// Initialisation de la requête
OkHttpClient client = new OkHttpClient();

// Définition des paramètres à modifier pour l'utilisateur dans le corps de la requête
// Dans cet exemple, on retire à l'utilisateur ses droits "admin" et "form_user"
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"login\":\"string\",\n  \"admin\": boolean,\n  \"form_user\": boolean\n}");
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/users/" . userId)
  .put(body)
  .addHeader("content-type", "application/json")
  .addHeader("authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

### Vous trouverez ici des exemples de code en **Javascript**.

#### Voici un exemple de requête HTTP en Javascript pour obtenir la liste de toutes les listes externes :

```javascript
// Initialisation de la requête et ajout des entêtes
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/users',
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

#### L'exemple suivant montre comment créer un nouvel utilisateur

```javascript
// Initialisation de la requête et ajout des entêtes
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/users',
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
    // Ajout des paramètres dans le corps de la requête
    processData: false,
    data:
        '{\r\n  "login": "string",\r\n  "password": "string",\r\n  "first_name": "string",\r\n  "last_name": "string",\r\n  "main_group_id": -1,\r\n  "admin": boolean,\r\n  "leader_group": boolean,\r\n  "form_user": boolean\r\n}',
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

#### Voici un exemple de comment mettre à jour un utilisateur

```javascript
var userId
// Initialisation et définition des entêtes de la requête
var settings = {
    async: true,
    crossDomain: true,
    url: 'https://www.kizeoforms.com/rest/v3/users/'.userId,
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
        authorization: 'YOUR_TOKEN',
        'cache-control': 'no-cache',
    },
    // Définition des paramètres à modifier pour l'utilisateur dans le corps de la requête
    // Dans cet exemple, on retire à l'utilisateur ses droits "admin" et "form_user"
    processData: false,
    data: '{\n  "login":"string",\n  "admin": boolean,\n  "form_user": boolean \n}',
}

// Envoi de la requête et affichage de la réponse
$.ajax(settings).done(function(response) {
    console.log(response)
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
