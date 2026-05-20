<p align="center">
  <img src="https://img.shields.io/badge/NeuralCanvas-v1.0.0-7c3aed?style=for-the-badge&logo=palette&logoColor=white" alt="version"/>
  <img src="https://img.shields.io/badge/AI_Powered-MiMo-06b6d4?style=for-the-badge&logo=openai&logoColor=white" alt="ai"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="license"/>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%2F%20CSS%20%2F%20JS-f59e0b?style=for-the-badge&logo=javascript&logoColor=white" alt="stack"/>
</p>

<h1 align="center">🎨 NeuralCanvas</h1>

<p align="center">
  <strong>AI-Powered Design System Generator</strong>
</p>

<p align="center">
  <em>Transform brand descriptions into production-ready design systems using AI.<br/>
  Generate color palettes, typography scales, spacing tokens, and live component previews in seconds.</em>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Smart Color Palettes** | AI generates harmonious 11-shade palettes with WCAG AA contrast compliance |
| 🔤 **Typography Scales** | Mathematically precise type scales with curated Google Fonts pairings |
| 📐 **Spacing & Radius** | Consistent 4px grid-based spacing and contextual border radius tokens |
| 🧩 **Live Component Preview** | See design tokens applied to buttons, cards, inputs, and badges in real-time |
| 📦 **Multi-Format Export** | Download as CSS Custom Properties, JSON Design Tokens, or Tailwind Config |
| 🤖 **MiMo AI Engine** | Powered by Xiaomi MiMo's reasoning model for intelligent design decisions |
| 🎯 **Brand Psychology** | AI reasons about color theory, accessibility, and brand identity |
| ⚡ **Instant Demo Mode** | Try with built-in presets — no API key required |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                  NeuralCanvas App                    │
│              (Single Page Application)               │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  Brand    │  │  AI Engine   │  │   Renderer    │  │
│  │  Input    │──▶│  (MiMo API)  │──▶│  (Live View)  │  │
│  │  Form     │  │  + Demo Mode │  │  + Export     │  │
│  └──────────┘  └──────────────┘  └───────────────┘  │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │              Landing Page                     │   │
│  │  Hero · Features · Steps · Generator         │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
└─────────────────────────────────────────────────────┘
         │                              │
         ▼                              ▼
  ┌─────────────┐              ┌──────────────┐
  │  MiMo API   │              │   Export      │
  │  /OpenAI    │              │  CSS · JSON   │
  │  Compatible │              │  Tailwind     │
  └─────────────┘              └──────────────┘
```

### Core Logic Flow

1. **Brand Input** → User provides brand name, industry, mood keywords, and base color
2. **AI Reasoning** → MiMo model analyzes inputs using chain-of-thought reasoning about:
   - Color theory (complementary, analogous, triadic harmonies)
   - WCAG AA accessibility contrast ratios
   - Brand psychology and industry conventions
   - Typography pairing compatibility
3. **Token Generation** → Structured design tokens are generated:
   - 4 color groups × 11 shades + 3 semantic colors
   - 7-level typography scale with font pairings
   - 8-step spacing system (4px grid)
   - 6-level border radius + 5 shadow definitions
4. **Live Rendering** → Tokens are applied to real UI components
5. **Export** → Download in CSS, JSON, or Tailwind format

## 🚀 Quick Start

### Option 1: Open Directly
```bash
# Clone the repository
git clone https://github.com/JamilKanil/NeuralCanvas.git
cd NeuralCanvas

# Open in browser (no build step required!)
open index.html
# or on Windows:
start index.html
```

### Option 2: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then visit http://localhost:8000
```

### Option 3: With AI (MiMo API)
1. Get your API key from [Xiaomi MiMo](https://mimo.xiaomi.com)
2. Click "API Configuration" in the generator
3. Select "Xiaomi MiMo" as provider
4. Enter your API key
5. Generate!

## 🎯 Demo Mode

NeuralCanvas includes 3 built-in presets that work without any API key:

| Preset | Brand | Style | Base Color |
|--------|-------|-------|------------|
| **TechStartup** | NovaTech | Modern, Futuristic, Bold | `#7c3aed` (Purple) |
| **EcoFriendly** | GreenLeaf | Organic, Warm, Trustworthy | `#059669` (Green) |
| **LuxuryBrand** | Aurélia | Elegant, Minimal, Bold | `#d97706` (Gold) |

The demo mode also includes an **algorithmic color generator** that creates harmonious palettes from any base color using HSL color space transformations.

## 📦 Export Formats

### CSS Custom Properties
```css
:root {
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --space-md: 16px;
  /* ... */
}
```

### JSON Design Tokens
```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "brand": "NovaTech",
  "tokens": { "colors": { ... }, "typography": { ... } }
}
```

### Tailwind Config
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { 500: '#8b5cf6', 600: '#7c3aed', ... },
      },
    },
  },
};
```

## ⚙️ AI Provider Configuration

NeuralCanvas supports multiple AI providers:

| Provider | Model | Base URL |
|----------|-------|----------|
| **Xiaomi MiMo** | MiMo-v2.5-Reasoning | `https://api.xiaomimimo.com/v1` |
| **OpenAI** | gpt-4o-mini | `https://api.openai.com/v1` |
| **Custom** | Any | Your endpoint URL |

## 📁 Project Structure

```
NeuralCanvas/
├── index.html          # Single-page application
├── styles.css          # Design system & component styles
├── app.js              # Core logic, AI engine, renderer
├── README.md           # Documentation
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 Semantic |
| Styling | Vanilla CSS (Custom Properties, Glassmorphism, Animations) |
| Logic | Vanilla JavaScript (ES6+, IIFE module pattern) |
| Fonts | Google Fonts (Space Grotesk + Inter + JetBrains Mono) |
| AI | MiMo / OpenAI REST API |
| Deploy | GitHub Pages |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ for the AI-driven design community
  <br>
  <em>Powered by <a href="https://mimo.xiaomi.com">Xiaomi MiMo</a></em>
</p>
