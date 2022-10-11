---
id: sp-update-kf-list
title: Update an external kizeoforms list
sidebar_label: Update external list kizeoForms
---

<head>
    <meta name="robots" content="noindex">
</head>

## Mise à jour des listes Externes Kizeo Forms à partir des listes SharePoint

![Upsate KF List][upkflist-01]

1. Ajoutez et mettre à jour la connexion les paramètres dans une liste externe.
2. Sélectionnez la règle que vous souhaitez modifier et cliquez sur "Modifier".
3. Sélectionnez la règle que vous souhaitez supprimer et cliquez sur "Supprimer".

## Ajouter ou mettre à jour

![Config][upkflist-02]

4. Récupération de l'identifiant de la bibliothèque de documents SharePoint (<a href="http://localhost:3000/kizeo-forms-documentations/docs/fr/sp-update-list" target="_blank">utiliser la même méthode que pour récupérer l'ID de la liste SharePoint</a>)
5. Saisissez le numéro d'identification numérique du formulaire. (<a href="https://www.kizeo-forms.com/fr/obtenir-id-formulaire/" target="_blank">Comment obtenir un identifiant de formulaire</a>).
6. Après avoir saisi l'ID de votre liste SharePoint, les noms de ses colonnes apparaîtront.

![external list structure][upkflist-03]

Pour construire la structure des éléments de votre liste externe, utilisez les noms des colonnes en les sélectionnant dans la liste, séparés par les caractères "\\" et "|" pour les hiérarchies et les références.

<!-- ************************** -->
<!-- ***** Pictures List ****** --> 
<!-- ************************** -->

[upkflist-01]: /kizeo-forms-documentations/img/sp/en/update-kf-list-01.png
[upkflist-02]: /kizeo-forms-documentations/img/sp/en/update-kf-list-02.png
[upkflist-03]: /kizeo-forms-documentations/img/sp/en/update-kf-list-03.png