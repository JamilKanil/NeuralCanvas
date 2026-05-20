/* ═══════════════════════════════════════════════════════
   NeuralCanvas — Application Logic
   AI-Powered Design System Generator
   ═══════════════════════════════════════════════════════ */

;(function () {
  'use strict';

  // ═══ Preset Design Systems (Demo Mode) ═══
  const PRESETS = {
    tech: {
      brandName: 'NovaTech',
      industry: 'technology',
      moods: ['modern', 'futuristic', 'bold'],
      baseColor: '#7c3aed',
      designSystem: {
        colors: {
          primary:   { 50:'#f5f3ff',100:'#ede9fe',200:'#ddd6fe',300:'#c4b5fd',400:'#a78bfa',500:'#8b5cf6',600:'#7c3aed',700:'#6d28d9',800:'#5b21b6',900:'#4c1d95',950:'#2e1065' },
          secondary: { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b',950:'#022c22' },
          accent:    { 50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',300:'#93c5fd',400:'#60a5fa',500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',800:'#1e40af',900:'#1e3a8a',950:'#172554' },
          neutral:   { 50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',400:'#94a3b8',500:'#64748b',600:'#475569',700:'#334155',800:'#1e293b',900:'#0f172a',950:'#020617' },
          success:   { base:'#10b981', light:'#d1fae5', dark:'#065f46' },
          warning:   { base:'#f59e0b', light:'#fef3c7', dark:'#92400e' },
          error:     { base:'#ef4444', light:'#fee2e2', dark:'#991b1b' },
        },
        typography: {
          headingFont: 'Space Grotesk',
          bodyFont: 'Inter',
          monoFont: 'JetBrains Mono',
          scale: {
            h1: { size: '3.5rem',  weight: 700, lineHeight: 1.1, letterSpacing: '-0.04em' },
            h2: { size: '2.5rem',  weight: 700, lineHeight: 1.15, letterSpacing: '-0.03em' },
            h3: { size: '1.75rem', weight: 600, lineHeight: 1.2, letterSpacing: '-0.02em' },
            h4: { size: '1.25rem', weight: 600, lineHeight: 1.3, letterSpacing: '-0.01em' },
            body: { size: '1rem',  weight: 400, lineHeight: 1.6, letterSpacing: '0' },
            small: { size: '0.875rem', weight: 400, lineHeight: 1.5, letterSpacing: '0.01em' },
            caption: { size: '0.75rem', weight: 500, lineHeight: 1.4, letterSpacing: '0.05em' },
          }
        },
        spacing: { xs:4, sm:8, md:16, lg:24, xl:32, '2xl':48, '3xl':64, '4xl':96 },
        radius: { sm:'0.25rem', md:'0.5rem', lg:'0.75rem', xl:'1rem', '2xl':'1.5rem', full:'9999px' },
        shadows: {
          sm: '0 1px 2px rgba(0,0,0,0.05)',
          md: '0 4px 6px -1px rgba(0,0,0,0.1)',
          lg: '0 10px 15px -3px rgba(0,0,0,0.1)',
          xl: '0 20px 25px -5px rgba(0,0,0,0.1)',
          glow: '0 0 40px rgba(124,58,237,0.3)',
        }
      }
    },
    eco: {
      brandName: 'GreenLeaf',
      industry: 'sustainability',
      moods: ['organic', 'warm', 'trustworthy'],
      baseColor: '#059669',
      designSystem: {
        colors: {
          primary:   { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b',950:'#022c22' },
          secondary: { 50:'#fefce8',100:'#fef9c3',200:'#fef08a',300:'#fde047',400:'#facc15',500:'#eab308',600:'#ca8a04',700:'#a16207',800:'#854d0e',900:'#713f12',950:'#422006' },
          accent:    { 50:'#fff7ed',100:'#ffedd5',200:'#fed7aa',300:'#fdba74',400:'#fb923c',500:'#f97316',600:'#ea580c',700:'#c2410c',800:'#9a3412',900:'#7c2d12',950:'#431407' },
          neutral:   { 50:'#fafaf9',100:'#f5f5f4',200:'#e7e5e4',300:'#d6d3d1',400:'#a8a29e',500:'#78716c',600:'#57534e',700:'#44403c',800:'#292524',900:'#1c1917',950:'#0c0a09' },
          success:   { base:'#22c55e', light:'#dcfce7', dark:'#166534' },
          warning:   { base:'#f59e0b', light:'#fef3c7', dark:'#92400e' },
          error:     { base:'#ef4444', light:'#fee2e2', dark:'#991b1b' },
        },
        typography: {
          headingFont: 'DM Serif Display',
          bodyFont: 'Inter',
          monoFont: 'JetBrains Mono',
          scale: {
            h1: { size: '3.25rem', weight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' },
            h2: { size: '2.25rem', weight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
            h3: { size: '1.625rem', weight: 600, lineHeight: 1.25, letterSpacing: '-0.01em' },
            h4: { size: '1.25rem', weight: 600, lineHeight: 1.35, letterSpacing: '0' },
            body: { size: '1rem', weight: 400, lineHeight: 1.7, letterSpacing: '0' },
            small: { size: '0.875rem', weight: 400, lineHeight: 1.6, letterSpacing: '0.01em' },
            caption: { size: '0.75rem', weight: 500, lineHeight: 1.5, letterSpacing: '0.04em' },
          }
        },
        spacing: { xs:4, sm:8, md:16, lg:24, xl:32, '2xl':48, '3xl':64, '4xl':96 },
        radius: { sm:'0.375rem', md:'0.625rem', lg:'1rem', xl:'1.25rem', '2xl':'1.75rem', full:'9999px' },
        shadows: {
          sm: '0 1px 3px rgba(0,0,0,0.06)',
          md: '0 4px 8px -1px rgba(0,0,0,0.08)',
          lg: '0 12px 20px -4px rgba(0,0,0,0.1)',
          xl: '0 24px 32px -8px rgba(0,0,0,0.12)',
          glow: '0 0 40px rgba(5,150,105,0.25)',
        }
      }
    },
    luxury: {
      brandName: 'Aurélia',
      industry: 'luxury',
      moods: ['elegant', 'minimal', 'bold'],
      baseColor: '#d97706',
      designSystem: {
        colors: {
          primary:   { 50:'#fffbeb',100:'#fef3c7',200:'#fde68a',300:'#fcd34d',400:'#fbbf24',500:'#f59e0b',600:'#d97706',700:'#b45309',800:'#92400e',900:'#78350f',950:'#451a03' },
          secondary: { 50:'#faf5ff',100:'#f3e8ff',200:'#e9d5ff',300:'#d8b4fe',400:'#c084fc',500:'#a855f7',600:'#9333ea',700:'#7e22ce',800:'#6b21a8',900:'#581c87',950:'#3b0764' },
          accent:    { 50:'#fdf2f8',100:'#fce7f3',200:'#fbcfe8',300:'#f9a8d4',400:'#f472b6',500:'#ec4899',600:'#db2777',700:'#be185d',800:'#9d174d',900:'#831843',950:'#500724' },
          neutral:   { 50:'#fafafa',100:'#f5f5f5',200:'#e5e5e5',300:'#d4d4d4',400:'#a3a3a3',500:'#737373',600:'#525252',700:'#404040',800:'#262626',900:'#171717',950:'#0a0a0a' },
          success:   { base:'#10b981', light:'#d1fae5', dark:'#065f46' },
          warning:   { base:'#f59e0b', light:'#fef3c7', dark:'#92400e' },
          error:     { base:'#ef4444', light:'#fee2e2', dark:'#991b1b' },
        },
        typography: {
          headingFont: 'Playfair Display',
          bodyFont: 'Inter',
          monoFont: 'JetBrains Mono',
          scale: {
            h1: { size: '4rem', weight: 700, lineHeight: 1.05, letterSpacing: '-0.04em' },
            h2: { size: '2.75rem', weight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' },
            h3: { size: '1.875rem', weight: 600, lineHeight: 1.2, letterSpacing: '-0.02em' },
            h4: { size: '1.375rem', weight: 600, lineHeight: 1.3, letterSpacing: '-0.01em' },
            body: { size: '1rem', weight: 400, lineHeight: 1.65, letterSpacing: '0.01em' },
            small: { size: '0.875rem', weight: 400, lineHeight: 1.55, letterSpacing: '0.02em' },
            caption: { size: '0.75rem', weight: 500, lineHeight: 1.4, letterSpacing: '0.08em' },
          }
        },
        spacing: { xs:4, sm:8, md:16, lg:24, xl:32, '2xl':48, '3xl':64, '4xl':96 },
        radius: { sm:'0.125rem', md:'0.25rem', lg:'0.375rem', xl:'0.5rem', '2xl':'0.75rem', full:'9999px' },
        shadows: {
          sm: '0 1px 2px rgba(0,0,0,0.04)',
          md: '0 4px 8px -2px rgba(0,0,0,0.06)',
          lg: '0 12px 24px -4px rgba(0,0,0,0.08)',
          xl: '0 24px 48px -8px rgba(0,0,0,0.1)',
          glow: '0 0 40px rgba(217,119,6,0.2)',
        }
      }
    }
  };

  // ═══ AI Prompt Template ═══
  const SYSTEM_PROMPT = `You are a senior design system architect. Given brand parameters, generate a complete, production-ready design system in JSON format.

Your response must be ONLY valid JSON with this exact structure (no markdown, no explanations):
{
  "colors": {
    "primary": { "50":"hex", "100":"hex", "200":"hex", "300":"hex", "400":"hex", "500":"hex", "600":"hex", "700":"hex", "800":"hex", "900":"hex", "950":"hex" },
    "secondary": { "50":"hex", ... "950":"hex" },
    "accent": { "50":"hex", ... "950":"hex" },
    "neutral": { "50":"hex", ... "950":"hex" },
    "success": { "base":"hex", "light":"hex", "dark":"hex" },
    "warning": { "base":"hex", "light":"hex", "dark":"hex" },
    "error": { "base":"hex", "light":"hex", "dark":"hex" }
  },
  "typography": {
    "headingFont": "Google Font name",
    "bodyFont": "Google Font name",
    "monoFont": "JetBrains Mono",
    "scale": {
      "h1": { "size":"rem value", "weight":number, "lineHeight":number, "letterSpacing":"em value" },
      "h2": { ... }, "h3": { ... }, "h4": { ... },
      "body": { ... }, "small": { ... }, "caption": { ... }
    }
  },
  "spacing": { "xs":4, "sm":8, "md":16, "lg":24, "xl":32, "2xl":48, "3xl":64, "4xl":96 },
  "radius": { "sm":"rem", "md":"rem", "lg":"rem", "xl":"rem", "2xl":"rem", "full":"9999px" },
  "shadows": { "sm":"value", "md":"value", "lg":"value", "xl":"value", "glow":"value with brand color" }
}

Rules:
- All color shades must be valid hex codes
- Ensure WCAG AA contrast between text colors and backgrounds
- Primary shades should be derived from the base color
- Secondary and accent should be harmonious (analogous or complementary)
- Typography fonts must be available on Google Fonts
- The glow shadow should use the primary-600 color with 0.2 alpha`;

  function buildUserPrompt(brand, industry, moods, baseColor) {
    return `Generate a design system for:
- Brand: "${brand}"
- Industry: ${industry}
- Mood: ${moods.join(', ')}
- Base Color: ${baseColor}

Create a cohesive, production-ready design system that reflects the brand identity. Use the base color as the foundation for the primary palette.`;
  }

  // ═══ State ═══
  let currentDesignSystem = null;
  let selectedMoods = [];

  // ═══ DOM References ═══
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ═══ Initialization ═══
  function init() {
    fillHeroPalette();
    setupScrollReveal();
    setupCountUp();
    setupMoodTags();
    setupPresets();
    setupColorPicker();
    setupApiToggle();
    setupFormSubmit();
    setupTabs();
    setupCopyButtons();
    setupDownloadButton();
    setupCursorGlow();
    setupParticles();
  }

  // ── Hero Palette Decoration ──
  function fillHeroPalette() {
    const container = $('#hero-palette');
    if (!container) return;
    const colors = ['#7c3aed','#a855f7','#c084fc','#06b6d4','#34d399','#fbbf24',
                     '#6d28d9','#8b5cf6','#ddd6fe','#0891b2','#10b981','#f59e0b'];
    container.innerHTML = colors.map(c =>
      `<div class="palette-swatch" style="background:${c};border-radius:var(--radius-md)"></div>`
    ).join('');
  }

  // ── Scroll Reveal Animation ──
  function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    $$('.reveal').forEach(el => observer.observe(el));
  }

  // ── Count-Up Animation for Stats ──
  function setupCountUp() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          if (!target) return;
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    $$('.stat-value[data-count]').forEach(el => observer.observe(el));
  }

  function animateCount(el, target) {
    const duration = 2000;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ── Mood Tags ──
  function setupMoodTags() {
    $$('.mood-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.preventDefault();
        const mood = tag.dataset.mood;
        if (selectedMoods.includes(mood)) {
          selectedMoods = selectedMoods.filter(m => m !== mood);
          tag.classList.remove('active');
        } else {
          if (selectedMoods.length < 3) {
            selectedMoods.push(mood);
            tag.classList.add('active');
          }
        }
      });
    });
  }

  // ── Presets ──
  function setupPresets() {
    $$('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const presetKey = btn.dataset.preset;
        const preset = PRESETS[presetKey];
        if (!preset) return;

        // Fill form
        $('#brand-name').value = preset.brandName;
        $('#industry').value = preset.industry;
        $('#base-color').value = preset.baseColor;
        $('#base-color-hex').value = preset.baseColor;

        // Reset moods
        selectedMoods = [];
        $$('.mood-tag').forEach(t => t.classList.remove('active'));

        // Set preset moods
        preset.moods.forEach(mood => {
          selectedMoods.push(mood);
          const tag = $(`.mood-tag[data-mood="${mood}"]`);
          if (tag) tag.classList.add('active');
        });

        // Generate immediately with preset data
        renderDesignSystem(preset.brandName, preset.moods, preset.designSystem);
      });
    });
  }

  // ── Color Picker Sync ──
  function setupColorPicker() {
    const picker = $('#base-color');
    const hex = $('#base-color-hex');

    picker.addEventListener('input', () => {
      hex.value = picker.value;
    });

    hex.addEventListener('input', () => {
      if (/^#[0-9a-fA-F]{6}$/.test(hex.value)) {
        picker.value = hex.value;
      }
    });
  }

  // ── API Toggle ──
  function setupApiToggle() {
    const toggle = $('#api-toggle');
    const fields = $('#api-fields');
    const providerSelect = $('#api-provider');
    const customUrlGroup = $('#custom-url-group');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      fields.classList.toggle('visible');
    });

    providerSelect.addEventListener('change', () => {
      customUrlGroup.style.display = providerSelect.value === 'custom' ? 'block' : 'none';
    });
  }

  // ── Form Submit ──
  function setupFormSubmit() {
    $('#brand-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const brandName = $('#brand-name').value.trim();
      const industry = $('#industry').value;
      const baseColor = $('#base-color').value;
      const provider = $('#api-provider').value;
      const apiKey = $('#api-key').value.trim();

      if (!brandName) {
        showToast('Please enter a brand name');
        return;
      }
      if (selectedMoods.length === 0) {
        showToast('Please select at least one mood keyword');
        return;
      }

      const btn = $('#btn-generate');
      btn.classList.add('loading');
      btn.disabled = true;

      try {
        let ds;
        if (provider === 'demo' || !apiKey) {
          // Demo mode: generate algorithmically
          ds = generateDemoDesignSystem(brandName, industry, selectedMoods, baseColor);
          // Small delay for UX
          await sleep(1500);
        } else {
          // Real AI call
          ds = await callAI(provider, apiKey, brandName, industry, selectedMoods, baseColor);
        }

        renderDesignSystem(brandName, selectedMoods, ds);
      } catch (err) {
        console.error(err);
        showToast('Generation failed: ' + err.message);
      } finally {
        btn.classList.remove('loading');
        btn.disabled = false;
      }
    });
  }

  // ═══ AI API Call ═══
  async function callAI(provider, apiKey, brand, industry, moods, baseColor) {
    const endpoints = {
      mimo:   'https://api.xiaomimimo.com/v1/chat/completions',
      openai: 'https://api.openai.com/v1/chat/completions',
    };

    let url = endpoints[provider];
    let model = provider === 'mimo' ? 'MiMo-v2.5-Reasoning' : 'gpt-4o-mini';

    if (provider === 'custom') {
      url = ($('#api-url').value.trim() || 'https://api.openai.com/v1') + '/chat/completions';
      model = 'gpt-4o-mini';
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: buildUserPrompt(brand, industry, moods, baseColor) }
        ],
        temperature: 0.7,
        max_tokens: 4096,
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `API error ${res.status}`);
    }

    const data = await res.json();
    let content = data.choices[0].message.content;

    // Strip markdown fences if present
    content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    return JSON.parse(content);
  }

  // ═══ Algorithmic Demo Generator ═══
  function generateDemoDesignSystem(brand, industry, moods, baseColor) {
    const hsl = hexToHSL(baseColor);

    // Generate primary palette from base color
    const primary = generateShades(hsl.h, hsl.s, hsl.l);

    // Complementary for secondary
    const secHue = (hsl.h + 150) % 360;
    const secondary = generateShades(secHue, Math.max(40, hsl.s - 10), hsl.l);

    // Analogous for accent
    const accHue = (hsl.h + 30) % 360;
    const accent = generateShades(accHue, Math.min(90, hsl.s + 10), hsl.l);

    // Neutrals
    const neutral = {
      50:  '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0',
      300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b',
      600: '#475569', 700: '#334155', 800: '#1e293b',
      900: '#0f172a', 950: '#020617'
    };

    // Determine typography based on mood
    let headingFont = 'Space Grotesk';
    if (moods.includes('elegant')) headingFont = 'Playfair Display';
    else if (moods.includes('organic')) headingFont = 'DM Serif Display';
    else if (moods.includes('playful')) headingFont = 'Outfit';
    else if (moods.includes('corporate')) headingFont = 'Plus Jakarta Sans';
    else if (moods.includes('futuristic')) headingFont = 'Syne';

    // Determine radius based on mood
    let radiusScale = { sm:'0.375rem', md:'0.5rem', lg:'0.75rem', xl:'1rem', '2xl':'1.5rem', full:'9999px' };
    if (moods.includes('minimal') || moods.includes('corporate')) {
      radiusScale = { sm:'0.125rem', md:'0.25rem', lg:'0.375rem', xl:'0.5rem', '2xl':'0.75rem', full:'9999px' };
    } else if (moods.includes('playful')) {
      radiusScale = { sm:'0.5rem', md:'0.75rem', lg:'1rem', xl:'1.5rem', '2xl':'2rem', full:'9999px' };
    }

    return {
      colors: {
        primary, secondary, accent, neutral,
        success: { base:'#10b981', light:'#d1fae5', dark:'#065f46' },
        warning: { base:'#f59e0b', light:'#fef3c7', dark:'#92400e' },
        error:   { base:'#ef4444', light:'#fee2e2', dark:'#991b1b' },
      },
      typography: {
        headingFont,
        bodyFont: 'Inter',
        monoFont: 'JetBrains Mono',
        scale: {
          h1: { size:'3.5rem', weight:700, lineHeight:1.1, letterSpacing:'-0.04em' },
          h2: { size:'2.5rem', weight:700, lineHeight:1.15, letterSpacing:'-0.03em' },
          h3: { size:'1.75rem', weight:600, lineHeight:1.2, letterSpacing:'-0.02em' },
          h4: { size:'1.25rem', weight:600, lineHeight:1.3, letterSpacing:'-0.01em' },
          body: { size:'1rem', weight:400, lineHeight:1.6, letterSpacing:'0' },
          small: { size:'0.875rem', weight:400, lineHeight:1.5, letterSpacing:'0.01em' },
          caption: { size:'0.75rem', weight:500, lineHeight:1.4, letterSpacing:'0.05em' },
        }
      },
      spacing: { xs:4, sm:8, md:16, lg:24, xl:32, '2xl':48, '3xl':64, '4xl':96 },
      radius: radiusScale,
      shadows: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px -1px rgba(0,0,0,0.1)',
        lg: '0 10px 15px -3px rgba(0,0,0,0.1)',
        xl: '0 20px 25px -5px rgba(0,0,0,0.1)',
        glow: `0 0 40px ${hexToRGBA(baseColor, 0.25)}`,
      }
    };
  }

  // ═══ Color Utilities ═══
  function hexToHSL(hex) {
    let r = parseInt(hex.slice(1,3), 16) / 255;
    let g = parseInt(hex.slice(3,5), 16) / 255;
    let b = parseInt(hex.slice(5,7), 16) / 255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b);
    let h, s, l = (max+min)/2;
    if (max === min) { h = s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d/(2-max-min) : d/(max+min);
      switch(max) {
        case r: h = ((g-b)/d + (g<b?6:0))/6; break;
        case g: h = ((b-r)/d + 2)/6; break;
        case b: h = ((r-g)/d + 4)/6; break;
      }
    }
    return { h: Math.round(h*360), s: Math.round(s*100), l: Math.round(l*100) };
  }

  function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h/30) % 12;
    const a = s * Math.min(l, 1-l);
    const f = n => l - a * Math.max(-1, Math.min(k(n)-3, Math.min(9-k(n), 1)));
    return '#' + [f(0),f(8),f(4)].map(x =>
      Math.round(x*255).toString(16).padStart(2,'0')
    ).join('');
  }

  function generateShades(h, s, l) {
    const shades = {};
    const lightnesses = {
      50:97, 100:93, 200:86, 300:76, 400:64,
      500:50, 600:42, 700:35, 800:27, 900:20, 950:12
    };
    // Find the shade closest to the provided lightness for 600
    for (const [shade, targetL] of Object.entries(lightnesses)) {
      const adjS = shade < 200 ? Math.max(20, s - 30) :
                   shade > 800 ? Math.max(30, s - 15) : s;
      shades[shade] = hslToHex(h, adjS, targetL);
    }
    return shades;
  }

  function hexToRGBA(hex, alpha) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  // ═══ Render Design System ═══
  function renderDesignSystem(brandName, moods, ds) {
    currentDesignSystem = { brandName, moods, ...ds };

    // Show output
    $('#output-empty').style.display = 'none';
    $('#output-generated').classList.add('visible');

    // Brand card
    $('#ds-brand-name').textContent = brandName;
    $('#ds-brand-mood').textContent = moods.join(' · ');

    // Render colors
    renderColors(ds.colors);

    // Render typography
    renderTypography(ds.typography);

    // Render components
    renderComponents(ds.colors, ds.typography, ds.radius);

    // Generate export code
    generateCSS(brandName, ds);
    generateJSON(brandName, ds);
    generateTailwind(brandName, ds);

    // Generate website preview
    renderWebsitePreview(brandName, moods, ds);

    // Scroll to output
    $('#output-generated').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderColors(colors) {
    const container = $('#ds-colors-output');
    let html = '';

    const groups = ['primary', 'secondary', 'accent', 'neutral'];
    groups.forEach(group => {
      const palette = colors[group];
      html += `<div class="color-group">
        <div class="color-group-label">${group}</div>
        <div class="color-swatches">`;

      for (const [shade, hex] of Object.entries(palette)) {
        html += `<div class="color-swatch-card" data-hex="${hex}" title="${hex}" onclick="window.__copyColor('${hex}')">
          <div class="color-swatch-box" style="background:${hex}"></div>
          <span class="color-swatch-label">${shade}</span>
        </div>`;
      }

      html += '</div></div>';
    });

    // Semantic colors
    const semantics = ['success', 'warning', 'error'];
    html += `<div class="color-group">
      <div class="color-group-label">Semantic</div>
      <div class="color-swatches">`;

    semantics.forEach(name => {
      const c = colors[name];
      ['light', 'base', 'dark'].forEach(variant => {
        html += `<div class="color-swatch-card" data-hex="${c[variant]}" title="${c[variant]}" onclick="window.__copyColor('${c[variant]}')">
          <div class="color-swatch-box" style="background:${c[variant]}"></div>
          <span class="color-swatch-label">${name}-${variant}</span>
        </div>`;
      });
    });

    html += '</div></div>';
    container.innerHTML = html;
  }

  function renderTypography(typo) {
    const container = $('#ds-typo-output');
    let html = `
      <div style="margin-bottom:var(--space-4);display:flex;gap:var(--space-4);flex-wrap:wrap;">
        <span class="ds-card-badge">Heading: ${typo.headingFont}</span>
        <span class="ds-card-badge">Body: ${typo.bodyFont}</span>
        <span class="ds-card-badge">Mono: ${typo.monoFont}</span>
      </div>`;

    for (const [name, style] of Object.entries(typo.scale)) {
      const fontFamily = name.startsWith('h') ? typo.headingFont : typo.bodyFont;
      html += `<div class="typo-item">
        <div class="typo-meta">
          <span class="typo-meta-name">${name.toUpperCase()}</span>
          <span class="typo-meta-size">${style.size} / ${style.weight}</span>
        </div>
        <div style="font-family:'${fontFamily}',sans-serif;font-size:${style.size};font-weight:${style.weight};line-height:${style.lineHeight};letter-spacing:${style.letterSpacing};color:var(--text-primary)">
          The quick brown fox
        </div>
      </div>`;
    }

    container.innerHTML = html;
  }

  function renderComponents(colors, typo, radius) {
    const container = $('#ds-components-output');
    const p500 = colors.primary['500'] || colors.primary['600'];
    const p600 = colors.primary['600'] || colors.primary['700'];
    const p100 = colors.primary['100'] || colors.primary['50'];
    const n100 = colors.neutral['100'];
    const n200 = colors.neutral['200'];
    const n700 = colors.neutral['700'];
    const n800 = colors.neutral['800'];
    const rad = radius.lg || '0.75rem';
    const radFull = radius.full || '9999px';

    let html = '';

    // Buttons
    html += `<div class="component-group">
      <div class="component-group-label">Buttons</div>
      <div class="component-display">
        <button class="demo-btn" style="background:${p600};color:white;border-radius:${rad};padding:10px 24px;font-weight:600;font-family:'${typo.headingFont}',sans-serif">Primary</button>
        <button class="demo-btn" style="background:transparent;color:${p600};border:2px solid ${p600};border-radius:${rad};padding:8px 22px;font-weight:600;font-family:'${typo.headingFont}',sans-serif">Outline</button>
        <button class="demo-btn" style="background:${p100};color:${p600};border-radius:${rad};padding:10px 24px;font-weight:600;font-family:'${typo.headingFont}',sans-serif">Soft</button>
        <button class="demo-btn" style="background:transparent;color:${p600};border-radius:${rad};padding:10px 24px;font-weight:600;font-family:'${typo.headingFont}',sans-serif;text-decoration:underline">Link</button>
      </div>
    </div>`;

    // Badges
    html += `<div class="component-group">
      <div class="component-group-label">Badges</div>
      <div class="component-display">
        <span class="demo-badge" style="background:${hexToRGBA(colors.success.base,0.15)};color:${colors.success.base};border-radius:${radFull};padding:4px 12px">Active</span>
        <span class="demo-badge" style="background:${hexToRGBA(colors.warning.base,0.15)};color:${colors.warning.base};border-radius:${radFull};padding:4px 12px">Pending</span>
        <span class="demo-badge" style="background:${hexToRGBA(colors.error.base,0.15)};color:${colors.error.base};border-radius:${radFull};padding:4px 12px">Failed</span>
        <span class="demo-badge" style="background:${hexToRGBA(p500,0.15)};color:${p500};border-radius:${radFull};padding:4px 12px">New</span>
      </div>
    </div>`;

    // Inputs
    html += `<div class="component-group">
      <div class="component-group-label">Inputs</div>
      <div class="component-display" style="flex-direction:column;align-items:stretch;gap:var(--space-4)">
        <div style="display:flex;flex-direction:column;gap:4px;max-width:300px">
          <label style="font-size:0.8rem;font-weight:600;color:${n800}">Email Address</label>
          <input type="text" value="hello@brand.com" style="padding:10px 14px;border:1px solid ${n200};border-radius:${rad};background:white;color:${n800};font-size:0.9rem;font-family:'${typo.bodyFont}',sans-serif" />
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;max-width:300px">
          <label style="font-size:0.8rem;font-weight:600;color:${n800}">With Focus</label>
          <input type="text" value="Focused state" style="padding:10px 14px;border:2px solid ${p500};border-radius:${rad};background:white;color:${n800};font-size:0.9rem;font-family:'${typo.bodyFont}',sans-serif;box-shadow:0 0 0 3px ${hexToRGBA(p500,0.15)}" />
        </div>
      </div>
    </div>`;

    // Card
    html += `<div class="component-group">
      <div class="component-group-label">Cards</div>
      <div class="component-display">
        <div class="preview-mini-card" style="border-radius:${radius.xl || '1rem'}">
          <div class="mini-card-banner" style="background:linear-gradient(135deg,${p500},${colors.secondary['500'] || colors.secondary['600']})"></div>
          <div class="mini-card-body">
            <div class="mini-card-title" style="font-family:'${typo.headingFont}',sans-serif">Design Tokens</div>
            <div class="mini-card-text">Generated by NeuralCanvas AI</div>
          </div>
        </div>
        <div class="preview-mini-card" style="border-radius:${radius.xl || '1rem'}">
          <div class="mini-card-banner" style="background:linear-gradient(135deg,${colors.accent['500'] || colors.accent['600']},${p500})"></div>
          <div class="mini-card-body">
            <div class="mini-card-title" style="font-family:'${typo.headingFont}',sans-serif">Color Palette</div>
            <div class="mini-card-text">WCAG AA compliant</div>
          </div>
        </div>
      </div>
    </div>`;

    container.innerHTML = html;
  }

  // ═══ Export Generators ═══
  function generateCSS(brand, ds) {
    let css = `/* ${brand} Design System — Generated by NeuralCanvas */\n`;
    css += `/* https://github.com/JamilKanil/NeuralCanvas */\n\n`;
    css += `:root {\n`;
    css += `  /* ── Colors ── */\n`;

    ['primary','secondary','accent','neutral'].forEach(group => {
      for (const [shade, hex] of Object.entries(ds.colors[group])) {
        css += `  --color-${group}-${shade}: ${hex};\n`;
      }
      css += '\n';
    });

    ['success','warning','error'].forEach(name => {
      const c = ds.colors[name];
      css += `  --color-${name}: ${c.base};\n`;
      css += `  --color-${name}-light: ${c.light};\n`;
      css += `  --color-${name}-dark: ${c.dark};\n`;
    });

    css += `\n  /* ── Typography ── */\n`;
    css += `  --font-heading: '${ds.typography.headingFont}', system-ui, sans-serif;\n`;
    css += `  --font-body: '${ds.typography.bodyFont}', system-ui, sans-serif;\n`;
    css += `  --font-mono: '${ds.typography.monoFont}', monospace;\n\n`;

    for (const [name, style] of Object.entries(ds.typography.scale)) {
      css += `  --text-${name}-size: ${style.size};\n`;
      css += `  --text-${name}-weight: ${style.weight};\n`;
      css += `  --text-${name}-line-height: ${style.lineHeight};\n`;
      css += `  --text-${name}-letter-spacing: ${style.letterSpacing};\n`;
    }

    css += `\n  /* ── Spacing ── */\n`;
    for (const [name, val] of Object.entries(ds.spacing)) {
      css += `  --space-${name}: ${val}px;\n`;
    }

    css += `\n  /* ── Radius ── */\n`;
    for (const [name, val] of Object.entries(ds.radius)) {
      css += `  --radius-${name}: ${val};\n`;
    }

    css += `\n  /* ── Shadows ── */\n`;
    for (const [name, val] of Object.entries(ds.shadows)) {
      css += `  --shadow-${name}: ${val};\n`;
    }

    css += `}\n`;

    $('#css-code').textContent = css;
  }

  function generateJSON(brand, ds) {
    const tokens = {
      $schema: 'https://design-tokens.github.io/community-group/format/',
      brand: brand,
      generator: 'NeuralCanvas',
      tokens: ds
    };
    $('#json-code').textContent = JSON.stringify(tokens, null, 2);
  }

  function generateTailwind(brand, ds) {
    let tw = `// ${brand} — Tailwind Config by NeuralCanvas\n`;
    tw += `/** @type {import('tailwindcss').Config} */\n`;
    tw += `module.exports = {\n`;
    tw += `  theme: {\n`;
    tw += `    extend: {\n`;
    tw += `      colors: {\n`;

    ['primary','secondary','accent','neutral'].forEach(group => {
      tw += `        ${group}: {\n`;
      for (const [shade, hex] of Object.entries(ds.colors[group])) {
        tw += `          ${shade}: '${hex}',\n`;
      }
      tw += `        },\n`;
    });

    ['success','warning','error'].forEach(name => {
      const c = ds.colors[name];
      tw += `        ${name}: {\n`;
      tw += `          DEFAULT: '${c.base}',\n`;
      tw += `          light: '${c.light}',\n`;
      tw += `          dark: '${c.dark}',\n`;
      tw += `        },\n`;
    });

    tw += `      },\n`;
    tw += `      fontFamily: {\n`;
    tw += `        heading: ['${ds.typography.headingFont}', 'system-ui', 'sans-serif'],\n`;
    tw += `        body: ['${ds.typography.bodyFont}', 'system-ui', 'sans-serif'],\n`;
    tw += `        mono: ['${ds.typography.monoFont}', 'monospace'],\n`;
    tw += `      },\n`;
    tw += `      borderRadius: {\n`;
    for (const [name, val] of Object.entries(ds.radius)) {
      tw += `        '${name}': '${val}',\n`;
    }
    tw += `      },\n`;
    tw += `      boxShadow: {\n`;
    for (const [name, val] of Object.entries(ds.shadows)) {
      tw += `        '${name}': '${val}',\n`;
    }
    tw += `      },\n`;
    tw += `    },\n`;
    tw += `  },\n`;
    tw += `  plugins: [],\n`;
    tw += `};\n`;

    $('#tailwind-code').textContent = tw;
  }

  // ═══ Tabs ═══
  function setupTabs() {
    $$('.output-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.output-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        $$('.export-content').forEach(c => c.classList.remove('visible'));
        $(`#tab-${tab.dataset.tab}`).classList.add('visible');
      });
    });
  }

  // ═══ Copy Buttons ═══
  function setupCopyButtons() {
    $$('.code-copy').forEach(btn => {
      btn.addEventListener('click', async () => {
        const targetId = btn.dataset.target;
        const code = $(`#${targetId}`).textContent;
        await navigator.clipboard.writeText(code);
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  }

  // Global copy function for color swatches
  window.__copyColor = async function (hex) {
    try {
      await navigator.clipboard.writeText(hex);
      showToast(`Copied ${hex}`);
    } catch (e) {
      // Fallback
      showToast(hex);
    }
  };

  // ═══ Download ═══
  function setupDownloadButton() {
    $('#btn-download').addEventListener('click', () => {
      if (!currentDesignSystem) return;

      const activeTab = $('.output-tab.active');
      const format = activeTab ? activeTab.dataset.tab : 'css';

      let content, filename, type;

      switch (format) {
        case 'css':
          content = $('#css-code').textContent;
          filename = `${currentDesignSystem.brandName.toLowerCase().replace(/\s+/g,'-')}-design-tokens.css`;
          type = 'text/css';
          break;
        case 'json':
          content = $('#json-code').textContent;
          filename = `${currentDesignSystem.brandName.toLowerCase().replace(/\s+/g,'-')}-design-tokens.json`;
          type = 'application/json';
          break;
        case 'tailwind':
          content = $('#tailwind-code').textContent;
          filename = 'tailwind.config.js';
          type = 'text/javascript';
          break;
        default:
          // Preview tab - download all formats as JSON
          content = $('#json-code').textContent;
          filename = `${currentDesignSystem.brandName.toLowerCase().replace(/\s+/g,'-')}-design-tokens.json`;
          type = 'application/json';
      }

      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      showToast(`Downloaded ${filename}`);
    });
  }

  // ═══ Toast ═══
  function showToast(message) {
    const existing = $('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // ═══ Utility ═══
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // ═══ Cursor Glow Animation ═══
  function setupCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    const dot = document.getElementById('cursor-dot');
    if (!glow || !dot) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      // Smooth follow for glow (slower)
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';

      // Faster follow for dot
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      dot.style.left = dotX + 'px';
      dot.style.top = dotY + 'px';

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Scale dot on hover over interactive elements
    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest('a, button, input, select, .palette-swatch, .color-swatch-card, .preset-btn, .mood-tag');
      if (el) {
        dot.style.width = '20px';
        dot.style.height = '20px';
        dot.style.opacity = '0.6';
      }
    });
    document.addEventListener('mouseout', (e) => {
      const el = e.target.closest('a, button, input, select, .palette-swatch, .color-swatch-card, .preset-btn, .mood-tag');
      if (el) {
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.opacity = '1';
      }
    });
  }

  // ═══ Floating Particles ═══
  function setupParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const PARTICLE_COUNT = 50;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        hue: Math.random() > 0.5 ? 260 : 190, // purple or cyan
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    }
    requestAnimationFrame(drawParticles);
  }

  // ═══ Website Preview Mockup ═══
  function renderWebsitePreview(brandName, moods, ds) {
    const body = document.getElementById('website-mockup-body');
    const urlEl = document.getElementById('mockup-url');
    if (!body || !urlEl) return;

    const slug = brandName.toLowerCase().replace(/\s+/g, '');
    urlEl.textContent = `https://${slug}.com`;

    const p500 = ds.colors.primary['500'] || ds.colors.primary['600'];
    const p600 = ds.colors.primary['600'] || ds.colors.primary['700'];
    const p50  = ds.colors.primary['50']  || '#f8f8ff';
    const p100 = ds.colors.primary['100'] || '#eee';
    const s500 = ds.colors.secondary['500'] || ds.colors.secondary['600'];
    const a500 = ds.colors.accent['500'] || ds.colors.accent['600'];
    const n50  = ds.colors.neutral['50']  || '#fafafa';
    const n700 = ds.colors.neutral['700'] || '#333';
    const n800 = ds.colors.neutral['800'] || '#222';
    const n400 = ds.colors.neutral['400'] || '#999';
    const heading = ds.typography.headingFont;
    const bodyFont = ds.typography.bodyFont;
    const rad = ds.radius.lg || '0.75rem';

    const moodText = moods.join(', ');
    const tagline = getTagline(moods);

    body.innerHTML = `
      <div style="font-family:'${bodyFont}',system-ui,sans-serif;color:${n800};background:${n50};">
        <!-- Nav -->
        <div class="mockup-nav" style="background:white;border-bottom:1px solid ${p100};">
          <div class="mockup-nav-brand" style="font-family:'${heading}',sans-serif;color:${p600};">${brandName}</div>
          <div class="mockup-nav-links" style="color:${n700};">
            <span>Products</span>
            <span>Features</span>
            <span>Pricing</span>
            <span style="background:${p600};color:white;padding:6px 16px;border-radius:${rad};font-weight:600;font-size:0.8rem;">Get Started</span>
          </div>
        </div>

        <!-- Hero -->
        <div class="mockup-hero" style="background:linear-gradient(135deg, ${p50}, white);">
          <div style="display:inline-block;padding:4px 14px;border-radius:20px;background:${hexToRGBA(p500,0.1)};color:${p600};font-size:0.75rem;font-weight:600;margin-bottom:16px;">
            ✦ ${tagline}
          </div>
          <h2 style="font-family:'${heading}',sans-serif;color:${n800};">Build Something<br/><span style="color:${p600};">Extraordinary</span></h2>
          <p style="color:${n400};">Empowering your workflow with ${moodText} design — crafted for the future.</p>
          <div class="mockup-hero-btns">
            <span class="mockup-btn" style="background:${p600};color:white;border-radius:${rad};">Start Free Trial</span>
            <span class="mockup-btn" style="background:transparent;color:${p600};border:2px solid ${p600};border-radius:${rad};">Learn More</span>
          </div>
        </div>

        <!-- Cards -->
        <div class="mockup-cards" style="background:white;">
          <div class="mockup-card" style="border-radius:${rad};border:1px solid #eee;">
            <div class="mockup-card-img" style="background:linear-gradient(135deg,${p500},${s500});"></div>
            <div class="mockup-card-body">
              <h4 style="font-family:'${heading}',sans-serif;color:${n800};">Smart Analytics</h4>
              <p style="color:${n400};">Real-time insights powered by AI to help you make better decisions.</p>
            </div>
          </div>
          <div class="mockup-card" style="border-radius:${rad};border:1px solid #eee;">
            <div class="mockup-card-img" style="background:linear-gradient(135deg,${s500},${a500});"></div>
            <div class="mockup-card-body">
              <h4 style="font-family:'${heading}',sans-serif;color:${n800};">Seamless Integration</h4>
              <p style="color:${n400};">Connect with 100+ tools and services out of the box.</p>
            </div>
          </div>
          <div class="mockup-card" style="border-radius:${rad};border:1px solid #eee;">
            <div class="mockup-card-img" style="background:linear-gradient(135deg,${a500},${p500});"></div>
            <div class="mockup-card-body">
              <h4 style="font-family:'${heading}',sans-serif;color:${n800};">Team Collaboration</h4>
              <p style="color:${n400};">Work together in real-time with your entire team.</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mockup-footer" style="background:${n800};color:${n400};border-top:none;">
          © 2026 ${brandName}. All rights reserved. · Built with NeuralCanvas
        </div>
      </div>
    `;
  }

  function getTagline(moods) {
    if (moods.includes('futuristic')) return 'The Future is Here';
    if (moods.includes('elegant'))   return 'Crafted with Elegance';
    if (moods.includes('playful'))   return 'Fun Meets Function';
    if (moods.includes('organic'))   return 'Naturally Beautiful';
    if (moods.includes('corporate')) return 'Enterprise Ready';
    if (moods.includes('bold'))      return 'Bold by Design';
    if (moods.includes('warm'))      return 'Warmth in Every Pixel';
    if (moods.includes('modern'))    return 'Modern & Minimal';
    return 'Next Generation Platform';
  }

  // ═══ Boot ═══
  document.addEventListener('DOMContentLoaded', init);

})();
