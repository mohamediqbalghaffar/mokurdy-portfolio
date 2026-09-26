/**
 * MOKURDY PORTFOLIO — INTERACTIVE ENGINE
 * Inspired by Zajno's "7-Year Journey"
 * Three.js 3D WebGL · Retro CRT Monitor · Hyperspace Warp Speed · Spatial Audio
 */

// ==========================================
// 1. DATA REPOSITORY: PROJECTS & MILESTONES
// ==========================================

const CRT_CHANNELS = [
  {
    channel: "CH 01",
    tagline: "Logistics Super-App",
    title: "Habakam Delivery",
    snippet: "Multi-tenant Android logistics & medication management platform. Real-time rider dispatch, live telematics & pharmacy integrations.",
    badges: ["Kotlin", "Android SDK", "Node.js", "WebSockets"],
    year: "2023",
    actionText: "Inspect Architecture",
    projectId: "habakam"
  },
  {
    channel: "CH 02",
    tagline: "Autonomous Agentic System",
    title: "AI Job Hunter",
    snippet: "Autonomous job hunting system with real-time multi-portal scrapers, match scoring, truth-enforced CV compiler, and live human-in-the-loop dashboard.",
    badges: ["Python", "FastAPI", "Headless Chrome", "WebSockets"],
    year: "2025",
    actionText: "Inspect Architecture",
    projectId: "job-hunter"
  },
  {
    channel: "CH 03",
    tagline: "Enterprise Vector AI",
    title: "Multi-Agent RAG",
    snippet: "Enterprise retrieval-augmented generation engine with hierarchical vector indices, hybrid BM25 search, and hallucination guardrails.",
    badges: ["LangChain", "Qdrant", "Python", "LlamaIndex"],
    year: "2025",
    actionText: "Inspect Architecture",
    projectId: "multi-agent-rag"
  },
  {
    channel: "CH 04",
    tagline: "Retail Infrastructure",
    title: "Smart Commerce POS",
    snippet: "High-throughput retail POS terminal engineered for sub-50ms transaction latency, offline-first SQLite sync, and barcode hardware integration.",
    badges: ["TypeScript", "Electron", "SQLite", "Tailwind"],
    year: "2022",
    actionText: "Inspect Architecture",
    projectId: "smart-pos"
  },
  {
    channel: "CH 05",
    tagline: "Enterprise Transformation",
    title: "Odoo ERP Ecosystem",
    snippet: "Full-scale Odoo ERP deployment for HTS-HQ. Custom accounting, automated supply chain workflows, and multi-warehouse synchronization.",
    badges: ["Odoo ERP", "Python", "PostgreSQL", "XML-RPC"],
    year: "2021",
    actionText: "Inspect Architecture",
    projectId: "odoo-erp"
  },
  {
    channel: "CH 06",
    tagline: "Speech & Audio AI",
    title: "Voice AI Synthesizer",
    snippet: "Low-latency multilingual speech synthesis pipeline supporting Kurdish, Arabic, and English with custom voice cloning and Whisper transcription.",
    badges: ["PyTorch", "Whisper", "FastAPI", "TTS"],
    year: "2024",
    actionText: "Inspect Architecture",
    projectId: "voice-ai"
  }
];

