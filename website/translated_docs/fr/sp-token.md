---
id: sp-token
title: App registration in Azure
sidebar_label: App registration in Azure
---
Pour procéder à la déclaration de l'application dans Azure, vous aurez besoin des privilèges ***administrateurs***.
Il faut vous rendre sur le <a href="https://portal.azure.com/?quickstart=True#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank">portail d'Azure Active Directory</a>.

## Sur le portail Azure Active Directory
### Etape 1 : Enregistrer une nouvelle application.

 Dans ***Inscriptions d'applications***, cliquez sur ***Nouvelle inscription***

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-01.jpg" alt="Nouvelle inscription" width="500"/>

### Etape 2 : Autoriser les API.

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-01b.jpg" alt="Autorisations application"/>

1. Saisissez le nom de votre nouvelle application (par exemple : kizeo),
2. Assurez-vous que ***Comptes dans cet annuaire d'organisation uniquement (xxx uniquement - Locataire unique)*** est sélectionné,
3. Laissez l'URL de redirection vide,
4. Cliquez sur ***S'inscrire***,
5. Sélectionnez ***API autorisées*** sur la nouvelle page, dans le menu de droite,
6. ***Ajoutez une autorisation***,
7. Sélectionnez ***SharePoint*** dans la liste qui s'affiche,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-02.jpg" alt="SharePoint" width="300"/>

8. Sélectionnez ***Autorisations de l'application***,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-03.jpg" alt="Autorisations application"/>

9. Saisissez ***Sites.FullControl.All*** dans la recherche,
10. Sélectionnez le et cliquez sur ***Ajouter des autorisations***,
11. De nouveau ***Ajouter une autorisation***,
12. Sélectionnez ***Microsoft Graph***.

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-04.jpg" alt="Microsoft Graph" width="600"/>

13. ***Autorisations de l'application***
14. Saisissez ***Sites.FullControl.All*** dans la recherche,
15. Sélectionnez le et cliquez sur ***Ajouter des autorisations***,
16. ***Accordez un consentement d'administrateur pour ...***

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-05.jpg" alt="Autorisations configurées" />

17. Confirmez l'accord de consentement en répondant ***Oui***

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-06.jpg" alt="Consentement administrateur" width="400"/>

18. Les droits sont accordés au connecteur.

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-07.jpg" alt="SharePoint" />

### Etape 3 : Charger le certificat.

1. A gauche dans le menu Azure, cliquez sur <img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-08.jpg" alt="SharePoint" width="150"/>,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-09.jpg" alt="SharePoint" width="500"/>

2. Sélectionnez ***Certificates***,
3. Puis ***Téléchargement***,
4. Une fenêtre s'ouvre à droite de l'écran, allez y chercher le fichier ***.cer*** créé lors de l'installation. Il se trouve dans le dossier de décompression (voir le point 5.2 de [l'installation](sp-installation.md)) et ajoutez-le.

Nous avons terminé la déclaration de notre connecteur dans Azure.