---
id: lists
title: Lists
sidebar_label: Operations on lists
---

## Operations on list 

The token of authorization allows you also to make operations on external lists you have access to.

### 1 - Get list of external lists

---

The first operation is used to get the list of all external lists on which you have any rights.
To do it, you have to send a `GET` request to : `https://www.kizeoforms.com/rest/v3/lists`.

In case of success of the request, you will have a response to following JSON format :

```json
{
    "status": "ok",
    "lists": [
        {
            "id": "listId1",
            "name": "listName1",
            "class": "",
            "update_time": null
        },
        {
            "id": "listId2",
            "name": "listName2",
            "class": "",
            "update_time": "date"
        }
    ]
}
```

### 2 - Get details of an external list

---

The previous command gives you the **id** of all external lists you can see. Now you will be able to ask all details of a list.  
If you want the details of an external list, you will have to send a `GET` request to : `https://www.kizeoforms.com/rest/v3/lists/{listId}` where listId is the id of the list you want to see.

If it correctly worked, you will have a response to that JSON format :

```json
{
    "status": "ok",
    "list": {
        "id": "listId",
        "name": "listName1",
        "class": "",
        "update_time": null,
        "items": ["key1:value1", "key2:value2", "key3:value3", "key4:value4", "key5:value5"]
    }
}
```

### 3 - Update an external list

---

Now you can see all details of a list, you may want to change its "items" array, that means you will change values of the list.
To make that operation, you will have to send a `PUT` request to : `https://www.kizeoforms.com/rest/v3/lists/{listId}`.

Warning : This function **delete all values in "items" array**, then put the new values in it.

You will have to add new values of the list in the request's body as following :

```json
{
    "items": ["string", "string", "string", "string", "string"]
}
```

If it correctly works, you will have a response like :

```json
{
    "status": "ok",
    "message": "Updated"
}
```
