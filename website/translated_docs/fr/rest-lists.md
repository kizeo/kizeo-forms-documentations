---
id: lists
title: Lists
sidebar_label: Operations on lists
---

## Opérations sur les listes

Le token d'identification permet aussi de réaliser des opérations sur les listes externes auxquelles vous avez l'accès.

### 1 - Récupérer la liste des listes externes 
***

La première opération consiste à récupérer une liste de toutes les listes externes sur lesquelles vous avez des droits.
Cette opération consiste à envoyer une requête en `GET` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/lists`.

En cas de réussite de la requête HTTP, vous obtiendrez une réponse sous le format suivant :

```json

{
  "status": "ok",
  "lists": [
    // Première liste identifiée par son "id" et son "name"
    {
      "id": "listId1",
      "name": "listName1",
      "class": "",
      "update_time": null  // Date de modification à null si elle n'a jamais été modifiée après création
    },
    // Deuxième liste
    {
      "id": "listId2",
      "name": "listName2",
      "class": "",
      "update_time": "date"
    }
  ]
}

```

### 2 - Récupérer les détails d'une liste externe 
***

La commande précédente vous donnant les __id__ de toutes les listes que vous pouvez voir, vous pouvez maintenant demander tous les détails concernant une seule liste.
Pour faire cette opération, il faut envoyer une requête en `GET` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/lists/{listId}` où listId est l'identifiant de la liste dont on veut voir les détails.

Si la requête a été effectuée correctement, vous devriez recevoir une réponse sous le format suivant : 

```json 

{
  "status": "ok",
  "list": {
    "id": "listId",
    "name": "listName1",
    "class": "",
    "update_time": null,
    "items": [
      "key1:value1",
      "key2:value2",
      "key3:value3",
      "key4:value4",
      "key5:value5"
    ]
  }
}

```

### 3 - Mettre à jour une liste externe 
***

Maintenant que vous avez toutes les informations détaillées de votre liste, vous allez pouvoir mettre à jour le tableau "items" de cette liste.
Cette action est possible par l'envoi d'une requête en `PUT` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/lists/{listId}`.

Cependant attention, cette commande __efface toutes les valeurs__ dans le tableau "items" avant d'y insérer les nouvelles valeurs que vous lui donnez.

Vous devrez ajouter les nouvelles valeurs des items de la liste sous le format suivant dans le corps de la requête : 

```json

{
  "items": [
    "string",
    "string",
    "string",
    "string",
    "string"
  ]
}

```

Si l'opération a réussi, la réponse que vous obtiendrez sera la suivante : 

```json 

{
  "status": "ok",
  "message": "Updated"
}

```