const TIMELINE_MILESTONES = {
  "2016": {
    year: "2016",
    role: "Foundations & Competition Honors",
    company: "AKSF Kangaroo Math & Edexcel Excellence",
    category: "Academic Excellence",
    desc: "Achieved top international honors in mathematics problem solving (AKSF) and Turkish language fluency (Edexcel B1). Laid mathematical foundations for algorithm design and systems architecture.",
    highlights: [
      "Awarded AKSF Kangaroo Math Competition Certificate of Honor",
      "Achieved Edexcel & TÖMER Turkish Language Fluency (B1 Certification)",
      "High School Academic Excellence Honor Roll (98.2% GPA)"
    ]
  },
  "2019": {
    year: "2019",
    role: "Social Entrepreneurship & Venture Lead",
    company: "Five One Labs & UNICEF",
    category: "Incubation & Leadership",
    desc: "Graduated from intensive social innovation incubation by UNICEF and Five One Labs. Pitched scalable technology business models to international angel investors and regional leaders.",
    highlights: [
      "Designed sustainable social enterprise business models",
      "Conducted 100+ user discovery interviews across regional markets",
      "Certified in Social Entrepreneurship by Five One Labs & UNICEF"
    ]
  },
  "2021": {
    year: "2021",
    role: "Enterprise Systems Architect",
    company: "Suli Tech & Autonomous Projects",
    category: "Full Stack & Cloud",
    desc: "Architected high-reliability web applications, point-of-sale systems, and automated data pipelines. Standardized microservices with Docker, Node.js, and PostgreSQL.",
    highlights: [
      "Shipped 15+ bespoke business management systems",
      "Implemented automated CI/CD deployment pipelines on AWS & VPS",
      "Achieved 99.9% uptime SLA across client production databases"
    ]
  },
  "2023": {
    year: "2023",
    role: "Deputy Administrative Manager & Product Lead",
    company: "HTS-HQ (Sulaimaniyah, Iraq)",
    category: "Enterprise ERP & Operations",
    desc: "Led operational workflows, inter-departmental logistics, and digital transformation for headquarters. Managed cross-functional squads and architected Odoo ERP automation.",
    highlights: [
      "Spearheaded enterprise-wide Odoo ERP integration replacing legacy paperwork",
      "Engineered automated accounting, inventory, and supply chain tracking",
      "Built Habakam medication logistics Android application with live rider dispatch"
    ]
  },
  "2025": {
    year: "2025",
    role: "AI Integration & Workflow Engineer",
    company: "Autonomous AI Research & Deployments",
    category: "Agentic Systems & LLMs",
    desc: "Specialized in production-grade Agentic AI workflows (Plan · Execute · Verify). Implemented multi-agent RAG, truth-enforcing CV tailoring engines, and autonomous job application scrapers.",
    highlights: [
      "Certified by Google Antigravity in Agentic AI Workflows",
      "Completed DeepLearning.AI Applied Machine Learning Supervised Learning",
      "Engineered autonomous job hunter platform with real-time web scrapers and WebSockets"
    ]
  },
  "2026": {
    year: "2026",
    role: "AI Deployment Lead & Solutions Architect",
    company: "Enterprise & Global Deployments (Riyadh / Global)",
    category: "Executive AI Delivery",
    desc: "Bridging business requirements with state-of-the-art AI models. Leading multi-million SAR customer deployments, technical trade-offs, and mission-critical SLAs across Saudi Arabia and the Gulf.",
    highlights: [
      "Translating executive requirements into hardened technical specifications",
      "Governing enterprise LLM reliability, guardrails, and latency optimization",
      "Driving customer-centric AI adoption across enterprise stakeholders"
    ]
  }
};

