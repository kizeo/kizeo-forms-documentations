---
id: users
title: Users
sidebar_label: Operations on users
---

## Operations on users

### 1 - Get list of users

---

You have many functions available to allow operations on users. First of them simply gives you the list of all users of your company.
To do this, you have to send a `GET` request to : `https://www.kizeoforms.com/rest/v3/users`.

If it correctly worked, you will have a response like following :

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

### 2 - Add a user

---

You also have the possibility to create a new user by throwing a `POST` request to : `https://www.kizeoforms.com/rest/v3/users`.
You have to add informations to the following format in request's body :

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

If the request was correctly sent you will get a response as following :

```json
{
    "status": "ok",
    "message": "Created",
    "data": {
        // Id created for the user
        "id": "userID"
    }
}
```

### 3 - Update a user

---

When you get the list of all users, the first data you receive for each of them is his ID (userID).
With this ID you will be able to modify the informations of each user.

To update a user, you have to send a `PUT` to : `https://www.kizeoforms.com/rest/v3/users/{userID}`.

You also have to put in the request's body the following informations, that are all optionals but login that is required.

```json
{
    "login": "string", // Required attribute
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

In case of success, you will receive a response to the following format :

```json
{
    "status": "ok",
    "message": "Updated"
}
```
