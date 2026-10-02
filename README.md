# Ibrahim Nurjasman Nugroho — Developer Portfolio

Web applications, browser extensions, automation, and front-end concept websites.

**Portfolio:** https://ibrahimnmch2017-boop.github.io/

**LinkedIn:** https://www.linkedin.com/in/ibrahim-nurjasman-nugroho-34972016b/

## What is included

- English/Indonesian homepage and four project case studies: IELTS 24 Prep Platform, e-SPIP Assistant, Reviu LK WebApp, and Blur WhatsApp Web.
- Faithful project previews: a real screenshot for IELTS 24; presentation-only reconstructions with synthetic sample data for e-SPIP Assistant and Reviu LK; the actual extension popup for Blur WhatsApp Web. Captions state which is which. No real records, private chat, or government portal data are shown.
- Seven working front-end concept websites for local businesses. Business names, images, prices, and reviews are fictional examples.

The application case studies document the work without including the underlying application source, internal working papers, or government portal access details. The public source in this repository is the portfolio website and its business website demos.

## Website stack

Static HTML, CSS, and JavaScript. No package installation or build step is required to serve the checked-in pages. Fonts are requested from Google Fonts, with system-font fallbacks. The language preference is stored locally when browser storage is available.

## Preview locally

From the repository root:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ in a browser. The HTML files can also be opened directly.

## Structure

```text
index.html             Bilingual developer portfolio
projects/              Four project case studies
assets/portfolio.css   Shared portfolio styles
assets/portfolio.js    Language switch
assets/projects/       Project preview images (screenshot or labelled reconstruction)
assets/thumbs/         Actual screenshots of the website demos
*-demo/                Seven concept website demos
DESIGN.md              Visual and content conventions
```

## Deployment

This user-site repository is named `ibrahimnmch2017-boop.github.io`. GitHub Pages publishes the site at the account's root Pages URL. Keep `index.html` at the root of the configured publishing source.

## Validation

Check desktop and narrow mobile layouts, internal links, loaded assets, language switching, and that each application preview is labelled as a screenshot or a faithful reconstruction with synthetic sample data (distinct from the working website demos). Full accessibility compliance and performance figures are not claimed without supporting measurements.
