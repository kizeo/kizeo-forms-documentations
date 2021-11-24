---
id: sp-token
title: App registration in Azure
sidebar_label: App registration in Azure
---
Pour réaliser la déclaration de l'application dans Azure, vous aurez besoin des privilèges ***administrateurs***.
Il faut vous rendre sur le <a href="https://portal.azure.com/?quickstart=True#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank">portail d'Azure Active Directory</a>.

## Sur le portail Azure Active Directory
### Etape 1 : Enregistrer une nouvelle application.

 Dans ***Inscriptions d'applications***, cliquez sur ***Nouvelle inscription***

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-01.jpg" alt="Nouvelle inscription" width="500"/>

### Etape 2 : Autoriser les API.

1. Saisissez le nom de votre nouvelle application (par exemple : kizeo),
2. assurez-vous que ***Comptes dans cet annuaire d'organisation uniquement (KIZEO uniquement - Locataire unique)*** est sélectionné,
3. laissez l'URL de redirection vide,
4. cliquez sur ***S'inscrire***,
5. sur la page qui s'ouvre sélectionnez ***API autorisées***,
6. ***Ajouter une autorisation***,
7. dans la liste qui apparaît, sélectionnez ***SharePoint***,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-02.jpg" alt="SharePoint" width="300"/>

8. Sélectionnez ***Autorisations de l'application***,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-03.jpg" alt="Autorisations application"/>

9. dans la recherche, saisissez ***Sites.FullControl.All***,
10. le sélectionner et cliquer sur ***Ajouter des autorisations***,
11. de nouveau ***Ajouter une autorisation***,
12. sélectionnez ***Microsoft Graph***,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-04.jpg" alt="SharePoint" width="600"/>

13. ***Autorisations de l'application***
14. dans la recherche, saisissez ***Sites.FullControl.All***,
15. le sélectionner et cliquer sur ***Ajouter des autorisations***,
16. ***Accorder un consentement d'administrateur pour ....***

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-05.jpg" alt="SharePoint" />

17. confirmez l'accord de consentement en répondant ***Oui***

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-06.jpg" alt="SharePoint" width="400"/>

18. les droits sont accordés au connecteur.

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-07.jpg" alt="SharePoint" />

### Etape 3 : Charger le certificat.

1. Dans le menu Azure de gauche, cliquez sur <img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-08.jpg" alt="SharePoint" width="150"/>,

<img src="/kizeo-forms-documentations/img/sp2/fr/Azurefr-09.jpg" alt="SharePoint" width="500"/>

2. sélectionnez ***Certificates***,
3. puis ***Téléchargement***,
4. dans la fenêtre qui s'ouvre sur la droite de l'écran, allez chercher le fichier ***.cer*** créé lors de l'installation. Il se trouve dans le dossier de décompression (voir le point 5.2 de [l'installation](sp-installation.md)) et ajoutez-le.

Nous avons terminé la déclaration de notre connecteur dans Azure.