<meta name="robots" content="noindex">
---
id: sp-token
title: SharePoint Token
sidebar_label: SharePoint Token
---

## Get SharePoint Token

In the first step of SharePoint Connector configuration, you will be asked for login information.
These can be a little tricky to find. This guide will help you get them.
Be careful to keep all the information that you will be asked to create.

### Step 1: Save the application to SharePoint

Make sure you are already logged in to SharePoint, then go to :
<span style="color:#ABD33D">https://your_sharepoint_domain/sites/your_site/_layouts/15/appregnew.aspx</span>  
(replace your_sharepoint_domain with the domain of your SharePoint site and your_site with the name of your site).

![Warning][token-01]

1. Click on "Generate" for the "Customer ID" field.
2. Click on "Generate" for the field "Secret customer key".
3. Enter the name of the added application: "Kizeo" for example.
4. Enter "kizeoforms.com"
5. Fill in with https://www.kizeoforms.com/
6. Then click on "Create" and make sure you have copied the client id and client secret key (the client secret key will never be communicated to you again).

Then go to <span style="color:#ABD33D">https://your_sharepoint_domain/sites/your_site/_layouts/15/appinv.aspx</span>

![Warning][token-02]

7. Fill in the client id in the "Application ID" field, and click on the "Search" button.
8. In the "Authorization Request XML Code" field, copy the following code:

```
<AppPermissionRequests AllowAppOnlyPolicy="true">
<AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/>
</AppPermissionRequests>
```

9. Then click "Create" and trust.

So far, you've had:

- the client id
- the secret id
- the SharePoint URL

You are now in possession of all the identifiers requested in the Wizard of the SharePoint Connector.

![Warning][token-04]

### Step 2: Grant approvals to the SP Connector

#### 1) Managing site permissions

Go to the page of the site to which the SharePoint Connector should have access.

![SharePoint Group Homepage][token-05]

On the right, click on the gear logo to select the settings for this site.
On the menu that appears, select "Site Permissions".

![Permission management][token-23]

Please change the permissions so that Members and Owners of the site can have
total control. 

#### 2) Create a connector-specific authorization group

The SharePoint Connector provided requires certain permissions to communicate with your SharePoint site. Thus, you need to create a specific group with the settings that allow the connector to recover your data.
To do so, still on the same window as before, select "Advanced permissions settings".

![Advanced permissions setting][token-08]

You will then arrive on a page with several SharePoint groups. Locate the ones reserved for
Members and Owners. These should stand out by name.

![Permissions][token-09]

Click on "Permissions Levels" to access the list of authorization configurations.

![Authorization Levels][token-10]

On this page, select "Add a permission Level".

![Add a permission Level][token-11]

![Add a permission Level input][token-12]

1. Choose a simple name, such as "KF connector".
2. Enter description (optional)

In the sub-section "Site Permissions"...

![Site Permissions][token-13]

...you'll see a check box:

![check box][token-14]

1. "Use remote interfaces - Use SOAP, Web DAV, the Client Object Mode or SharePoint Designer interfaces to access the Web site" - Please check this box.
2. "Open - Allow users to open a Web site, list, or folder in order to access the items inside that container" will be checked automatically.

![Create][token-15]

Save the changes by clicking on "Create" and then return to the page containing the list of groups.

#### 3) Grant the authorizations created

Once these permissions have been created, they must now be assigned to a group. To do this, please click on the button on the left.

![Grant Permissions][token-16]

In the first text field, enter the first few letters of your members group name. In our example, I type "CAR" for "CARLONI". You will then see the group of members; select it.

![Members][token-17]

Also enter "owner" and select the owner group.

![Owners][token-18]

You will see a "Show Options" label underneath the two text fields; click on it.

![Show Options][token-19]

Deselect the checkbox (which should already be checked by default) corresponding to sending a electronic invitation.

![Send a mail invitation][token-20]

![alt][token-21]

1. Then choose the authorization level we created in step 2 from the drop-down list.
2. click the "Share" button

Refresh your group list page.

![alt][token-22]

The new rules that we have defined are indeed present in the authorization levels. 

<!-- ************************** -->
<!-- ***** Pictures List ****** -->
<!-- ************************** -->

[token-01]: /kizeo-forms-documentations/img/sp/en/token-sp-01.png
[token-02]: /kizeo-forms-documentations/img/sp/en/token-sp-02.png
[token-03]: /kizeo-forms-documentations/img/sp/en/token-sp-03.png
[token-04]: /kizeo-forms-documentations/img/sp/en/token-sp-04.png
[token-05]: /kizeo-forms-documentations/img/sp/en/token-sp-05.png
[token-06]: /kizeo-forms-documentations/img/sp/en/token-sp-06.png
[token-07]: /kizeo-forms-documentations/img/sp/en/token-sp-07.png
[token-08]: /kizeo-forms-documentations/img/sp/en/token-sp-08.png
[token-09]: /kizeo-forms-documentations/img/sp/en/token-sp-09.png
[token-10]: /kizeo-forms-documentations/img/sp/en/token-sp-10.png
[token-11]: /kizeo-forms-documentations/img/sp/en/token-sp-11.png
[token-12]: /kizeo-forms-documentations/img/sp/en/token-sp-12.png
[token-13]: /kizeo-forms-documentations/img/sp/en/token-sp-13.png
[token-14]: /kizeo-forms-documentations/img/sp/en/token-sp-14.png
[token-15]: /kizeo-forms-documentations/img/sp/en/token-sp-15.png
[token-16]: /kizeo-forms-documentations/img/sp/en/token-sp-16.png
[token-17]: /kizeo-forms-documentations/img/sp/en/token-sp-17.png
[token-18]: /kizeo-forms-documentations/img/sp/en/token-sp-18.png
[token-19]: /kizeo-forms-documentations/img/sp/en/token-sp-19.png
[token-20]: /kizeo-forms-documentations/img/sp/en/token-sp-20.png
[token-21]: /kizeo-forms-documentations/img/sp/en/token-sp-21.png
[token-22]: /kizeo-forms-documentations/img/sp/en/token-sp-22.png
[token-23]: /kizeo-forms-documentations/img/sp/en/token-sp-23.png
[separator]: /kizeo-forms-documentations/img/sp/en/installen-09.png