const PROJECT_CASE_STUDIES = {
  "habakam": {
    title: "Habakam Delivery & Medication Super-App",
    pill: "Mobile Logistics & Healthcare",
    meta: {
      client: "Habakam Logistics",
      role: "Lead Systems Architect & Product Manager",
      duration: "2023 – Present",
      stack: "Kotlin, Android SDK, Node.js, WebSockets, Google Maps API, PostgreSQL"
    },
    narrative: `
      <p>Habakam was built to solve a critical healthcare logistics problem in the Kurdistan Region: reliable, timed delivery of prescription medications alongside everyday goods, backed by real-time telematics.</p>
      <h3>The Engineering Challenge</h3>
      <p>Prescription medications require strict chain-of-custody verification, pharmacy dispatch confirmation, and sub-minute rider coordination. Existing regional delivery apps lacked medical reminder integrations and multi-tenant pharmacy dashboards.</p>
      <h3>The Architectural Solution</h3>
      <p>We engineered a native Kotlin Android application with background alarm scheduling, real-time rider GPS tracking via WebSockets, and an offline-first cache for low-connectivity regions. Pharmacists manage inventory via a dedicated portal, automatically generating cryptographically verified dispatch manifests.</p>
      <p>The platform reduced prescription fulfillment latency by 68% and achieved 100% adherence to scheduled medication drops.</p>
    `,
    gallery: [
      "assets/images/habakam_icon.png",
      "assets/images/mock_form_filled.png",
      "assets/images/mock_submission_confirmed.png"
    ]
  },
  "job-hunter": {
    title: "Autonomous AI Job Hunter Platform",
    pill: "Autonomous Agentic AI",
    meta: {
      client: "Autonomous Research",
      role: "AI Systems Architect",
      duration: "2025 – Present",
      stack: "Python, FastAPI, Playwright, Chrome Headless, WebSockets, PyMuPDF, ChromaDB"
    },
    narrative: `
      <p>The AI Job Hunter is a production autonomous platform designed to search, score, tailor, and auto-submit job applications across Saudi Arabian portals (LinkedIn, Bayt, Tanqeeb, Indeed) while strictly enforcing candidate truth constraints.</p>
      <h3>Zero-Fabrication Truth Engine</h3>
      <p>Unlike standard generative AI tools that hallucinate candidate qualifications, the tailoring engine is constrained to a cryptographically validated verified profile. It re-emphasizes and reorders authentic accomplishments without ever inventing degrees or false skills.</p>
      <h3>Headless Chrome & WebSockets Pipeline</h3>
      <p>Scrapers run asynchronously via <code>aiohttp</code> and <code>BeautifulSoup</code>, feeding scored listings into an in-memory deduplicated store. Tailored single-page CVs are compiled via headless Chrome to pixel-perfect A4 PDFs, verified for page count, and streamed directly to an executive dark-mode dashboard.</p>
    `,
    gallery: [
      "assets/images/mock_form_filled.png",
      "assets/images/mock_submission_confirmed.png"
    ]
  },
  "multi-agent-rag": {
    title: "Enterprise Multi-Agent RAG System",
    pill: "Distributed Vector Intelligence",
    meta: {
      client: "Enterprise AI Infrastructure",
      role: "Principal AI Engineer",
      duration: "2024 – 2025",
      stack: "LangChain, LlamaIndex, Qdrant, OpenAI, Python, Docker"
    },
    narrative: `
      <p>Designed for organizations with extensive multi-thousand page regulatory, financial, and procedural archives. The system coordinates specialized retrieval and evaluation agents to deliver zero-hallucination citations.</p>
      <h3>Autonomous Verification Loops</h3>
      <p>A retrieval agent pulls candidate text fragments using hybrid BM25 + dense semantic embeddings. A separate evaluator agent performs self-consistency cross-checks before the synthesizer delivers the verified executive briefing with exact line-number citations.</p>
    `,
    gallery: [
      "assets/images/project_rag_architecture.png",
      "assets/images/project_rag_flow.png"
    ]
  },
  "smart-pos": {
    title: "High-Throughput Smart Commerce POS",
    pill: "Retail FinTech & Hardware",
    meta: {
      client: "Suli Tech Clients",
      role: "Full Stack Engineer",
      duration: "2022 – 2023",
      stack: "TypeScript, Electron, SQLite, ESC/POS Thermal Printers, React"
    },
    narrative: `
      <p>Engineered for high-volume retail locations experiencing intermittent internet connectivity. The POS terminal executes transactions in under 50ms with instantaneous thermal receipt printing.</p>
      <h3>Offline-First Conflict-Free Sync</h3>
      <p>Transactions queue locally in an ACID SQLite database. When internet connectivity restores, changes sync to the central cloud cluster using deterministic vector-clock merging, preventing duplicate inventory deductions.</p>
    `,
    gallery: [
      "assets/images/mock_form_filled.png"
    ]
  },
  "odoo-erp": {
    title: "Odoo ERP Enterprise Digitalization",
    pill: "ERP Architecture & Operations",
    meta: {
      client: "HTS-HQ (Sulaimaniyah)",
      role: "Deputy Administrative Manager",
      duration: "2021 – 2024",
      stack: "Odoo ERP, Python, PostgreSQL, Linux Ubuntu Server, Nginx"
    },
    narrative: `
      <p>Spearheaded the complete end-to-end migration of HTS headquarters from paper ledgers to an automated Odoo Enterprise deployment.</p>
      <h3>Operational Impact</h3>
      <p>Configured custom modules for multi-currency reconciliation, automated vendor purchase orders, and warehouse inventory tracking across 3 regional hubs. Cut administrative processing overhead by 45%.</p>
    `,
    gallery: [
      "assets/images/mock_submission_confirmed.png"
    ]
  },
  "voice-ai": {
    title: "Multilingual AI Voice Synthesizer",
    pill: "Generative Audio AI",
    meta: {
      client: "Research & Media Prototyping",
      role: "AI Audio Engineer",
      duration: "2024 – 2025",
      stack: "PyTorch, OpenAI Whisper, Coqui TTS, Python, FastAPI"
    },
    narrative: `
      <p>A specialized neural speech engine adapted for under-represented languages, including Sorani Kurdish, alongside standard Arabic and English.</p>
      <p>Enables natural conversational synthesis with pitch modulation and sub-second generation latency for IVR and voice assistant interfaces.</p>
    `,
    gallery: [
      "assets/images/project_rag_architecture.png"
    ]
  }
};


