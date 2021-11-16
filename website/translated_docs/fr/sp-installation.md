---
id: sp-install
title: Installation
sidebar_label: Installation
---
# Cette partie est exclusivement réservée aux informaticiens
## Installation
1. Tout d'abord, [téléchargez le bundle d'installation du connecteur SharePoint](https://github.com/kizeo/sharepoint-connector/archive/refs/heads/main.zip),
2. décompressez-le dans le dossier de votre choix ***(Attention, le dossier de décompression sera le dossier d'exécution du connecteur)***,
3. exécutez PowerShell en tant qu'administrateur,
4. positionnez-vous dans le dossier de décompression ***(Vous devriez voir les fichiers suivants)***,
![Dossier de décompression][installfr-01]
5. exécutez le fichier install.ps1,
    1. Un mot de passe pour la base de données vous sera demandé. Notez le pour ne pas l'oublier.
    2. L'installation va créer le certificat et vous donne son nom pour le reporter dans les paramétrages du connecteur. Vous le retrouverez dans le dossier de décompression.
    3. Appuyer sur ***Entrer*** pour sortir du programme
6. à présent, le connecteur est déclaré comme service Windows. Il sera lancé automatiquement lors du démarrage du serveur ou du desktop. Il est accessible à l'adresse https://localhost:2303. Si vous souhaitez changer le numéro de port, vous pouvez le faire en éditant le fichier de configuration ***appsetting.json*** dans le dossier ***~\kizeo-sharepoint-konnector*** et modifier le port 2303 sur la ligne ***`"Url":"https://localhost:2303"`*** par celui que vous souhaitez.


<!-- ***************************** -->
<!-- ***** Pictures List Old ***** --> 
<!-- ***************************** -->

[installen-03]: /kizeo-forms-documentations/img/sp/fr/installfr-01.png
[installen-04]: /kizeo-forms-documentations/img/sp/fr/installfr-02.png
[installen-05]: /kizeo-forms-documentations/img/sp/en/installen-05.png
[installen-06]: /kizeo-forms-documentations/img/sp/en/installen-06.png
[installen-07]: /kizeo-forms-documentations/img/sp/en/installen-07.png
[installen-08]: /kizeo-forms-documentations/img/sp/en/installen-08.png
[installen-09]: /kizeo-forms-documentations/img/sp/en/installen-09.png
[separator]: /kizeo-forms-documentations/img/sp/en/installen-09.png

<!-- ************************* -->
<!-- ***** Pictures List ***** --> 
<!-- ************************* -->

[installfr-01]: /kizeo-forms-documentations/img/sp2/fr/installfr-01.jpg