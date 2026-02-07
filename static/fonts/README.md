# 🔤 Fonts Folder

Plaats hier custom font bestanden als je specifieke fonts wilt gebruiken die niet op Google Fonts staan.

## Ondersteunde formaten:

- `.ttf` (TrueType Font) - Meest gebruikt
- `.woff` / `.woff2` (Web Open Font Format) - Beste voor web
- `.otf` (OpenType Font)

## Fonts toevoegen:

### Stap 1: Font bestand plaatsen
Plaats je font bestand in deze map, bijvoorbeeld:
- `BebasNeue-Regular.ttf`
- `Oswald-Bold.woff2`

### Stap 2: Font declareren in CSS

Open `static/css/style.css` en voeg toe:

```css
@font-face {
  font-family: 'MijnFont';
  src: url('/fonts/MijnFont.woff2') format('woff2'),
       url('/fonts/MijnFont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

### Stap 3: Font gebruiken

Update CSS variabelen:

```css
:root {
  --font-display: 'MijnFont', sans-serif;
}
```

Of gebruik direct in CSS:

```css
.event-title {
  font-family: 'MijnFont', sans-serif;
}
```

## Aanbevolen retro/vintage fonts:

### Gratis fonts voor jaren '70/'80 stijl:

1. **Bebas Neue** - Bold, impact display font
   - Download: [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue)

2. **Righteous** - Retro rounded display
   - Download: [Google Fonts](https://fonts.google.com/specimen/Righteous)

3. **Monoton** - Art deco style
   - Download: [Google Fonts](https://fonts.google.com/specimen/Monoton)

4. **Bungee** - Chunky display font
   - Download: [Google Fonts](https://fonts.google.com/specimen/Bungee)

5. **Anton** - Condensed impact
   - Download: [Google Fonts](https://fonts.google.com/specimen/Anton)

### Commerciële fonts (betaald):

Als je budget hebt voor premium fonts:

1. **Cooper Black** - Iconic '70s font
2. **ITC Bauhaus** - Geometric art deco
3. **Futura Bold** - Clean retro modernism
4. **Helvetica Bold Condensed** - Classic Swiss style

## Google Fonts gebruiken (aanbevolen):

**Voordeel**: Geen bestanden nodig, sneller laden

In `static/css/style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;700&display=swap');

:root {
  --font-display: 'Bebas Neue', sans-serif;
  --font-heading: 'Oswald', sans-serif;
}
```

## Font licenties:

⚠️ **Let op**: Controleer altijd de licentie voordat je een font gebruikt!

- **Google Fonts** = Gratis voor alle doeleinden
- **Commercial fonts** = Vaak alleen met licentie
- **DaFont/1001Fonts** = Check per font de licentie

## Tips:

1. **Maximaal 3 fonts** - Voor snelheid en consistentie
2. **WOFF2 formaat** - Beste compressie voor web
3. **Font subsetting** - Alleen karakters die je nodig hebt
4. **Fallback fonts** - Altijd een backup specificeren

Voorbeeld goede fallback:
```css
font-family: 'BebasNeue', 'Impact', 'Arial Black', sans-serif;
```

## Hulp nodig?

Zie **AANPASSINGEN.md** voor meer details over fonts aanpassen!