// ==========================================
// 2. WEB AUDIO API SYNTHESIS ENGINE
// ==========================================

class AudioSynthEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    localStorage.setItem('mokurdy_sound', this.enabled ? '1' : '0');
    return this.enabled;
  }

  // CRT Channel Switch Static Pop
  playCrtSwitch() {
    if (!this.enabled || !this.ctx) return;
    this.init();

    // 1. Static burst
    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.25;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();

    // 2. Rotary knob tactile thud
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.08);

    oscGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  // Hyperspace Warp Whoosh
  playWarpWhoosh() {
    if (!this.enabled || !this.ctx) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.35);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.7);

    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.75);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1200;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.8);
  }

  // Subtle Futuristic UI Blip
  playBlip(freq = 600) {
    if (!this.enabled || !this.ctx) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }
}

const SoundSystem = new AudioSynthEngine();


// ==========================================
// 3. THREE.JS 3D SCENES & SHADERS
// ==========================================

// Scene A: Hyperspace Starfield Warp Tunnel
class WarpTunnelExperience {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.z = 1000;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.starCount = 2400;
    this.speed = 1.5;
    this.targetSpeed = 1.5;

    this.initStars();
    this.bindEvents();
    this.animate();
  }

  initStars() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.starCount * 3);
    const velocities = new Float32Array(this.starCount);

    for (let i = 0; i < this.starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = Math.random() * 2000;
      velocities[i] = Math.random() * 2 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.velocities = velocities;

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.2,
      transparent: true,
      opacity: 0.85
    });

    this.starField = new THREE.Points(geometry, material);
    this.scene.add(this.starField);
  }

  accelerateWarp() {
    this.targetSpeed = 22.0;
    SoundSystem.playWarpWhoosh();
    setTimeout(() => {
      this.targetSpeed = 1.8;
    }, 650);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.renderer) return;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Lerp speed
    this.speed += (this.targetSpeed - this.speed) * 0.08;

    const positions = this.starField.geometry.attributes.position.array;

    for (let i = 0; i < this.starCount; i++) {
      positions[i * 3 + 2] += this.speed * this.velocities[i];

      // If star passes camera, loop back
      if (positions[i * 3 + 2] > 1000) {
        positions[i * 3 + 2] = -1000;
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      }
    }

    this.starField.geometry.attributes.position.needsUpdate = true;
    this.starField.rotation.z += 0.0006;

    this.renderer.render(this.scene, this.camera);
  }
}

// Scene B: 3D Molten Obsidian Sculpture (#monolith-canvas)
class MoltenSculpture {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 100);
    this.camera.position.z = 4.2;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(5, 8, 5);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-5, -5, 2);
    this.scene.add(dirLight2);

    // Monolithic cylinder with cloth folds
    const geometry = new THREE.CylinderGeometry(0.9, 0.9, 2.8, 64, 64);
    this.originalPos = geometry.attributes.position.clone();

    const material = new THREE.MeshStandardMaterial({
      color: 0x09090b,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.clock = new THREE.Clock();
    this.mouseX = 0;
    this.mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const t = this.clock.getElapsedTime();
    const pos = this.mesh.geometry.attributes.position;
    const orig = this.originalPos.array;

    for (let i = 0; i < pos.count; i++) {
      const u = orig[i * 3];
      const v = orig[i * 3 + 1];
      const w = orig[i * 3 + 2];

      const wave = Math.sin(v * 3.0 + t * 1.8) * 0.12 + Math.cos(u * 4.0 + t * 1.2) * 0.08;
      pos.setXYZ(i, u + wave * (u / 0.9), v, w + wave * (w / 0.9));
    }
    pos.needsUpdate = true;

    this.mesh.rotation.y = t * 0.25 + this.mouseX * 0.4;
    this.mesh.rotation.x = this.mouseY * 0.2;

    this.renderer.render(this.scene, this.camera);
  }
}

