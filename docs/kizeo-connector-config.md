---
id: configuration
title: Configuration
sidebar_label: Configuration
---

In order to set up the connector, you need to write a *JSON* file. This file contains sensitive information such as the login information to Kizeo Forms and your database. You can show sample settings using the links above.
***
## Authentication `auth`
The first part of the set up deals with Kizeo IDs. A good practive is to use a **dedicated admin account** for the connector. The three IDs required are the same as those used in order to log in to your back-office (`www.kizeoforms.com`).
The config must look like this :

```javascript
{
    "auth" : {
        "company": "COMPANY_CODE",
        "password": "YOUR_PASSWORD",
        "user": "YOUR_LOGIN"
    },
    //...
}
```
### Properties
* `company` (`string`) :
The company code shared with all your users
* `user` (`string`) :
The user's login
* `password` (`string`) :
The user's password
***
### Global properties
You need to provide some global settings :

- `autoCreate` (true|false) : If this is set to `true`, each time a table or a column is missing in the database according to your config, it will attemp to create it.
- `loop` (true|false) : If this is set to  `true`, the connector will loop after the end of the process (with a 2 minutes break).

```javascript
{
   //...s
   "autoCreate" : false,
   "loop" : true,
   "protocol": "https",
   "server": "www.kizeoforms.com",
   "restRoot": "rest/v3",
   // Please do not touch the others options if Kizeo did not tell you to do so.
   // ...
}
```
***
## Forms export definition `forms`
After defining the admin account used for the export, you need to explain which forms you need to import in your database. This is done using the `forms` property. This property is an *array* with an element for each form you need to export.

### Properties
#### `database` (`string`) :
JDBC connection string. Depends on your DBMS.

+ MySQL : `jdbc:mysql://localhost:3306/DB_NAME?user=USER&password=PASSWORD`
+ PostgreSQL : `jdbc:postgresql://localhost:3306/DB_NAME?user=USER&password=PASSWORD`
+ Microsoft SQL Server : `jdbc:sqlserver://127.0.0.1;user=USER;password=PASSWORD;databaseName=DB_NAME;`
+ No database (in order to export medias and PDFs only) : stay empty.

#### `driver` (`string`) :
The driver used depending on your DBMS.

+ MySQL : `mysql`
+ PostgreSQL : `postgresql`
+ Microsoft SQL Server : `mssql`

#### `fields` (*Array* of `FIELD`) :
The settings for each fields to export (See `FIELD` for more details).

#### `form_id` (`string`) :
Form ID, can be obtain using the [Web Service RESTfull](http://www.kizeoforms.com/rest/v3)

#### `medias_path` (`string`) *optional*:
Path of the directory where you want to save medias (*optional*).

#### `standard_pdf_path` (`string`) *optional*:
Path of the directory where you want to save standard PDFs (*optional*).

#### `custom_pdf_path` (`string`) *optional*:
Path of the directory where you want to save custom PDFs (*optional*).

#### `table` (`string`) :
Name of the database table where you want to store information from this form (except Kizeo Forms tables).

### Sample

```javascript
{
   //...
   "forms" : [
      // One for each form definition
      // Can not deals with the same form multiple times
      {
         "database": "jdbc:mysql://localhost:3306/DB_NAME?user=USER&password=PASSWORD", // MySql
         // "database": "jdbc:postgresql://localhost:3306/DB_NAME?user=USER&password=PASSWORD", // PG SQl
         // "database": "jdbc:sqlserver://127.0.0.1;user=USER;password=PASSWORD;databaseName=DB_NAME;", // MS SQL Server
         // "database": "", // If you only want to get media/PDFs
         "driver": "mysql",
         "fields" : [
            // See bellow
         ],
         "form_id": "1000", // The form ID can be see in the URL of the page where you modify forms.
         "medias_path": "D:\\my_media\\", // The folder to store media
         "standard_pdf_path": "D:\\my_pdf\\", // The folder to store PDFs
         "custom_pdf_path": "D:\\my_custom_pdf\\", // The folder to store customer PDFs
         "table": "table_name" // The database table

      },
   ],
   //...
}
```

***
## Field `FIELD`
Represents a field of the form to export. Can also represents a table within the form.

### Properties (Common)
#### `source` (`string`) :
It is the Kizeo Forms ID of the field. You can get it using the create/modify form page, going to each fields properties (or in the *Information* menu in your form's options).

**Info :** In order to have the Kizeo Forms's ID of the data, you must put `@@id@@`. **You must have this field in each of your forms' fields list).**

### Properties (Field)
#### `target` (`string`) :
This is the database column where you want to store the information about this field.
#### `type` (`string` : `'int'|'text'`) :
This is only used when `autoCreate` is `true`. It allows you to specify which type of column to create.

### Sample
```javascript
{
   // ...
   "forms": [{
      // ...
      "fields": [{
         "source": "@@id@@",
         "target": "id",
         "type": "int"
      }, {
         "source": "case_a_cocher",
         "target": "has_accepted",
         "type": "text"
      }]
      // ...
   }]
}
```
### Properties (Table)
#### `table` (`string`) :
This is the name of the database table storing information about this Kizeo Forms table.
#### `parent_target` (`string`) :
This is the column of the database table corresponding to the main data ID. Thanks to this column, you can identify the origin of each line of this table.
#### `fields` (Array of `FIELD`) :
List of the table's fields to import
#### `line_target` (`string`) *optional* :
This is the column which store the lines' number.

### Sample
```javascript
{
   // ...
   "forms": [{
      // ...
      "fields": [{
         "source": "table1",
         "table": "options_choose",
         "parent_target": "main_id",
         "fields": [{
            "source": "option_list",
            "target": "option",
            "type": "text"
         }]
      }, {
         "source": "table",
         "table": "table_with_line",
         "parent_target": "main_id",
         "line_target": "line_number",
         "fields": [{
            "source": "text_field",
            "target": "sample",
            "type": "text"
         }]

      }],
      // ...
   }]
}
```
***
## Special Fields
Adding to your form's fields, you can also specify fields containing meta data about your entry.

- `_id` : ID of the entry.
- `_record_number` : Record number of the form.
- `_user_id` : The ID of the user who created this entry.
- `_form_id` : RID of the form (usefull if you need to export multiple forms in the same table).
- `_answer_time` : The answer time of the entry.
- `_last_name` : The last name of the user who created this entry.
- `_first_name` : The first name of the user who created this entry.
- `_email` : The email of the user who created this entry.
- `_phone` : The phone number of the user who created this entry.
- `_login` : The login of the user who created this entry.
