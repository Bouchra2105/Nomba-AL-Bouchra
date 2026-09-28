# Portfolio Digital — NOMBA AL'BOUCHRA

Site web vitrine et portfolio professionnel de **NOMBA AL'BOUCHRA**, Développeur Web & Architecte Digital.

---

## 🚀 Guide de Déploiement sur Vercel

Ce projet est un site statique HTML/CSS/JavaScript pur, optimisé pour un hébergement ultra-rapide sur **Vercel** grâce au réseau global CDN.

### Option 1 : Déploiement via Git & GitHub (Recommandé)

1. **Pousser votre code sur GitHub** :
   ```bash
   git add .
   git commit -m "Fix bugs et configuration Vercel"
   ```

2. **Connecter à Vercel** :
   - Rendez-vous sur [vercel.com](https://vercel.com/) et connectez-vous.
   - Cliquez sur **"Add New..."** > **"Project"**.
   - Importez votre dépôt GitHub.
   - Dans le champ *Framework Preset*, sélectionnez **"Other"**.
   - Laissez le *Root Directory* par défaut (`./`).
   - Cliquez sur **"Deploy"**.

3. **Mises à jour automatiques** :
   - Chaque modification poussée sur la branche principale redéploiera automatiquement votre site en quelques secondes !

---

### Option 2 : Déploiement via la CLI Vercel

1. **Installer la CLI Vercel** :
   ```bash
   npm install -g vercel
   ```

2. **Se connecter et déployer** :
   ```bash
   vercel login
   vercel
   ```

3. **Déployer en Production** :
   ```bash
   vercel --prod
   ```

---

## 🌐 Configuration d'un Domaine Personnalisé

1. Sur le tableau de bord Vercel, allez dans votre projet > **Settings** > **Domains**.
2. Ajoutez votre nom de domaine (ex: `nomba-albouchra.com`).
3. Configurez les enregistrements DNS chez votre fournisseur (ex: Namecheap, GoDaddy, Cloudflare) :
   - **A Record** : `@` vers `76.76.21.21`
   - **CNAME Record** : `www` vers `cname.vercel-dns.com`

---

## 🛠️ Structure du Projet

- `index.html` : Structure HTML5 sémantique et multilingue.
- `style.css` : Styles modernes (Design HorizonX, Dark/Light theme, Responsive).
- `script.js` : Moteur de fonctionnalités (i18n, CLI interactive, Modales, Filtres).
- `assets/` : Photos de profil, diplômes et images de projets.
- `vercel.json` : Configuration Vercel (Cache, URLs propres).