// Scene C: 3D Morphing Fluid Sphere (#sphere-canvas)
class MorphingSphere {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 100);
    this.camera.position.z = 5.2;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.8, 50);
    pointLight.position.set(4, 4, 4);
    this.scene.add(pointLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.7);
    rimLight.position.set(-3, -3, -2);
    this.scene.add(rimLight);

    const geometry = new THREE.IcosahedronGeometry(1.25, 40);
    this.originalPos = geometry.attributes.position.clone();

    const material = new THREE.MeshStandardMaterial({
      color: 0x050505,
      metalness: 0.92,
      roughness: 0.18,
      wireframe: false
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.clock = new THREE.Clock();
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const t = this.clock.getElapsedTime();
    const pos = this.mesh.geometry.attributes.position;
    const orig = this.originalPos.array;

    for (let i = 0; i < pos.count; i++) {
      const x = orig[i * 3];
      const y = orig[i * 3 + 1];
      const z = orig[i * 3 + 2];

      const len = Math.sqrt(x * x + y * y + z * z);
      const ripple = Math.sin(x * 3.5 + t * 2.2) * Math.cos(y * 3.5 + t * 2.0) * 0.18;

      pos.setXYZ(i, x * (1 + ripple / len), y * (1 + ripple / len), z * (1 + ripple / len));
    }
    pos.needsUpdate = true;

    this.mesh.rotation.y = t * 0.35;
    this.mesh.rotation.x = t * 0.2;

    this.renderer.render(this.scene, this.camera);
  }
}

