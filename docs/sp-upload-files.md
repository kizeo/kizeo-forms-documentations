<meta name="robots" content="noindex">
---
id: sp-upload-files
title: Upload files to SharePoint document library from Kizeo Forms
sidebar_label: Upload files to document library
---

## Kizeo data configuration screen to the SharePoint Library

![Upload files screen][upfiles-01]

1. Add connection and update settings to a SharePoint document list.
2. Select the transfer rules you wish to change and click on "Edit".
3. Select the transfer rules you wish to delete and click on "Delete".

## Add or update

![Add or update][upfiles-02]

1. Enter the numeric identifier number of the form. (<a href="https://www.kizeo-forms.com/fr/obtenir-id-formulaire/" target="_blank">How to get a form id</a>).
2. Retrieving the ID of SharePoint document library (<a href="http://localhost:3000/kizeo-forms-documentations/docs/en/sp-update-list" target="_blank">use the same method as for retrieving ID of SharePoint List)

### standard exports

3. 4, 5, 6, 7 : You can use KizeoForms tags to define the paths of files to be stored. Then you need to select the "Active" checkbox.

### Custom Exports

8. You can retrieve export ids in KizeoForms from the history. Click on the "Action" button and position the mouse on the desired export. The link to the ExportId appears at the bottom left of the browser.

![ExportId][upfiles-03]

9. 10 : You can use KizeoForms tags to define the paths of files to be stored. Then you need to select the "Active" checkbox.

11 "SharePoint metadata setting" allows you to set the metadata you want to include in the files uploaded in SharePoint. For example the name of the companies, the categories of interventions, ...

<!-- ************************** -->
<!-- ***** Pictures List ****** -->
<!-- ************************** -->

[upfiles-01]: /kizeo-forms-documentations/img/sp/en/upload-files-01.png
[upfiles-02]: /kizeo-forms-documentations/img/sp/en/upload-files-02.png
[upfiles-03]: /kizeo-forms-documentations/img/sp/en/upload-files-03.png
[upfiles-04]: /kizeo-forms-documentations/img/sp/en/upload-files-04.png