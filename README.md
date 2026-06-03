<div align="center">

# 🚀 Logistics 4.0 — Interactive Toolkit

**A growing collection of open-source, browser-based simulators for logistics, supply chain & trade compliance.**

[![BEP Simulator](https://img.shields.io/badge/🚀_Tool_1-BEP_Simulator-118DFF?style=for-the-badge)](https://addering.github.io/simulatore-bep/)
[![Customs Calculator](https://img.shields.io/badge/🛃_Tool_2-Customs_Calculator-F2C811?style=for-the-badge)](https://addering.github.io/simulatore-bep/dogana.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)](LICENSE)

<br>

<img src="https://img.shields.io/badge/Status-Active_Development-brightgreen?style=flat-square" alt="Status">
<img src="https://img.shields.io/badge/Version-2.0-blue?style=flat-square" alt="Version">
<img src="https://img.shields.io/badge/Responsive-Mobile_Ready-purple?style=flat-square" alt="Responsive">
<img src="https://img.shields.io/badge/Zero_Backend-100%25_Client_Side-orange?style=flat-square" alt="Client Side">

</div>

---

## 👋 About Me

Hi, I'm **Luca R.** — an IT Systems Specialist with **30+ years** of hands-on, self-taught experience in IT infrastructure, networking, multi-OS administration, and system integration.

After three decades in the tech world, I decided to take on a new challenge: I'm currently **requalifying into the logistics and supply chain industry** through the **GOL — Garanzia di Occupabilità dei Lavoratori** program (Logistics 4.0 track). The goal? Merging my deep technical roots with the operational world of modern logistics.

This repository is my workshop — a place where I build **practical, data-driven tools** that solve real problems in logistics, transport economics, and international trade. Every tool here is something I've designed, coded, and tested myself, born out of what I'm learning in the classroom and applied with the engineering mindset I've carried for decades.

> *"I believe the best way to truly understand something is to build a tool around it. If you can simulate it, you can master it."*

---

## 📦 What's Inside This Repository

This repo currently contains **two fully functional tools**, both running as standalone HTML5 applications — no server, no backend, no installation needed:

| # | Tool | Live Link | Description |
|---|------|-----------|-------------|
| 1 | 📊 **Break-Even Point Simulator** | [**Launch →**](https://addering.github.io/simulatore-bep/) | Compare road vs. intermodal transport costs and find the exact distance where intermodal becomes cheaper |
| 2 | 🛃 **Customs Duties Calculator** | [**Launch →**](https://addering.github.io/simulatore-bep/dogana.html) | Simulate the full cascade of Extra-EU import duties (CIF → Duty → Progressive VAT → Landed Cost) with TARIC code verification |

Both tools share the same **dark-mode glassmorphism design language** and are fully responsive across desktop, tablet, and mobile.

---

## 📊 Tool 1 — Break-Even Point Simulator

### What It Does

The **BEP Simulator** helps logistics operators determine the **distance threshold** at which **intermodal transport** (rail + road) becomes more cost-effective than **full road transport** (truck-only).

### The Formula

```
BEP Distance = Fixed Costs (Intermodal) / (Variable Cost per Km Truck − Variable Cost per Km Train)
```

- **Fixed Costs** → Terminal handling, loading/unloading, equipment setup
- **Cost/Km (Truck)** → Fuel, tolls, driver costs for road-only transport
- **Cost/Km (Train)** → Rail leg variable costs in intermodal chains

### Key Insight

Beyond the break-even distance, every additional kilometer makes intermodal transport **increasingly cheaper** than road-only — a critical factor for long-haul supply chain planning and modal shift decisions.

### Features

| Feature | Description |
|---------|-------------|
| 🎛️ **Real-time Sliders** | Adjust fixed costs, truck cost/km, and train cost/km with instant visual feedback |
| 📈 **Dynamic Chart** | Live-updating cost comparison chart with gradient fills and intersection marker |
| 📍 **BEP Calculator** | Automatically calculates the break-even distance and cost at the intersection point |
| ⚡ **Zero Dependencies** | Pure HTML/CSS/JS + Chart.js — no build tools, no frameworks |

### Tech Stack

`HTML5` · `CSS3 (Custom Properties, Glassmorphism, Keyframe Animations)` · `JavaScript ES6` · `Chart.js` · `Inter Font (Google Fonts)`

---

## 🛃 Tool 2 — Customs Duties Calculator (Import 4.0)

### What It Does

The **Customs Duties Calculator** simulates the full **cascading tax mechanism** that applies to goods imported into the EU from third countries (Extra-EU imports). This is the exact same calculation that customs brokers perform when filing an import declaration.

### The Cascade Logic (6 Steps)

This is the core concept that most people get wrong about import taxes — the VAT is **not** calculated on the product price alone. It's calculated on a **progressive tax base** that includes the duty itself:

```
Step 1:  CIF Value     = Product Price + Freight & Insurance
Step 2:  Customs Duty  = CIF Value × Duty Rate (%)
Step 3:  VAT Tax Base  = CIF Value + Duty + EU Internal Costs    ← this is the "cascade"
Step 4:  Import VAT    = VAT Tax Base × VAT Rate (%)
Step 5:  Total Duties  = Customs Duty + Import VAT
Step 6:  Landed Cost   = Product + Freight + EU Costs + Total Duties
```

### Why This Matters

The cascade mechanism means that **you're paying tax on top of tax** — the VAT is calculated on an amount that already includes the customs duty. This is why import costs are always higher than people expect, and why this tool includes an educational **Audit Trail** that explains every step of the math.

### Features

| Feature | Description |
|---------|-------------|
| 🎛️ **6 Input Parameters** | Product value, freight & insurance, TARIC code, duty rate, EU costs, VAT rate |
| 📋 **Quick Product Selector** | Dropdown with 10 common product categories — auto-fills TARIC code and duty rate instantly |
| 🔍 **TARIC Code Verification** | Attempts real-time lookup via EU Commission API, falls back to curated local database (24+ codes) |
| 🏛️ **4 KPI Cards** | Total duties, customs duty, import VAT, and landed cost — all updating in real-time |
| 📜 **Audit Trail Log** | Step-by-step educational breakdown of the cascade calculation with fiscal insight |
| 🔘 **IVA Quick Buttons** | One-click selection for Italy's three VAT rates: 4%, 10%, 22% |

### TARIC Integration Architecture

The TARIC lookup uses a **two-tier strategy** to work reliably in a client-side-only environment:

```
User enters 10-digit code
        │
        ▼
┌─────────────────────────┐
│  Tier 1: EU API Call    │  → CORS proxy → ec.europa.eu/taxation_customs/dds2/taric
│  (Real-time lookup)     │  → Parse HTML response for Erga Omnes rate
└───────────┬─────────────┘
            │ fails (CORS / timeout / parsing)
            ▼
┌─────────────────────────┐
│  Tier 2: Local Database │  → 24+ curated TARIC codes with verified duty rates
│  (Instant fallback)     │  → Source: EU Access2Markets official data
└───────────┬─────────────┘
            │ not found
            ▼
┌─────────────────────────┐
│  Manual Override        │  → User adjusts the duty slider manually
│  (Always available)     │
└─────────────────────────┘
```

### Tech Stack

`HTML5` · `CSS3 (Custom Properties, Glassmorphism, Keyframe Animations)` · `JavaScript ES6 (async/await, Fetch API)` · `Inter Font (Google Fonts)`

---

## 🎨 Design Philosophy

Both tools follow the same design system I built from scratch:

- 🌙 **Dark Mode** — Deep navy/charcoal backgrounds for reduced eye strain and a professional feel
- 💎 **Glassmorphism** — Frosted-glass cards with `backdrop-filter: blur()` and subtle borders
- 🎨 **Brand Palette** — Electric Blue (`#118DFF`) as primary, Neon Gold (`#F2C811`) as accent, Orange (`#FF8C42`) for highlights
- ✨ **Micro-animations** — Entry animations, hover transitions, value pulse effects, animated gradient backgrounds
- 📐 **Grid Overlay** — A subtle millimeter grid pattern in the background for a technical, engineering feel
- 📱 **Fully Responsive** — Fluid grid layouts that adapt from 4K monitors down to iPhone SE screens

> I wanted these tools to look and feel like something you'd see in a professional logistics dashboard — not a college homework assignment.

---

## 🚀 Getting Started

### Option 1: Use Online (Recommended)

Just click and go — nothing to install:

- 📊 **BEP Simulator →** [https://addering.github.io/simulatore-bep/](https://addering.github.io/simulatore-bep/)
- 🛃 **Customs Calculator →** [https://addering.github.io/simulatore-bep/dogana.html](https://addering.github.io/simulatore-bep/dogana.html)

### Option 2: Run Locally

```bash
# Clone the repository
git clone https://github.com/addering/simulatore-bep.git

# Open either tool in your browser
cd simulatore-bep
open index.html        # BEP Simulator
open dogana.html       # Customs Calculator
```

No server, no `npm install`, no build step. Just HTML files that run in any modern browser.

---

## 📁 Project Structure

```
simulatore-bep/
├── index.html          # 📊 Break-Even Point Simulator (Chart.js powered)
├── dogana.html         # 🛃 Customs Duties Calculator (TARIC + cascade engine)
├── README.md           # 📖 You are here
└── LICENSE             # 📄 MIT License
```

Each `.html` file is **completely self-contained** — all CSS and JavaScript are embedded inline. This is a deliberate architectural choice: it makes the tools trivially portable, easy to fork, and instantly deployable on GitHub Pages without any build pipeline.

---

## 🗺️ Roadmap — What's Next

I'm actively expanding this toolkit. Here's what's in the pipeline:

| Tool | Status | Description |
|------|--------|-------------|
| 📊 Break-Even Simulator | ✅ **Released** | Road vs. intermodal cost comparison |
| 🛃 Customs Duties Calculator | ✅ **Released** | Extra-EU import duty cascade simulation |
| 📦 Warehouse Layout Optimizer | 🔧 In Progress | Storage allocation and picking route optimization |
| 🚛 Fleet TCO Calculator | 📋 Planned | Total Cost of Ownership analysis for fleet decisions |
| 🌍 Carbon Footprint Estimator | 📋 Planned | CO₂ emissions comparison across transport modes |
| 📈 Logistics KPI Dashboard | 📋 Planned | Real-time performance metrics and benchmarking |
| 🔄 Inventory Turnover Analyzer | 💡 Idea | Stock rotation simulation and reorder point calculation |
| 🏗️ Incoterms® Visual Guide | 💡 Idea | Interactive risk/cost transfer diagram for all 11 Incoterms |

> 💬 **Have an idea for a logistics tool?** Open an [issue](https://github.com/addering/simulatore-bep/issues) — I genuinely want to hear what would be useful to you.

---

## 📚 Learning Context

These tools are built as part of my ongoing training in the **GOL — Logistics 4.0** program. The program covers:

| Area | Topics |
|------|--------|
| 🏭 Supply Chain | Management, optimization, demand forecasting |
| 🚂 Transport | Intermodal systems, route planning, modal shift analysis |
| 🛃 Trade Compliance | Customs procedures, TARIC codes, Incoterms®, duty calculation |
| 📊 Data Analysis | Power BI dashboards, KPIs, performance metrics |
| 📦 Warehousing | WMS systems, slotting, picking strategies |
| 🔄 Lean & Kaizen | Continuous improvement, waste elimination, 5S |
| 🌐 Industry 4.0 | IoT in logistics, digital twins, automation |

Every tool in this repository is my way of turning classroom theory into **practical, working software** that someone in the industry could actually use.

---

## 🛠️ How I Build These Tools

My workflow is straightforward:

1. **Study the concept** in class or from official sources (EU regulations, logistics textbooks, industry standards)
2. **Define the math** — identify the formulas, the variables, and how they interact
3. **Design the UI** in my head first — I sketch the layout and decide what the user needs to see vs. what should be calculated behind the scenes
4. **Code it** as a single self-contained HTML file using vanilla technologies (HTML5 + CSS3 + JS ES6)
5. **Test it** with real-world scenarios and edge cases
6. **Deploy** to GitHub Pages — push and it's live

I intentionally keep the stack simple. No React, no Webpack, no TypeScript. Just the web platform as it was meant to be used. These tools should be readable, forkable, and hackable by anyone with basic web development knowledge.

---

## 🤝 Contributing

Contributions, feedback, and suggestions are genuinely welcome. Whether you're a logistics professional who spots an error in my duty rates, a student who wants to add a new tool, or a developer who wants to improve the code:

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/your-idea`)
3. **Commit** your changes (`git commit -m 'Add your feature'`)
4. **Push** to the branch (`git push origin feature/your-idea`)
5. **Open** a Pull Request

Even just opening an issue to say *"hey, this number is wrong"* or *"it would be cool if..."* is valuable to me.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Use it, fork it, learn from it, improve it.

---

<div align="center">

### 🔗 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-addering-181717?style=for-the-badge&logo=github)](https://github.com/addering)

---

**Built with ❤️, curiosity, and 30+ years of engineering instinct**

*By Luca R. — Channeling a lifetime of IT expertise into the world of Logistics 4.0.*

*Milan, Italy • 2025–2026*

</div>