// Scene D: 3D Dune Terrain Horizon (#terrain-canvas)
class DuneTerrainHorizon {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 100);
    this.camera.position.set(0, 2.2, 5.5);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(0, 10, 5);
    this.scene.add(dirLight);

    const geometry = new THREE.PlaneGeometry(16, 10, 80, 50);
    this.originalPos = geometry.attributes.position.clone();

    const material = new THREE.MeshStandardMaterial({
      color: 0x111114,
      metalness: 0.6,
      roughness: 0.5,
      wireframe: true
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.x = -Math.PI / 2.3;
    this.scene.add(this.mesh);

    this.clock = new THREE.Clock();
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const t = this.clock.getElapsedTime() * 0.8;
    const pos = this.mesh.geometry.attributes.position;
    const orig = this.originalPos.array;

    for (let i = 0; i < pos.count; i++) {
      const x = orig[i * 3];
      const y = orig[i * 3 + 1];
      const wave = Math.sin(x * 0.8 + t) * 0.35 + Math.cos(y * 0.6 + t * 0.7) * 0.25;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }
}


// ==========================================
// 4. INTERACTIVE RETRO CRT TV CONTROLLER
// ==========================================

class RetroCrtController {
  constructor() {
    this.currentIndex = 0;
    this.poweredOn = true;
    this.knobAngle = 0;

    this.tubeEl = document.querySelector('.crt-tube-container');
    this.badgeEl = document.querySelector('.crt-channel-badge');
    this.taglineEl = document.querySelector('.crt-tagline');
    this.titleEl = document.querySelector('.crt-project-title');
    this.snippetEl = document.querySelector('.crt-project-snippet');
    this.badgeRowEl = document.querySelector('.crt-badge-row');
    this.actionBtnEl = document.querySelector('.crt-action-btn');

    this.knobEl = document.querySelector('.rotary-knob');
    this.powerBtn = document.querySelector('.power-toggle-btn');
    this.powerLed = document.querySelector('.power-switch-led');

    this.bindEvents();
    this.renderChannel();
  }

  bindEvents() {
    if (this.knobEl) {
      this.knobEl.addEventListener('click', () => this.nextChannel());
    }

    if (this.powerBtn) {
      this.powerBtn.addEventListener('click', () => this.togglePower());
    }

    if (this.actionBtnEl) {
      this.actionBtnEl.addEventListener('click', () => {
        const current = CRT_CHANNELS[this.currentIndex];
        window.openProjectDrawer(current.projectId);
      });
    }
  }

  nextChannel() {
    if (!this.poweredOn) return;
    this.currentIndex = (this.currentIndex + 1) % CRT_CHANNELS.length;
    this.knobAngle += 60;
    if (this.knobEl) {
      this.knobEl.style.transform = `rotate(${this.knobAngle}deg)`;
    }
    this.renderChannel();
  }

  setChannel(index) {
    if (!this.poweredOn) return;
    this.currentIndex = index % CRT_CHANNELS.length;
    this.knobAngle += 60;
    if (this.knobEl) {
      this.knobEl.style.transform = `rotate(${this.knobAngle}deg)`;
    }
    this.renderChannel();
  }

  renderChannel() {
    SoundSystem.playCrtSwitch();

    // Trigger static burst animation
    if (this.tubeEl) {
      this.tubeEl.classList.add('static-burst');
      setTimeout(() => {
        this.tubeEl.classList.remove('static-burst');
      }, 160);
    }

    const item = CRT_CHANNELS[this.currentIndex];
    if (!item) return;

    if (this.badgeEl) this.badgeEl.textContent = item.channel;
    if (this.taglineEl) this.taglineEl.textContent = `${item.tagline} · ${item.year}`;
    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.snippetEl) this.snippetEl.textContent = item.snippet;

    if (this.badgeRowEl) {
      this.badgeRowEl.innerHTML = item.badges.map(b => `<span class="crt-badge">${b}</span>`).join('');
    }
  }

  togglePower() {
    this.poweredOn = !this.poweredOn;
    SoundSystem.playBlip(this.poweredOn ? 520 : 180);

    if (this.powerLed) {
      this.powerLed.classList.toggle('off', !this.poweredOn);
    }

    if (this.tubeEl) {
      this.tubeEl.classList.toggle('power-off', !this.poweredOn);
    }
  }
}


// ==========================================
// 5. TIMELINE SCRUBBER & WARP EXP
// ==========================================

class TimelineJourneyScrubber {
  constructor(warpExp) {
    this.warpExp = warpExp;
    this.buttons = document.querySelectorAll('.year-node-btn');
    this.yearDisplay = document.querySelector('.monumental-year-display');
    this.roleEl = document.querySelector('.milestone-role-title');
    this.companyEl = document.querySelector('.milestone-company-tag');
    this.categoryEl = document.querySelector('.milestone-category-pill');
    this.descEl = document.querySelector('.milestone-desc');
    this.highlightsEl = document.querySelector('.milestone-highlights-list');
    this.progressLine = document.querySelector('.timeline-progress-line');

    this.bindEvents();
    this.selectYear('2026', false);
  }

  bindEvents() {
    this.buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const year = btn.dataset.year;
        this.selectYear(year, true, index);
      });
    });
  }

  selectYear(year, triggerSound = true, index = 0) {
    const data = TIMELINE_MILESTONES[year];
    if (!data) return;

    if (triggerSound && this.warpExp) {
      this.warpExp.accelerateWarp();
    }

    this.buttons.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.year-node-btn[data-year="${year}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update progress line width
    if (this.progressLine) {
      const pct = (index / (this.buttons.length - 1)) * 100;
      this.progressLine.style.width = `${pct}%`;
    }

    // Animate year change
    if (this.yearDisplay) {
      this.yearDisplay.style.transform = 'scale(0.85)';
      this.yearDisplay.style.opacity = '0.4';
      setTimeout(() => {
        this.yearDisplay.textContent = year;
        this.yearDisplay.style.transform = 'scale(1)';
        this.yearDisplay.style.opacity = '1';
      }, 150);
    }

    // Update milestone card
    if (this.roleEl) this.roleEl.textContent = data.role;
    if (this.companyEl) this.companyEl.textContent = data.company;
    if (this.categoryEl) this.categoryEl.textContent = data.category;
    if (this.descEl) this.descEl.textContent = data.desc;

    if (this.highlightsEl) {
      this.highlightsEl.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');
    }
  }
}


