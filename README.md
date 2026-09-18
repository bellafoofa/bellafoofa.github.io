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
