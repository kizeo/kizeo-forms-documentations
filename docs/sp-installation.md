---
id: sp-install
title: Installation
sidebar_label: Installation
---
# This part is exclusively reserved for IT specialists
## Installation
1.	First, [download the SharePoint connector installation bundle.](https://github.com/kizeo/sharepoint-connector/archive/refs/heads/main.zip)
2.	unzip it in the folder of your choice ***(Warning, the unzipped folder will be the connector execution folder)***
3.	run PowerShell as administrator
4.	go to the unzip folder ***(you should see the following files)***
![Dossier de décompression][installfr-01]
5.	run the file install.ps1
i.	You will be asked for a password for the database. Make a note of it so you don't forget it.
ii.	The installation will create the certificate and give you its name to report in the settings of the connector. You will find it in the unzipped folder.
iii.	Press ***Enter*** to exit the program.
6.	The connector is now declared as a Windows service. It will be launched automatically when the server or the desktop is started. It is accessible at https://localhost:2303. If you want to change the port number, you can do it by editing the configuration file ***appsetting.json*** in the folder ***~\kizeo-sharepoint-konnector*** and change the port 2303 on the line *"Url":"https://localhost:2303"* with the one you prefer.


<!-- ************************** -->
<!-- ***** Pictures List ***** -->
<!-- ************************** -->

[installfr-01]: /kizeo-forms-documentations/img/sp2/fr/installfr-01.jpg