# We Live Free 2026 - Hugo Website

Een moderne Hugo website voor de Area C.A. Holland Conventie 2026, geïnspireerd op het originele ontwerp met een retro sunburst aesthetic.

## 📋 Inhoud

Deze Hugo site bevat:
- **Responsive homepage** met sunburst design, countdown timer en call-to-action
- **Registratie sectie** met formulier
- **Prijzenlijst** met verschillende ticketopties
- **Accordeon info sectie** met locatie, service, contact info
- **Blog functionaliteit** voor updates en nieuws
- **Custom CSS** met retro kleuren en animaties
- **JavaScript** voor interactieve elementen

## 🚀 Hugo Installeren

### Windows
1. Download Hugo van: https://github.com/gohugoio/hugo/releases
2. Download het `hugo_extended_X.XXX.X_windows-amd64.zip` bestand
3. Pak het uit naar bijvoorbeeld `C:\Hugo\bin`
4. Voeg `C:\Hugo\bin` toe aan je PATH environment variable
5. Open een nieuwe terminal en test: `hugo version`

### macOS
```bash
brew install hugo
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get install hugo
```

Of download de binary van de releases pagina.

## 🎯 Website Gebruiken

### 1. Start de development server

Open een terminal in de `mijn-hugo-site` map en voer uit:

```bash
hugo server -D
```

De website is nu beschikbaar op: http://localhost:1313

De `-D` flag toont ook draft content. Voor alleen gepubliceerde content:
```bash
hugo server
```

### 2. Nieuwe blog post maken

```bash
hugo new posts/mijn-nieuwe-post.md
```

Dit maakt een nieuw bestand aan in `content/posts/` met de juiste frontmatter.

### 3. Content bewerken

Alle content staat in de `content/` map:
- `content/_index.md` - Homepage content
- `content/about.md` - Over pagina  
- `content/posts/` - Blog posts

Markdown bestanden bevatten frontmatter (metadata tussen `+++`) en content:

```markdown
+++
title = 'Mijn Titel'
date = 2026-02-07T20:00:00+00:00
draft = false
+++

Hier komt de content in Markdown formaat...
```

### 4. Website configureren

Bewerk `hugo.toml` om:
- Site titel te wijzigen
- Base URL aan te passen (voor productie)
- Menu items toe te voegen/verwijderen
- Site parameters te configureren

### 5. Productie build maken

Als je klaar bent met ontwikkelen, bouw de productie versie:

```bash
hugo
```

Dit genereert een `public/` map met alle statische HTML, CSS en JS bestanden die je kunt deployen naar een webserver.

## 🎨 Design Aanpassingen

### Kleuren wijzigen

Bewerk CSS variabelen in `static/css/style.css`:

```css
:root {
  --primary-yellow: #FFD700;
  --light-blue: #87CEEB;
  --orange: #FF8C42;
  /* etc... */
}
```

### Layout aanpassen

Templates staan in `layouts/`:
- `layouts/_default/baseof.html` - Basis template (header, footer)
- `layouts/index.html` - Homepage template
- `layouts/_default/single.html` - Enkele pagina template
- `layouts/_default/list.html` - Overzichtspagina template

### Countdown timer aanpassen

De countdown telt af naar 14 augustus 2026. Om de datum te wijzigen, bewerk `static/js/main.js`:

```javascript
const targetDate = new Date('2026-08-14T00:00:00').getTime();
```

## 📁 Bestandsstructuur

```
mijn-hugo-site/
├── archetypes/          # Templates voor nieuwe content
│   └── default.md
├── content/             # Alle website content
│   ├── _index.md       # Homepage content
│   ├── about.md        # Over pagina
│   └── posts/          # Blog posts
├── layouts/            # HTML templates
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   └── index.html
├── static/             # Statische bestanden
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/         # Plaats hier afbeeldingen
├── hugo.toml           # Site configuratie
└── README.md           # Deze file
```

## 🌐 Deployment

### Netlify (Aanbevolen - Gratis)

1. Push je code naar GitHub/GitLab
2. Ga naar netlify.com en log in
3. Klik "New site from Git"
4. Selecteer je repository
5. Build command: `hugo`
6. Publish directory: `public`
7. Klik "Deploy site"

Netlify bouwt en host je site automatisch bij elke commit!

### Andere opties

- **GitHub Pages**: Gebruik GitHub Actions voor automatische builds
- **Vercel**: Soortgelijk aan Netlify
- **Traditionele hosting**: Upload de `public/` map via FTP

## 🔧 Veelvoorkomende Taken

### Afbeelding toevoegen

1. Plaats afbeelding in `static/images/`
2. Refereer in Markdown: `![Alt text](/images/mijn-foto.jpg)`
3. Of in HTML: `<img src="/images/mijn-foto.jpg" alt="Alt text">`

### Menu item toevoegen

Bewerk `hugo.toml`:

```toml
[[menu.main]]
  name = 'Contact'
  url = '/contact/'
  weight = 4
```

### Formulier werkend maken

Het huidige formulier is een demo. Voor een werkend formulier gebruik:
- **Netlify Forms** (als je op Netlify host)
- **Formspree** (externe service)
- **Custom backend** (PHP, Node.js, etc.)

## 📱 Responsive Design

De site is volledig responsive en werkt op:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobiel (320px - 768px)

## 🆘 Hulp Nodig?

- Hugo Documentatie: https://gohugo.io/documentation/
- Hugo Forum: https://discourse.gohugo.io/
- Hugo GitHub: https://github.com/gohugoio/hugo

## 📝 Licentie

Dit is een custom website gemaakt voor de We Live Free 2026 conventie.

---

**Veel succes met je Hugo website! 🎉**

Voor vragen of problemen, raadpleeg de Hugo documentatie of vraag hulp in de community.
