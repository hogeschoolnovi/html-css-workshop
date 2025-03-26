# Stappenplan Results Summary Component

## 1. Project Setup
1. Maak een nieuwe `index.html` aan
2. Maak een nieuwe `styles.css` aan
3. Link de CSS file in de HTML
4. Importeer het Hanken Grotesk font (weights: 500, 700, 800)

## 2. HTML Structuur
1. Zet de basis HTML5 structuur op
2. Maak een main container `.content`
3. Verdeel in twee panels:
   - Linker panel (paars, met score)
   - Rechter panel (wit, met summary)

### Linker Panel
1. Titel "Your Result"
2. Grote cirkel met score
   - Hoofdgetal "76"
   - Subtekst "of 100"
3. "Great" tekst
4. Beschrijvende tekst over de score

### Rechter Panel
1. "Summary" titel
2. Lijst van 4 items met:
   - Icon (uit assets)
   - Categorie naam
   - Score (x / 100)
3. Continue button

## 3. CSS Styling - Desktop (>768px)

### Algemene Layout
1. Centreer de card op de pagina
2. Stel de breedte in op 736px
3. Voeg border-radius en box-shadow toe
4. Maak een flex container voor de twee panels

### Linker Panel Styling
1. Voeg gradient background toe (zie README voor kleuren)
2. Centreer alle content
3. Style de score cirkel:
   - Maak perfect rond (200x200px)
   - Voeg gradient toe
   - Centreer getallen
4. Style de teksten volgens design

### Rechter Panel Styling
1. Voeg padding toe
2. Style de summary items:
   - Voeg achtergrondkleuren toe (zie README)
   - Maak flexbox voor layout
   - Style de scores
3. Maak de continue button:
   - Voeg hover state toe
   - Gebruik correcte border-radius
   - Voeg gradient toe voor hover

## 4. CSS Styling - Mobile (<768px)

### Aanpassingen voor Mobile
1. Verander layout naar column
2. Pas de border-radius aan van het linker panel
3. Maak panels 100% breed
4. Pas font-sizes aan
5. Verklein de score cirkel
6. Pas padding waardes aan

## 5. Final Touches
1. Controleer alle kleuren met de style guide
2. Verifieer alle font-weights
3. Check responsive gedrag
4. Test hover states
5. Valideer HTML
6. Test cross-browser

## Tips
- Gebruik de HSL kleuren exact zoals gespecificeerd
- Let op de transparantie bij bepaalde elementen
- Zorg dat alle interactieve elementen een hover state hebben
- Maak gebruik van CSS custom properties voor herbruikbare waardes
- Test op verschillende schermgroottes
- Gebruik semantische HTML waar mogelijk
