---
id: users
title: Users
sidebar_label: Operations on users
---

## 1 - Récupérer la liste des utilisateurs

---

Vous avez aussi à disposition de nombreuses fonctions permettant des opérations sur les utilisateurs. La première d'entre elles permet simplement de récupérer la liste de tous les utilisateurs de votre entreprise.
Elle consiste en une requête HTTP en `GET` à envoyer à l'URL suivante : `https://www.kizeoforms.com/rest/v3/users`.

Si la requête a fonctionné, vous devriez obtenir un résultat comme suit :

```json

{
  "status": "ok",
  "data": {
    "users": [
      {
        "id": "userID1",
        "login": "string",
        "first_name": "string",
        "last_name": "string",
        "create_time": "date",
        "email": "mail@mail.com",
        "phone": "0000000000",
        "is_user": boolean,
        "is_admin": boolean,
        "is_super_admin": boolean,
        "is_current_user": boolean,
        "form_user": boolean,
        "admin": boolean,
        "leader_group": boolean,
        "store_validator": boolean,
        "allow_create_user": boolean,
        "allow_create_group": boolean,
        "allow_order": boolean,
        "user_ref1": null,
        "user_ref2": null,
        "user_ref3": null,
        "user_ref4": null,
        "user_ref5": null,
        "user_ref6": null,
        "user_ref7": null,
        "user_ref8": null,
        "user_ref9": null,
        "user_ref10": null,
        "user_ref11": null,
        "user_ref12": null,
        "user_ref13": null,
        "user_ref14": null,
        "user_ref15": null,
        "user_ref16": null,
        "user_ref17": null,
        "user_ref18": null,
        "user_ref19": null,
        "user_ref20": null,
        "main_group_id": null
      },
      {
          "id": "userID2",
          .
          .
          .
      }
    ]
  }
}

```

## 2 - Ajouter un utilisateur

---

Vous avez aussi la possibilité de créer un utilisateur en passant par une requête de type `POST` à l'URL : `https://www.kizeoforms.com/rest/v3/users`.
Vous devrez ajouter dans le corps de la requête les informations sous le format suivant :

```json
{
    "login": "string",
    "password": "string",
    "first_name": "string",
    "last_name": "string",
    "phone": "string",
    "email": "string",
    "admin": "boolean",
    "form_user": "boolean",
    "allow_form_menu": "boolean",
    "allow_externallist_menu": "boolean",
    "allow_user_menu": "boolean",
    "allow_application_menu": "boolean",
    "allow_export_menu": "boolean",
    "allow_data_menu": "boolean",
    "allow_account_menu": "boolean"
}
```

Si la requête que vous avez envoyé a fonctionné, vous obtiendrez la réponse suivante :

```json
{
    "status": "ok",
    "message": "Created",
    "data": {
        // Identifiant créé pour l'utilisateur
        "id": "userID"
    }
}
```

## 3 - Modifier les informations d'un utilisateur

---

En récupérant la liste de tous les utilisateurs, la première donnée que vous obtiendrez pour chacun d'entre eux est son identifiant (userID).
A partir de cet identifiant, vous pouvez modifier les informations relatives à un utilisateur.

Pour modifier les données d'un utilisateur, vous devrez envoyer une requête de type `PUT` à l'URL : `https://www.kizeoforms.com/rest/v3/users/{userID}`.

Vous devrez remplir le corps de la requête avec les informations suivantes, dont tous les attributs hors le login sont optionnels, vous n'aurez qu'à préciser les attributs que vous voulez modifier.

```json
{
    "login": "string", // Attribut obligatoire
    "password": "string",
    "first_name": "string",
    "last_name": "string",
    "phone": "string",
    "email": "string",
    "admin": "boolean",
    "form_user": "boolean",
    "allow_form_menu": "boolean",
    "allow_externallist_menu": "boolean",
    "allow_user_menu": "boolean",
    "allow_application_menu": "boolean",
    "allow_export_menu": "boolean",
    "allow_data_menu": "boolean",
    "allow_account_menu": "boolean"
}
```

En cas de succès, vous recevrez une réponse sous le format suivant :

```json
{
    "status": "ok",
    "message": "Updated"
}
```
