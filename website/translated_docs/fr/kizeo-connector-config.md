---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Afin de configurer le connecteur de base de données, vous devez saisir un fichier *JSON*, ce fichier est potentiellement sensible puisqu’il contient l’ensemble des informations nécessaires à la connexion au back office KizeoForms, mais également à votre base de données. Vous pouvez visualiser des exemples de fichiers de configuration en cliquant sur les liens ci-dessus.
***
## Authentification `auth`
La première partie `auth` de la configuration concerne les identifiants Kizeo. Une bonne pratique consiste à **attribuer un compte administrateur** spécifiquement au connecteur de base de données. Il s'agit des trois identifiants nécessaires à la connexion sur le back office `www.kizeoforms.com`.
Ainsi, la configuration doit ressembler à ceci :

```javascript
{
    "auth" : {
        "company": "CODE_ENTREPRISE",
        "password": "VOTRE_MOT_DE_PASSE",
        "user": "VOTRE_IDENTIFIANT"
    },
    //...
}
```
### Propriétés
* `company` (`string`) :
Code entreprise de votre compte
* `user` (`string`) :
Nom d'utilisateur
* `password` (`string`) :
Mot de passe correspondant à l'utilisateur renseigné
***
### Propriétés générales
Ce connecteur possède un ensemble de propriétés générales à renseigner :

- `autoCreate` (true|false) : Le connecteur tentera de créer automatiquement la table de votre base de données en fonction de la configuration de celui-ci.
- `loop` (true|false) : Détermine si une fois l'exécution terminée, le connecteur se relance automatiquement (après 2 minutes de pause).

```javascript
{
   //...
   "autoCreate" : false,
   "loop" : true,
   "protocol": "https",
   "server": "www.kizeoforms.com",
   "restRoot": "rest/v3",
   //...
}
```
***
## Définition des données à exporter `forms`
Après avoir défini le compte administrateur utilisé pour l'export des données, il vous faut ensuite indiquer les données que vous souhaitez récupérer.
Là encore cette information est à configurer dans le fichier JSON, dans la propriété `forms`. Cette propriété est un *tableau* de données contenant un élément pour chaqu'un des formulaires que vous souhaitez récupérer avec le connecteur.

### Propriétés
#### `database` (`string`) :
Chaîne de connction JDBC à la base de données. Dépend du système de bases de données utilisés.

+ MySQL : `jdbc:mysql://localhost:3306/DB_NAME?user=USER&password=PASSWORD`
+ PostgreSQL : `jdbc:postgresql://localhost:3306/DB_NAME?user=USER&password=PASSWORD`
+ Microsoft SQL Serveur : `jdbc:sqlserver://127.0.0.1;user=USER;password=PASSWORD;databaseName=DB_NAME;`
+ Pas de connexion à la base de données (pour récupérer uniquement les médias/PDFs) : laisser vide.

#### `driver` (`string`) :
Type de driver utilisé en fonction du système de gestion des bases de données.

+ MySQL : `mysql`
+ PostgreSQL : `postgresql`
+ Microsoft SQL Serveur : `mssql`

#### `fields` (liste de `FIELD`) :
Liste des champs à exporter (voir `FIELD` pour plus de détails).

#### `form_id` (`string`) :
Identifiant du formulaire, peut être récupéré à partir du [Web Service REST](http://www.kizeoforms.com/rest/v3)

#### `medias_path` (`string`) *optionnel*:
Chemin d'accès au répertoire où vous souhaitez sauvegarder les médias récupérés (*optionnel*).

#### `standard_pdf_path` (`string`) *optionnel*:
Chemin d'accès au répertoire où vous souhaitez sauvegarder les PDF standards (*optionnel*).

#### `custom_pdf_path` (`string`) *optionnel*:
Chemin d'accès au répertoire où vous souhaitez sauvegarder les PDF personnalisés (*optionnel*).

#### `table` (`string`) :
Nom de la table de la base de données où stocker les données du formulaire (hors tableau).

### Exemple

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
## Champs `FIELD`
Représente un champ du formulaire à récupérer. Peut également représenter un tableau du formulaire.

### Propriétés (Commun)
#### `source` (`string`) :
Il s'agit de l'identifiant de champ Kizeo Forms. Vous pouvez le récupérer depuis la page de création/modification de formulaire dans les propriétés de chaque champs (ou bien dans le menu *Informations* des options du formulaire).

**Attention :** Afin de récupérer l'identifiant unique d'une donnée, il vous faut saisir dans la source `@@id@@`. **Ceci est obligatoire**.

### Propriétés (Champ)
#### `target` (`string`) :
Il s'agit de la colonne de la table du formulaire dans laquelle vous souhaitez enregistrer la donnée.
#### `type` (`string` : `'int'|'text'`) :
Il s'agit de la colonne qui va permet de savoir quel type de colonne générée si `autoCreate` est `true`.

### Exemple
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
### Propriétés (Tableau)
#### `table` (`string`) :
Il s'agit du nom de la table qui stockera les informations issues de ce tableau.
#### `parent_target` (`string`) :
Il s'agit de la colonne qui fera référence à l'identifiant unique de la donnée. Elle vous permettra d'identifier de quelle donnes saisie provient cette ligne du tableau.
#### `fields` (Liste de `FIELD`) :
Liste des champs du tableau à exporter.
#### `line_target` (`string`) *optionnel* :
Il s'agit de la colonne qui stockera le numéro de ligne saisie.

### Exemple
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
## Champs spéciaux
En plus des champs que vous avez définis dans votre formulaire, vous pouvez également récupérer certains champs spéciaux :

- `_id` : Récupère l'identifiant du formulaire
- `_record_number` : Récupère le numéro d'enregistrement
- `_user_id` : Récupère l'identifiant de l'utilisateur à l'origine de la donnée.
- `_form_id` : Récupère l'identifiant de la définition de formulaire d'où provient la donnée (pratique si vous exporter plusieurs formulaire dans une seule table).
- `_answer_time` : Récupère la date d'enregistrement de la donnée.
- `_last_name` : Récupère le nom de famille de l'utilisateur à l'origine de la donnée.
- `_first_name` : Récupère le prénom de l'utilisateur à l'origine de la donnée.
- `_email` : Récupère l'email de l'utilisateur à l'origine de la donnée.
- `_phone` : Récupère le téléphone de l'utilisateur à l'origine de la donnée.
- `_login` : Récupère le login de l'utilisateur à l'origine de la donnée.
