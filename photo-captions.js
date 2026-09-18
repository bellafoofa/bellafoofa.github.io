// EASY PHOTO CAPTION EDITING
// Change only the words inside the quotation marks after each photo number.
// Leave a caption as "" if you do not want text under that image.
window.PHOTO_CAPTIONS = {
  "photo-01": 'Experimenting with Virtual Reality',
  "photo-02": 'Team Bonding Activity',
  "photo-03": 'E-Board Professional Photoshoot',
  "photo-04": 'Surgery combined with VR',
  "photo-05": 'BMES VR Activity',
  "photo-06": 'BMES Humanetics Field Trip',
  "photo-07": 'Coding with ChatGPT',
  "photo-08": 'Detroit Economic Club Young Leaders Conference',
  "photo-09": 'Second Day of Senior Year',
  "photo-10": '2024-2025 Senate Group Photo',
  "photo-11": 'BMES Ice Skating Event',
  "photo-12": 'End of Year Event 2025',
  "photo-13": "Young Leader's Conference with Dr. Tarek Sobh",
  "photo-14": 'ConnectUs Company Team Project Poster',
  "photo-15": 'E-Board 2025 Professional Photo',
  "photo-16": 'CircuitLab in Bioinstrumentation',
  "photo-17": 'First LTU Project: Egg Drop',
  "photo-18": 'Wearable Technology Coding Practice',
  "photo-19": 'HeadUp Brace: Accelerometer Troubleshooting',
  "photo-20": 'Bioinstrumentation Team Photo',
  "photo-21": 'ConnectUs Prototype #1',
  "photo-22": 'Quality Science Education coursework',
};

document.querySelectorAll("[data-photo-id]").forEach((card) => {
  const id = card.dataset.photoId;
  const caption = card.querySelector("figcaption");
  const text = window.PHOTO_CAPTIONS[id] ?? "";
  if (!caption) return;
  caption.textContent = text;
  caption.hidden = !text.trim();
});
