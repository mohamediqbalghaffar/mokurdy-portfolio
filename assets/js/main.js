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
    channel: "CH 00",
    type: "profile",
    tagline: "WORKSPACE SHOWREEL",
    title: "Mohammed I. Ghaffar",
    role: "AI Deployment Lead & Systems Architect",
    snippet: "7+ years translating executive requirements into hardened, production-grade intelligence and mission-critical architectures.",
    avatar: "assets/images/avatar.jpg",
    badges: ["Next.js", "React 19", "Android APK", "4 Systems Shipped"],
    year: "2016 – Present",
    actionText: "Explore Journey ↗",
    projectId: "profile"
  },
  {
    channel: "CH 01",
    type: "project",
    tagline: "Correspondence Tracking & SLA Intelligence",
    title: "Tracking Approvals",
    snippet: "Enterprise administrative correspondence monitoring and SLA compliance dashboard with live department comparison, presentation mode, and TV kiosk feeds.",
    badges: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    year: "2024 – Present",
    actionText: "Inspect Architecture",
    projectId: "tracking-approvals"
  },
  {
    channel: "CH 02",
    type: "project",
    tagline: "Humanitarian Aid & Beneficiary CRM",
    title: "Charity NGO Web",
    snippet: "NGO aid distribution platform with 9-stage beneficiary investigation workflows, interactive Leaflet GIS aid mapping, relief warehouse deductions, and dual-currency ledger (IQD/USD).",
    badges: ["React 19", "Vite", "Leaflet GIS", "ExcelJS"],
    year: "2024 – Present",
    actionText: "Inspect Architecture",
    projectId: "charity-ngo"
  },
  {
    channel: "CH 03",
    type: "project",
    tagline: "Commercial CRM & Inventory ERP",
    title: "CRM & Warehouse ERP",
    snippet: "Bilingual Kurdish/English retail CRM and warehouse inventory platform with multi-branch stock transfers, automated COGS & break-even analytics, and thermal POS receipt printing.",
    badges: ["Next.js 15", "React 19", "Tailwind RTL", "Recharts"],
    year: "2021 – 2023",
    actionText: "Inspect Architecture",
    projectId: "crm-erp"
  },
  {
    channel: "CH 04",
    type: "project",
    tagline: "Elder-Friendly Kurdish Medication Reminder",
    title: "Habakam Android APK",
    snippet: "Native Android medication scheduling application in Sorani Kurdish. Spoken Kurdish voice alarms, pill photo identification, and offline-first Room DB.",
    badges: ["Android APK", "Kotlin", "Jetpack Compose", "Room DB"],
    year: "2023 – 2024",
    actionText: "Inspect Architecture",
    projectId: "habakam"
  }
];

const TIMELINE_MILESTONES = {
  "2016": {
    year: "2016",
    displayYear: "2016",
    role: "Foundations & Competition Honors",
    company: "AKSF Kangaroo Math & Edexcel Excellence",
    category: "Academic Excellence",
    desc: "Achieved top international honors in mathematics problem solving (AKSF) and Turkish language fluency (Edexcel B1). Laid rigorous analytical and mathematical foundations for systems architecture and operational problem-solving.",
    highlights: [
      "Awarded AKSF Kangaroo Math Competition Certificate of Honor",
      "Achieved Edexcel & TÖMER Turkish Language Fluency (B1 Certification)",
      "High School Academic Excellence Honor Roll (98.2% GPA)"
    ]
  },
  "2018": {
    year: "2018",
    displayYear: "2018",
    role: "Arabic Localization Specialist & Trilingual Liaison",
    company: "Halabja Glory Organization (NGO) | Halabja, Iraq",
    category: "Localization & Stakeholder Alignment",
    desc: "Directed trilingual localization across Arabic, English, Kurdish (Hawrami/Sorani), and Turkish for legal, administrative, and stakeholder document suites. Facilitated consecutive interpretation and cross-functional alignment during high-stakes donor conferences.",
    highlights: [
      "Directed Arabic-first trilingual localization across official legal, administrative, and donor suites",
      "Facilitated consecutive interpretation during international donor conferences and partner assemblies",
      "Ensured 100% regional cultural nuance and terminology accuracy across NGO programs"
    ]
  },
  "2019": {
    year: "2019",
    displayYear: "2019",
    role: "Social Entrepreneurship & Venture Lead",
    company: "Five One Labs & UNICEF",
    category: "Incubation & Leadership",
    desc: "Graduated from intensive social innovation incubation by UNICEF and Five One Labs. Pitched scalable technology business models to international angel investors and regional leaders, translating user discovery into product initiatives.",
    highlights: [
      "Designed sustainable social enterprise business models and monetization strategies",
      "Conducted 100+ user discovery interviews across regional community markets",
      "Certified in Social Entrepreneurship by Five One Labs & UNICEF"
    ]
  },
  "2021-2023": {
    year: "2021-2023",
    displayYear: "2021 – 2023",
    role: "Commerce Operations & Inventory Specialist",
    company: "Bed Art Group (Retail & Multi-Channel Commerce) | Sulaimaniyah, Iraq",
    category: "Commerce & ERP Operations",
    desc: "Discovered merchant and retail friction points across multi-channel points of sale (POS) and central warehouse inventory. Formulated structured workflow specifications and data integrity protocols bridging sales registers and warehouse databases.",
    highlights: [
      "Discovered merchant and retail friction points across multi-channel POS and central warehouse",
      "Defined standardized data validation protocols and inventory reconciliation routines",
      "Collaborated with cross-functional supply chain, sales, and finance teams to streamline operations"
    ]
  },
  "2024/current": {
    year: "2024/current",
    displayYear: "2024 / CURRENT",
    role: "HTS-HQ Deputy Administrative manager",
    company: "HTS-HQ | Sulaimaniyah , Iraq",
    category: "Administration & Digital Transition",
    desc: "Deputy Admin Manager at HTS-HQ since November 2024 to lead The Business administration of the #1 biggest company inside Halabja Group Of Companies, enterprise digital transformation of the Tasks and Daily routine works.",
    highlights: [
      "Leading business administration for the #1 biggest enterprise inside Halabja Group of Companies",
      "Directing enterprise digital transformation of administrative tasks and daily routine operations",
      "Managing headquarters administration, digital workflows, and cross-departmental execution"
    ]
  }
};

