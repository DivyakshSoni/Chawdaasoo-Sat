# 💌 If I Could Write Us Again
> *“A little world I made for you.”*

A romantic, interactive apology website crafted as a personal digital gift from a boyfriend to the girl he loves and hopes to reconnect with. Built with a mobile-first philosophy, elegant typography, warm pastel aesthetics, interactive storytelling, and sincere accountability.

---

## 🌸 Experience Overview

The website is structured into 7 connected, interactive chapters:

1. **Chapter 1: The Little World I Made For You**
   - Floating envelope with interactive 3D wax seal and heart sparkle animation.
   - Playful microcopy and accessible skip-animation option.
2. **Chapter 2: A Letter From My Heart**
   - Cream parchment texture with vintage postage stamp and cancellation lines.
   - Heartfelt apology with smooth progressive reveal and handwritten P.S. note.
3. **Chapter 3: A Little Collection of Memories**
   - Polaroid-style scrapbook with washi tape, casual rotations, and lightbox expansion.
   - Vector illustrations (coffee dates, shared playlists, rainy laughter, starry nights).
   - Toggle to gracefully hide memories if revisiting the past feels uncomfortable.
4. **Chapter 4: A Garden of Little Things (Interactive Mini-Game)**
   - 4 tappable buds (*Kindness*, *Growth*, *Happiness*, *Hope*) that bloom with SVG petal burst physics.
   - Floating inspiration cards and dynamic sky illumination. No timers, scores, or penalties.
5. **Chapter 5: Things I Am Learning About Love**
   - 5 interactive 3D flip cards addressing emotional maturity, accountability, and genuine growth.
   - Summary quote on learning to write one's part of the story better.
6. **Chapter 6: The Playful Question**
   - 1-to-10 rating scale with cute responsive feedback based on score ranges.
   - Reassuring disclaimer that this is a playful website review, not a test of her feelings.
7. **Chapter 7: The Final Question**
   - Respectful, two-step decision tree (*Forgiveness* → *Reconnection*).
   - Multi-branch endings:
     - **Celebration / Reconnect**: Celebratory confetti, heartfelt concluding message, and configurable WhatsApp chat or copyable note.
     - **Need More Time**: Warm, non-pressuring message respecting her space and timeline.
     - **Not Ready**: Gracious, honest farewell wishing her genuine peace and happiness. No guilt trips, disabled buttons, or moving-button tricks.

---

## ✨ Features & Interactions

- **Lo-Fi Ambient Music Synthesizer**: Built with the native Web Audio API (soothing celeste & velvet piano arpeggio). Strict adherence to *never autoplaying audio* — begins only when the user chooses to toggle the music button.
- **Floating Interactive Petals**: Smooth HTML5 canvas simulation of falling rose/sakura petals and champagne orbs. Tapping or clicking anywhere on the screen spawns rising romantic hearts.
- **Personalization Drawer**: Click the **Personalize** tool button in the top bar to customize:
  - Her name or nickname (e.g., *Maya*, *Emma*)
  - Sender signature
  - Optional WhatsApp phone number (with international country code)
  - Full letter text and postscript
  - Toggle to include or hide the memories chapter
  - Automatically saved to `localStorage` with a 1-click **Reset** option.
- **Secret Note Easter Egg**: Clicking the glowing star in the header reveals a hidden wax-stamped message of gratitude.
- **Accessibility & Motion Preferences**: Respects `prefers-reduced-motion` and provides an in-menu toggle for reduced motion.

---

## 🎨 Color Palette & Typography

- **Warm Ivory**: `#FFF9F3`
- **Blush Pink**: `#F8DDE7`
- **Rose Pink**: `#E8A2BB`
- **Deep Berry**: `#873D60`
- **Muted Lavender**: `#E9E2F6`
- **Soft Champagne**: `#F4E4BF`
- **Cream Paper**: `#FCF8F2`
- **Headlines**: Cormorant Garamond (Serif)
- **Body**: Plus Jakarta Sans
- **Handwritten Accents**: Caveat

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

Open `http://localhost:5173/` in your browser.