// ==========================================
// 6. 3D CYLINDRICAL CAROUSEL
// ==========================================

class SpatialProjectCarousel {
  constructor() {
    this.rotator = document.querySelector('.carousel-rotator');
    this.cards = document.querySelectorAll('.carousel-project-card');
    this.prevBtn = document.querySelector('.carousel-nav-btn.prev');
    this.nextBtn = document.querySelector('.carousel-nav-btn.next');

    this.cardCount = this.cards.length;
    this.theta = 360 / Math.max(this.cardCount, 1);
    this.radius = 420;
    this.currentRotation = 0;

    this.setupCards();
    this.bindEvents();
  }

  setupCards() {
    this.cards.forEach((card, i) => {
      const angle = i * this.theta;
      card.style.transform = `rotateY(${angle}deg) translateZ(${this.radius}px)`;
      card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        window.openProjectDrawer(projectId);
      });
    });
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.rotate(1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.rotate(-1));
    }

    // Drag support
    let isDragging = false;
    let startX = 0;

    const container = document.querySelector('.carousel-stage-container');
    if (container) {
      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 40) {
          this.rotate(dx > 0 ? 1 : -1);
          isDragging = false;
        }
      });
    }
  }

  rotate(dir) {
    SoundSystem.playBlip(720);
    this.currentRotation += dir * this.theta;
    if (this.rotator) {
      this.rotator.style.transform = `rotateY(${this.currentRotation}deg)`;
    }
  }
}


// ==========================================
// 7. EDITORIAL CASE STUDY DRAWER
// ==========================================