// Backward compatibility aliases
TIMELINE_MILESTONES["2021"] = TIMELINE_MILESTONES["2021-2023"];
TIMELINE_MILESTONES["2023"] = TIMELINE_MILESTONES["2021-2023"];
TIMELINE_MILESTONES["2024"] = TIMELINE_MILESTONES["2024/current"];
TIMELINE_MILESTONES["2025"] = TIMELINE_MILESTONES["2024/current"];
TIMELINE_MILESTONES["2026"] = TIMELINE_MILESTONES["2024/current"];
TIMELINE_MILESTONES["current"] = TIMELINE_MILESTONES["2024/current"];

const PROJECT_CASE_STUDIES = {
  "tracking-approvals": {
    title: "Tracking Approvals — Correspondence Monitoring & SLA Intelligence",
    pill: "GOVERNMENT & CORPORATE WORKFLOWS",
    meta: {
      client: "Corporate Administration & Government Headquarters",
      role: "Lead Systems Architect & Frontend Engineer",
      duration: "2024 – Present",
      stack: "Next.js App Router, TypeScript, Tailwind CSS, Recharts, date-fns",
      liveUrl: "https://trackingapprovals.vercel.app",
      liveDomain: "trackingapprovals.vercel.app"
    },
    narrative: `
      <p>Tracking Approvals is an enterprise correspondence intelligence system designed for corporate headquarters and public sector bodies. It monitors incoming, outgoing, and received official letters with strict Service Level Agreement (SLA) turnaround tracking.</p>
      <h3>SLA Compliance Intelligence</h3>
      <p>The platform automatically computes response turnaround deadlines, categorizing correspondence into <em>Within SLA</em>, <em>Approaching Deadline</em>, and <em>Overdue</em>. Dynamic countdown timers alert administrative officers to impending bottlenecks before deadlines lapse.</p>
      <h3>Boardroom Presentation & TV Kiosk Modes</h3>
      <p>Built-in display modes include an executive high-contrast projector presentation mode for ministerial meetings and an auto-updating TV kiosk mode for office lobby statistics, featuring live department workload comparisons and Excel tracking dossier exports.</p>
    `,
    gallery: [
      "assets/images/projects/tracking_dashboard.png",
      "assets/images/projects/tracking_analytics.png"
    ]
  },
  "charity-ngo": {
    title: "Charity NGO Web — Humanitarian Aid Tracking & Beneficiary CRM",
    pill: "HUMANITARIAN LOGISTICS & GIS",
    meta: {
      client: "Regional Humanitarian Foundations & NGOs",
      role: "Full Stack Engineer & GIS Architect",
      duration: "2024 – Present",
      stack: "React 19, Vite, TypeScript, Tailwind CSS RTL, Leaflet GIS, ExcelJS",
      liveUrl: "https://charityngoweb.vercel.app",
      liveDomain: "charityngoweb.vercel.app"
    },
    narrative: `
      <p>A comprehensive humanitarian aid management, beneficiary dossier tracking, and relief logistics platform built specifically for non-governmental organizations operating across the Kurdistan Region.</p>
      <h3>9-Stage Investigation & Confidential Masking</h3>
      <p>Features 9 granular investigation statuses from initial intake to field verification and urgent emergency aid. Sensitive beneficiary identities are shielded with role-based confidential masking to protect dignity and privacy.</p>
      <h3>Interactive Leaflet GIS Mapping & Relief Inventory</h3>
      <p>Integrates an interactive regional map displaying beneficiary density and relief dispatch points across Sulaymaniyah, Erbil, Duhok, and Halabja, with automated inventory deductions for food baskets, heating fuel, and medical relief supplies.</p>
    `,
    gallery: [
      "assets/images/projects/charity_dashboard.png",
      "assets/images/projects/charity_gis_map.png"
    ]
  },
  "crm-erp": {
    title: "CRM & Warehouse ERP — Commercial Retail & Stock Management",
    pill: "RETAIL ERP & INVENTORY MANAGEMENT",
    meta: {
      client: "Bed Art Group & Commercial Retailers",
      role: "Lead Systems Architect & Full Stack Engineer",
      duration: "2021 – 2023",
      stack: "Next.js 15, React 19, TypeScript, Tailwind RTL, Recharts, SheetJS",
      liveUrl: "https://crmwebapp-xi.vercel.app",
      liveDomain: "crmwebapp-xi.vercel.app"
    },
    narrative: `
      <p>A full-featured Kurdish and English commercial CRM and warehouse inventory platform tailored for furniture, bedding, and retail enterprises. Delivers end-to-end sales processing, multi-branch stock transfers, and financial metrics.</p>
      <h3>Automated COGS & Break-Even Analytics</h3>
      <p>Computes Cost-of-Goods-Sold (COGS), operational expense ratios, and break-even points in real time. Visual analytics render profit margin trends and expense distribution donuts across multi-currency transactions (USD & IQD).</p>
      <h3>POS Thermal Receipt Generation</h3>
      <p>Includes an integrated point-of-sale receipt engine generating thermal 80mm receipts and A4 official sales invoices, paired with an Excel import/export pipeline for high-volume catalog synchronization.</p>
    `,
    gallery: [
      "assets/images/projects/crm_dashboard.png",
      "assets/images/projects/crm_products.png"
    ]
  },
  "habakam": {
    title: "Habakam (حەبەکەم) — Android Medication Reminder APK",
    pill: "NATIVE ANDROID HEALTHCARE APK",
    meta: {
      client: "Healthcare Adherence & Kurdish Community",
      role: "Lead Android Architect",
      duration: "2023 – 2024",
      stack: "Kotlin, Jetpack Compose, Room DB, AlarmManager, Hilt, Material 3",
      liveUrl: null,
      liveDomain: "Android APK (Native Mobile)"
    },
    narrative: `
      <p>Habakam is a specialized native Android medication adherence application developed with Jetpack Compose, designed specifically for Kurdish speakers (Central Kurdish / Sorani) with an elder-accessible, high-contrast interface.</p>
      <h3>Spoken Kurdish Voice Reminders & Pill Photos</h3>
      <p>Features spoken Kurdish voice notifications alongside customizable ringtones, enabling elderly patients to recognize medication times easily. Visual pill photo capture allows users to identify specific pill shapes and boxes directly on alerts.</p>
      <h3>Offline-First Room DB & Exact Alarms</h3>
      <p>Built with Android AlarmManager and foreground services to guarantee exact alarm delivery across device deep sleep (Doze mode), backed by an offline-first SQLite Room database requiring zero cloud dependencies.</p>
    `,
    gallery: [
      "assets/images/projects/habakam_app_screen.png",
      "assets/images/habakam_icon.png"
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
    try {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    } catch (e) {
      console.warn('AudioContext init error:', e);
    }
  }

  toggle() {
    this.init();
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('mokurdy_sound', this.enabled ? '1' : '0');
    } catch(e) {}
    if (this.enabled) {
      this.playActivationChime();
    } else {
      this.playBlip(320);
    }
    return this.enabled;
  }

  // Futuristic ascending chord on sound activation
  playActivationChime() {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.32);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.34);
      });
    } catch (e) {}
  }

  // CRT Channel Switch Static Pop
  playCrtSwitch() {
    if (!this.enabled || !this.ctx) return;
    try {
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
    } catch (e) {}
  }

  // Hyperspace Warp Whoosh
  playWarpWhoosh() {
    if (!this.enabled || !this.ctx) return;
    try {
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
    } catch (e) {}
  }

  // Subtle Futuristic UI Blip
  playBlip(freq = 600) {
    if (!this.enabled || !this.ctx) return;
    try {
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
    } catch (e) {}
  }
}

