const projects = {
  mopec: {
    title: 'Mopec Medical AI Senior Project',
    category: 'Senior Capstone · Company Sponsored',
    subtitle: 'Early-stage BME senior project focused on developing, training, and fine-tuning an AI model for a healthcare-facing company application.',
    hero: 'assets/projects/mopec/preview-generated.png',
    gallery: [
      'assets/projects/mopec/model-split.png',
      'assets/projects/mopec/vlm-workflow.png'
    ],
    overview: 'This is my BME company-sponsored senior project with Mopec. Our team is developing, training, and fine-tuning an AI model intended for future use in hospitals, medical facilities, and related healthcare environments. Because the project has just started, the emphasis right now is on building a strong development workflow rather than presenting final performance results.',
    challenge: [
      'Define a realistic healthcare AI workflow while the exact use case, scope, and available data are still being refined.',
      'Work with limited or unevenly available datasets, especially when public histopathology datasets are more common than gross-tissue datasets.',
      'Set up a process that separates training, validation, and testing clearly so future results can be interpreted more responsibly.'
    ],
    approach: [
      'Review datasets and literature to understand what data are available and where dataset gaps may influence project direction.',
      'Use a structured training / validation / test split so teaching, tuning, and final evaluation remain distinct.',
      'Develop and fine-tune the model iteratively while documenting assumptions, limitations, and future evaluation needs.',
      'Continue adding results, visuals, and technical insights as the project becomes more tangible over time.'
    ],
    skills: ['Medical AI', 'Machine-learning workflow', 'Model training', 'Fine-tuning', 'Dataset review', 'Validation planning', 'Technical documentation', 'Team collaboration'],
    employerTakeaways: ['Early exposure to a real company-sponsored healthcare AI problem', 'Experience thinking about data limitations, evaluation structure, and scope definition', 'Relevant foundation for medical technology, product development, AI, and quality-oriented roles']
  },
  nuitlume: {
    title: 'NuitLume',
    category: 'Wearable Technology',
    subtitle: 'Hands-free lighting concept for low-light visibility and more independent movement.',
    hero: 'assets/projects/nuitlume/final.png',
    gallery: ['assets/projects/nuitlume/components.png', 'assets/projects/nuitlume/preview.png'],
    overview: 'NuitLume explores how a wearable product could replace the inconvenience of carrying a flashlight. The concept focuses on visibility, comfort, and making light available exactly where the user needs it during movement.',
    challenge: [
      'Translate a simple need, portable lighting, into a wearable product rather than a hand-held device.',
      'Think through comfort, placement, and how illumination should support the user instead of getting in the way.'
    ],
    approach: [
      'Developed a wearable lighting concept with integrated LEDs, power, and controls in a lower-body form factor.',
      'Considered breathability, washability, visibility, and practical use cases such as jogging, hiking, and low-light activity.'
    ],
    skills: ['Wearable product design', 'Concept development', 'Prototyping', 'User-centered design', 'Physical product thinking'],
    employerTakeaways: ['Translating user pain points into a product concept', 'Balancing function and wearability', 'Clear connection between need, design choice, and use context']
  },
  headup: {
    title: 'HeadUp',
    category: 'Bioinstrumentation',
    subtitle: 'Posture-feedback system using inertial sensing and threshold-based feedback logic.',
    hero: 'assets/projects/headup/preview-generated.png',
    gallery: ['assets/projects/headup/design.png', 'assets/projects/headup/testing.png'],
    overview: 'HeadUp was built around a straightforward question: how can a wearable detect sustained poor posture and alert the user without becoming overly sensitive? The project combines sensing, threshold tuning, and testing around a real behavior-based problem.',
    challenge: [
      'Detect poor posture in a way that is noticeable and useful, not noisy or annoying.',
      'Tune decision thresholds so the device responds to sustained posture changes rather than momentary movement.'
    ],
    approach: [
      'Used IMU-based sensing with an approximately 15° threshold and a 3-second delay before feedback.',
      'Tested timing and angle settings to distinguish acceptable head position from sustained head-down posture.'
    ],
    skills: ['IMU sensing', 'Calibration', 'Embedded-system logic', 'Testing and threshold tuning', 'Data interpretation'],
    employerTakeaways: ['Good example of closed-loop sensing and feedback', 'Shows calibration and basic signal-to-decision logic', 'Highlights iterative testing rather than just concept sketching']
  },
  syncare: {
    title: 'SyncCare',
    category: 'Healthcare Technology + AI',
    subtitle: 'Wearable wellness concept linking image-based input, AI analysis, and supportive user feedback.',
    hero: 'assets/projects/syncare/preview-generated.png',
    gallery: ['assets/projects/syncare/app.png', 'assets/projects/syncare/privacy.png'],
    overview: 'SyncCare is a wellness-oriented concept exploring how a wearable could use visual cues and AI analysis to offer simple suggestions such as hydrating, resting, walking, or taking a break. The project sits at the intersection of healthcare technology, user experience, and privacy-aware design.',
    challenge: [
      'Design a wellness product that feels supportive rather than invasive or overwhelming.',
      'Think through how AI might add value while still respecting privacy and keeping the user experience simple.'
    ],
    approach: [
      'Built the concept around a SenseCAP-style wearable and an app workflow that interprets image-based cues.',
      'Focused on user-facing simplicity, calm interactions, and privacy-first design choices when thinking through the system.'
    ],
    skills: ['AI product concepts', 'Healthcare UX', 'Wearable systems thinking', 'Privacy-aware design', 'System-level communication'],
    employerTakeaways: ['Shows ability to frame an AI idea around real user needs', 'Highlights product thinking, not just technical novelty', 'Strong fit for healthcare-technology and early product-development conversations']
  },
  'smart-collar': {
    title: 'Smart Collar',
    category: 'Embedded Systems + BLE',
    subtitle: 'Pet activity-tracking collar connected to an automated feeder.',
    hero: 'assets/projects/smart-collar/preview-generated.png',
    gallery: ['assets/projects/smart-collar/tag.jpg', 'assets/projects/smart-collar/app.png'],
    overview: 'This project connected a wearable tracker to an automated feeder so a pet’s step count could trigger a reward workflow. It combines embedded devices, wireless communication, movement tracking, and physical actuation.',
    challenge: [
      'Create a simple system where wearable activity data can trigger a physical action at a second device.',
      'Keep the build approachable while still integrating sensing, communication, and actuation.'
    ],
    approach: [
      'Used Circuit Playground Bluefruit boards and BLE communication to send activity information from the wearable tracker to the feeder.',
      'Linked step tracking with servo actuation so the feeder could dispense and then re-close after the goal condition was met.'
    ],
    skills: ['CircuitPython', 'BLE / wireless communication', 'Wearable electronics', 'Servo control', 'Prototype integration'],
    employerTakeaways: ['Shows hardware-software integration', 'Demonstrates logic across multiple devices', 'Useful example of prototyping within cost and hardware constraints']
  },
  insole: {
    title: 'Pressure-Point Insole',
    category: 'Biomechanics + Product Development',
    subtitle: 'Insole concept focused on pressure redistribution, friction reduction, and early feedback.',
    hero: 'assets/projects/insole/preview-generated.png',
    gallery: ['assets/projects/insole/layers.jpg', 'assets/projects/insole/system.png'],
    overview: 'This concept narrowed a broad medical problem into a more specific design target: helping address factors related to pressure injuries at the foot. The design combines materials thinking, physical structure, and the idea of supportive feedback.',
    challenge: [
      'Move from a large healthcare issue to a more actionable product direction.',
      'Think about pressure, friction, shear, moisture, comfort, and practical wearability in a single concept.'
    ],
    approach: [
      'Proposed a layered insole using composite gel and 3D-printed components to help redistribute pressure and improve comfort.',
      'Included a concept for haptic or app-based feedback to alert the user when prolonged static pressure might be occurring.'
    ],
    skills: ['Materials selection', '3D printing', 'Biomechanics thinking', 'Wearable / product design', 'Medical-device style problem framing'],
    employerTakeaways: ['Good example of narrowing a clinical problem into a tangible design concept', 'Shows systems thinking across materials and feedback', 'Relevant to orthotics, assistive products, and medical-device ideation']
  },
  'presence-plant': {
    title: 'Presence Plant',
    category: 'Human-Computer Interaction',
    subtitle: 'Soft-robotic ambient object that communicates focus and availability in shared spaces.',
    hero: 'assets/projects/presence-plant/preview-generated.png',
    gallery: ['assets/projects/presence-plant/system.png', 'assets/projects/presence-plant/hero.png'],
    overview: 'Presence Plant rethinks a “do not disturb” signal as something softer and more expressive. Instead of a harsh notification, the design explores an ambient object that changes behavior based on sensing and communicates a person’s availability in a more social way.',
    challenge: [
      'Create a signal for focus and availability that feels friendly rather than awkward or abrupt.',
      'Use sensing and movement to communicate state in a way people can read intuitively.'
    ],
    approach: [
      'Combined a mmWave presence sensor, MEMS microphone array, ESP32-S3, servos, and LED output into a plant-like form.',
      'Used blooming and drooping behaviors to make status communication more ambient and human.'
    ],
    skills: ['ESP32-S3', 'Sensors', 'Soft robotics', 'HCI', 'Physical interaction design'],
    employerTakeaways: ['Demonstrates interdisciplinary thinking', 'Shows sensitivity to user experience and environment', 'Strong example of concepting beyond purely functional engineering']
  },
  buttoneers: {
    title: 'ConnectUs Accessibility Design Project',
    category: 'Entrepreneurial Engineering Design Studio',
    subtitle: 'Accessible dice-tower redesign informed by empathy, prototyping, and customer feedback.',
    hero: 'assets/projects/buttoneers/revenge-8107.jpeg',
    gallery: ['assets/projects/buttoneers/prototype.jpg', 'assets/projects/buttoneers/cards.png'],
    overview: 'This project focused on improving an existing station experience by redesigning the dice interaction into something more accessible, engaging, and easier to use. It reflects a full design-process approach, not just a final artifact.',
    challenge: [
      'The original dice station had usability and accessibility issues, took up table space, and reduced engagement for some participants.',
      'The team needed a solution that responded to customer needs, physical constraints, and iterative feedback.'
    ],
    approach: [
      'Used empathy work, customer-needs gathering, patent and concept review, concept selection, and multiple prototype stages.',
      'Refined the design through feedback into a dice tower with a more streamlined interaction and clearer accessibility-minded features.'
    ],
    skills: ['Design thinking', 'Concept selection', 'Prototyping', 'User feedback', 'Accessibility considerations', 'Team-based design'],
    employerTakeaways: ['Strong example of the engineering design process', 'Shows ability to incorporate feedback into design revisions', 'Relevant to product-development and human-factors conversations']
  },
  rids: {
    title: 'Recreation Planning Team Project',
    category: 'Technical & Professional Communication',
    subtitle: 'Student recreation-center concept connecting wellness, campus life, planning, and technical communication.',
    hero: 'assets/projects/rids/preview-generated.png',
    gallery: ['assets/projects/rids/plan.jpg'],
    overview: 'This project explored what a student recreation center could provide for campus culture, wellness, and engagement. While less device-focused than some of my other work, it still involved research, planning, tradeoffs, and systems-level thinking.',
    challenge: [
      'Define what features and infrastructure would make a campus recreation center useful, realistic, and impactful.',
      'Think beyond the building itself to the effect on student engagement, wellbeing, and community.'
    ],
    approach: [
      'Considered amenities, infrastructure, utilities, maintenance, and overall cost in building the proposal.',
      'Connected planning decisions to student outcomes such as physical activity, sense of community, and campus involvement.'
    ],
    skills: ['Research', 'Systems thinking', 'Planning', 'Presentation', 'Technical communication'],
    employerTakeaways: ['Shows broader problem framing', 'Demonstrates planning and analytical thinking', 'Useful complement to more hardware-centered project work']
  }
};

