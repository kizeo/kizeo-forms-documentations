---
id: data
title: Data
sidebar_label: Operations on data
---

## 1 - Récupérer la liste de toutes les données d'un formulaire
***
Il existe deux fonctions permettant de récupérer simplement les données d'un formulaire.
La première permet de n'afficher que les données non lues du formulaire, et consiste en une requête en `GET` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data`.  
La deuxième permet en revanche d'afficher toutes les données du formulaire, et consiste en une requête en `GET` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/all`.  

Dans ces deux fonctions, si la requête est lancée avec succès, vous recevrez une réponse sous le format suivant : 
```json

[
  {
    "id": "dataId1",
    "record_number": "integer",
    "form_id": "integer",
    "user_id": "integer",
    "create_time": "date",
    "answer_time": "date",
    "direction": "data_state"
  },
    {
    "id": "dataId2",
    "record_number": "integer",
    "form_id": "integer",
    "user_id": "integer",
    "create_time": "date",
    "answer_time": "date",
    "direction": "data_state"
  },
  .
  .
  .
]

```
Les différentes valeurs de * data_state * sont les suivantes:
   + Poussé: les données poussées sont en attente de réception sur le mobile du destinataire (avion orange)
   + Récupéré: les données transmises ont été reçues sur le mobile du destinataire (flèche rouge)
   + Terminé: les données ont été enregistrées (coche verte ou noire)

## 2 - Lire les nouvelles données d'un formulaire
***
Vous avez aussi à disposition une fonction permettant de lire le contenu de toutes les données non lues d'un formulaire.  
Il s'agit d'envoyer une requête en `GET` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/readnew`.

Si tout s'est bien passé, vous recevrez une réponse du type : 

```json

[
  {
    "id": "dataId",
    "form_id": "integer",
    "user_id": "integer",
    "create_time": "date",
    "answer_time": "date"
  }
]

```

Après avoir lu les données, vous pourrez choisir de marquer ces données comme lues pour qu'elles ne soient plus affichées comme "nouvelles".
Pour cela, il faut utiliser une requête en `POST` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/markasread`.

Vous devrez cependant ajouter, dans le corps de la requête, les identifiants des données que vous souhaitez marquer comme "lues", de la façon suivante :

```json

{
  "data_ids": [
    "dataId1",
    "dataId2",
    "dataId3",
    "dataId4"
  ]
}

```

## 3 - Recherche avancée dans les données d'un formulaire
***
Pour approfondir les recherches dans les données d'un formulaire, il existe une fonction de recherche avancée.
Pour utiliser cette dernière, vous devez envoyer une requête en `POST` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/advanced`.

Afin de définir les filtres que vous voulez utiliser pour rechercher précisément vos données, vous disposez des filtres au format suivant en __JSON__.

```json

{
  "global_filters": "string",   // Une chaîne de caractères à rechercher dans la donnée
  "format": "basic",            // Optionnel, par défaut `basic`
  "filters": [
    {
        "type": "OR",           // Afin de rajouter un groupe de conditions `Ou inclusif`
        "components": [         // L'ensemble des conditions du groupe
            {
                "field": "string",        // Le champ sur lequel repose la recherche avancée
                "operator": "string",     // L'opérateur utilisé pour comparer la donnée à la valeur de référence
                "type": "simple",
                "val": "string"           // Valeur de référence pour la recherche avancée
            },
            // ...
        ]
    }
  ],
  "order": [
    {
      "col": "string",          // Donnée sur laquelle seront classés les résultats
      "type": "string"          // Type de la donnée de classement
    }
  ]
}

```

- `format` : Vous pouvez utiliser le format `basic` (contient tous les détails) ou `simple` (plus simple mais moins exhaustif et ne contient pas les tableaux). 
- `operator` : Les différents opérateurs sont : `=`, `>`, `>=`, `<`, `<=`, `!=`, `like`, `notlike` (attention, sensible à la casse). 
- `field` : Correspond à la racine de la balise de chaque champ. Exemple : `_update_time` (date de mise-à-jour) et `_user_id` (id de l'utilisateur ayant saisi la donnée). Vous pouvez également rechercher sur des champs du formulaire définis par vous-même (`client` par exemple, ou bien `numero_de_contrat`).
- `type` : Les différents types sont : `simple` (on recherche sur un champ hors d'un tableau), `dynamic_date` (pas encore documenté), `global` (on recherche dans l'ensemble de la donnée), `AND` et `OR` (permet de faire des conditions multiples dans l'attribut `components` comme présenté ci-dessus).

## 4 - Enregistrer une donnée sans enregistrer le formulaire complet
***
Vous avez aussi la possibilité d'envoyer des données sans avoir besoin d'enregistrer le formulaire, au cas où vous avez besoin d'ajouter d'autres données plus tard. On appelle cet envoi de donnée un envoi par __"push"__.  
Pour réaliser cette opération, il vous faut envoyer une requête en `POST` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/push` en remplaçant {formId} par l'identifiant du formulaire.

Il vous faudra aussi ajouter dans le corps de la requête les données à transmettre de la façon qui suit : 

```json

{
  "recipient_user_id": "integer",
  "fields": {
    "field_id": {
      "value": "string"
    }
  }
}

```
