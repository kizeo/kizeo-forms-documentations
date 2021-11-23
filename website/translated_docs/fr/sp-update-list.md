---
id: sp-update-list
title: Transfer kizeoForms data to a SharePoint list
sidebar_label: SharePoint List
---

## Transférer les données de kizeoForms vers une liste SharePoint (Form to Sharepoint list)

<img src="/kizeo-forms-documentations/img/sp2/fr/Listsp-01.jpg" alt="Accueil liste" />

***CREATE*** pour créer une nouvelle tâche.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listsp-04.jpg" alt="Fenêtre de création" />

- ***Name*** : Saisissez le nom de la tâche,
- ***Kizeoforms*** : Sélectionnez le nom du formulaire,
- ***Sharepoint list*** : Sélectionnez votre liste SharePoint,
- ***Kizeo markup tag*** : Saisissez la balise de la valeur du champ à récupérer (il est possible d'y mettre les options),
- ***Unique*** : A cocher si vous liez cette balise à une colonne à élément unique dans SharePoint,
- ***Sharepoint field*** : Sélectionnez la colonne dans laquelle déposer la valeur de la balise,
- ***+ADD*** : Ajouter le lien,
- ***(1)*** : Dans cette zone vous sélectionnez la fréquence de l'exécution de la tâche
- ***SAVE*** : Enregistrer la tâche.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listsp-03.jpg" alt="Liste des Jobs" />

La tâche que vous venez de paramétrer apparaît dans la liste. Sur la gauche, vous pouvez sélectionner chacune des tâches pour les activer ***ENABLE*** ou les désactiver ***DISABLE***. Sur la droite, le crayon vous permet d'éditer et de modifier les paramétrages. La poubelle supprime la tâche, la flamme l'exécute.
    
- 
    >Note :
    >Si vous souhaitez récupérer des éléments d'un tableau KizeoForms dans une liste SharePoint, vous devez mettre un champ de calcul avec un "Numéro Unique" et définir une colonne au statut "Unique" dans la liste SharePoint. 
    >Cela évite de créer un grand nombre de doublons lors de la modification des données.
