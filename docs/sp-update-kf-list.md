---
id: sp-update-kf-list
title: Update an external Kizeo Forms list
sidebar_label: Update external list Kizeo Forms
---

## Update Kizeo Forms external lists from SharePoint lists (Sharepoint list to external list)

<img src="/kizeo-forms-documentations/img/sp2/fr/Listex-01.jpg" alt="Accueil liste externe" />

***CREATE*** to create a new task.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listex-02.jpg" alt="Fenêtre de création" />

- ***Name***: Enter the name of the task.
- ***Sharepoint list***: Select the name of your Sharepoint list.
- ***Kizeo external list***: Select the name of your Kizeo Forms external list.
- ***Sharepoint field***: Select the name of the column in your SharePoint list.
- ***+ADD***: Adds the tag of the column in the editor ***(2)***.
- ***ADD LEVEL***: Adds the backslash **(\\)** as a separator for the hierarchies.
- ***ADD REFERENCE***: Adds the pipe **(|)** as separator for references
- ***(1)***: In this field you select the frequency of the task execution.
- ***SAVE***: Save the task.

    >Important :
    >It is imperative that SharePoint columns containing numeric values are of type "Numeric", otherwise when importing these values into the external list, they would be likely to be transformed to "Date" format.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listex-03.jpg" alt="Fenêtre de création" />

The task you have just set up appears in the list. On the left, you can select each task to ***ENABLE*** or ***DISABLE***. On the right, the pencil icon allows you to edit and modify the settings. The trash can deletes the task, the flame executes it.
