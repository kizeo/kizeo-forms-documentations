---
id: sp-upload-files
title: Upload files to SharePoint document library from Kizeo Forms
sidebar_label: Upload files to document library
---

##  Écran de configuration des données Kizeo pour la bibliothèque SharePoint

![Upload files screen][upfiles-01] 
1. Ajouter la connexion et mettre à jour les paramètres d'une liste de documents SharePoint.
2. Sélectionnez les règles de transfert que vous souhaitez modifier et cliquez sur "Modifier".
3. Sélectionnez les règles de transfert que vous souhaitez supprimer et cliquez sur "Supprimer".

## Ajouter ou mettre à jour
![Add or update][upfiles-02] 
1. Saisissez le numéro d'identification numérique du formulaire. (<a href="https://www.kizeo-forms.com/fr/obtenir-id-formulaire/" target="_blank">Comment obtenir un identifiant de formulaire</a>). 
2. Récupération de l'identifiant de la bibliothèque de documents SharePoint (<a href="http://localhost:3000/kizeo-forms-documentations/docs/en/sp-update-list" target="_blank">utiliser la même méthode que pour récupérer l'ID de la liste SharePoint)

### Export standard
3. 4, 5, 6, 7 : You can use KizeoForms tags to define the paths of files to be stored. Then you need to select the "Active" checkbox.

### Exports personnalisés
8. Vous pouvez récupérer les identifiants d'exportation dans KizeoForms à partir de l'historique. Cliquez sur le bouton "Action" et positionnez la souris sur l'exportation souhaitée. Le lien vers l'ExportId apparaît en bas à gauche du navigateur.

![ExportId][upfiles-03] 

9. 10 : Vous pouvez utiliser les balises KizeoForms pour définir les chemins des fichiers à stocker. Vous devez ensuite cocher la case "Actif".

11 "SharePoint metadata setting" vous permet de définir les métadonnées que vous souhaitez inclure dans les fichiers téléchargés dans SharePoint. Par exemple le nom des entreprises, les catégories d'interventions, ... 


<!-- ************************** -->
<!-- ***** Pictures List ****** --> 
<!-- ************************** -->

[upfiles-01]: /kizeo-forms-documentations/img/sp/en/upload-files-01.png
[upfiles-02]: /kizeo-forms-documentations/img/sp/en/upload-files-02.png
[upfiles-03]: /kizeo-forms-documentations/img/sp/en/upload-files-03.png
[upfiles-04]: /kizeo-forms-documentations/img/sp/en/upload-files-04.png