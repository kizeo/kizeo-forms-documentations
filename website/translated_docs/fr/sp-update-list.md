---
id: sp-update-list
title: Transfer kizeoForms data to a SharePoint list
sidebar_label: SharePoint List
---

## Transférer les données de kizeoForms vers une liste SharePoint (Form to Sharepoint list)

<img src="/kizeo-forms-documentations/img/sp2/fr/Listex-01.jpg" alt="Accueil liste externe" />

***CREATE*** pour créer une nouvelle tâche.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listex-02.jpg" alt="Fenêtre de création" />

1. Saisissez le nom de la tâche,
2. sélectionnez le nom du formulaire,
3. sélectionnez votre liste SharePoint,
4. saisissez la balise de la valeur du champ à récupérer (il est possible d'y mettre les options),
5. à cocher si vous liez cette balise à une colonne à élément unique dans SharePoint,
6. sélectionnez la colonne dans laquelle déposer la valeur de la balise,
7. cliquer sur ***+ADD*** pour ajouter le lien,
8. dans cette zone, vous sélectionnez la fréquence de l'exécution de la tâche,
9. cliquez sur ***SAVE*** pour enregistrer la tâche.

<img src="/kizeo-forms-documentations/img/sp2/fr/Listex-03.jpg" alt="Liste des Jobs" />

La tâche que vous venez de paramétrer apparaît dans la liste. Sur la gauche, vous pouvez sélectionner chacune des tâches pour les activer ***ENABLE*** ou les désactiver ***DISABLE***. Sur la droite, le crayon vous permet d'éditer et de modifier les paramétrages. La poubelle supprime la tâche, la flamme l'exécute.
    
- 
    >Note :
    >Si vous souhaitez récupérer des éléments d'un tableau KizeoForms dans une liste SharePoint, vous devez mettre un champ de calcul avec un "Numéro Unique" et définir une colonne au statut "Unique" dans la liste SharePoint. 
    >Cela évite de créer un grand nombre de doublons lors de la modification des données.
