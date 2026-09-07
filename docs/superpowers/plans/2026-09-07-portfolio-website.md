# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a maintainable, responsive single-page portfolio website from `REMAKE.md`.

**Architecture:** Keep semantic portfolio content in `index.html`, visual tokens/layout in `styles.css`, and progressive-enhancement interactions in `script.js`. No build step or runtime dependency is required.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, browser APIs (`IntersectionObserver`, `matchMedia`).

## Global Constraints

- Preserve the section order and portfolio content specified in `REMAKE.md`.
- Use the supplied dark/terracotta design tokens and typography.
- Keep the page readable without JavaScript.
- Support desktop, tablet, and 320px mobile layouts.
- Do not add JavaScript dependencies.

### Task 1: Build Semantic Portfolio Markup

**Files:**
- Create: `index.html`

- [ ] Add document metadata, Google Fonts links, sticky header, accessible mobile menu button, and anchor navigation.
- [ ] Add hero, about, skills, experience, projects, education, certifications, and footer sections using the specified content.
- [ ] Link `styles.css` and `script.js`, and use safe external-link attributes.

### Task 2: Add Visual System and Responsive Layout

**Files:**
- Create: `styles.css`

- [ ] Define the supplied design tokens, reset, typography, focus states, and reusable section patterns.
- [ ] Implement terminal hero panel, responsive skill/project grids, timeline, education/certification rows, and footer.
- [ ] Add hover spotlight, reveal transitions, reduced-motion fallback, and breakpoints at 860px and 640px.

### Task 3: Add Progressive Enhancement Interactions

**Files:**
- Create: `script.js`

- [ ] Toggle the mobile navigation and keep `aria-expanded` synchronized.
- [ ] Close navigation after anchor selection and when Escape is pressed.
- [ ] Use `IntersectionObserver` for active navigation and scroll reveal, with a no-observer fallback.
- [ ] Add pointer-based card spotlight only when hover is supported.

### Task 4: Verify the Static Site

**Files:**
- Verify: `index.html`, `styles.css`, `script.js`

- [ ] Start a local static server and open the page.
- [ ] Check desktop and 320px mobile rendering for overflow and layout failures.
- [ ] Exercise the menu, anchors, active navigation, and reduced-motion behavior.
- [ ] Confirm there are no console errors.
