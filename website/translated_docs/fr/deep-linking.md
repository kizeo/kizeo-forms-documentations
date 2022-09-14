---
id: deep-linking
title: Deep linking
---

## Définition

Les liens profonds permettent une façon claire et simple de diriger les utilisateurs vers un contenu spécifique sur l’application mobile Kizeo Forms.

## Différents points d’accès possibles

`kizeoforms://--/` ouvre l’application Kizeo Forms.

`kizeoforms://--/login` accède à l’écran de login.

`kizeoforms://--/login/{code}` accède à l’écran de login avec un code entreprise pré-rempli. `{code}` doit être remplacé par le code entreprise souhaité.

`kizeoforms://--/favorites` accède à la liste des formulaires favoris.

`kizeoforms://--/settings` accède aux paramètres de l’application.

`kizeoforms://--/forms` accède à la liste des formulaires.

`kizeoforms://--/forms/{formId}` entre en saisie de données avec `{formId}` remplacé par l’ID de la définition de formulaire.

`kizeoforms://--/data` accède à la liste des données saisies.

`kizeoforms://--/receipts` accède à la boîte de réception.

#### Remarques

- Dans le cas où l’utilisateur n’est pas encore connecté, les liens profonds lui permettront d’accèder uniquement à la page de login.

- Dans le cas où l’utilisateur est déjà connecté, les liens profonds ne lui permettront pas d’accèder à l’écran de login. L’utilisateur sera redirigé automatiquement vers l’écran principal.

## Création d’une donnée

`kizeoforms://--/forms/{formId}?tag1=value1&tag2=value2&tag3=value3`
avec `{formId}` remplacé par l’ID de la définition de formulaire.
`tag1`, `tag2`, `tag3`, etc... sont les noms de balise des champs de la définition de formulaire, `value1`, `value2`, `value3`, etc... sont les valeurs correspondantes qui seront saisies.

### Type de champs gérés

- list : code_list
- choice
- slider
- text
- checkbox : 1, '1', true, 'true'. anything else is false
- datetime : YYYY-MM-DDThh:mm:ss ou epoch Unix (nombre de secondes écoulées depuis le 1er janvier 1970 (minuit UTC/GMT))
- date : YYYY-MM-DD ou epoch Unix (nombre de secondes écoulées depuis le 1er janvier 1970 (minuit UTC/GMT))
- time : hh:mm:ss ou epoch Unix (nombre de secondes écoulées depuis le 1er janvier 1970 (minuit UTC/GMT))
- textarea : utiliser %5Cn pour le saut de ligne (ex : Ma première ligne%5Cnet ma deuxième ligne)
- geolocation : latitude,longitude,altitude
- barcode
- nfc tag

### Balises non gérées

Les noms de balises ci-dessous sont protégés et ne seront pas traités lors d’une pré-saisie par un lien profond.

- caption
- comingFromList
- formId
- scrollTo
