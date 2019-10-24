---
id: forms
title: Forms
sidebar_label: Operations on forms
---

## Opérations sur les formulaires

### 1 - Récupération de la liste des formulaires

---

Maintenant que vous savez vous identifier pour récupérer un _token_, vous allez pouvoir vous en servir pour récupérer la liste de tous les formulaires auxquels vous avez accès.

Pour utiliser ce token, n'oubliez pas de le préciser dans tous vos entêtes de requêtes, de la façon suivante :

```javascript
Authorization: YOUR_TOKEN // YOUR_TOKEN est à remplacer par le token obtenu par la fonction login
```

Pour ce faire, vous avez à disposition la fonction `GET /forms`, qui ne demande pas d'autre paramètre que le _token_ obtenu précédemment pour vous identifier.  
Il vous faut donc envoyer une requête `GET` à l'URL suivante : `https://www.kizeoforms.com/rest/v3/forms`

Si tout se passe bien, vous devriez avoir une réponse sous la forme :

```json
[
    {
        // Premier formulaire
        "id_1": "integer",
        "name_1": "string"
    },
    {
        // Deuxième formulaire
        "id_2": "integer",
        "name_2": "string"
    }
    // ...
]
```

### 2 - Récupération des informations détaillées d'un formulaire

---

La fonction précédente permet d'obtenir les **id** des différents formulaires. Ce sont ces **id** qui nous permettent de sélectionner un formulaire en particulier pour en obtenir toutes les informations détaillées.

La fonction à utiliser est une requête en `GET` à envoyer à l'URL : `https://www.kizeoforms.com/rest/v3/forms/{formId}` où _formId_ est l'**id** du formulaire dont on veut les informations.

La fonction doit normalement renvoyer un résultat sous la forme :

```json
{
    "status": "ok",
    "message": "",
    "form": {
        "id": "form_id",
        "name": "form_name",
        // Un tableau "fields" regroupant tous les champs du formulaire représentés par leur field_name
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
            }
        },
        // Un tableau "exports" listant les options d'export du formulaire
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
        // Un tableau "options" représentant toutes les options associées à ce formulaire
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
        // Un tableau "currentUserRights" regroupant les droits de l'utilisateur courant sur le formulaire
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
