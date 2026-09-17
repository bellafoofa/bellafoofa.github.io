const projects = {
  nuitlume: {
    title: 'NuitLume', category: 'Wearable Technology', subtitle: 'A wearable shin illumination system for hands-free visibility.',
    images: ['assets/projects/nuitlume/final.png','assets/projects/nuitlume/components.png','assets/projects/nuitlume/preview.png'],
    sections: [
      ['Overview','NuitLume is a wearable lighting concept designed to provide hands-free illumination for users who need visibility while walking, running, hiking, or working in low-light conditions.'],
      ['Problem / Need','Traditional flashlights occupy a hand and can be inconvenient during movement. The project explored how lighting could be integrated directly into a wearable form.'],
      ['Design','The concept uses a flexible wearable shin structure with integrated LEDs, a power source, and a control mechanism while considering comfort, visibility, and ease of use.'],
      ['Skills','Wearable design • Prototyping • Product design • Human-centered design']
    ]
  },
  headup: {
    title: 'HeadUp', category: 'Bioinstrumentation', subtitle: 'A wearable posture-feedback system using inertial sensing.',
    images: ['assets/projects/headup/design.png','assets/projects/headup/testing.png','assets/projects/headup/preview.png'],
    sections: [
      ['Overview','HeadUp was designed to detect prolonged head-down posture and provide feedback when the user maintains poor posture.'],
      ['Technical Approach','The system uses an IMU-based sensing approach. The project defined a posture threshold of approximately 15° and a 3-second delay before feedback is triggered.'],
      ['Testing','Testing focused on distinguishing acceptable and poor posture while tuning the threshold and timing so the device would provide useful feedback without unnecessary alerts.'],
      ['Skills','IMU sensing • Arduino / embedded systems • Calibration • Testing • Data interpretation']
    ]
  },
  syncare: {
    title: 'SyncCare', category: 'AI + Healthcare', subtitle: 'A privacy-conscious wearable wellness concept.',
    images: ['assets/projects/syncare/preview.png','assets/projects/syncare/app.png','assets/projects/syncare/privacy.png'],
    sections: [
      ['Overview','SyncCare explores a wearable wellness assistant that uses visual cues and AI to provide simple, supportive suggestions such as taking a break, stretching, hydrating, or resting.'],
      ['Design Goal','The concept emphasizes privacy and a lightweight user experience rather than turning wellness data into a complicated dashboard.'],
      ['System','The concept combines a wearable sensing device, an AI analysis workflow, and a simple user-facing recommendation interface.'],
      ['Skills','Wearable technology • AI concepts • Human-centered design • Privacy-aware product design']
    ]
  },
  'smart-collar': {
    title: 'Smart Collar', category: 'Embedded Systems', subtitle: 'Bluetooth step tracking paired with an automated pet feeder.',
    images: ['assets/projects/smart-collar/preview.jpg','assets/projects/smart-collar/tag.jpg','assets/projects/smart-collar/app.png'],
    sections: [
      ['Overview','The Smart Collar project combines a wearable pet tracker with an automated feeder. The system was designed to respond to activity recorded by the wearable.'],
      ['System Design','A Circuit Playground Bluefruit wearable tracks movement and communicates wirelessly with a second board controlling a servo-based feeder.'],
      ['Interaction','The project explores a simple closed-loop interaction: movement is detected, the wireless system communicates the event, and the feeder responds.'],
      ['Skills','CircuitPython • BLE / wireless communication • Servo control • Wearable electronics • Prototyping']
    ]
  },
  insole: {
    title: 'Pressure-Point Insole', category: 'Wearable / Materials', subtitle: 'A layered insole concept for targeted pressure feedback.',
    images: ['assets/projects/insole/layers.jpg','assets/projects/insole/system.png','assets/projects/insole/preview.png'],
    sections: [
      ['Overview','This project explored a wearable insole designed around targeted pressure points, combining material selection, structural layers, and feedback concepts.'],
      ['Design','The concept uses a layered construction to control where pressure is concentrated or distributed, with attention to comfort and manufacturability.'],
      ['Development','The project involved translating a user need into a physical product concept and considering materials, geometry, and interaction.'],
      ['Skills','Materials selection • CAD / 3D design • Wearable design • Prototyping']
    ]
  },
  'presence-plant': {
    title: 'Presence Plant', category: 'Human-Centered Design', subtitle: 'An interactive plant concept designed around presence and engagement.',
    images: ['assets/projects/presence-plant/hero.png','assets/projects/presence-plant/system.png','assets/projects/presence-plant/preview.png'],
    sections: [
      ['Overview','Presence Plant is an interactive product concept that uses a plant-inspired form to explore how technology can encourage presence, interaction, and care.'],
      ['System','The concept combines sensing and feedback in a simple physical object intended to feel approachable rather than technical.'],
      ['Design Focus','The project emphasizes the user experience, physical form, and relationship between the user and the device.'],
      ['Skills','Human-centered design • Systems thinking • Prototyping • Product concept development']
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeProject));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  modalContent.innerHTML = `
    <div class="modal-head"><div><span class="modal-category">${p.category}</span><h2>${p.title}</h2><p>${p.subtitle}</p></div></div>
    <div class="modal-gallery">${p.images.map(src => `<img src="${src}" alt="${p.title} project image">`).join('')}</div>
    <div class="detail-grid">${p.sections.map(([heading, text]) => `<section><h3>${heading}</h3><p>${text}</p></section>`).join('')}</div>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeProject() { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); }
