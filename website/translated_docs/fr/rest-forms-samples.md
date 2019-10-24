---
id: forms-samples
title: Forms samples
sidebar_label: Samples
---

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->

### Vous trouverez ici des exemples de code en __PHP__.
#### [Si cURL n'est pas déjà préinstallé, voici un lien qui pourrait vous aider à l'installer.](rest-curl-install.md)

#### Voici un exemple de requête HTTP en PHP pour obtenir la liste de tous les formulaires :

```php

<?php

// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres 
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


#### L'exemple suivant montre comment obtenir les informations détaillées d'un formulaire à partir de son iD :


```php

<?php

$formId;
// Initialisation de la requête
$curl = curl_init();

// Définition des entêtes et paramètres 
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

### Vous trouverez ici des exemples de code en __Java__.


#### Voici un exemple de requête HTTP en Java pour obtenir la liste de tous les formulaires :
```java

OkHttpClient client = new OkHttpClient();

// Définition des paramètres de la requête 
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/")
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête et affichage de la réponse
Response response = client.newCall(request).execute();

```


#### L'exemple suivant montre comment obtenir les informations détaillées d'un formulaire à partir de son iD :

```java

string formId;
OkHttpClient client = new OkHttpClient();

// Définition des paramètres de la requête 
Request request = new Request.Builder()
  .url("https://www.kizeoforms.com/rest/v3/forms/" . formId)
  .get()
  .addHeader("content-type", "application/json")
  .addHeader("Authorization", "YOUR_TOKEN")
  .addHeader("cache-control", "no-cache")
  .build();

// Envoi de la requête et affichage de la réponse
Response response = client.newCall(request).execute();

```

<!--JavaScript-->

### Vous trouverez ici des exemples de code en __Javascript__.


#### Voici un exemple de requête HTTP en Javascript pour obtenir la liste de tous les formulaires :

```javascript

// Définition des paramètres de la requête HTTP
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  }
}

// Envoi de la requête et affichage en console de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);
});

```


#### L'exemple suivant montre comment obtenir les informations détaillées d'un formulaire à partir de son iD :

```javascript

var formId;
// Définition des paramètres de la requête HTTP
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.kizeoforms.com/rest/v3/forms/" . formId,
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "Authorization": "YOUR_TOKEN",
    "cache-control": "no-cache",
  }
}

// Envoi de la requête et affichage en console de la réponse
$.ajax(settings).done(function (response) {
  console.log(response);

});
```

<!--END_DOCUSAURUS_CODE_TABS-->
