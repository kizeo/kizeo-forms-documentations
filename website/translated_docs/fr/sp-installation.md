---
id: sp-install
title: Installation
sidebar_label: Installation
---
# Cette partie est exclusivement réservée aux S.I.
## Installation
1. Tout d'abord, [téléchargez le bundle d'installation du connecteur SharePoint](https://github.com/kizeo/sharepoint-connector/archive/refs/heads/main.zip),
2. Décompressez-le dans le dossier de votre choix ***(attention, le dossier de décompression sera le dossier d'exécution du connecteur)***,
3. Exécutez PowerShell en tant qu'administrateur,
4. Positionnez-vous dans le dossier de décompression ***(vous devriez voir les fichiers suivants)***,
![Dossier de décompression][installfr-01]
5. Exécutez le fichier install.ps1,
    1. Un mot de passe pour la base de données vous sera demandé. Notez le pour ne pas l'oublier.
    2. L'installation va créer le certificat et vous donne son nom pour le reporter dans le paramétrage du connecteur. Vous le retrouverez dans le dossier de décompression.
    3. Appuyer sur ***Entrée*** pour sortir du programme
6. A présent, le connecteur est déclaré comme service Windows. Il sera lancé automatiquement lors du démarrage du serveur ou du desktop. Il est accessible à l'adresse https://localhost:2303. Si vous souhaitez changer le numéro de port, vous pouvez le faire en éditant le fichier de configuration ***appsetting.json*** dans le dossier ***~\kizeo-sharepoint-konnector*** en remplaçant le port 2303 sur la ligne ***`"Url":"https://localhost:2303"`*** par celui de votre choix.


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