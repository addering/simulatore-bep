<![CDATA[<div align="center">

# 📊 Logistics Simulator — Break-Even Point

**An interactive decision-support tool for comparing road transport vs. intermodal logistics costs.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-118DFF?style=for-the-badge)](https://addering.github.io/simulatore-bep/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F2C811?style=for-the-badge)](LICENSE)
[![Made with](https://img.shields.io/badge/Made_with-Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

<br>

<img src="https://img.shields.io/badge/Status-Active_Development-brightgreen?style=flat-square" alt="Status">
<img src="https://img.shields.io/badge/Version-1.2-blue?style=flat-square" alt="Version">
<img src="https://img.shields.io/badge/Responsive-Mobile_Ready-purple?style=flat-square" alt="Responsive">

</div>

---

## 👋 About Me

Hi, I'm **Luca R.** — an IT Systems Specialist with 30+ years of self-taught experience in IT, networking, and multi-OS system administration.

I'm currently **requalifying into the logistics and supply chain industry** through the *GOL — Garanzia di Occupabilità dei Lavoratori* program (Logistics 4.0 track), and I'm channeling my technical background into building **data-driven tools** that solve real-world logistics problems.

This repository is part of a growing collection of **open-source simulators and utilities** designed for logistics professionals, students, and anyone curious about how modern supply chains work behind the scenes.

> *"I believe the best way to learn something is to build tools around it."*

---

## 🎯 What This Tool Does

The **Break-Even Point Simulator** helps logistics operators determine the **distance threshold** at which **intermodal transport** (rail + road) becomes more cost-effective than **full road transport** (truck-only).

### The Logic

The BEP is calculated using the formula:

```
x = Fixed Costs (Intermodal) / (Cost per Km Truck − Cost per Km Train)
```

Where:
- **Fixed Costs** = Terminal handling, loading/unloading, and setup costs for intermodal transport
- **Cost per Km (Truck)** = Variable cost of road-only transport
- **Cost per Km (Train)** = Variable cost of the rail leg in intermodal transport

### Key Insight
Beyond the break-even distance, every additional kilometer makes intermodal transport increasingly cheaper than road-only — a critical factor for long-haul supply chain planning.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎛️ **Real-time Sliders** | Adjust fixed costs, truck cost/km, and train cost/km with instant visual feedback |
| 📈 **Dynamic Chart** | Live-updating cost comparison chart with gradient fills and BEP marker |
| 📍 **BEP Calculator** | Automatically calculates the break-even distance and cost at intersection |
| 🌙 **Premium Dark UI** | Glassmorphism design with animated backgrounds and micro-interactions |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile devices |
| ⚡ **Zero Dependencies** | Pure HTML/CSS/JS — no build tools, no frameworks, just open and run |

---

## 🖥️ Live Demo

**👉 [Launch the Simulator](https://addering.github.io/simulatore-bep/)**

No installation required. Works in any modern browser.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, glassmorphism, keyframe animations, responsive grid
- **JavaScript** — Vanilla ES6, real-time DOM manipulation
- **[Chart.js](https://www.chartjs.org/)** — Interactive data visualization
- **[Inter Font](https://rsms.me/inter/)** — Premium typography via Google Fonts

---

## 🚀 Getting Started

Clone and open — it's that simple:

```bash
git clone https://github.com/addering/simulatore-bep.git
cd simulatore-bep
open index.html
```

Or just download the `index.html` file and double-click it. No server needed.

---

## 🗺️ Roadmap — Upcoming Logistics Tools

This is just the beginning. I'm actively developing more tools for the logistics ecosystem:

| Tool | Status | Description |
|------|--------|-------------|
| 📊 Break-Even Simulator | ✅ Released | Compare road vs. intermodal transport costs |
| 📦 Warehouse Layout Optimizer | 🔧 In Progress | Optimize storage allocation and picking routes |
| 🚛 Fleet Cost Calculator | 📋 Planned | TCO analysis for fleet management decisions |
| 🌍 Carbon Footprint Estimator | 📋 Planned | CO₂ emissions comparison across transport modes |
| 📈 KPI Dashboard | 📋 Planned | Real-time logistics performance metrics |
| 🔄 Inventory Turnover Analyzer | 💡 Idea | Stock rotation and reorder point simulation |

> 💬 **Have an idea for a logistics tool?** Open an [issue](https://github.com/addering/simulatore-bep/issues) — I'd love to hear your suggestions!

---

## 📚 Learning Context

This project is part of my training in the **GOL — Logistics 4.0** program, covering:

- 🏭 Supply Chain Management & Optimization
- 🚂 Intermodal Transport Systems
- 📊 Data Analysis with Power BI
- 📦 Warehouse Management Systems (WMS)
- 🔄 Lean Logistics & Continuous Improvement
- 🌐 Digital Transformation in Transport & Logistics

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome! Whether you're a logistics professional, a student, or a developer:

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### 🔗 Connect

[![GitHub](https://img.shields.io/badge/GitHub-addering-181717?style=for-the-badge&logo=github)](https://github.com/addering)

---

**Built with ❤️ and a passion for logistics**

*By Luca R. — Transitioning 30+ years of IT expertise into data-driven supply chain solutions.*

</div>
]]>
