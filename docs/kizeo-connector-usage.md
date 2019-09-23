---
id: howtouse
title: How to use
---

This connector is a very simple `jar` executable file. **You must provide one parameter** corresponding to the file path of your settings.

This script will stop automatically everytimes it finishes retrieving all new entries (except if `loop` is set to `true`). So you need to launch it regularly using a _crontab_ for example.

Command line sample to exec this program :

`java -jar kizeo_db_connector.jar config.json`

A good practice is to create a small program in order to log information and preventing the use of multiple instance of this connector.

## Windows

On Windows, you can create a `.bat` file which will execute the connector.
Here is a sample of `.bat` file.

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

## Linux/Unix

On Linux, you can use a `bash` script running wiht a crontab :

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

Running the script :

```bash
#!/bin/bash
# kizeo_connector.sh
SCRIPT=$(readlink -f "$0")
localPATH=$(dirname "$SCRIPT")
java -jar $localPATH/kizeo_connector.jar $localPATH/config.json >> $localPATH/kizeo_connector.log
```

In your crontab :

```bash
*/10 * * * * /var/kizeo_connector/exec.sh
```
