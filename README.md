# Happy 4 Months — "My Premii"

A small, lovingly-made static page celebrating 4 months together. It's a single-page HTML site with a background slideshow, a love letter, a timeline of moments, and a small flower gallery.

## Features

- Background slideshow (uses images from `assets/`).
- Floating heart animation and subtle frosted-glass UI.
- Typewriter heading and a days-together counter (starts at June 17, 2025).
- Love letter and timeline sections.
- Flower gallery (4 SVG bloom icons in `assets/`).
- Optional background music (loaded from a remote MP3 URL).

## Files

- `index.html` — main page (HTML, inline CSS and JS; also references `styles.css` if present).
- `assets/` — images and SVGs used by the page. Current notable files added:
  - `flower1.svg`, `flower2.svg`, `flower3.svg`, `flower4.svg` — decorative flower icons.
  - `1.png`, `2.png`, `3.jpg`, `4.png` — slideshow images.
- `styles.css` — optional external stylesheet (there is a link in `index.html` if you want global overrides).

## How to view

Open `index.html` in your browser directly (double-click the file). For a lightweight local server (recommended for consistent behavior):

PowerShell (from project root):

```powershell
# run from d:\Premii\PremiiIdiot-4Months
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

(If you don't have Python, opening the file directly also works.)

## Quick customizations

- Change the "days together" start date: edit the `START_DATE` constant in the inline script inside `index.html`.
- Replace slideshow images: put new images into `assets/` and update the `background-image` urls in the `.slide` elements.
- Swap the flower icons: replace `assets/flower1.svg`..`flower4.svg` with other SVG or PNG images. The gallery is responsive and will adapt to size.
- Edit the letter or timeline text directly in `index.html`.
- Tweak styling: either edit the inline `<style>` in `index.html`, or add/modify `styles.css` (it is referenced by `index.html`).

## Accessibility & notes

- Images have `alt` attributes — update them if you replace images.
- The page uses Tailwind via CDN for utility classes; if you prefer a build step, remove the CDN and add a build pipeline.
- Volume for the background music is set via the audio element; you can remove the `<audio>` block to disable music.

## Want changes?

I can:

- Replace the SVG flowers with photos or a lightbox viewer.
- Add a small admin JSON/txt to let you edit the letter and captions without editing HTML manually.
- Improve accessibility (keyboard focus states, better ARIA labels).

If you'd like any of those, tell me which and I can add it.
