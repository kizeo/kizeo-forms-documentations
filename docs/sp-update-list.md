<meta name="robots" content="noindex">
---
id: sp-update-list
title: Transfer kizeoForms data to a SharePoint list
sidebar_label: SharePoint List
---

## Transfer kizeoForms data to a SharePoint list

![Step 2][list-01]

1. Add connection and update settings to a SharePoint list.
2. Select the transfer rules you wish to change and click on "Edit".
3. Select the transfer rules you wish to delete and click on "Delete".

### Add new transfer rule

![Add new transfer rule][list-02]

1. Enter the numeric identifier number of the form. (<a href="https://www.kizeo-forms.com/fr/obtenir-id-formulaire/" target="_blank">How to get a form id</a>).
2. Retrieving the ID of SharePoint list

    . To find the identifier of the SharePoint list, you have to go to SharePoint -> Site content. Click on to bring up the drop-down menu, then select "Settings".

    ![Retrieving the ID of SharePoint list][list-03]  

    . You can retrieve the list ID from the address bar after "listedit.aspx?List=".

    ![SharePoint List ID][list-04]  

3. Click on combo box
    The list in the combo box, are the names of the columns of the SharePoint list.

    ![SharePoint List combo][list-06]

    ![SharePoint List column][list-05]  

4. Enter the name of the KizeoForms field tag you want to put in the SharePoint column.

5. Data type

    ![SharePoint List type][list-07]

    Unique must be used on a SharePoint column that is of type unique item.

    ![Unique Type][list-08]

    Allows you to update an entry in the list, rather than adding a new line.

6. Adds a new link Column / Tag
7. Modifies the selected line with the new parameters entered.
8. Delete the selected row
9. Validate settings
    
    >Note :
    >If you want to retrieve items from a KizeoForms table in a SharePoint list, you need to put a calculation field with a "Uniq Number" and set a column to "Unique" status in  > the SharePoint list.
    >This avoids creating a lot of duplicates when modifying data.

<!-- ************************** -->
<!-- ***** Pictures List ****** -->
<!-- ************************** -->

[list-01]: /kizeo-forms-documentations/img/sp/en/list-update-01.png
[list-02]: /kizeo-forms-documentations/img/sp/en/list-update-02.png
[list-03]: /kizeo-forms-documentations/img/sp/en/list-update-03.png
[list-04]: /kizeo-forms-documentations/img/sp/en/list-update-04.png
[list-05]: /kizeo-forms-documentations/img/sp/en/list-update-05.png
[list-06]: /kizeo-forms-documentations/img/sp/en/list-update-06.png
[list-07]: /kizeo-forms-documentations/img/sp/en/list-update-07.png
[list-08]: /kizeo-forms-documentations/img/sp/en/list-update-08.png