window.openProjectDrawer = function(projectId) {
  const data = PROJECT_CASE_STUDIES[projectId];
  if (!data) return;

  SoundSystem.playBlip(800);

  const drawer = document.querySelector('.case-study-drawer');
  const titleEl = drawer.querySelector('.case-study-title');
  const pillEl = drawer.querySelector('.case-pill-badge');
  const metaGrid = drawer.querySelector('.case-meta-grid');
  const narrativeEl = drawer.querySelector('.case-narrative-content');
  const galleryGrid = drawer.querySelector('.case-gallery-grid');

  if (titleEl) titleEl.textContent = data.title;
  if (pillEl) pillEl.textContent = data.pill;

  if (metaGrid) {
    metaGrid.innerHTML = `
      <div class="case-meta-item">
        <div class="meta-heading">Organization</div>
        <div class="meta-val">${data.meta.client}</div>
      </div>
      <div class="case-meta-item">
        <div class="meta-heading">Role</div>
        <div class="meta-val">${data.meta.role}</div>
      </div>
      <div class="case-meta-item">
        <div class="meta-heading">Timeline</div>
        <div class="meta-val">${data.meta.duration}</div>
      </div>
      <div class="case-meta-item">
        <div class="meta-heading">Core Stack</div>
        <div class="meta-val">${data.meta.stack}</div>
      </div>
    `;
  }

  if (narrativeEl) {
    narrativeEl.innerHTML = data.narrative;
  }

  if (galleryGrid) {
    galleryGrid.innerHTML = data.gallery.map(img => `
      <div class="case-gallery-item">
        <img src="${img}" alt="${data.title}" loading="lazy">
      </div>
    `).join('');
  }

  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeProjectDrawer = function() {
  const drawer = document.querySelector('.case-study-drawer');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = 'auto';
  SoundSystem.playBlip(400);
};


// ==========================================
// 8. CERTIFICATES LIGHTBOX & TILT
// ==========================================

class CertificatesVault {
  constructor() {
    this.cards = document.querySelectorAll('.cert-token-card');
    this.modal = document.querySelector('.lightbox-modal');
    this.modalImg = document.querySelector('.lightbox-img-wrap img');
    this.captionEl = document.querySelector('.lightbox-caption-text');
    this.closeBtn = document.querySelector('.lightbox-close-btn');

    this.bindEvents();
  }

  bindEvents() {
    this.cards.forEach(card => {
      // 3D Tilt interaction
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateY(${x * 0.08}deg) rotateX(${-y * 0.08}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)`;
      });

      // Lightbox click
      card.addEventListener('click', () => {
        const highRes = card.dataset.highres;
        const title = card.querySelector('.cert-name')?.textContent || '';
        this.openLightbox(highRes, title);
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeLightbox());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeLightbox();
      });
    }
  }

  openLightbox(src, caption) {
    if (!this.modal || !this.modalImg) return;
    this.modalImg.src = src;
    if (this.captionEl) this.captionEl.textContent = caption;
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    SoundSystem.playBlip(680);
  }

  closeLightbox() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}


// ==========================================
// 9. CUSTOM FLUID MAGNETIC CURSOR
// ==========================================

class MagneticCursor {
  constructor() {
    this.dot = document.querySelector('.cursor-dot');
    this.follower = document.querySelector('.cursor-follower');

    this.posX = window.innerWidth / 2;
    this.posY = window.innerHeight / 2;
    this.mouseX = this.posX;
    this.mouseY = this.posY;

    if (!this.dot || !this.follower) return;

    this.bindEvents();
    this.animate();
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Hover triggers
    document.querySelectorAll('a, button, .rotary-knob, .year-node-btn').forEach(el => {
      el.addEventListener('mouseenter', () => this.follower.classList.add('hover-link'));
      el.addEventListener('mouseleave', () => this.follower.classList.remove('hover-link'));
    });

    document.querySelectorAll('.carousel-project-card, .cert-token-card').forEach(el => {
      el.addEventListener('mouseenter', () => this.follower.classList.add('hover-view'));
      el.addEventListener('mouseleave', () => this.follower.classList.remove('hover-view'));
    });

    document.querySelectorAll('.carousel-stage-container').forEach(el => {
      el.addEventListener('mouseenter', () => this.follower.classList.add('hover-drag'));
      el.addEventListener('mouseleave', () => this.follower.classList.remove('hover-drag'));
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Dot snaps immediately
    this.dot.style.left = `${this.mouseX}px`;
    this.dot.style.top = `${this.mouseY}px`;

    // Follower smooth lerp
    this.posX += (this.mouseX - this.posX) * 0.15;
    this.posY += (this.mouseY - this.posY) * 0.15;

    this.follower.style.left = `${this.posX}px`;
    this.follower.style.top = `${this.posY}px`;
  }
}


// ==========================================
// 10. INITIALIZATION ORCHESTRATOR
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Sound system toggle
  const soundBtn = document.querySelector('.sound-toggle-btn');
  if (soundBtn) {
    if (localStorage.getItem('mokurdy_sound') === '1') {
      soundBtn.classList.add('active');
      soundBtn.querySelector('.sound-label').textContent = 'SOUND ON';
      SoundSystem.enabled = true;
    }

    soundBtn.addEventListener('click', () => {
      const active = SoundSystem.toggle();
      soundBtn.classList.toggle('active', active);
      soundBtn.querySelector('.sound-label').textContent = active ? 'SOUND ON' : 'SOUND OFF';
    });
  }

  // Fullscreen Navigation Drawer
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const drawer = document.querySelector('.fullscreen-nav-drawer');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      SoundSystem.playBlip(750);
    });
  }

  if (drawerCloseBtn && drawer) {
    drawerCloseBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      SoundSystem.playBlip(400);
    });
  }

  document.querySelectorAll('.drawer-link-item a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });

  // Drawer back button
  const drawerBackBtn = document.querySelector('.drawer-back-btn');
  if (drawerBackBtn) {
    drawerBackBtn.addEventListener('click', () => window.closeProjectDrawer());
  }

  // Initialize Scenes
  const warpExp = new WarpTunnelExperience('warp-tunnel-canvas');
  new MoltenSculpture('monolith-canvas');
  new MorphingSphere('sphere-canvas');
  new DuneTerrainHorizon('terrain-canvas');

  // Initialize Interactive Controls
  new RetroCrtController();
  new TimelineJourneyScrubber(warpExp);
  new SpatialProjectCarousel();
  new CertificatesVault();
  new MagneticCursor();
});
