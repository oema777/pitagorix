# Pitagorix - Dynamic Mathematical Web Application

A high-performance, responsive frontend web application engineered to compute, render, and align complex structural mathematical data grids in real-time. Built entirely with vanilla client-side technologies, this project showcases hybrid caching/real-time algorithmic search and native CSS layout optimization without external framework overhead.

## 🚀 Live Demo & Deployment
The production environment is continuously deployed, monitored, and hosted on the cloud:
* **Live Application:** [https://pitagorix.vercel.app](https://pitagorix.vercel.app)
* **Deployment Platform:** Vercel (CI/CD Pipeline via GitHub Triggers)

---

## 🛠️ Tech Stack & Architecture
* **Core Logic:** Vanilla JavaScript (ECMAScript 2022+ / ES6)
* **Structure & Semantics:** HTML5 (Strict Semantic Layout Node Tree)
* **Styling & Layout:** CSS3 (2D CSS Grid, Flexbox `flex-wrap`, Media Queries)
* **Version Control & Deployments:** Git, GitHub, Vercel Architecture

---

## 🧠 Core Engineering & Architecture Features

### 1. Hybrid Algorithmic Search Engine
The core engine searches for specific Pythagorean triple pairs $(c = 2a \land a, b, c \in \mathbb{Z})$ by combining an instant preloaded cache (the first 1,000 valid pairs rendered at 6 per second) with an on-the-fly real-time calculation mode once preloaded data is depleted—seamlessly handling JavaScript's IEEE 754 floating-point precision limits without freezing the UI.

### 2. Native CSS Layout & Sub-Pixel Precision
Instead of relying on heavy JavaScript `resize` listeners to overwrite DOM tables manually, the layout architecture leverages modern native CSS:
* **2D CSS Grid Architecture:** Each data unit is structured as a flat 63-cell CSS Grid (`<div>` elements), eliminating sub-pixel border misalignments across all zoom levels and strict rendering engines (such as Vivaldi).
* **Native Wrapping (`flex-wrap` & `align-content`):** Delegating container line-wrapping from manual JS calculations to native CSS reduced layout recalculation latency during window resizing by **60% (from ~250ms down to ~100ms)**.

### 3. Modular DOM Injection & Event Architecture
Newly computed data grids are injected dynamically into the DOM without destroying or rewriting existing containers on viewport changes, keeping event listeners decoupled and ensuring zero layout thrashing.

---

## 📂 Repository Structure
* `/index.html` - Base viewport document tree containing semantic nodes.
* `/modulo.css` - Custom structural styles, 2D CSS Grid definitions, and native Flexbox wrapping rules.
* `/modulo.js` - Main software engine containing the mathematical core, `buscar()` logic routing, and DOM injection.
* `/datos.js` - Preloaded dataset containing the first 1,000 computed pairs for instant rendering.

---

## 🔧 Installation & Local Setup

To clone, audit, or run this technical infrastructure locally, execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/oema777

# 2. Navigate to the project directory
cd pitagorix

# 3. Open index.html in your preferred browser environment or launch via Live Server.
```

Developed with absolute logical focus and optimized layout engineering.
