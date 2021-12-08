---
id: sp-update-list
title: Transfer kizeoForms data to a SharePoint list
sidebar_label: SharePoint List
---

## Transfer Kizeo Forms data to a SharePoint list (Form to Sharepoint list)

<img src="/kizeo-forms-documentations/img/sp2/fr/Listsp-01.jpg" alt="Accueil liste" />

***CREATE*** to create a new task.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listsp-04.jpg" alt="Fenêtre de création" />

- ***Name***: Enter the name of the task
- ***KizeoForms***: Select the name of the form
- ***Sharepoint list***: Select your Sharepoint list
- ***Kizeo markup tag***: Enter the tag for the field value to retrieve (it is possible to set options)
- ***Unique***: Check if you link this tag to a single item column in SharePoint
- ***Sharepoint field***: Select the column in which to drop the value of the tag
- ***+ADD***: Add the link
- ***(1)***: In this field you select the frequency of the task execution
- ***SAVE***: Save the task

<img src="/kizeo-forms-documentations/img/sp2/fr/Listsp-03.jpg" alt="Liste des Jobs" />

The job you have just set up appears in the list. On the left, you can select each job to ***ENABLE*** or ***DISABLE***. On the right, the pencil icon allows you to edit and modify the settings. The trash can deletes the task, the flame executes it.

-   >Note:
    >If you want to retrieve items from a KizeoForms table in a SharePoint list, you need to put a calculation field with a "Unique Number" and set a column to "Unique" status in the SharePoint list.
    >This avoids creating a large number of duplicates when editing data.
