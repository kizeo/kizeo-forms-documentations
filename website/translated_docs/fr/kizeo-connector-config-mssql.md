---
id: microsoftsql
title: Microsoft SQL Server
---

## Exemple

```javascript
{
   "auth": {
      "company": "COMPANY_CODE",
      "password": "user_password",
      "user": "user_login"
   },
   "protocol": "https",
   "server": "www.kizeoforms.com",
   "restRoot": "rest/v3",
   "autoCreate" : false,
   "loop" : true,
   "forms": [{
      "database": "jdbc:sqlserver://127.0.0.1;user=USER;password=PASSWORD;databaseName=DB_NAME",
      "driver": "mysql",
      "fields": [{
         "source": "@@id@@",
         "target": "id",
         "type": "int"
      }, {
         "source": "case_a_cocher",
         "target": "has_accepted",
         "type": "text"
      }, {
         "source": "email",
         "target": "email",
         "type": "text"
      }, {
         "source": "text_field4",
         "target": "name",
         "type": "text"
      }, {
         "source": "list",
         "target": "selected_product",
         "type": "text"
      }, {
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
      "form_id": "123456",
      "medias_path": "D:\\Storage\\Kizeo_Medias",
      "standard_pdf_path": "D:\\Storage\\Kizeo_PDF",
      "custom_pdf_path": "D:\\Storage\\Kizeo_PDF_Custom",
      "table": "the_main_table"
   }]
}
```
