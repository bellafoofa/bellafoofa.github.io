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
