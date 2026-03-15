# Localia - Site Web

Site web officiel de présentation et documentation de Localia.

## Structure

```
localia-web/
├── index.html          # Page d'accueil
├── installation.html   # Guide d'installation
├── tutoriel.html       # Guide d'utilisation
├── payment.html        # Page de don (pay what you want)
├── mentions-legales.html
├── cgu.html
├── politique.html
├── css/
│   └── styles.css       # Styles globaux
└── js/
    └── main.js         # Scripts JS
```

## Personnalisation

### Ajouter des captures d'écran

1. Créez un dossier `images` dans ce répertoire
2. Ajoutez vos captures d'écran (format recommandé: PNG, 1920x1080)
3. Modifiez les fichiers HTML pour les intégrer

### Modifier les couleurs

Les couleurs sont définies dans `css/styles.css`:
```css
:root {
    --bg-primary: #0a0a0f;
    --brand-primary: #8b5cf6;
    /* ... */
}
```

### Connecter le système de paiement

La page `payment.html` contient un formulaire de don. Pour le rendre fonctionnel:

1. **Stripe** (recommandé):
   - Créez un compte Stripe
   - Créez un bouton de paiement Stripe
   - Remplacez le bouton dans le HTML par votre code Stripe

2. **PayPal**:
   - Créez un bouton PayPal
   - Remplacez l'action du formulaire

3. **Ko-fi / Buy Me a Coffee**:
   - Créez une page Ko-fi
   - Remplacez le bouton par un lien vers votre page

## Déploiement

### GitHub Pages
```bash
git init
git add .
git commit -m "Add website"
# Créez un repo sur GitHub
git remote add origin https://github.com/votre-user/localia-web.git
git push -u origin main
# Activez GitHub Pages dans les settings
```

### Netlify
1. Connectez votre compte Netlify
2. Importez ce dossier
3. Le site sera déployé automatiquement

### Vercel
```bash
npm i -g vercel
vercel
```

### Serveur local
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000
```

## Licence

Ce site est fourni pour le projet Localia.
