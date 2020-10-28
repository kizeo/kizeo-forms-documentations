---
id: sharepoint
title: Getting started
sidebar_label: Introduce
---

## The SharePoint Connector

The SharePoint connector is a console application that allows you to synchronize data between Kizeo
Forms and SharePoint on 4 levels:
- [Kizeo Forms data to a SharePoint list](sp-update-list.md),
- [Kizeo Forms data to the SharePoint library](sp-upload-files.md),
- [SharePoint lists to External lists](sp-update-kf-list.md),
- [Kizeo Forms data to the SharePoint library (Periodic exports)](sp-sheduled.md).

The "SharePoint" connector has an input file that accepts all the necessary configurations
for synchronization between Kizeo Forms and SharePoint, this file can be modified manually but for
faster handling there is a configuration wizard.
This input file "conf.json" is initially empty and stored in the user directory, by default in the "Kizeo" folder.
This help explains how to use the wizard to configure this input file.

You can download the setup [HERE](https://s3.eu-west-3.amazonaws.com/dw.kizeo.net/download/sharepoint/sharepoint_setup.msi).