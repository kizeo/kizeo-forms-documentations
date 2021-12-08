---
id: sp-token
title: App registration in Azure
sidebar_label: App registration in Azure
---

In order to register your application in Azure, you will need ***administrator*** privileges. You need to go to the <a href="https://portal.azure.com/?quickstart=True#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank">Azure Active Directory portal</a>.

## On the Azure Active Directory portal

### Step 1: Register a new application.
In ***App Registrations***, click on ***New Registration***

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-01.jpg" alt="New Registration" width="500"/>

### Step 2: Authorize API.

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-01b.jpg" alt="Authorize API" />

1.	***Name*** : Enter the name of your new application (for example: Kizeo)
2.	Make sure that ***Accounts in this organizational directory only (xxxx only - Single tenant)*** is selected
3.	***Redirect URI (optional)*** : leave the redirect URL blank
4.	Click on ***Register***
5.	In the right menu of the new page, select ***API permissions***
6.	***Add a permission***
7.	In the list that appears, select ***SharePoint***

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-02.jpg" alt="SharePoint" width="300"/>

8.	Select ***Application permissions***

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-03.jpg" alt="Application permissions"/>

9.	In the search, type ***Sites.FullControl.All***
10.	Select it and click on ***Add permissions***
11.	Again ***Add a permission***
12.	Select ***Microsoft Graph***

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-04.jpg" alt="Miucrosoft Graph" width="600"/>

13.	***Application permissions***
14.	In the search, type ***Sites.FullControl.All***
15.	Select it and click ***Add permissions***
16.	***Grant administrator consent for ...***

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-05.jpg" alt="Configured permissions" width="550"/>

17.	Confirm the consent agreement by answering ***Yes***

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-06.jpg" alt="Consent confirmation" width="550"/>

18.	The rights are granted to the connector

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-07.jpg" alt="SharePoint" />

## Step 3: Load the certificate.
1.	In the Azure menu on the left , click on <img src="/kizeo-forms-documentations/img/sp2/en/Azureen-08.jpg" alt="Certificates" width="150"/>

<img src="/kizeo-forms-documentations/img/sp2/en/Azureen-09.jpg" alt="SharePoint" width="500"/>

2.	select ***Certificates***
3.	then ***Upload certificates***
4.	In the window that opens on the right side of the screen, retrieve the ***.cer*** file created during the installation. It is located in the unzipped folder (see point 5.2 of [the installation](sp-installation.md)) and add it.
We have now completed the declaration of our connector in Azure.

