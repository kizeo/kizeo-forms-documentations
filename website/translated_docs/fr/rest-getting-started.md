---
id: restv3
title: Rest V3
---

## Commencer à utiliser le Web Service (REST V3)
***
### Première étape : Les bases
Tout d'abord, avant d'utiliser notre Web Service, vous devez être conscient que l'utilisation de celui-ci nécessite des compétences de développement en interne dans votre entreprise. L'avantage d'un Web Service (**RESTful**) est de pouvoir être utilisé facilement à l'aide de n'importe quel langage capable d'effectuer des requêtes *HTTPS* vers nos serveurs contenant des données `json`. Voici une liste non-exhaustive de langages utilisables :

+ C#
+ C++
+ Go
+ Java
+ Javascript
+ Objective C
+ Perl
+ PHP
+ Python
+ Ruby
+ etc...


Ensuite, voici les différents liens qui vous seront utiles afin de développer votre application avec le Web Service de Kizeo Forms :

+ **Documentation Swagger :** [https://www.kizeoforms.com/rest/v3/doc](https://www.kizeoforms.com/rest/v3/doc) (Cette présentation des fonctions permet de tester facilement les fonctionnalités du Web Service)
+ **Racine du Web Service :** `https://www.kizeoforms.com/rest/v3/` (par exemple, pour appeler la fonction `login`, il faudra faire appel à `https://www.kizeoforms.com/rest/v3/login`)

### Récupération du Token
La première fonction du Web Service a utilisé est la fonction `POST /login`, celle-ci permet de récupérer le *token* qui sera nécessaire pour utiliser toutes les autres fonctions. Vous devez au préalable vous munir d'identifiants administrateur Kizeo.

Vous devez ensuite envoyer ces informations sous forme de `JSON` en `POST` à l'adresse suivante `https://www.kizeoforms.com/rest/v3/login`.

```javascript
{
  "user": "YOUR_USERNAME",
  "password": "YOUR_PASSWORD",
  "company": "YOUR_COMPANY_CODE"
}
```
#### Attention, lorsque vous envoyez des informations en `json`, n'oubliez pas de préciser dans les entêtes de votre requête
```
Content-Type: application/json
```
En cas de réussite vous recevrez une réponse de cette forme :
```javascript
{
  "status": "ok",
  "message": "",
  "data": {
    "token": "YOUR_TOKEN" // Attention, cela permet d'accéder à votre application pendant 3 jours. Gardez ce token secret
    // Valable pendant 3 jours, à renouveler régulièrement
  }
}
```
En cas d'erreur d'identifiants, vous recevrez une réponse de cette forme :
```javascript
{
  "status": "error",
  "message": "An error occurred. Please try again"
}
```

Pour accéder à toutes les autres fonctions, vous devez joindre la ligne ci-dessous en en-tête de vos requêtes *HTTPS* :
```
Authorization: YOUR_TOKEN
```
