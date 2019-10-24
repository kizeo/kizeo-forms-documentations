---
id: exports
title: Exports
sidebar_label: Operations on exports
---

## 1 - Récupérer la liste de tous les exports disponibles
***
De nombreuses fonctions sont disponibles pour vous permettre d'exporter vos données dans plusieurs formats définis.
La première de ces fonctions est logiquement celle qui permet de récupérer la liste des exports disponibles.  

Pour faire cette opération, il suffit d'envoyer une requête en `GET` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/exports`.

Si la requête ne contient pas d'erreur, vous devez recevoir une réponse sous la forme : 

```json

{
  "status": "ok",
  "exports": [
    // Premier export disponible
    {
      "form_id": "formId",
      "name": "form_name",
      "type": "word",
      "json": {
        "exportName": "export_name",
        "file": "export_file_name.docx",
        "showInvisible": boolean
      },
      "is_default": boolean,
      "deleted": boolean,
      "computedNames": {
        "word": "file_name",
        "pdf": "file_name (PDF)"
      },
      "id": "exportId1"
    },
    // Deuxième export disponible
    {
      "form_id": "formId",
      "name": "form_name",
      "type": "word",
      "json": {
        "exportName": "export_name",
        "file": "file_name.docx",
        "showInvisible": boolean
      },
      "is_default": boolean,
      "deleted": boolean,
      "computedNames": {
        "word": "file_name",
        "pdf": "file_name (PDF)"
      },
      "id": "exportId2"
    }
  ]
}

```

## 2 - Récupérer les données d'un formulaire au format CSV et Excel liste
***
Parmi les fonctions d'export disponibles, il existe une fonction qui permet de récupérer les données d'un formulaire au format CSV, et son équivalente permettant de récupérer les données au format Excel liste.
Ces deux fonctions consistent à envoyer une requête en `POST`, à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/multiple/{format}`, en remplaçant **{format}** par __csv__ si vous voulez vos données au format CSV, ou par __excel__ si vous voulez vos données au format Excel.

Dans le corps de la requête il faudra préciser l'identifiant de chacune des données que vous souhaitez exporter au format **JSON** suivant :

```json

{
  "data_ids": [
    "dataId1",
    "dataId2",
    "dataId3",
    ...
  ]
}

```

Si la requête est effectuée correctement, vous recevrez vos données au format souhaité.

## 3 - Exporter une donnée de l'export choisi en PDF
***
En plus de pouvoir exporter les données au format CSV et Excel liste, vous pouvez aussi choisir d'exporter une ou plusieurs données de votre formulaire vers un export choisi parmi les exports disponibles (cf. 1) au format PDF standard.  

Pour ce faire, vous devrez envoyer une requête en `POST` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/multiple_data/exports/{exportId}/pdf` où **{formId}** est à remplacer par l'identifiant du formulaire contenant la donnée, et **{exportId}** par l'identifiant de l'export choisi.

Vous devrez préciser dans le corps de la requête les identifiants des données que vous voulez exporter, au format __JSON__ suivant :

```json

{
  "data_ids": [
    "dataId1",
    "dataId2",
    "dataId3",
    ...
  ]
}

```

Si la requête aboutit, une fenêtre s'ouvrira pour vous permettre d'enregistrer le fichier PDF obtenu.


## 4 - Exporter des données en CSV et Excel liste personnalisés
***
Il existe enfin deux fonctions permettant d'exporter les données d'un formulaire dans des formats CSV et Excel personnalisés.
Ces deux fonctions se comportent comme les fonctions présentées en 2, à la différence qu'elles renvoient les informations sous des formats personnalisés.  
Elles consistent toutes deux à envoyer une requête en `POST` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/multiple/{format}_custom` en remplaçant __{formId}__ par l'identifiant du formulaire où se trouvent les données à exporter, et __{format}__ par **csv** ou par **excel** selon le format que vous désirez.    


N'oubliez pas, comme pour les fonctions précédentes, de préciser dans le corps de la requête les identifiants des données au format JSON suivant : 

```json

{
  "data_ids": [
    "dataId1",
    "dataId2",
    "dataId3",
    ...
  ]
}

```
