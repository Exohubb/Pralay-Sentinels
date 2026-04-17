<div align="center">

# 🌊 Pralaya Sentinels

### GLOF Early Warning System — Smart India Hackathon 2024

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![IoT](https://img.shields.io/badge/IoT-Sensors-green?style=flat-square)](https://en.wikipedia.org/wiki/Internet_of_things)
[![ML](https://img.shields.io/badge/Machine%20Learning-Flood%20Prediction-red?style=flat-square)](https://en.wikipedia.org/wiki/Machine_learning)
[![SIH 2024](https://img.shields.io/badge/Smart%20India%20Hackathon-2024-orange?style=flat-square)](https://www.sih.gov.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Pralaya Sentinels** is a real-time GLOF (Glacial Lake Outburst Flood) Early Warning System built for Smart India Hackathon 2024 by a team from **IIIT Bhopal**. It monitors 5 IoT sensor streams — temperature, water level, seismic activity, inclinometer, and piezometer — and computes a live weighted flood probability score to alert communities before disaster strikes.

</div>

---

## ⚠️ What is a GLOF?

A **Glacial Lake Outburst Flood (GLOF)** is the sudden release of water from a glacial lake caused by the failure of its natural moraine or ice dam. These events can devastate downstream communities within minutes, as seen in:

| Event | Date | Impact |
|---|---|---|
| **Kedarnath Flood** | Jun 16, 2013 | 5,700+ casualties, widespread destruction |
| **Sikkim GLOF** | Oct 3, 2023 | 40+ deaths, Teesta River flooded |
| **Chamoli Disaster** | Feb 7, 2021 | 200+ missing, hydro plants destroyed |
| **Gya Glacier Outburst** | Aug 7, 2014 | Villages and farmland submerged |

**Causes:** Dam failure · Glacial melting · Ice avalanches · Earthquakes  
**Risk areas:** Himalayan river valleys — Uttarakhand, Sikkim, Himachal Pradesh, Ladakh

---

## ✨ Features

- **📊 Live Sensor Dashboard** — Real-time display of 5 sensor readings updating every 2 seconds
- **🧠 Weighted Flood Probability Algorithm** — Computes live flood risk score from multi-sensor fusion
- **📰 Past Flood Archive** — Documented GLOF incidents with source links for awareness
- **🔮 Upcoming Flood Predictions** — Probability-based forward risk estimation
- **📡 Tech Stack Education** — Detailed breakdown of IoT sensors, satellite imagery, and ML used
- **👥 Team Showcase** — About page presenting the 6-member IIIT Bhopal team and mentor
- **📱 Responsive UI** — Mobile-friendly layout across all 4 pages

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure for all 4 views |
| **CSS3** | Custom styling, grid layout, responsive design |
| **Vanilla JavaScript (ES6)** | Sensor data polling, flood probability computation, DOM updates |
| **Jinja2-style templates** | Shared header/footer via `base.html` pattern |

### Sensor Hardware (IoT Layer)

| Sensor | Measurement | GLOF Role |
|---|---|---|
| **Temperature Sensor** | °C — ambient/water temperature | Detects accelerated glacial melting |
| **Water Level Sensor** | metres — lake water height | Monitors rising water in glacial lake |
| **Seismic Sensor** | g — ground vibration | Detects ice movement, avalanches, earthquakes |
| **Inclinometer** | degrees — slope tilt | Monitors moraine/slope instability |
| **Piezometer** | kPa — pore water pressure | Assesses dam stability via subsurface pressure |

### Data & Intelligence Layer

| Technology | Purpose |
|---|---|
| **INSAT-3DR Satellite** | High-resolution remote sensing of glacial lake area and terrain |
| **Machine Learning** | Trained on historical GLOF events to classify sensor patterns |
| **IoT Data Streams** | Real-time sensor feeds parsed from flat-file (`rnnn.txt`) |

---

## 🏗️ Architecture

```
┌────────────────────────────────────────────────────────────────┐
│               IoT Sensor Network (Glacial Lake Site)           │
│                                                                │
│   [Temperature] [Water Level] [Seismic] [Inclinometer] [Piezo]│
│         ↓             ↓           ↓           ↓          ↓    │
│                    Sensor Data Feed                            │
│                    (rnnn.txt — 5 values per row)               │
└──────────────────────────┬─────────────────────────────────────┘
                            │ polled every 2 seconds
┌──────────────────────────▼─────────────────────────────────────┐
│                script.js — Flood Probability Engine            │
│                                                                │
│  thresholds = [10, 8, 5, 2.5, 200]                             │
│  weights    = [0.1, 0.4, 0.2, 0.2, 0.1]                       │
│                                                                │
│  for each sensor[i]:                                           │
│    normalized = value[i] / threshold[i]                        │
│    score += normalized × weight[i]                             │
│                                                                │
│  probability = min(score / sum(weights), 1.0) × 100            │
└──────────────────────────┬─────────────────────────────────────┘
                            │ updates DOM
┌──────────────────────────▼─────────────────────────────────────┐
│               Browser (Static HTML/CSS/JS)                     │
│                                                                │
│  /index.html         → Dashboard (live sensor + probability)   │
│  /what is glof/      → GLOF education (causes, impact, history)│
│  /tech use/          → Technologies (IoT, Satellite, ML)       │
│  /about us/          → Team + Mentor profiles                  │
└────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Pralay-Sentinels/
├── index.html              # Home — live sensor dashboard + flood probability
├── script.js               # Core JS — data polling, probability algorithm, DOM update
├── scrippt.js              # Alternate/dev script version
├── style.css               # Home page styles
├── rnnn.txt                # Sensor data feed (5 values per line: temp, water, seismic, incl, piezo)
├── rn.txt                  # Sensor data variant 1
├── rnn.txt                 # Sensor data variant 2
│
├── what is glof/
│   ├── glof.html           # GLOF education page (causes, impact, mitigation)
│   ├── glof.css            # Styles for GLOF page
│   └── *.jpg               # GLOF imagery
│
├── tech use/
│   ├── tech.html           # Technologies page (IoT, Satellite, ML descriptions)
│   ├── tech.css            # Styles for tech page
│   └── imag/               # Sensor and technology reference images
│       ├── temperature-sensor-500x500.webp
│       ├── Broadband_Sensor_Model_151.webp  (seismic)
│       ├── images.jpeg                       (piezometer)
│       ├── ZCT230M-LBS-BUS-3105-150x150.jpg (inclinometer)
│       ├── water-level-depth-detection-sensor*.webp
│       ├── insat.webp                        (INSAT-3DR satellite)
│       ├── ml.jpg                            (machine learning)
│       └── trans.webp
│
└── about us/
    ├── about.html          # Team + mentor profiles
    ├── about.js            # About page interactions
    ├── about.css           # Team card styles
    └── *.png / *.jpg       # Profile images
```

---

## 🧠 Flood Probability Algorithm

The core risk engine in `script.js` uses a **weighted threshold normalization** model:

```js
// Sensor thresholds (danger levels)
const thresholds = [10, 8, 5, 2.5, 200];
// [Temperature°C, Water Level m, Seismic g, Inclinometer°, Piezometer kPa]

// Sensor importance weights
const weights = [0.1, 0.4, 0.2, 0.2, 0.1];
// Water Level has the highest weight (40%) as the primary GLOF indicator

function calculateFloodProbability(sensorData) {
    let score = 0;
    for (let i = 0; i < sensorData.length; i++) {
        score += (sensorData[i] / thresholds[i]) * weights[i];
    }
    return Math.min(score / weights.reduce((a, b) => a + b, 0), 1.0);
}
// Returns 0.0 → 1.0 (displayed as 0% → 100%)
```

| Sensor | Threshold | Weight | Rationale |
|---|---|---|---|
| Temperature | 10°C | 10% | Secondary melt indicator |
| Water Level | 8m | **40%** | Primary GLOF trigger |
| Seismic | 5g | 20% | Avalanche / earthquake trigger |
| Inclinometer | 2.5° | 20% | Slope/moraine instability |
| Piezometer | 200kPa | 10% | Subsurface pressure indicator |

---

## 🚀 Running Locally

No build step required — this is a pure static site.

### 1. Clone the repo

```bash
git clone https://github.com/Exohubb/Pralay-Sentinels.git
cd Pralay-Sentinels
```

### 2. Serve with any static server

```bash
# Option A — Python
python -m http.server 8000

# Option B — Node.js (npx)
npx serve .

# Option C — VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Open [http://localhost:8000](http://localhost:8000)

> **Note:** The dashboard fetches `rnnn.txt` via `fetch()`, which requires an HTTP server. Opening `index.html` directly as a file (`file://`) will cause a CORS error on the fetch.

### 3. Simulate sensor data

Edit `rnnn.txt` — each line contains 5 space/newline-separated values:

```
12.5
9.2
3.1
1.8
185.0
8.0
7.5
...
```

The dashboard cycles through every 5 lines as one sensor snapshot, updating every 2 seconds.

---

## 📄 Pages

| Page | URL | Description |
|---|---|---|
| **Dashboard** | `/index.html` | Live sensor readings + flood probability + past GLOF archive |
| **What is GLOF?** | `/what is glof/glof.html` | Education page — causes, impacts, monitoring strategies |
| **Tech Stack** | `/tech use/tech.html` | IoT sensors, INSAT-3DR satellite, ML algorithms explained |
| **About Us** | `/about us/about.html` | Team and mentor profiles |

---

## 👥 Team — IIIT Bhopal

| Name | Role |
|---|---|
| **Salil Kushwah** | Machine Learning Specialist |
| **Kapil Meena** | Web Development Specialist |
| **Yugant Sidar** | Web Development Specialist |
| **Priyanshu Verma** | AI & Machine Learning Specialist |
| **Tushar Pandey** | DSA & Algorithms Specialist |
| **Anjana Prajapati** | Presentation |
| **Yatendra Sahu** | Professor & Project Mentor |

---

## 🗺️ Roadmap

- [ ] Integrate live IoT sensor API (replace `rnnn.txt` with real WebSocket/REST feed)
- [ ] Add SMS/email alert system when flood probability exceeds threshold
- [ ] Integrate ML model predictions via backend API
- [ ] Add historical chart visualization for sensor trends
- [ ] Deploy to GitHub Pages / Netlify

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'feat: add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Built for <strong>Smart India Hackathon 2024</strong> by Team Pralaya Sentinels · IIIT Bhopal<br><br>
  Made with ♥ by <a href="https://github.com/Exohubb">Exohubb</a>
</div>
