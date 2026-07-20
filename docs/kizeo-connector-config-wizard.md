---
id: demo
title: Settings Wizard
sidebar_label: Demo
---

<p style={{fontSize: '11pt', fontStyle: 'italic'}}>
    You need to be connected on <a href="https://forms.kizeo.com/">Kizeo Forms</a> to use the settings wizard
</p>
<iframe id="wizard"  frameBorder="0" style={{width: '100%', height: '2000px'}}></iframe>
<script>
    let origin=window.location.origin
    document.getElementById('wizard').setAttribute('src',origin+'/kizeo-forms-documentations/config-wizard')
</script>
