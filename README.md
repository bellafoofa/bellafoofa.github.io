# Isabella Chandler Portfolio — v19

Changes:
- Poké Ball logo is permanently visible beside the site name.
- Removed the confusing logo/plus-box behavior.
- Light mode is the default on first visit.
- Dark mode is controlled only by the visible Light/Dark toggle and remembers the user's choice.
- Fixed dark-mode contrast for the B.S. Biomedical Engineering badge under the portrait.
- Header remains responsive for desktop, laptop, tablet, iPhone, and Android.

Upload the CONTENTS of this folder to the root of your GitHub Pages repository, replacing the old files.

## Editing photo captions

Open `photos.html`. Each photo now looks like:

    <figure class="photo-card">
      <img src="./assets/photos/photo-01.jpg" alt="Portfolio photo">
      <figcaption>Add your caption here</figcaption>
    </figure>

Only change the words between `<figcaption>` and `</figcaption>`.

Example:

    <figcaption>Biomedical Engineering Design Expo · Spring 2026</figcaption>

To hide a caption completely, delete its `<figcaption>...</figcaption>` line.

## v21 automatic light/dark mode

There is no visible theme button anymore. The site automatically follows the visitor's
browser/device light or dark preference using `prefers-color-scheme`.

Light mode uses the pale sage/cream palette. Dark mode uses the forest green palette.
Text, buttons, contact cards, photo captions, and the degree badge have dedicated
high-contrast colors in both modes.


## v22 case-study structure
- No manual light/dark toggle. Theme follows the visitor's device/browser preference.
- Hero buttons use one soft sage style in both themes.
- Case Studies and View Projects capitalization corrected.
- Mopec preview uses contain/center cropping so the left-side workflow stays visible.
- Dark-mode Current Focus / Technical Themes cards have dedicated high-contrast colors.
- `case-studies/` contains a dedicated internal page for every case study.
- ConnectUs expo setup and expo poster were moved from the overview into `case-studies/connectus.html`.


## v23 internal case-study tabs

Each project now has its own internal page in `case-studies/`.
The page has three tabs:
- Overview
- Design & Technical
- Presentation & Files

Supporting presentation slides, expo photos, posters, and downloadable project files now live inside the project's internal page instead of on the Case Studies overview.

### Editing photo captions
Open `photo-captions.js`.
Change only the text in quotation marks, for example:

    "photo-01": "Biomedical Engineering lab work",

Leave the text empty (`""`) to hide that caption.

### Adding more case-study material later
Put images in `assets/case-studies/<project-name>/`.
Put downloadable PDFs/PPTX files in `assets/case-study-files/`.
Then add the image/file link inside that project's HTML page in `case-studies/`.

## GitHub Pages Lite Build
This version intentionally omits the large downloadable PowerPoint and slide-archive files
from `assets/case-study-files/` so it can be uploaded through GitHub's website more reliably.
The case-study information and web images remain in the site.

Important: extract the ZIP first and upload the CONTENTS of this folder to your repository.
Do not upload this ZIP file itself into the repository.

## v24 updates
- ConnectUs Presentation & Files now shows one expo poster, not a duplicate.
- Mopec preview is centered with contain-fit so the left edge is not clipped.
- Photo captions 01–15 were filled in as requested.
- Photo 16 was added as "CircuitLab in Bioinstrumentation".
- Captions remain easy to edit in `photo-captions.js`.

## v25 updates
- Replaced the website resume with the September 2026 employer-ready BME resume.
- Added gallery photos 17–22 and their requested captions.
- NuitLume is now a normal case-study card in the main Case Studies list on desktop and mobile.
- Removed the separate "Additional Project Archive" section.

## v26 GitHub-ready update
- Added the new generated NuitLume preview image.
- Converted large project PNG previews and gallery photos to WebP to reduce upload size.
- This package is intentionally smaller and better suited to GitHub's browser uploader.
- Upload the CONTENTS of this folder to the repository, not the ZIP itself.
