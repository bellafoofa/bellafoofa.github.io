const projects = {
  nuitlume: {
    title: "NuitLume",
    category: "WEARABLE TECHNOLOGY · 2025",
    intro: "A universal, mobile, wearable light source designed around the shin. The concept combines joint support with hands-free LED illumination for dark settings, physical limitations, and alternate uses for a general light source.",
    tags: ["Wearable Design", "LED Electronics", "3D Printing", "Prototyping", "Textiles"],
    images: [
      ["assets/projects/nuitlume/preview.png", "Project presentation"],
      ["assets/projects/nuitlume/components.png", "Hardware components"],
      ["assets/projects/nuitlume/final.png", "Final design"],
    ],
    details: [
      ["The need", "NuitLume was developed as a hands-free illumination concept for users who may need visibility at night or have difficulty carrying a conventional flashlight."],
      ["Design", "The final concept uses a breathable, washable elastic shin brace with an LED ring, battery, microcontroller, push button, and a 3D-printed protective case."],
      ["How it works", "Pressing the button activates the LED system. The battery, switch, wiring, and microcontroller are contained within the wearable assembly while the textile brace secures the electronics to the body."],
      ["Applications", "Potential applications included night exercise, low-light work, first responders, performers, physical therapy, and signaling or SOS use."],
      ["What I practiced", "Wearable prototyping, component integration, textile construction, 3D CAD/fabrication, design iteration, and evaluating usability tradeoffs."],
      ["Future work", "Reduce battery bulk, improve the aesthetics of the electronics enclosure, and explore alternate energy sources or other body locations such as the elbow or ankle."]
    ]
  },
  headup: {
    title: "HeadUp",
    category: "BIOINSTRUMENTATION · 2026",
    intro: "A posture-monitoring wearable designed to provide active feedback for forward head posture and prolonged slouching. The system uses an inertial sensor and haptic feedback instead of relying on a phone or screen.",
    tags: ["MPU-6050", "Circuit Playground", "Haptic Feedback", "Calibration", "Testing"],
    images: [
      ["assets/projects/headup/preview.png", "Project introduction"],
      ["assets/projects/headup/design.png", "Design concept and parameters"],
      ["assets/projects/headup/testing.png", "Calibration and testing results"],
    ],
    details: [
      ["Medical need", "HeadUp addresses forward head posture, sometimes called text neck, with a focus on office workers, students, and surgeons who spend long periods leaning forward."],
      ["Design", "The wearable uses a posture sensor, microcontroller, battery, status LED, push-button calibration, and dual vibration motors in a low-profile torso-mounted form factor."],
      ["Interaction", "The user calibrates an upright baseline with a button. A forward tilt of about 15 degrees sustained for more than 3 seconds is treated as a slouch state and triggers haptic feedback."],
      ["Testing", "The prototype successfully detected the target deviation and the 3-second delay helped filter short movements such as reaching for a phone. The dual motors provided noticeable feedback through clothing."],
      ["What I practiced", "Bioinstrumentation, sensor integration, embedded programming, calibration, prototype testing, user experience evaluation, and technical documentation."],
      ["Future work", "Potential improvements included auto-calibration, higher sampling rates, filtering, distinguishing bending from slouching, a flexible TPU case, a lighter battery, and Bluetooth data logging."]
    ]
  },
  syncare: {
    title: "SyncCare",
    category: "WEARABLE + AI · 2026",
    intro: "A privacy-focused wearable concept exploring how an on-device AI system could use visual cues to provide wellness-oriented feedback without sending video to the cloud.",
    tags: ["AI Concepts", "Computer Vision", "Wearable UX", "Privacy", "App Design"],
    images: [
      ["assets/projects/syncare/preview.png", "Project overview"],
      ["assets/projects/syncare/app.png", "SyncCare app"],
      ["assets/projects/syncare/privacy.png", "Privacy and security"],
    ],
    details: [
      ["The concept", "SyncCare explores a wearable that goes beyond common activity metrics by incorporating emotional context into a wellness experience."],
      ["Core idea", "The project pairs a wearable form factor with an AI pipeline and companion app intended to surface patterns and wellness-oriented information in an approachable way."],
      ["Privacy", "The concept emphasizes local processing, encrypted local logs, no transmission of video data, and a hardware-level camera kill switch."],
      ["App experience", "The proposed app includes passive tracking, timeline history, customizable information, and visualizations such as emotion confidence over time."],
      ["What I practiced", "Wearable product development, AI system thinking, privacy-by-design, UX planning, commercialization thinking, and communicating technical concepts to a broader audience."],
      ["Future work", "Further development would require validating the sensing approach, improving the model and user experience, and carefully defining appropriate wellness claims and safeguards."]
    ]
  },
  "smart-collar": {
    title: "Smart Collar",
    category: "EMBEDDED SYSTEMS · 2025",
    intro: "A smart pet step tracker that connects activity tracking with an automated food dispenser. The system combines a wearable tag, step goal, orientation tracking, and physical dispensing interaction.",
    tags: ["Circuit Playground", "BLE", "Servo Control", "Embedded Systems", "Pet Tech"],
    images: [
      ["assets/projects/smart-collar/preview.jpg", "Prototype"],
      ["assets/projects/smart-collar/app.png", "Orientation tracking app concept"],
      ["assets/projects/smart-collar/tag.jpg", "Customizable tag"],
    ],
    details: [
      ["User need", "Smart Collar was designed for pet owners interested in activity tracking, step goals, eating habits, and a more customizable way to support pet health."],
      ["System", "The product tracks pet movement and orientation, communicates wirelessly, and uses a connected dispenser to provide food or treats once the pet reaches its goal and is near the device."],
      ["Feedback", "The collar/tag uses different light states to communicate movement, inactivity, and reaching the step goal."],
      ["App concept", "The proposed app includes current and historical activity, step-goal progress, location/orientation information, and controls for adjusting daily goals."],
      ["What I practiced", "Embedded systems, Bluetooth communication, sensor logic, servo control, user interaction, hardware prototyping, and product concept development."],
      ["Future work", "Reduce the size and bulk, simplify goal adjustment, improve the user interface, expand connectivity with automatic feeders, and make the tag easier to customize."]
    ]
  },
  insole: {
    title: "Pressure-Point Insole",
    category: "MEDICAL DEVICE DESIGN · 2026",
    intro: "A shoe-insole concept designed to actively address pressure, friction, and moisture in high-risk areas of the foot, with a hybrid material structure and haptic feedback.",
    tags: ["Medical Device Design", "3D Printing", "TPU", "Composite Gel", "Haptics"],
    images: [
      ["assets/projects/insole/preview.png", "Prototype concept"],
      ["assets/projects/insole/system.png", "System concept"],
      ["assets/projects/insole/layers.jpg", "Design concept"],
    ],
    details: [
      ["The problem", "The project focuses on pressure-related foot injuries and the interaction of sustained pressure, friction/shear, and moisture in vulnerable areas of the foot."],
      ["Design direction", "The final concept narrowed a broad brainstorming space into a practical shoe insole using a layered approach rather than a single uniform material."],
      ["Materials", "The design explored silicone gel, EVA foam, and a 3D-printed TPU lattice. The final direction combines a composite gel layer with a 3D-printed structure for pressure redistribution."],
      ["Feedback system", "A haptic alert and mobile interface were considered for notifying a user when static pressure has been maintained for too long."],
      ["What I practiced", "Need finding, concept selection, weighted decision matrices, medical-device design constraints, materials selection, prototyping, and engineering tradeoff analysis."],
      ["Design constraints", "The concept considers comfort, fit, hygiene, structural integrity, moisture management, continuous loading, and compatibility with standard footwear."]
    ]
  },
  "presence-plant": {
    title: "Presence Plant",
    category: "ROBOTICS + HCI · 2026",
    intro: "A soft-robotic desk companion for shared rooms that communicates focus and availability through movement rather than a written Do Not Disturb sign.",
    tags: ["ESP32-S3", "mmWave Radar", "Soft Robotics", "HCI", "Interaction Design"],
    images: [
      ["assets/projects/presence-plant/preview.png", "Presence Plant concept"],
      ["assets/projects/presence-plant/system.png", "System concept"],
      ["assets/projects/presence-plant/hero.png", "Interaction concept"],
    ],
    details: [
      ["User need", "The project targets students sharing dorm rooms or small apartments who want to communicate focus without creating an awkward or aggressive social signal."],
      ["System", "The concept uses mmWave radar to sense presence, a MEMS microphone array for ambient sound, and an ESP32-S3 for local processing."],
      ["Output", "Micro servos drive organic drooping and blooming motion while an RGB LED matrix provides a simple affective face behind a diffusion layer."],
      ["Interaction", "The plant acts as a third-party social signal. Instead of displaying a blunt DND message, its posture communicates that the environment is currently better suited to quiet focus."],
      ["What I practiced", "Human-computer interaction, robotics, sensing and actuation, privacy-aware system design, interaction storyboarding, and future-product planning."],
      ["Future work", "The concept proposes moving from hobby servos toward quieter soft-robotic actuation, refining touch sensing, improving materials, and addressing manufacturing and certification needs."]
    ]
  },
  buttoneers: {
    title: "Revenge of the Buttoneers",
    category: "PRODUCT DESIGN · 2025",
    intro: "An accessible dice-tower redesign developed through an iterative design process for a recreation station serving participants with a wide range of abilities.",
    tags: ["Design Thinking", "Arduino", "Servo", "Soldering", "Accessibility"],
    images: [
      ["assets/projects/buttoneers/preview.png", "Original station"],
      ["assets/projects/buttoneers/prototype.jpg", "Prototype"],
      ["assets/projects/buttoneers/cards.png", "Early concept exploration"],
    ],
    details: [
      ["The problem", "The original station used a partially functional dice shaker and several paper trays, creating issues with time, space, usability, and participant engagement."],
      ["Design process", "The team used customer needs, research, brainstorming, concept selection, prototyping, and feedback to move from multiple ideas toward a see-through dice tower."],
      ["Final concept", "The refined tower used an acrylic structure, a button-driven release mechanism, and a magazine designed to hold up to 20 dice."],
      ["Fabrication", "The project involved cardboard prototyping followed by more refined fabrication, including soldering and wiring for the functional system."],
      ["What I practiced", "Design thinking, accessibility-focused problem solving, rapid prototyping, Arduino-based control, fabrication, testing, and incorporating stakeholder feedback."],
      ["Key lesson", "The project highlighted how prototype iteration depends on clear communication with customers and how feedback can change both the physical design and the interaction."]
    ]
  },
  rids: {
    title: "R.I.D.S.",
    category: "SYSTEMS ENGINEERING · 2025",
    intro: "A planning and systems-engineering concept for a new LTU student recreation center designed to support student activity, community, athletics, and campus engagement.",
    tags: ["Systems Planning", "Cost Analysis", "Project Scheduling", "Facility Design", "Teamwork"],
    images: [
      ["assets/projects/rids/preview.jpg", "Project presentation"],
      ["assets/projects/rids/plan.jpg", "Planning concept"],
    ],
    details: [
      ["The need", "The project responded to concerns around outdated recreation facilities, limited training space, limited social spaces, and student engagement."],
      ["Goals", "The proposed center was intended to support both athletes and non-athletes, provide recreation and social space, modernize equipment, and strengthen campus community."],
      ["Planning", "The team developed a facility concept, amenities, location planning, cost estimates, and a phased construction schedule."],
      ["Scale", "The presentation estimated a total construction cost in the range of $14.28 million to $22.795 million and a 9–12 month build schedule."],
      ["What I practiced", "Systems-level problem definition, stakeholder analysis, facility planning, cost analysis, scheduling, research synthesis, and team presentation."],
      ["Perspective", "This project expanded my engineering work beyond individual devices into larger systems where infrastructure, users, cost, schedule, and long-term operation all interact."]
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalIntro = document.getElementById('modalIntro');
const modalTags = document.getElementById('modalTags');
const modalGallery = document.getElementById('modalGallery');
const modalDetails = document.getElementById('modalDetails');

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  modalTitle.textContent = p.title;
  modalCategory.textContent = p.category;
  modalIntro.textContent = p.intro;
  modalTags.innerHTML = p.tags.map(tag => `<span>${tag}</span>`).join('');
  modalGallery.innerHTML = p.images.map(([src, alt]) => `<img src="${src}" alt="${alt}" loading="lazy">`).join('');
  modalDetails.innerHTML = p.details.map(([heading, text]) => `<article class="detail-block"><h3>${heading}</h3><p>${text}</p></article>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProject() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeProject));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });
