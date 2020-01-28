---
id: deep-linking
title: Deep linking
---

## Définition

Les liens profonds permettent une façon claire et simple de diriger les utilisateurs vers un contenu spécifique sur l’application mobile Kizeo Forms.

## Différents points d’accès possibles

`kizeoforms://` ouvre l’application Kizeo Forms

`kizeoforms://login` accède à l’écran de login (dans le cas où l’utilsateur n’est pas encore connecté)

`kizeoforms://login/:code` accède à l’écran de login avec un code entreprise pré-rempli. `:code= doit être remplacé par le code entreprise souhaité

`kizeoforms://favorites` accède à la liste des formulaires favoris

`kizeoforms://settings` accède aux paramètres de l’application

`kizeoforms://forms` accède à la liste des formulaires

`kizeoforms://forms/:formId` entre en saisie de données avec `:formId` remplacé par l’ID de la définition de formulaire.

`kizeoforms://stats` accède aux statistiques

`kizeoforms://data` accède à la liste des données saisies

`kizeoforms://receipts` accède à la boîte de réception

## Création d’une donnée

`kizeoforms://forms/:formId?tag1=value1&tag2=value2&tag3=value3`
avec `:formId` remplacé par l’ID de la définition de formulaire.
`tag1`, `tag2`, `tag3`, etc... sont le noms de balise des champs de la définition de formulaire, `value1`, `value2`, `value3`, etc... sont les valeurs correspondantes qui seront saisies.

### Type de champs gérés

- choice
- slider
- text
- checkbox : 1, '1', true, 'true'. anything else is false
- datetime : YYYY-MM-DDThh:mm:ss or epoch Unix (number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT))
- date : YYYY-MM-DD or epoch Unix (number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT))
  time : hh:mm:ss or epoch Unix (number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT))
- textarea : use %5Cn for line-break (ex: My first line%5Cnand my second line

### Balises non gérées

Les noms de balises ci-dessous sont protégés et ne seront pas traités lors d’une pré-saisie par un lien profond.

- caption
- comingFromList
- formId
- scrollTo
