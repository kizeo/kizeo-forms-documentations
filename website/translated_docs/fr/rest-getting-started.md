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
+ **Racine du Web Service :** `https://www.kizeoforms.com/rest/v3/` (par exemple, pour appeler la fonction `forms`, il faudra faire appel à `https://www.kizeoforms.com/rest/v3/forms`)

### Récupération du Token


Pour accéder à toutes les fonctions, vous devez joindre la ligne ci-dessous en en-tête de vos requêtes *HTTPS* :
```
Authorization: YOUR_TOKEN
```
Pour obtenir le Token, vous devez en faire la demande par mail auprès de notre service support (support@kizeo.com). La demande doit émaner d’un administrateur ou d'un chef de groupe (l’adresse mail de l’émetteur doit correspondre à l’adresse mail dans Kizeo Forms). Dans cette demande, il doit être spécifié :
+ Le code entreprise
+ L’identifiant pour lequel le Token doit être créé
 