const SoundSystem = new AudioSynthEngine();


// ==========================================
// 2.5 REAL-TIME SCREEN RATIO CONTROLLER
// ==========================================

class ScreenRatioManager {
  constructor() {
    this.html = document.documentElement;
    this.update();
    this.bindEvents();
  }

  update() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ratio = w / Math.max(h, 1);

    // Dynamic layout CSS properties
    this.html.style.setProperty('--app-aspect-ratio', ratio.toFixed(4));
    this.html.style.setProperty('--screen-w', `${w}px`);
    this.html.style.setProperty('--screen-h', `${h}px`);

    // Intelligent Hero Scale factor:
    // Fits CRT Console + statements + CTAs within 100dvh without cutoff on short screens
    let heroScale = 1;
    if (ratio >= 1.2) {
      if (h < 660) {
        heroScale = Math.max(0.72, h / 880);
      } else if (h < 800) {
        heroScale = Math.max(0.82, h / 940);
      }
    } else {
      if (w < 380) {
        heroScale = 0.9;
      }
    }
    this.html.style.setProperty('--hero-scale-factor', heroScale.toFixed(3));

    // Categorize layout aspect zone
    let zone = 'widescreen';
    if (ratio >= 2.1) {
      zone = 'ultrawide';
    } else if (ratio >= 1.55) {
      zone = (h < 760) ? 'laptop-short' : 'widescreen';
    } else if (ratio >= 1.2) {
      zone = 'tablet-landscape';
    } else if (ratio >= 0.85) {
      zone = 'square-tablet';
    } else {
      zone = 'portrait-tall';
    }

