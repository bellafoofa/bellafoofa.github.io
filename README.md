# Isabella Chandler Portfolio

## Upload structure
Upload the contents of this folder to the **root** of your GitHub Pages repository:

- `index.html`
- `photos.html`
- `style.css`
- `script.js`
- `assets/`

The `assets` folder already contains the project preview/detail images, your profile photo, and `resume.pdf`.

## Changing a project preview image
Open `index.html` and find the project card. Change the `src` value, for example:

`<img src="assets/projects/nuitlume/preview.png" ...>`

to the filename of another image in that project's folder.

For example, if you add `my-new-preview.jpg` to `assets/projects/nuitlume/`, use:

`<img src="assets/projects/nuitlume/my-new-preview.jpg" ...>`

## Adding photos
Create `assets/photos/`, put your JPG/PNG photos there, and replace the placeholder blocks in `photos.html` with image tags such as:

`<img src="assets/photos/lab-day.jpg" alt="Isabella in the lab">`

## Resume
The current resume is already included as `assets/resume.pdf`.

## GitHub Pages
Repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
