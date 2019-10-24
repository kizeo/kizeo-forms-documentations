---
id: howtouse
title: How to use
---

Il s'agit tout simplement d'un fichier `.jar` exécutable. **Il y a un paramètre obligatoire** : Le chemin d'accès au fichier de configuration.

Le script s'arrête automatiquement dès qu'il a récupéré les nouvelles données saisies (sauf si paramètre `loop` est égal à `true`). Il faut donc l'exécuter régulièrement à l'aide par exemple d'un crontab.

Exemple de ligne de commande pour exécuter le programme :

`java -jar kizeo_db_connector.jar config.json`

Dans un usage pratique, il est intéressant de créer un petit script qui permettra notamment d'effectuer des logs et qui s'assurera de l'unicité du lancement du connecteur.

## Windows
Sur Windows, il est recommendé d'écrire un fichier `.bat` qui permettra d'exécuter le connecteur.
Voici un exemple de fichier `.bat`.
```dos
@echo off
:Start
SET CURRENTDIR=%~dp0%
SET "JARFILE=%CURRENTDIR%kizeo_connector.jar"
SET "CONFIG=%CURRENTDIR%config.json"
echo %JARFILE%
java -jar "%JARFILE%" "%CONFIG%"
ping -n 10 localhost
goto Start
```
## Linux
Sur Linux, il est recommandé d'utiliser un script `bash` lié à une crontab.
```bash
#!/bin/bash
# launch.sh
SCRIPT=$(readlink -f "$0")
localPATH=$(dirname "$SCRIPT")
echo "Kizeo Connector..."
for ((i=1;i<=10;i++));
do
    echo "Running..."
    # The Flock command prevent the connector to be launched more than once at a time.
    flock -n $localPATH/kizeo_connector.lockfile -c $localPATH/kizeo_connector.sh
    echo "Next run in 60 seconds..."
    sleep 60
done
exit 0
```
Qui exécute ce script :
```bash
#!/bin/bash
# kizeo_connector.sh
SCRIPT=$(readlink -f "$0")
localPATH=$(dirname "$SCRIPT")
java -jar $localPATH/kizeo_connector.jar $localPATH/config.json >> $localPATH/kizeo_connector.log
```
Avec une crontab :
```bash
*/10 * * * * /var/kizeo_connector/exec.sh
```
