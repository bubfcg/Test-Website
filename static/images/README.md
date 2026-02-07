# 📁 Images Folder

Plaats hier je afbeeldingen voor de website.

## Aanbevolen afbeeldingen:

### Logo & Badge
- `ca-badge.png` - CA logo/badge voor in de hero sectie (180x180px of groter)
- `logo.png` - Algemeen logo voor header/footer

### Silhouetten
- `silhouette-left.png` - Linker persoon (bijv. met microfoon) ~200x400px
- `silhouette-right.png` - Rechter persoon (bijv. springend) ~200x400px
- `person-jumping.png` - Extra springende persoon
- `person-free.png` - Persoon met gebroken kettingen

### Achtergronden (optioneel)
- `hero-background.jpg` - Achtergrond voor hero sectie
- `texture.png` - Subtiele textuur overlay

### Decoraties
- `birds.svg` - Vogels voor decoratie (optioneel)

## Afbeeldingen voorbereiden:

### Formaten:
- **PNG** - Voor logo's en silhouetten (met transparantie)
- **JPG** - Voor foto's en achtergronden
- **SVG** - Voor iconen en simpele graphics

### Optimaliseren:
- Gebruik [TinyPNG.com](https://tinypng.com) om bestandsgrootte te verkleinen
- Houd onder 500KB per afbeelding
- Gebruik juiste resolutie (niet te groot!)

### Resoluties:
- Logo/Badge: 180x180px tot 500x500px
- Silhouetten: 200x400px tot 400x800px  
- Achtergronden: 1920x1080px (Full HD)

## Afbeeldingen uit ontwerp extraheren:

Als je afbeeldingen uit je originele ontwerp wilt gebruiken:

1. Open ontwerp in Photoshop/GIMP/Figma
2. Selecteer de laag met het element
3. Exporteer als PNG (met transparantie) of JPG
4. Optimaliseer bestandsgrootte
5. Plaats in deze map
6. Update referenties in HTML/CSS

## Quick start:

Na het plaatsen van afbeeldingen, update de referenties:

### In HTML (layouts/index.html):
```html
<img src="/images/ca-badge.png" alt="CA Badge">
```

### In CSS (static/css/style.css):
```css
background-image: url('/images/silhouette-left.png');
```

Zie **AANPASSINGEN.md** voor gedetailleerde instructies!
