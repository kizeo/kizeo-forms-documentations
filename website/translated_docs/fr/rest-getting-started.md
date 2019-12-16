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


Pour accéder à toutes les autres fonctions, vous devez joindre la ligne ci-dessous en en-tête de vos requêtes *HTTPS* :
```
Authorization: YOUR_TOKEN
```
