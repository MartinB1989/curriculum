# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static, bilingual (Spanish/English) CV website for a Full Stack Developer. The site is built with pure HTML, CSS, and vanilla JavaScript without any build tools or frameworks for the front-end presentation layer.

## Project Structure

```
cv-web/
├── index.html          # Main CV page (Spanish version)
├── styles.css          # Shared styles for both language versions
├── script.js           # Shared JavaScript for interactive features
├── print.css           # Print-specific styles
└── en/
    └── index.html      # English version of CV
```

## Architecture

### Language System
- **Bilingual Design**: Two separate HTML files maintain the same structure but with translated content
- **Shared Assets**: Both versions use the same CSS (`../styles.css` for English) and JavaScript (`../script.js` for English)
- **Language Switcher**: Positioned absolutely in the top-right corner on desktop, repositioned relatively on mobile

### Styling Architecture
- **CSS Variables**: Custom properties are used sparingly; most styling uses direct values
- **Color Scheme**: Purple gradient theme (#4f46e5 to #7c3aed) for primary elements
- **Responsive Design**: Three breakpoints:
  - Desktop: default (max-width: 1200px container)
  - Tablet: 768px
  - Mobile: 480px
- **Component-Based Classes**: Sections use `.section`, `.section-title`, etc. pattern
- **Skill Tags**: Three levels styled with gradients: `.advanced` (green), `.intermediate` (orange), `.basic` (gray)

### JavaScript Features
- **Intersection Observer**: For fade-in animations on scroll for all `.section` elements
- **Typewriter Effect**: Animated name display on page load
- **Parallax Scrolling**: Subtle header parallax effect
- **Floating Particles**: Decorative elements in header created via DOM manipulation
- **Accessibility**: Respects `prefers-reduced-motion` media query

## Key Components

1. **Header**: Gradient background with profile info and contact details, 2-column grid on desktop
2. **Skills Section**: Grid layout with categorized skill tags (Frontend/Backend/Tools)
3. **Experience Section**: Job cards with company name, period, description, and tech tags
4. **WhatsApp Float Button**: Fixed position button in bottom-right corner with pulse animation
5. **Language Switcher**: Navigation between Spanish/English versions

## Development Guidelines

### When Editing Content

**Important**: Both language versions must be kept in sync structurally. When updating:
1. Make changes to both `index.html` and `en/index.html`
2. Maintain identical HTML structure (class names, element hierarchy)
3. Only translate text content, not technical terms or technology names
4. Ensure dates, job titles, and technical skills remain consistent

### When Editing Styles

- All style changes in `styles.css` affect both language versions
- Test responsive behavior at all three breakpoints (768px, 480px)
- Maintain print styles for CV printing functionality (handled in `@media print`)
- Keep gradients and color schemes consistent with the purple theme

### When Editing JavaScript

- Changes in `script.js` affect both language versions
- Test that text-specific animations (like typewriter) work for both language content lengths
- Maintain accessibility features (reduced motion support)

## Common Tasks

### Adding a New Job Experience
1. Add new `.job` div in both `index.html` and `en/index.html`
2. Follow existing structure: `.job-header` → `.job-title` + `.job-period`
3. Add `.job-description` paragraph
4. Include `.job-tech` div with relevant `.tech-tag` spans

### Modifying Colors/Theme
- Primary gradient: `.header` and various backgrounds use `#4f46e5` to `#7c3aed`
- Update color variables consistently across gradient definitions
- Test contrast ratios for accessibility

### Updating Contact Information
- Email, phone, and LinkedIn are in `.contact-info` section of both HTML files
- WhatsApp link is in the floating button (update `href` with new number if needed)

## Technical Notes

- No build process required - files can be opened directly in browser or served statically
- Font Awesome 6.0.0 used for icons (CDN)
- Inter font from Google Fonts (CDN)
- All animations use CSS transitions and JavaScript for optimal performance
- Print styles preserve color gradients with `-webkit-print-color-adjust: exact`
