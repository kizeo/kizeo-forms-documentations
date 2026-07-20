# Kizeo Forms Documentations

Documentation développeur de **Kizeo Forms** (Kizeo Connector, API Web Service REST, connecteur SharePoint, deep linking).

Le site est construit avec [Docusaurus 3](https://docusaurus.io/) et publié sur GitHub Pages :
👉 **https://kizeo.github.io/kizeo-forms-documentations/**

Il est bilingue : **anglais** (par défaut) et **français**.

---

## Prérequis

- **Node.js ≥ 24**
- **npm** (fourni avec Node)

---

## Structure du projet

```
kizeo-forms-documentations/         # Site Docusaurus (racine du projet)
├── docs/                      # Contenu de la documentation (Markdown, en anglais = langue source)
├── i18n/                      # Traductions
│   ├── en/                    # Chaînes UI source (généré)
│   └── fr/                    # Traductions françaises
│       ├── docusaurus-theme-classic/                   # navbar / footer
│       ├── docusaurus-plugin-content-docs/current/     # Docs traduites en français
│       └── code.json                                   # Chaînes de la page d'accueil
├── src/
│   ├── css/custom.css         # Styles globaux (couleurs de marque Kizeo)
│   └── pages/index.js         # Page d'accueil
├── static/                    # Fichiers statiques (images, favicon…)
├── crowdin.yaml               # Configuration de synchronisation des traductions (Crowdin)
├── docker-compose.yml
├── Dockerfile
├── docusaurus.config.js       # Configuration du site (navbar, footer, i18n, thème…)
├── package.json
└── sidebars.js                # Arborescence des menus de la doc
```

> ℹ️ Les fichiers Markdown sources vivent dans `docs/` (langue anglaise).
> `docusaurus.config.js` les référence via `path: 'docs'`.

---

## Installation

```bash
npm install
```

---

## Développement

Docusaurus ne sert **qu'une seule langue à la fois** en mode développement.

```bash
# Version anglaise (par défaut) → http://localhost:3000/kizeo-forms-documentations/
npm start

# Version française → http://localhost:3000/kizeo-forms-documentations/fr/
npm run start:fr
```

Le serveur se recharge automatiquement à chaque modification.

> Pour prévisualiser **les deux langues ensemble** (avec le sélecteur de langue fonctionnel),
> il faut passer par le build de production (voir ci-dessous). C'est un comportement normal de Docusaurus.

---

## Build de production

```bash
npm run build     # génère le site statique dans build/ (toutes les langues)
npm run serve     # sert le build localement pour vérification
```

Le contenu généré dans `build/` est un site statique prêt à être hébergé.

---

## Écrire de la documentation

1. Ajoutez ou modifiez un fichier `.md` dans `docs/`.
2. Chaque fichier commence par un en-tête (frontmatter) :

   ```markdown
   ---
   id: mon-identifiant
   title: Titre de la page
   sidebar_label: Libellé court (optionnel)
   ---

   Contenu de la page…
   ```

3. Référencez l'`id` dans `sidebars.js` pour faire apparaître la page dans le menu.

> ⚠️ **MDX 3** : le contenu est compilé en MDX. Tout `<tag>` HTML hors bloc de code doit être
> valide (balises fermées, `<meta />` auto-fermantes, `style={{…}}` au lieu de `style="…"`),
> et les `{ }` littéraux hors code doivent être mis en `` `code inline` ``. En cas de doute,
> encadrez les exemples de code par des blocs de code.

---

## Traductions (i18n)

Langues configurées dans `docusaurus.config.js` (`en`, `fr`).

### Régénérer les fichiers de chaînes à traduire

```bash
npm run write-translations -- --locale fr
```

Cela met à jour les fichiers JSON dans `i18n/fr/` (navbar, footer, `code.json`).

### Traduire les pages de documentation

Copiez/traduisez le fichier depuis `docs/` vers :

```
i18n/fr/docusaurus-plugin-content-docs/current/<même-nom-de-fichier>.md
```

### Crowdin

`crowdin.yaml` décrit le mapping source ↔ traductions pour une synchronisation via
[Crowdin](https://crowdin.com/) (variables d'environnement `CROWDIN_DOCUSAURUS_PROJECT_ID`
et `CROWDIN_DOCUSAURUS_API_KEY`).

---

## Déploiement (GitHub Pages)

Le déploiement est **automatique** : à chaque merge sur la branche principale (`master`),
la CI GitHub Actions build le site et le publie sur GitHub Pages. Il n'y a **aucune
action manuelle** à effectuer.

Le workflow est défini dans `.github/workflows/deploy.yml`. Les paramètres de publication
(`url`, `baseUrl`, `organizationName`, `projectName`) sont définis dans `docusaurus.config.js`.

---

## Docker

Environnement de développement conteneurisé :

```bash
docker compose up --build
```

Le site est alors accessible sur `http://localhost:3000/kizeo-forms-documentations/`.

---

## Scripts npm

| Script                       | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `npm start`                  | Serveur de dev (anglais)                    |
| `npm run start:fr`           | Serveur de dev (français)                   |
| `npm run build`              | Build de production (toutes les langues)    |
| `npm run serve`              | Sert le build de production localement      |
| `npm run write-translations` | Génère/actualise les fichiers de traduction |
| `npm run clear`              | Nettoie le cache Docusaurus                 |
