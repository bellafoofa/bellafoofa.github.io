// EASY PHOTO CAPTION EDITING
// Change only the words inside the quotation marks after each photo number.
// Leave a caption as "" if you do not want text under that image.
window.PHOTO_CAPTIONS = {
  "photo-01": "Add your caption here",
  "photo-02": "Add your caption here",
  "photo-03": "Add your caption here",
  "photo-04": "Add your caption here",
  "photo-05": "Add your caption here",
  "photo-06": "Add your caption here",
  "photo-07": "Add your caption here",
  "photo-08": "Add your caption here",
  "photo-09": "Add your caption here",
  "photo-10": "Add your caption here",
  "photo-11": "Add your caption here",
  "photo-12": "Add your caption here",
  "photo-13": "Add your caption here",
  "photo-14": "Add your caption here",
  "photo-15": "Professional portrait"
};

document.querySelectorAll("[data-photo-id]").forEach((card) => {
  const id = card.dataset.photoId;
  const caption = card.querySelector("figcaption");
  const text = window.PHOTO_CAPTIONS[id] ?? "";
  if (!caption) return;
  caption.textContent = text;
  caption.hidden = !text.trim();
});
