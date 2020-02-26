---
id: data
title: Data
sidebar_label: Operations on data
---
## Operations on forms data

### 1 - Get list of all data of a form
***

There are two functions to get simply all data of a form.
With the first one, you will get only unread data of a form. To use it you have to send a `GET` request to: `https://www.kizeoforms.com/rest/v3/forms/{formId}/data`.  
The second one gives you all data of a form, even read data, and is a `GET` request that you send to: `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/all`.  

For these two functions, if they correctly worked, you will receive a response like following: 
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
The different value of *data_state* are as follows:
  + Pushed: Pushed data is awaiting reception on the recipient's mobile (orange plane)
  + Retrieved: Pushed data has been received on the recipient's mobile (red arrow)
  + Finished: Data has been saved (green or black check)


### 2 - Read new data of a form
***
You also have a function that allows you to read the content of all unread data of a given form.  
You have to send a `GET` request to: `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/readnew`.  

If it worked, you will have a response like: 

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

After you read that data, you could want them to disappear from unread data list. To do this, you have to send a `POST` request to: `https://www.kizeoforms.com/rest/v3/forms/{formId}/markasread`.  
Don't forget to add the id of data you want to mark as read in the request's body, the same way as following:


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

### 3 - Advanced research in form data
***
To go further in your researches of datas, you have a function of advanced research.
To use it, you will send a `POST`request to: `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/advanced`.  

To define precisely your research, you have to add in your request's body the following filters in __JSON__ format.  

```json

{
  "global_filters": "string",   // A string to search in data
  "filters": [
    {
        "type": "OR",           // An `OR inclusive` group of conditions
        "components": [         // The group's conditions
            {
                "field": "string",        // Field that will be filtered
                "operator": "string",     // Comparison operator
                "type": "simple",
                "val": "string"           // Reference value for the research
            },
            // ...
        ]
    }
  ],
  "order": [
    {
      "col": "string",          // Data on which data will be ordered
      "type": "string"          // Col Type
    }
  ]
}

```

- `format` : You can either use the format `basic` (with all the details about each entry) or `simple` (less exhaustive, but much more time efficient if you want to retrieve IDs only).
- `operator` : The different operators available are: `=`, `>`, `>=`, `<`, `<=`, `!=`, `like`, `notlike` (caution, it is case sensitive).
- `field` : The root of each field's markers. Sample: `_update_time` (update time of your entry) or `_user_id` (the ID of the user sending the entry). You can also search over a specific field in the form (`customer` for instance, or `contract_number`) using the identifier of the field (from the help menu of each form on the form edition page).
- `type` : The components/filters' types are: `simple` (searching on a field outside of a table), `dynamic_date` (not yet documented), `global` (searching over the whole entry), `AND` and `OR` (for complex conditions use the attributes `components` as shown above).

### 4 - Push a data
***
You also have the possibility to send data without saving the form, in case you have to add other data later. It is called a __"push"__.
To do that operation, you have to send a `POST` request to: `https://www.kizeoforms.com/rest/v3/forms/{formId}/push` replacing {formId} by the id of the form.

Don't forget to add data in the request's body as following: 

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
