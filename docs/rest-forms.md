---
id: forms
title: Forms
sidebar_label: Operations on forms
---

## Operations on forms

### 1 - Get list of all forms
***
Now that you know how to identify and get a token, you will be able to use it to get the list of all the forms that you have access to.  
To use this token, don't forget to give it in all of your request's headers as the following way : 

```javascript

Authorization: YOUR_TOKEN 

```

To get the list of all forms, you have to send a `GET` request that does not need any other parameter than your token of authorization.
You will send your request to the following URL : `https://www.kizeoforms.com/rest/v3/forms`.  

If it correctly worked, you will receive a response like :   

```json
[
  { // First form
    "id_1": "integer",
    "name_1": "string"
  },
  { // Second form
    "id_2": "integer",
    "name_2": "string"
  },
  // ...
]
```   


### 2 - How to get details of a form
***
The previous function allows you to get the ids of all the form you have access to. With these ids you will be able to select a form among the others to get its details.
To use this function you have to send a `GET` request to : `https://www.kizeoforms.com/rest/v3/forms/{formId}` where *formId* is the id of the form you have selected.  

This function should send a response as following : 

```json
{
  "status": "ok",
  "message": "",
  "form": {
    "id": "form_id",
    "name": "form_name",
    
    "fields": {
      "field_name": {
        "caption": "string",
        "type": "string",
        "required": boolean,
        "word_del_line_if_empty": boolean,
        "subtype": "string",
        "default": "",
        "min": "",
        "max": "",
        "list_id": "",
        "visible_formula": "",
        "visible_formula_json": "",
        "autocomplete": boolean,
        "same_line": boolean,
        "weight": "int",
        "read_only_for_modification": boolean,
        "dont_reinit_when_saving_line": boolean,
        "auto_format": "string",
        "help": "",
        "icon": "",
        "regex": "",
        "regex_simple": "",
        "regex_help": "",
        "color": ""
      },
    },
    
    "exports": [
      {
        "form_id": "form_id",
        "name": "form_name",
        "type": "word",
        "json": {
          "exportName": "form_name",
          "file": "fileName.docx",
          "showInvisible": boolean
        },
        "is_default": boolean,
        "deleted": boolean,
        "computedNames": {
          "word": "form_name",
          "pdf": "form_name (PDF)"
        },
        "id": "int"
      },
      {
        "form_id": "form_id",
        "name": "form_name",
        "type": "word",
        "json": {
          "exportName": "form_name 22",
          "file": "fileName.docx",
          "showInvisible": boolean
        },
        "is_default": boolean,
        "deleted": boolean,
        "computedNames": {
          "word": "Test",
          "pdf": "Test (PDF)"
        },
        "id": "int"
      }
    ],
    
    "options": {
      "checkbox_output_false_value": "Non",
      "checkbox_output_true_value": "Oui",
      "all_users_see_histo": boolean,
      "all_users_update_histo": boolean,
      "has_excel_unit_file": boolean,
      "excel_unit_file": null,
      "has_word_unit_file": boolean,
      "word_unit_file": "fileName.docx",
      "import_csv_template": "",
      "import_template_json": "",
      "export_excel_template": "_login;_answer_time;email;tableau#champ_de_saisie;tableau#liste",
      "export_csv_template": "",
      "unallowedUsers": "userId1,userId2",
      "allowedUsers": "userId3,userId4",
      "allow_modify": boolean,
      "allow_modify_all_users": boolean,
      "summary_title": "",
      "summary_subtitle": "",
      "allow_push": boolean,
      "allow_real_push": boolean,
      "check_mandatory": boolean,
      "order_direction": "",
      "help_form": "",
      "order": "",
      "date_planner": "",
      "latitude": "",
      "longitude": "",
      "group": "",
      "secure": boolean,
      "sms_number": "",
      "medias": "",
      "tagnfc_before_save": boolean,
      "tagnfc_content": ""
    },
   
    "currentUserRights": {
      "new": boolean,
      "save": boolean,
      "save_backoffice": boolean,
      "push": boolean,
      "push_backoffice": boolean
    }
  }
}
```
