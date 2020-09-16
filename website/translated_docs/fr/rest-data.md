---
id: data
title: Data
sidebar_label: Operations on data
---

## 1 - Récupérer la liste de toutes les données d'un formulaire

---

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
  ...
]

```

Les différentes valeurs de _data_state_ sont les suivantes:

-   Poussée: les données poussées sont en attente de réception sur le mobile du destinataire (avion orange)
-   Récupérée: les données transmises ont été reçues sur le mobile du destinataire (flèche rouge)
-   Terminée: les données ont été enregistrées (coche verte ou noire)

## 2 - Lire les nouvelles données d'un formulaire

---

Vous avez aussi à disposition une fonction permettant de lire le contenu de toutes les données non lues d'un formulaire.  
Il s'agit d'envoyer une requête en `GET` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/readnew`.

Si tout s'est bien passé, vous recevrez une réponse du type :

```json
[
  {
      "id": "integer",
      "record_number": "integer",
      "form_id": "integer",
      "user_id": "integer",
      "create_time": "string",
      "update_time": "string",
      "update_user_id": "integer",
      "update_answer_time": "string",
      "start_time": "string",
      "end_time": "string",
      "direction": "string",
      "recipient_id": "integer",
      "history": "string",
      "form_unique_id": "integer",
      "origin_answer": "string",
      "answer_time": "string",
      "user_name": "string",
      "last_name": "string",
      "first_name": "string",
      "phone": "string",
      "email": "string",
      "login": "string",
      "update_user_name": "string",
      "recipient_name": "string",
      "fields": {
        "field_Id": {
          "value": "string",
          "type": "text",
          "subtype": "text",
          "hidden": "false",
          "time": {
            "string": "string"
          }
        },
        "..."
      }
  },
 ...
]
```

Après avoir lu les données, vous pourrez choisir de marquer ces données comme lues pour qu'elles ne soient plus affichées comme "nouvelles".
Pour cela, il faut utiliser une requête en `POST` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/markasread`.

Vous devrez cependant ajouter, dans le corps de la requête, les identifiants des données que vous souhaitez marquer comme "lues", de la façon suivante :

```json
{
    "data_ids": ["dataId1", "dataId2", "dataId3", "dataId4"]
}
```

## 3 - Lire les nouvelles données d'un formulaire pour une action

---

Cette fonction a le même comportement que la fonction *readnew*. La principale différence est que vous pouvez marquer les données lues pour une action donnée. Cela donne donc la possibilité de lire les mêmes données pour plusieurs actions différentes.
Il s'agit d'envoyer une requête en `GET` à l'URL : `https://kizeoforms.com/rest/v3/forms/{{formId}}/data/unread/:action/:limit?includeupdated`

Si tout s'est bien passé, vous recevrez une réponse du type :

```json

[
    {
        "_id": "string",
        "_record_number": "string",
        "_form_id": "string",
        "_user_id": "string",
        "_create_time": "string",
        "_update_time": "string",
        "_update_user_id": "string",
        "_update_answer_time": "string",
        "_start_time": "string",
        "_end_time": "string",
        "_direction": "string",
        "_recipient_id": "string",
        "_history": "string",
        "_form_unique_id": "string",
        "_origin_answer": "string",
        "_answer_time": "string",
        "_user_name": "string",
        "_update_user_name": "string",
        "_recipient_name": "string",
        "_transform_status": "string" ou null,
        "_can_edit": boolean,
        "_can_delete": boolean,
        "_contains_file": boolean,
        "_can_send_mail": boolean,
        "_pull_time": "string",
        "_user_ref1": "string",
        "..."
        "_user_ref20": "string",
        "_update_user_ref1": "string" ou null,
        "_update_user_ref2": "string" ou null,
        "..."
        "_update_user_ref20": "string" ou null,
        "_recipient_user_ref1": "string" ou null,
        "..."
        "_recipient_user_ref20": "string" ou null,
        "field": "string",
        "..."
    },
    ...
]

```

-   `:action`: nom de l'action sous forme de chaîne de caractères (string).
-   `:limit`: nombre maximum de données lues (optionnel)
-   `?includeupdated`: inclus des données marquées comme lues mais qui ont été modifiées depuis (optionnel)

Après avoir lu les données, vous pourrez choisir de marquer ces données comme lues pour qu'elles ne soient plus affichées comme "nouvelles".
Pour cela, il faut utiliser une requête en `POST` à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}/markasreadbyaction/:action`.  
Vous devrez cependant ajouter, dans le corps de la requête, les identifiants des données que vous souhaitez marquer comme "lues", de la façon suivante :

```json
{
    "data_ids": ["dataId1", "dataId2", "dataId3", "dataId4"]
}
```

## 4 - Recherche avancée dans les données d'un formulaire

---

Pour approfondir les recherches dans les données d'un formulaire, il existe une fonction de recherche avancée.
Pour utiliser cette dernière, vous devez envoyer une requête en `POST` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/advanced`.

Afin de définir les filtres que vous voulez utiliser pour rechercher précisément vos données, vous disposez des filtres au format suivant en **JSON**.

```json
{
    "global_filters": "string", // Une chaîne de caractères à rechercher dans la donnée
    "format": "basic", // Optionnel, par défaut `basic`
    "filters": [
        {
            "type": "OR", // Afin de rajouter un groupe de conditions `Ou inclusif`
            "components": [
                // L'ensemble des conditions du groupe
                {
                    "field": "string", // Le champ sur lequel repose la recherche avancée
                    "operator": "string", // L'opérateur utilisé pour comparer la donnée à la valeur de référence
                    "type": "simple",
                    "val": "string" // Valeur de référence pour la recherche avancée
                }
                // ...
            ]
        }
    ],
    "order": [
        {
            "col": "string", // Donnée sur laquelle seront classés les résultats
            "type": "string" // Type de la donnée de classement
        }
    ]
}
```

-   `format` : Vous pouvez utiliser le format `basic` (contient tous les détails) ou `simple` (plus simple mais moins exhaustif et ne contient pas les tableaux).
-   `operator` : Les différents opérateurs sont : `=`, `>`, `>=`, `<`, `<=`, `!=`, `like`, `notlike` (attention, sensible à la casse).
-   `field` : Correspond à la racine de la balise de chaque champ. Exemple : `_update_time` (date de mise-à-jour) et `_user_id` (id de l'utilisateur ayant saisi la donnée). Vous pouvez également rechercher sur des champs du formulaire définis par vous-même (`client` par exemple, ou bien `numero_de_contrat`).
-   `type` : Les différents types sont : `simple` (on recherche sur un champ hors d'un tableau), `dynamic_date` (pas encore documenté), `global` (on recherche dans l'ensemble de la donnée), `AND` et `OR` (permet de faire des conditions multiples dans l'attribut `components` comme présenté ci-dessus).

## 5 - Enregistrer une donnée sans enregistrer le formulaire complet

---

Vous avez aussi la possibilité d'envoyer des données sans avoir besoin d'enregistrer le formulaire, au cas où vous avez besoin d'ajouter d'autres données plus tard. On appelle cet envoi de donnée un envoi par **"push"**.  
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

Pour utiliser l'option planning :

```json
{
    "recipient_user_id": "integer",
    "planningStart": "AAAA-MM-JJ HH:MM",
    "planningEnd": "AAAA-MM-JJ HH:MM",
    "fields": {
        "field_id": {
            "value": "string"
        }
    }
}
```

