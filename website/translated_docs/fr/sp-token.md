<meta name="robots" content="noindex">
---
id: sp-token
title: Token SharePoint
sidebar_label: Token SharePoint
---

## Obtenir un jeton SharePoint

Dans la première étape de la configuration du connecteur SharePoint, il vous sera demandé de fournir des informations de connexion.
Celles-ci peuvent être un peu difficiles à trouver. Ce guide vous aidera à les obtenir.
Veillez à conserver toutes les informations que vous serez invité à créer.

### Étape 1 : Enregistrer l'application dans SharePoint

Vérifiez que vous êtes déjà connecté à SharePoint, puis allez sur :
<span style="color:#ABD33D">https://your_sharepoint_domain/sites/your_site/_layouts/15/appregnew.aspx</span> en remplaçant *your_sharepoint_domain* avec le domaine de votre compte SharePoint et *your_site* avec le nom de votre site).


![appregnew.aspx][token-01]

1. Cliquez sur "Générer" pour le champ "Id Client".
2. Cliquez sur "Générer" pour le champ "Clé secrète client"..
3. Saisissez le nom de l'application à ajouter : "Kizeo" par exemple.
4. Saisissez "kizeoforms.com"
5. Remplissez https://www.kizeoforms.com/
6. Cliquez sur "Créer" et assurez-vous que vous avez bien copié le numéro d'identification et la clé secrète du client (la clé secrète du client ne vous sera plus jamais communiquée).

Ensuite, allez sur <span style="color:#ABD33D">https://your_sharepoint_domain/sites/your_site/_layouts/15/appinv.aspx</span>

![Warning][token-02]

7. Remplissez le numéro de client dans le champ "ID de la demande" et cliquez sur le bouton "Recherche".
8. Dans le champ "Code XML de la demande d'autorisation", copiez le code suivant :

```
<AppPermissionRequests AllowAppOnlyPolicy="true">
<AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/>
</AppPermissionRequests>
```

9. Cliquez ensuite sur "Créer" et faites confiance.

Jusqu'à présent, vous avez eu :

- l'Id client
- La clé secrète
- l'URL de votre site SharePoint

Vous êtes maintenant en possession de tous les identifiants demandés dans l'assistant du connecteur SharePoint.

![Warning][token-04]

### Étape 2 : Accorder les autorisations au connecteur SP

#### 1) Gestion des autorisations du site

Allez à la page du site auquel le connecteur SharePoint doit avoir accès.

![SharePoint Group Homepage][token-05]

À droite, cliquez sur le logo de l'engrenage pour sélectionner les paramètres de ce site.
Dans le menu qui apparaît, sélectionnez "Autorisations du site".

![Permission management][token-23]

Veuillez modifier les autorisations afin que les membres et les propriétaires du site puissent avoir
un contrôle total.

#### 2) Créer un groupe d'autorisation spécifique au connecteur

Le connecteur SharePoint fourni, nécessite certaines autorisations pour communiquer avec votre site SharePoint. Ainsi, vous devez créer un groupe spécifique avec les paramètres qui permettent au connecteur de récupérer vos données.
Pour ce faire, toujours dans la même fenêtre que précédemment, sélectionnez "Advanced permissions settings".

![Advanced permissions setting][token-08]

Vous arriverez alors sur une page avec plusieurs groupes SharePoint. Repérez ceux qui sont réservés aux
Membres et propriétaires. Ceux-ci doivent se distinguer par leur nom.

![Permissions][token-09]

Cliquez sur "Niveaux d'autorisation" pour accéder à la liste des configurations d'autorisation.

![Authorization Levels][token-10]

Sur cette page, sélectionnez "Ajouter un niveau d'autorisation".

![Add a permission Level][token-11]

![Add a permission Level input][token-12]

1. Choisissez un nom simple, tel que "KF connector".
2. Entrez la description (facultatif)

Dans la sous-section "Autorisations de site"...

![Site Permissions][token-13]

...vous verrez une case à cocher :

![check box][token-14]

1. "Utiliser les interfaces distantes - Accéder au site web à l'aide l'interface SOAP, Web DAV, SharePoint Designer ou du module objet client - Veuillez cocher cette case.
2. "Ouvrir - Autoriser les utilisateurs à ouvrir un site Web, une liste ou un dossier pour accéder aux éléments contenus dans ce conteneur" sera coché automatiquement.

![Create][token-15]

Enregistrez les modifications en cliquant sur "Créer" et revenez ensuite à la page contenant la liste des groupes. 

#### 3) Accorder les autorisations créées

Une fois ces autorisations créées, elles doivent maintenant être attribuées à un groupe. Pour ce faire, veuillez cliquer sur le bouton à gauche.

![Grant Permissions][token-16]

Dans le premier champ de texte, entrez les premières lettres du nom de votre groupe de membres. Dans notre exemple, je tape "pat" pour "Patrick". Vous verrez alors apparaître le groupe de membres ; sélectionnez-le.

![Members][token-17]

Entrez également "owner" et sélectionnez le groupe de propriétaires.

![Owners][token-18]

Vous verrez une étiquette "Afficher les options" sous les deux champs de texte, cliquez dessus.

![Show Options][token-19]

Décochez la case (qui devrait déjà être cochée par défaut) correspondant à l'envoi d'une invitation électronique.

![Send a mail invitation][token-20]

![alt][token-21]

1. Choisissez ensuite le niveau d'autorisation que nous avons créé à l'étape 2 dans la liste déroulante.
2. cliquez sur le bouton "Partager

Rafraîchissez la page de la liste de votre groupe.

![alt][token-22]

Les nouvelles règles que nous avons définies sont maintenant présentes dans les niveaux d'autorisation.


<!-- ************************** -->
<!-- ***** Pictures List ****** --> 
<!-- ************************** -->

[token-01]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-01.png
[token-02]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-02.png
[token-03]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-03.png
[token-04]: /kizeo-forms-documentations/img/sp/en/token-sp-04.png
[token-05]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-05.png
[token-06]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-06.png
[token-07]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-07.png
[token-08]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-08.png
[token-09]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-09.png
[token-10]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-10.png
[token-11]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-11.png
[token-12]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-12.png
[token-13]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-13.png
[token-14]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-14.png
[token-15]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-15.png
[token-16]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-16.png
[token-17]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-17.png
[token-18]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-18.png
[token-19]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-19.png
[token-20]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-20.png
[token-21]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-21.png
[token-22]: /kizeo-forms-documentations/img/sp/fr/tokenfr-sp-22.png
[token-23]: /kizeo-forms-documentations/img/sp/en/token-sp-23.png
[separator]: /kizeo-forms-documentations/img/sp/en/installen-09.png
