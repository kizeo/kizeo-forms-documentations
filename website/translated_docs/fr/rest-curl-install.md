---
id: curl-install
title: How to activate cURL (PHP)
---

Si vous n'arrivez pas à faire marcher nos exemples de code, et que vous recevez comme code d'erreur un exemple comme le suivant :

```php
Error : Call to undefined function curl_init(). // Ou une autre fonction dépendante de cURL
```

Pas de panique ! Nous vous recommandons d'effectuer les vérifications suivantes :

Si vous utilisez WAMP, vous devrez simplement activer l'extension en cliquant sur `php_curl` dans `PHP->PHP extensions`. Sinon, lisez la suite.

## Première étape : Activation de l'extension cURL de PHP

Premièrement, allez voir dans votre fichier `php.ini` et cherchez-y la ligne suivante :

```php
;extension=php_curl.dll
```

Lorsque vous l'avez trouvé, il faudra la décommenter, pour cela, supprimez le `";"` qui se trouve en début de ligne, et enregistrez le document.

## Deuxième étape : Modification de la variable d'environnement

Si cela n'a pas déjà été fait précédemment, vous aurez besoin, pour faire fonctionner cURL, de modifier la variable d'environnement `PATH`.

#### Si vous ne savez pas comment modifier cette variable, voici comment procéder (sous Windows 10) :

-   Ouvrir un explorateur de fichiers
-   Clic droit sur **Ce PC** puis clic gauche sur **Propriétés**
-   Cliquer sur **Paramètres Système Avancés**
-   Dans l'onglet **Paramètres système avancés**, cliquer sur **Variables d'environnement**
-   Sélectionner la variable nommée **Path** puis cliquer sur **Modifier**
-   Entrer le **chemin du dossier de PHP** puis cliquer sur **Ok**
-   Cliquer sur **Appliquer**

## Dernière étape : Relancer le service Apache

Après avoir relancé le service Apache pour qu'il prenne en compte les modifications que vous venez d'effectuer, la bibliothèque cURL devrait être opérationnelle.
