<head>
    <meta name="robots" content="noindex">
</head>
---
id: sp-update-list
title: Transfer kizeoForms data to a SharePoint list
sidebar_label: SharePoint List
---

## Transférer les données de kizeoForms vers une liste SharePoint

![Step 2][list-01]

1. Ajouter la connexion et mettre à jour les paramètres d'une liste SharePoint.
2. Sélectionnez les règles de transfert que vous souhaitez modifier et cliquez sur "Modifier".
3. Sélectionnez les règles de transfert que vous souhaitez supprimer et cliquez sur "Supprimer".

### Ajouter une nouvelle règle de transfert

![Add new transfer rule][list-02]

1. Saisissez le numéro d'identification numérique du formulaire. (<a href="https://www.kizeo-forms.com/fr/obtenir-id-formulaire/" target="_blank">Comment obtenir un identifiant de formulaire</a>).

2. Récupération de l'ID de la liste SharePoint

    . Pour trouver l'identifiant de la liste SharePoint, vous devez aller à SharePoint -> Contenu du site. Cliquez sur les trois petits points pour faire apparaître le menu déroulant, puis sélectionnez "Paramètres"..

    ![Retrieving the ID of SharePoint list][list-03]

    . Vous pouvez récupérer l'identifiant de la liste dans la barre d'adresse après "listedit.aspx?List=".

    ![SharePoint List ID][list-04]

3. Cliquez sur le menu déroulant
   La liste dans le menu déroulant, correspond aux noms des colonnes de la liste SharePoint.

    ![SharePoint List combo][list-06]

    ![SharePoint List column][list-05]

4. Entrez le nom de la balise du champ KizeoForms que vous souhaitez placer dans la colonne SharePoint.

5. Type de données

    ![SharePoint List type][list-07]

    Unique doit être utilisé sur une colonne SharePoint qui est de type élément unique.

    ![Unique Type][list-08]

    Permet de mettre à jour une entrée dans la liste, plutôt que d'ajouter une nouvelle ligne.

6. Ajout d'un nouveau lien Colonne / Balise
7. Modifie la ligne sélectionnée avec les nouveaux paramètres saisis.
8. Supprimer la ligne sélectionnée
9. Valider les paramètres

    > Note :
    > Si vous souhaitez récupérer des éléments d'un tableau KizeoForms dans une liste SharePoint, vous devez mettre un champ de calcul avec un "Numéro Unique" et définir une colonne au statut "Unique" dans la liste SharePoint.
    > Cela évite de créer un grand nombre de doublons lors de la modification des données.

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
