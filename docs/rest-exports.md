---
id: exports
title: Exports
sidebar_label: Operations on exports
---

## Operations on exports

---

### 1 - Get the list of all available exports

---

Many functions allow you to export your data to several defined formats.
First of that functions is the one that send you the list of all available exports.

To do that operation, you have to send a `GET` request to : `https://www.kizeoforms.com/rest/v3/forms/{formId}/exports`.

If your request has no error, you will have a response like following :

```json
{
    "status": "ok",
    "exports": [
        // First available export
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
        // Second available export
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

### 2 - Export data of a form to CSV or Excel format

---

Among exports functions that you can use, there is a function that allows you to get the data of your forms to CSV or Excel format.  
Both of them are based on a `POST` request to send to : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/multiple/{format}` in which **{format}** can be **csv** or **excel**, depending on which format you want.

You will have to add in the request's body the id of the data that you want to export like following :

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

If the request correctly works, you will receive your data in the format you asked.

### 3 - Export a data from an export to PDF (From Word or Excel)

---

You can also export a data from a chosen export to PDF format (From Word or Excel).  
To do this action, you will have to send a `POST` request to : `https://www.kizeoforms.com/rest/v3/forms/{formId}/multiple_data/exports/{exportId}/pdf` where you replace **{formId}** by the id of the data form, and **{exportId}** by the id of the chosen export.

Don't forget to give the id of data in the request's body to JSON format like following :

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

If it correctly works, you will be able to download the PDF file.

### 4 - Export data to customized Word and Excel format</a>

---

There are finally two functions that allow you to export the data of a form to customized CSV and Excel format.
These two functions act like the functions described in 2, with new formats.  
The both consist to send a `POST` request to : `https://www.kizeoforms.com/rest/v3/forms/{formId}/data/multiple/{format}_custom` where **{formId}** is the id of the form where the data are and **{format}** can be **csv** or **excel**.

You will also have to add the id of data you want to export in the request's body to JSON format :

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
