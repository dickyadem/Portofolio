# Portfolio Website Design

## Goal
Build a maintainable single-page portfolio for Dicky Ade Mahendra, a Programmer & QA Engineer.

## Architecture
A dependency-free static site with three responsibilities: `index.html` owns semantic content, `styles.css` owns all visual rules and responsive behavior, and `script.js` owns progressive-enhancement interactions. Portfolio content stays grouped by section in the HTML so it can be edited without tracing JavaScript state.

## Visual Direction
Dark technical interface using the supplied tokens, terracotta interaction accent, Outfit headings, Plus Jakarta Sans body copy, and JetBrains Mono for metadata. The hero uses a two-column identity/terminal layout; lower sections use focused grids, a timeline, education rows, and certification rows.

## Behavior
Mobile navigation uses `aria-expanded` and closes after selection. `IntersectionObserver` drives active section state and reveal animations, with a visible fallback when unavailable or reduced motion is enabled. Hover spotlight is limited to devices that support hover.

## Accessibility and Resilience
Semantic headings, visible focus states, meaningful links, reduced-motion support, no-JavaScript readability, external-link safety attributes, and no horizontal overflow at mobile widths.

## Validation
Run a local static server, inspect desktop and 320px layouts, verify menu and anchor behavior, check console output, and validate the final files for syntax errors.
