---
id: demo
title: Settings Wizard
sidebar_label: Demo
---

<p style="font-size:11pt; font-style:italic">
    Vous devez être connecté sur <a href="https://forms.kizeo.com/">Kizeo Forms</a> pour utiliser l'assistant de configuration
</p>
<iframe id="wizard"  frameBorder="0" style={{width: '100%', height: '2000px'}}></iframe>
<script>
    let origin=window.location.origin
    document.getElementById('wizard').setAttribute('src',origin+'/kizeo-forms-documentations/config-wizard')
</script>