const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const printPortfolio = document.getElementById('printPortfolio');
const soundToggle = document.getElementById('soundToggle');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
}

if (printPortfolio) {
  printPortfolio.addEventListener('click', () => window.print());
}

function openProject(key) {
  const project = projects[key];
  if (!project) return;

  const extraThumbs = project.gallery
    .map(src => `<div class="thumb"><img src="${src}" alt="${project.title} project image"></div>`)
    .join('');

  modalContent.innerHTML = `
    <div class="modal-intro">
      <div class="modal-hero"><img src="${project.hero}" alt="${project.title} main project image"></div>
      <div>
        <div class="modal-head">
          <span class="modal-category">${project.category}</span>
          <h2 id="modalTitle">${project.title}</h2>
          <p>${project.subtitle}</p>
        </div>
        <div class="modal-side-gallery">${extraThumbs}</div>
      </div>
    </div>

    <div class="modal-grid">
      <div class="modal-panel">
        <h3>Overview</h3>
        <p>${project.overview}</p>
      </div>
      <div class="modal-callout">
        <h3>Project skills</h3>
        <div class="chip-cloud">
          ${project.skills.map(skill => `<span>${skill}</span>`).join('')}
        </div>
      </div>

      <div class="modal-panel">
        <h3>Design challenge</h3>
        <ul>${project.challenge.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="modal-panel">
        <h3>Approach</h3>
        <ul>${project.approach.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>

      <div class="modal-callout" style="grid-column: 1 / -1;">
        <h3>What an employer could notice here</h3>
        <ul>${project.employerTakeaways.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProject() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-card, .senior-project-button').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

document.querySelectorAll('[data-close]').forEach(node => {
  node.addEventListener('click', closeProject);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeProject();
});

let ambience = {
  ctx: null,
  sources: [],
  gains: [],
  timers: [],
  running: false
};

function createNoiseBuffer(ctx, seconds = 2) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * 0.35;
  }
  return buffer;
}

function startAmbience() {
  if (ambience.running) return;

  const AudioContextRef = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextRef) return;

  const ctx = new AudioContextRef();
  const master = ctx.createGain();
  master.gain.value = 0.05;
  master.connect(ctx.destination);

  const noiseBuffer = createNoiseBuffer(ctx, 2.5);

  const stream1 = ctx.createBufferSource();
  stream1.buffer = noiseBuffer;
  stream1.loop = true;
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 900;
  const gain1 = ctx.createGain();
  gain1.gain.value = 0.18;
  stream1.connect(lowpass).connect(gain1).connect(master);
  stream1.start();

  const stream2 = ctx.createBufferSource();
  stream2.buffer = noiseBuffer;
  stream2.loop = true;
  const bandpass = ctx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.value = 450;
  bandpass.Q.value = 0.6;
  const gain2 = ctx.createGain();
  gain2.gain.value = 0.10;
  stream2.connect(bandpass).connect(gain2).connect(master);
  stream2.start();

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.08;
  lfoGain.gain.value = 120;
  lfo.connect(lfoGain);
  lfoGain.connect(lowpass.frequency);
  lfo.start();

  const chirpInterval = setInterval(() => {
    if (!ambience.running) return;
    const osc = ctx.createOscillator();
    const chirpGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800 + Math.random() * 900;
    osc.type = 'sine';
    const startTime = ctx.currentTime;
    const duration = 0.18 + Math.random() * 0.22;
    const startFreq = 1200 + Math.random() * 600;
    const endFreq = startFreq + 400 + Math.random() * 700;
    osc.frequency.setValueAtTime(startFreq, startTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);
    chirpGain.gain.setValueAtTime(0.0001, startTime);
    chirpGain.gain.linearRampToValueAtTime(0.03, startTime + duration * 0.3);
    chirpGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    osc.connect(filter).connect(chirpGain).connect(master);
    osc.start(startTime);
    osc.stop(startTime + duration);
  }, 4800);

  ambience = {
    ctx,
    sources: [stream1, stream2, lfo],
    gains: [master, gain1, gain2, lfoGain],
    timers: [chirpInterval],
    running: true
  };
}

function stopAmbience() {
  if (!ambience.running) return;
  ambience.timers.forEach(timer => clearInterval(timer));
  ambience.sources.forEach(source => {
    try { source.stop(); } catch (error) {}
    try { source.disconnect(); } catch (error) {}
  });
  ambience.gains.forEach(node => {
    try { node.disconnect(); } catch (error) {}
  });
  if (ambience.ctx) {
    ambience.ctx.close().catch(() => {});
  }
  ambience = { ctx: null, sources: [], gains: [], timers: [], running: false };
}

if (soundToggle) {
  soundToggle.addEventListener('click', async () => {
    if (!ambience.running) {
      startAmbience();
      soundToggle.classList.add('active');
      soundToggle.setAttribute('aria-pressed', 'true');
      soundToggle.textContent = 'forest ambience on ♫';
    } else {
      stopAmbience();
      soundToggle.classList.remove('active');
      soundToggle.setAttribute('aria-pressed', 'false');
      soundToggle.textContent = 'forest ambience ♫';
    }
  });
}