    this.html.setAttribute('data-aspect-zone', zone);
    this.html.setAttribute('data-orientation', w >= h ? 'landscape' : 'portrait');

    window.dispatchEvent(new CustomEvent('screenratiochange', {
      detail: { width: w, height: h, ratio, zone }
    }));
  }

  bindEvents() {
    let resizeTimer = null;
    const onResize = () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => this.update());
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });
  }
}


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
    const handleResize = () => {
      if (!this.renderer) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('screenratiochange', handleResize, { passive: true });
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

    this.bindEvents();
    this.animate();
  }

  bindEvents() {
    const handleResize = () => {
      if (!this.renderer || !this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || this.canvas.clientWidth || 500;
      const h = rect.height || this.canvas.clientHeight || 650;
      if (w === 0 || h === 0) return;
      this.camera.aspect = w / h;

      // Adjust camera distance based on screen aspect ratio
      const ratio = window.innerWidth / Math.max(window.innerHeight, 1);
      if (ratio < 0.85) {
        this.camera.position.z = 5.6; // Pull back in tall portrait
      } else if (ratio < 1.25) {
        this.camera.position.z = 4.8; // Tablet / square
      } else {
        this.camera.position.z = 4.2; // Standard widescreen
      }

      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('screenratiochange', handleResize, { passive: true });
    handleResize();
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
    this.bindEvents();
    this.animate();
  }

  bindEvents() {
    const handleResize = () => {
      if (!this.renderer || !this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || this.canvas.clientWidth || 360;
      const h = rect.height || this.canvas.clientHeight || 360;
      if (w === 0 || h === 0) return;
      this.camera.aspect = w / h;

      const ratio = window.innerWidth / Math.max(window.innerHeight, 1);
      if (ratio < 0.85) {
        this.camera.position.z = 6.0;
      } else if (ratio < 1.25) {
        this.camera.position.z = 5.5;
      } else {
        this.camera.position.z = 5.2;
      }

      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('screenratiochange', handleResize, { passive: true });
    handleResize();
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
    this.bindEvents();
    this.animate();
  }

  bindEvents() {
    const handleResize = () => {
      if (!this.renderer || !this.canvas) return;
      const w = this.canvas.clientWidth || window.innerWidth;
      const h = this.canvas.clientHeight || 380;
      if (w === 0 || h === 0) return;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    window.addEventListener('screenratiochange', handleResize, { passive: true });
    handleResize();
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
    this.currentIndex = 1; // Initially set to CH 01 (Habakam APK) when powered on
    this.poweredOn = false; // Initially shut down
    this.turnCount = 0;
    this.knobAngle = Math.round(1 * (360 / CRT_CHANNELS.length));
    this.autoPlayInterval = 5000;
    this.autoPlayTimer = null;
    this.guideStep = 1; // 1: Turn on, 2: Change channels, 3: Scroll down

    this.wrapperEl = document.querySelector('.crt-console-wrapper');
    this.tubeEl = document.querySelector('.crt-tube-container');
    this.contentEl = document.querySelector('.crt-screen-content');
    this.knobEl = document.querySelector('.rotary-knob');
    this.powerBtn = document.querySelector('.power-toggle-btn');
    this.powerLed = document.querySelector('.power-switch-led');
    this.heroScene = document.querySelector('.hero-scene');

    this.guide1El = document.getElementById('crt-guide-1');
    this.guide2El = document.getElementById('crt-guide-2');
    this.guide3El = document.getElementById('crt-guide-3');

    if (this.knobEl) {
      this.knobEl.style.transform = `rotate(${this.knobAngle}deg)`;
    }

    this.bindEvents();
    this.renderChannel(true); // Prepare CH 01 content inside screen
    this.setGuideStep(1); // Step 1: Guide 1 tells user to turn on TV
  }

  bindEvents() {
    const knobSection = document.querySelector('.knob-section');
    if (knobSection) {
      knobSection.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextChannel(false);
      });
    } else if (this.knobEl) {
      this.knobEl.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextChannel(false);
      });
    }

    if (this.powerBtn) {
      this.powerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.togglePower();
      });
    }

    if (this.guide1El) {
      this.guide1El.addEventListener('click', (e) => {
        e.preventDefault();
        this.togglePower();
      });
    }

    if (this.guide2El) {
      this.guide2El.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextChannel(false);
      });
    }

    if (this.guide3El) {
      this.guide3El.addEventListener('click', (e) => {
        if (!e.target.closest('.guide-pill-link')) {
          e.preventDefault();
          const journeyEl = document.querySelector('#journey');
          if (journeyEl) journeyEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    if (this.wrapperEl) {
      this.wrapperEl.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.wrapperEl.addEventListener('mouseleave', () => this.resumeAutoPlay());
    }

    window.addEventListener('scroll', () => {
      if (this.guideStep === 3 && this.guide3El) {
        if (window.scrollY > 160) {
          this.guide3El.classList.add('scrolled-hidden');
        } else {
          this.guide3El.classList.remove('scrolled-hidden');
        }
      }
    });
  }

  setGuideStep(step) {
    this.guideStep = step; // 0 (hidden), 1 (turn on), 2 (change channels), 3 (scroll down)

    if (this.heroScene) {
      this.heroScene.setAttribute('data-guide-state', String(step));
    }

    if (this.guide1El) {
      this.guide1El.classList.toggle('active', step === 1);
    }
    if (this.guide2El) {
      this.guide2El.classList.toggle('active', step === 2);
    }
    if (this.guide3El) {
      this.guide3El.classList.toggle('active', step === 3);
    }

    if (this.powerBtn) {
      this.powerBtn.classList.toggle('guide-pulse', step === 1);
    }
    if (this.knobEl) {
      this.knobEl.classList.toggle('guide-pulse', step === 2);
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      if (this.poweredOn) {
        this.nextChannel(true);
      }
    }, this.autoPlayInterval);
  }

  pauseAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  resumeAutoPlay() {
    if (!this.autoPlayTimer && this.poweredOn) {
      this.startAutoPlay();
    }
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  nextChannel(fromAuto = false) {
    if (!this.poweredOn) return;
    const numChannels = CRT_CHANNELS.length;
    const prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % numChannels;
    if (this.currentIndex === 0 && prevIndex > 0) {
      this.turnCount++;
    }
    const stepAngle = 360 / numChannels;
    this.knobAngle = Math.round((this.turnCount * 360) + (this.currentIndex * stepAngle));
    if (this.knobEl) {
      this.knobEl.style.transform = `rotate(${this.knobAngle}deg)`;
    }
    this.renderChannel(false);

    // 3. When user finishes channels and gets to CH 00, show Guide 3 and pause autoplay
    if (this.currentIndex === 0) {
      this.setGuideStep(3);
      this.stopAutoPlay(); // Pause on CH 00 profile so user can absorb showreel & explore
    } else if (this.guideStep === 3) {
      // If user rotates past CH 00 back to another channel, hide Guide 3
      this.setGuideStep(0);
    }

    if (!fromAuto && this.currentIndex !== 0) {
      this.startAutoPlay();
    }
  }

  setChannel(index) {
    if (!this.poweredOn) return;
    const numChannels = CRT_CHANNELS.length;
    this.currentIndex = index % numChannels;
    const stepAngle = 360 / numChannels;
    this.knobAngle = Math.round((this.turnCount * 360) + (this.currentIndex * stepAngle));
    if (this.knobEl) {
      this.knobEl.style.transform = `rotate(${this.knobAngle}deg)`;
    }
    this.renderChannel(false);
    if (this.currentIndex === 0) {
      this.setGuideStep(3);
      this.stopAutoPlay();
    } else {
      this.setGuideStep(0);
      this.startAutoPlay();
    }
  }

  renderChannel(isInitial = false) {
    if (!isInitial) {
      SoundSystem.playCrtSwitch();
    }

    // Trigger static burst animation
    if (this.tubeEl) {
      this.tubeEl.classList.add('static-burst');
      setTimeout(() => {
        if (this.tubeEl) this.tubeEl.classList.remove('static-burst');
      }, 160);
    }

    const item = CRT_CHANNELS[this.currentIndex];
    if (!item || !this.contentEl) return;

    if (item.type === 'profile') {
      this.contentEl.innerHTML = `
        <div class="crt-profile-slide">
          <div class="crt-channel-badge"><span class="crt-live-dot"></span>${item.channel} · SHOWREEL</div>
          <div class="crt-avatar-wrapper">
            <img src="${item.avatar}" alt="${item.title}" class="crt-avatar-img">
            <div class="crt-avatar-scanline"></div>
            <div class="crt-avatar-corner tl"></div>
            <div class="crt-avatar-corner tr"></div>
            <div class="crt-avatar-corner bl"></div>
            <div class="crt-avatar-corner br"></div>
          </div>
          <div class="crt-profile-details">
            <div class="crt-tagline">${item.tagline} · ${item.year}</div>
            <h2 class="crt-profile-title">${item.title}</h2>
            <p class="crt-profile-desc">${item.snippet}</p>
            <div class="crt-badge-row">
              ${item.badges.map(b => `<span class="crt-badge">${b}</span>`).join('')}
            </div>
            <button class="crt-action-btn" data-action="explore">
              <span>${item.actionText}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;
    } else {
      this.contentEl.innerHTML = `
        <div class="crt-project-slide">
          <div class="crt-channel-badge"><span class="crt-live-dot"></span>${item.channel}</div>
          <div class="crt-tagline">${item.tagline} · ${item.year}</div>
          <h2 class="crt-project-title">${item.title}</h2>
          <p class="crt-project-snippet">${item.snippet}</p>
          <div class="crt-badge-row">
            ${item.badges.map(b => `<span class="crt-badge">${b}</span>`).join('')}
          </div>
          <button class="crt-action-btn" data-project="${item.projectId}">
            <span>${item.actionText}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      `;
    }

    // Attach listener to action button
    const btn = this.contentEl.querySelector('.crt-action-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const action = btn.dataset.action;
        const proj = btn.dataset.project;
        if (action === 'explore') {
          const journeyEl = document.querySelector('#journey');
          if (journeyEl) journeyEl.scrollIntoView({ behavior: 'smooth' });
        } else if (proj && window.openProjectDrawer) {
          window.openProjectDrawer(proj);
        }
      });
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

    if (this.poweredOn) {
      // 2. When turned on, TV displays CH 01 first, and Guide 2 tells user to change channels
      this.currentIndex = 1; // CH 01 (Habakam APK)
      this.turnCount = 0;
      const stepAngle = 360 / CRT_CHANNELS.length;
      this.knobAngle = Math.round(this.currentIndex * stepAngle);
      if (this.knobEl) {
        this.knobEl.style.transform = `rotate(${this.knobAngle}deg)`;
      }
      this.setGuideStep(2);
      this.renderChannel(false);
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
      this.turnCount = 0;
      this.knobAngle = 0;
      if (this.knobEl) {
        this.knobEl.style.transform = 'rotate(0deg)';
      }
      this.setGuideStep(1); // Reset cleanly to Step 1 (Turn on TV)
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
    this.selectYear('2024/current', false);
    setTimeout(() => {
      const activeBtn = document.querySelector('.year-node-btn[data-year="2024/current"]');
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
      }
    }, 150);
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
    if (activeBtn) {
      activeBtn.classList.add('active');
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Update progress line width
    if (this.progressLine) {
      const btnIndex = activeBtn ? Array.from(this.buttons).indexOf(activeBtn) : index;
      const safeIndex = btnIndex >= 0 ? btnIndex : index;
      const pct = (safeIndex / (this.buttons.length - 1)) * 100;
      this.progressLine.style.width = `${pct}%`;
    }

    // Animate year change
    if (this.yearDisplay) {
      this.yearDisplay.style.transform = 'scale(0.85)';
      this.yearDisplay.style.opacity = '0.4';
      setTimeout(() => {
        this.yearDisplay.textContent = data.displayYear || year;
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
      if (data.highlights && data.highlights.length > 0) {
        this.highlightsEl.style.display = 'flex';
        this.highlightsEl.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');
      } else {
        this.highlightsEl.style.display = 'none';
        this.highlightsEl.innerHTML = '';
      }
    }
  }
}


// ==========================================
// 6. 3D CYLINDRICAL CAROUSEL
// ==========================================

class SpatialProjectCarousel {
  constructor() {
    this.container = document.querySelector('.carousel-stage-container');
    this.rotator = document.querySelector('.carousel-rotator');
    this.cards = Array.from(document.querySelectorAll('.carousel-project-card'));
    this.prevBtn = document.querySelector('#carousel-prev') || document.querySelector('.carousel-nav-btn.prev');
    this.nextBtn = document.querySelector('#carousel-next') || document.querySelector('.carousel-nav-btn.next');
    this.dots = Array.from(document.querySelectorAll('.carousel-dot'));
    this.tabs = Array.from(document.querySelectorAll('.project-tab-btn'));
    this.counterEl = document.querySelector('.carousel-counter-current');

    this.cardCount = this.cards.length;
    this.currentIndex = 0;

    this.setupCards();
    this.bindEvents();
    this.updateLayout();
  }

  setupCards() {
    this.cards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        if (Date.now() - (this.lastSwipeTime || 0) < 350) return;
        // If clicking on direct live url link, allow normal navigation
        if (e.target.closest('a')) return;

        // If clicking on active center card, open case study drawer
        if (index === this.currentIndex) {
          const projectId = card.dataset.project;
          if (projectId && window.openProjectDrawer) {
            window.openProjectDrawer(projectId);
          }
        } else {
          // If clicking on side card, navigate directly to it!
          this.goTo(index);
        }
      });
    });
  }

  updateLayout() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ratio = w / Math.max(h, 1);
    const isMobile = ratio < 0.85 || w < 768;

    let spreadX, depthZ, rotateYDeg;
    if (ratio >= 2.1) {
      spreadX = Math.min(460, w * 0.28);
      depthZ = -130;
      rotateYDeg = 24;
    } else if (isMobile) {
      spreadX = Math.min(w * 0.62, 230);
      depthZ = -65;
      rotateYDeg = 12;
    } else if (ratio < 1.25 || w < 960) {
      spreadX = Math.min(w * 0.40, 310);
      depthZ = -95;
      rotateYDeg = 18;
    } else {
      spreadX = Math.min(380, w * 0.32);
      depthZ = -110;
      rotateYDeg = 20;
    }

    this.cards.forEach((card, i) => {
      let offset = (i - this.currentIndex) % this.cardCount;
      if (offset > this.cardCount / 2) offset -= this.cardCount;
      if (offset < -this.cardCount / 2) offset += this.cardCount;

      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-back');

      if (offset === 0) {
        // Active Center Card
        card.classList.add('is-active');
        card.style.transform = `translateX(0px) translateZ(0px) rotateY(0deg) scale(1)`;
        card.style.opacity = '1';
        card.style.filter = 'brightness(1)';
        card.style.zIndex = '35';
        card.style.pointerEvents = 'auto';
      } else if (offset === 1) {
        // Next Card (Right)
        card.classList.add('is-next');
        card.style.transform = `translateX(${spreadX}px) translateZ(${depthZ}px) rotateY(-${rotateYDeg}deg) scale(0.86)`;
        card.style.opacity = isMobile ? '0.35' : '0.65';
        card.style.filter = 'brightness(0.65)';
        card.style.zIndex = '25';
        card.style.pointerEvents = 'auto';
      } else if (offset === -1) {
        // Prev Card (Left)
        card.classList.add('is-prev');
        card.style.transform = `translateX(-${spreadX}px) translateZ(${depthZ}px) rotateY(${rotateYDeg}deg) scale(0.86)`;
        card.style.opacity = isMobile ? '0.35' : '0.65';
        card.style.filter = 'brightness(0.65)';
        card.style.zIndex = '25';
        card.style.pointerEvents = 'auto';
      } else {
        // Opposite / Back Card
        card.classList.add('is-back');
        card.style.transform = `translateX(0px) translateZ(-260px) scale(0.72)`;
        card.style.opacity = '0';
        card.style.filter = 'brightness(0.3)';
        card.style.zIndex = '10';
        card.style.pointerEvents = 'none';
      }
    });

    // Update Counter
    if (this.counterEl) {
      this.counterEl.textContent = String(this.currentIndex + 1).padStart(2, '0');
    }

    // Update Dots
    this.dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentIndex);
    });

    // Update Tabs
    this.tabs.forEach((tab, idx) => {
      const isActive = idx === this.currentIndex;
      tab.classList.toggle('active', isActive);
      if (isActive && window.innerWidth < 768) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  goTo(index) {
    const target = ((index % this.cardCount) + this.cardCount) % this.cardCount;
    if (target === this.currentIndex) return;
    SoundSystem.playBlip(720);
    this.currentIndex = target;
    this.updateLayout();
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.next();
      });
    }

    this.dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        this.goTo(idx);
      });
    });

    this.tabs.forEach((tab, idx) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        this.goTo(idx);
      });
    });

    window.addEventListener('resize', () => this.updateLayout(), { passive: true });
    window.addEventListener('orientationchange', () => this.updateLayout(), { passive: true });
    window.addEventListener('screenratiochange', () => this.updateLayout(), { passive: true });

    // Keyboard navigation when user is on the section
    window.addEventListener('keydown', (e) => {
      const projSec = document.querySelector('#projects');
      if (projSec) {
        const rect = projSec.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (e.key === 'ArrowLeft') this.prev();
          if (e.key === 'ArrowRight') this.next();
        }
      }
    });

    // Mouse drag support
    let isDragging = false;
    let startX = 0;

    if (this.container) {
      this.container.addEventListener('mousedown', (e) => {
        if (e.target.closest('a, button')) return;
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
          if (dx > 0) this.prev();
          else this.next();
          isDragging = false;
        }
      });

      // Touch swipe support
      this.lastSwipeTime = 0;
      this.container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          startX = e.touches[0].clientX;
          isDragging = true;
        }
      }, { passive: true });

      this.container.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const dx = endX - startX;
        if (Math.abs(dx) > 25) {
          this.lastSwipeTime = Date.now();
          if (dx > 0) this.prev();
          else this.next();
        }
        isDragging = false;
      });
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
    const liveItem = data.meta.liveUrl
      ? `<div class="case-meta-item" style="border-color: rgba(0, 255, 102, 0.4); background: rgba(0, 255, 102, 0.06);">
          <div class="meta-heading" style="color: #00ff66;">Live Production URL</div>
          <div class="meta-val">
            <a href="${data.meta.liveUrl}" target="_blank" rel="noopener" style="color: #00ff66; text-decoration: underline; text-underline-offset: 4px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              ${data.meta.liveDomain} ↗
            </a>
          </div>
        </div>`
      : `<div class="case-meta-item">
          <div class="meta-heading">Platform</div>
          <div class="meta-val" style="color: #38bdf8;">${data.meta.liveDomain || 'Native Mobile APK'}</div>
        </div>`;

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
      ${liveItem}
      <div class="case-meta-item full-width-meta" style="grid-column: 1 / -1;">
        <div class="meta-heading">Core Stack</div>
        <div class="meta-val">${data.meta.stack}</div>
      </div>
    `;
  }

  if (narrativeEl) {
    const ctaButton = data.meta.liveUrl
      ? `<div style="margin-bottom: 2rem;">
          <a href="${data.meta.liveUrl}" target="_blank" rel="noopener" class="crt-action-btn" style="display: inline-flex; text-decoration: none; background: #00ff66; color: #000; font-weight: 800; padding: 0.6rem 1.4rem; gap: 0.5rem; border-radius: 999px;">
            <span>Visit Live Application (${data.meta.liveDomain})</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>`
      : '';
    narrativeEl.innerHTML = ctaButton + data.narrative;
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
      const lbl = soundBtn.querySelector('.sound-label');
      if (lbl) lbl.textContent = 'SOUND ON';
      SoundSystem.enabled = true;
    }

    const handleSoundToggle = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      const active = SoundSystem.toggle();
      soundBtn.classList.toggle('active', active);
      const lbl = soundBtn.querySelector('.sound-label');
      if (lbl) lbl.textContent = active ? 'SOUND ON' : 'SOUND OFF';
    };

    soundBtn.addEventListener('click', handleSoundToggle);
  }

  // Fullscreen Navigation Drawer
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const drawer = document.querySelector('.fullscreen-nav-drawer');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  function openDrawer(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (drawer) {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      SoundSystem.playBlip(750);
    }
  }

  function closeDrawer(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = 'auto';
      SoundSystem.playBlip(400);
    }
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn && drawer) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  document.querySelectorAll('.drawer-link-item a').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawer && drawer.classList.contains('open')) closeDrawer();
      if (window.closeProjectDrawer) window.closeProjectDrawer();
    }
  });

  // Drawer back button
  const drawerBackBtn = document.querySelector('.drawer-back-btn');
  if (drawerBackBtn) {
    drawerBackBtn.addEventListener('click', () => window.closeProjectDrawer());
  }

  // Dynamic Scroll Backdrop for Site Navigation Bar
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    const handleNavScroll = () => {
      siteNav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  // Initialize Dynamic Screen Ratio Manager
  window.screenRatioMgr = new ScreenRatioManager();

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
