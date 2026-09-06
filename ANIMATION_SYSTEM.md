# Kabadiwala Connect — Animation System

> A complete reference for the native-app-feel animation architecture used across all 21 screens.
> Location: `src/styles/theme.css` — Animation section starts at `/* NATIVE APP ANIMATION SYSTEM */`

---

## Why This Exists

Real mobile apps feel *alive*. When you tap something it responds immediately. When a new screen appears it slides in with weight and momentum. When a number changes you feel it "roll". When a payment succeeds there's a small celebration.

This document covers every animation class, keyframe, and usage pattern across Kabadiwala Connect so any developer can understand, extend, or tweak the system without breaking the native feel.

---

## Animation Guiding Principles

| Principle | Detail |
| :--- | :--- |
| **Physics-first** | All durations follow spring physics — fast entry, no bouncing on exit |
| **Easing matters** | We use `cubic-bezier(0.22, 1, 0.36, 1)` (iOS ease-out spring) as the default |
| **Shortest path** | Entrance animations: 200-450ms. Micro-interactions: 80-150ms. Never longer. |
| **Layer properly** | Screen transitions on `screen-container`, micro-interactions on individual elements |
| **No motion sickness** | Nothing spins or loops unless it communicates live state (loading, scanning, sync) |
| **Reduce-motion respected** | `@media (prefers-reduced-motion: reduce)` collapses everything to 0.01ms |

---

## Easing Reference

```css
/* iOS-style decelerate — default for entrances */
cubic-bezier(0.22, 1, 0.36, 1)

/* Spring overshoot — for checkmarks, pop-in, FAB */
cubic-bezier(0.175, 0.885, 0.32, 1.275)

/* Hard decelerate — for screen slide from side (iOS push) */
cubic-bezier(0.32, 0.72, 0, 1)

/* Spring sheet — for bottom drawers */
cubic-bezier(0.32, 1.15, 0.4, 1)

/* Spring with extra overshoot — for counters, cards */
cubic-bezier(0.32, 1.25, 0.4, 1)
```

---

## Animation Catalogue

### 1. Screen Push Transitions
**File:** `DeviceFrameWrapper.jsx` inline style
**Classes:** `screen-container[data-direction="forward"]`, `screen-container[data-direction="backward"]`

Direction-aware iOS-style push/pop. Forward: slides from right 28%. Back: slides from left.

```css
.screen-container[data-direction="forward"] {
  animation: slideInFromRight 0.32s cubic-bezier(0.32, 0.72, 0, 1) both;
}
```

**Timing:** 320ms — feels instant but communicates spatial direction.

---

### 2. Screen Fade Entrance
**Class:** `.page-fade-enter`

Lightweight fade + translateY(8px) rise when any screen first mounts:

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

### 3. Staggered Card Entrance
**Classes:** `.stagger-enter` on each child

Cards enter 55ms apart, creating a waterfall cascade effect:

```css
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 55ms; }
/* ... up to 8 children */
```

Usage: Add both `stagger-enter` and `stagger-item` to each list item.

---

### 4. Spring Pop
**Class:** `.spring-pop`

Snaps in with momentum — used on OTP boxes, confirmation dialogs, success badges:

```css
@keyframes springPop {
  0%   { transform: scale(0.72) translateY(8px); opacity: 0; }
  60%  { transform: scale(1.04) translateY(-3px); opacity: 1; }
  80%  { transform: scale(0.98) translateY(1px); }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}
```

Variant: `.spring-slide-up` for cards entering from below.

---

### 5. Bottom Sheet Spring
**Classes:** `.profile-modal-sheet`, `.price-modal-sheet`, `.hazard-alert-sheet`, `.modal-card`, `.scan-summary-drawer`

All modal drawers use the same spring curve for consistency. `opacity: 0.6` start prevents ghost flash on fast devices.

```css
animation: springSheetUp 0.36s cubic-bezier(0.32, 1.15, 0.4, 1) both;
```

---

### 6. Ripple Touch
**Class:** `.ripple-touch`

Pure CSS ripple that radiates from center on press, no JS required:

```css
.ripple-touch:active::after {
  transform: scale(2.8);
  opacity: 1;
  transition: none; /* snap to active, let release animate */
}
```

---

### 7. Active Press Squish
**Applied globally to:** All tappable elements — cards, buttons, tabs, list rows

Every element responds with `scale(0.96)` in 100ms. CTA buttons additionally get `translateY(2px)` to simulate physical depression.

---

### 8. Hover Lift
**Class:** `.hover-lift`

On desktop simulator, cards lift 3px with shadow on hover:

```css
.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(28, 82, 45, 0.13);
}
```

---

### 9. Float Animation
**Class:** `.float-animation`

Hero illustrations gently levitate on a 3.5s sine cycle:

```css
@keyframes floatBob {
  0%   { transform: translateY(0px); }
  45%  { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
```

---

### 10. Shimmer Skeleton Loader
**Classes:** `.skeleton`, `.skeleton-text`, `.skeleton-circle`, `.skeleton-card`

Moving shimmer for loading placeholders:

```css
.skeleton {
  background: linear-gradient(90deg, #E8EDE4 0%, #F4F7F0 30%, #E8EDE4 60%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite linear;
}
```

---

### 11. Shimmer Glint
**Class:** `.shimmer-once`

One-time light glint sweeping across premium cards on mount. 0.6s delay lets the card entrance finish first.

---

### 12. Success Checkmark
**Classes:** `.success-check-anim`, `.success-ring-pulse`

Tick bounces in with spring overshoot; green ring expands from the icon:

```css
@keyframes checkScaleBounce {
  0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
  60%  { transform: scale(1.2) rotate(5deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
```

---

### 13. Carousel Pill Dots
**Classes:** `.dot`, `.dot.active`

Active dot morphs from 7px circle to 22px pill:

```css
.dot { width: 7px; transition: width 0.28s cubic-bezier(0.22, 1, 0.36, 1); }
.dot.active { width: 22px; background: #1C522D; }
```

---

### 14. Tab Bar Icon Bounce
**Selector:** `.nav-tab.active .tab-icon`

Selected tab icon does a "tap then settle" bounce — up 5px, overshoot -1px, land at -2px:

```css
@keyframes tabIconBounce {
  0%   { transform: translateY(0) scale(1); }
  40%  { transform: translateY(-5px) scale(1.08); }
  70%  { transform: translateY(1px) scale(0.97); }
  100% { transform: translateY(-2px) scale(1); }
}
```

---

### 15. Camera FAB Pulse Ring
**Class:** `.camera-glow-btn`

Center camera button has a breathing ring halo — subtle attention draw:

```css
@keyframes cameraRingPulse {
  0%   { transform: scale(0.9); opacity: 0.7; }
  50%  { transform: scale(1.12); opacity: 0.2; }
  100% { transform: scale(0.9); opacity: 0.7; }
}
```

---

### 16. Pulsing Live Dot
**Class:** `.pulsing-dot .green/.amber/.red`

Scales 1 to 1.5 with colored glow — used for sync status, live driver, AI scan:

```css
@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.5); opacity: 0.5; }
}
```

---

### 17. Pulse Soft (breathing icon)
**Class:** `.pulse-soft`

Market Trends icon breathes gently at scale 1-1.06 every 3s.

---

### 18. Loading Spinner
**Classes:** `.spin`, `.spin-fast`

Standard rotate — `.spin-fast` runs at 0.7s for urgent states.

---

### 19. Notification Bell Ring
**Class:** `.ring-animation`

Bell rings itself every 4s with multi-keyframe angular jitter. `transform-origin: top center` pins the hanging point.

---

### 20. Number Roll
**Class:** `.number-roll`

Monetary values roll up from 16px below with a blur dissolve:

```css
@keyframes rollUp {
  from { opacity: 0; transform: translateY(16px); filter: blur(3px); }
  to   { opacity: 1; transform: translateY(0); filter: blur(0); }
}
```

---

### 21. Elastic Button
**Class:** `.elastic-button`

Hover scale 1.03, active scale 0.94 + translateY(1px). Spring easing `cubic-bezier(0.175, 0.885, 0.32, 1.275)`.

---

### 22. Tab Content Fade
**Class:** `.tab-content-fade`

220ms fade + 6px rise when switching between Home/Bookings/Rates tabs.

---

### 23. Hero Card Reveal
**Class:** `.animated-card`

Home carousel card scales 0.95 to 1 with 10px rise on mount.

---

### 24. Slide Up / Down Enters
**Classes:** `.slide-up-enter`, `.slide-down-enter`

Scan result drawers (up 24px), location dropdowns (down 14px).

---

### 25. Toast Banner
**Classes:** `.profile-toast-banner`, `.toast-banner`

Springs 60px up from off-screen — booking confirmed, payment received states.

---

### 26. Audio Pulse
**Class:** `.pulse-audio`

Speaker icon scales 1 to 1.22 alternating — visually confirms voice narration is active.

---

### 27. Hazard Warning Pulse
**Class:** `.hazard-pulse-border`

Red border expands as glowing ring every 1.6s on the hazardous battery detection screen.

---

### 28. Camera Laser Scan Line
**Class:** `.cam-laser-line`

Green laser sweeps top to bottom in the camera viewfinder. Easing `cubic-bezier(0.45, 0, 0.55, 1)` slows at both ends, exactly like a real scanner.

---

### 29. Progress Stepper Fill
**Selector:** `.stepper-line-progress`

Step connector line width transitions 500ms with spring — communicates task progress.

---

### 30. Receipt Ticket Reveal
**Class:** `.receipt-paper-ticket`

Receipt drops from 24px above and flattens — `rotateX(4deg)` to `rotateX(0)` gives 3D paper-landing feel.

---

### 31. Status Bar Transition
**Selector:** `.status-bar`

Crossfades background/color over 400ms between screens (green home bar → transparent).

---

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users with vestibular sensitivity get zero motion. All functionality remains intact.

---

## Quick Usage Cheatsheet

| Goal | Class |
| :--- | :--- |
| New screen entrance | `page-fade-enter` (on all screens already) |
| Card slides in from below | `spring-slide-up` |
| Card pops in with bounce | `spring-pop` |
| List of cards enters staggered | Each child: `stagger-enter stagger-item` |
| Bottom modal drawer | `profile-modal-sheet` or `modal-card` |
| Press ripple wave | `ripple-touch` |
| Hover lift (desktop) | `hover-lift` |
| Floating illustration | `float-animation` |
| Loading placeholder | `skeleton skeleton-card` |
| Premium glint | `shimmer-once` |
| Success tick bounce | `success-check-anim` |
| Success ring expand | `success-ring-pulse` |
| Number rolls in | `number-roll` |
| Spring button | `elastic-button` |
| Tab content fade | `tab-content-fade` |
| Toast from bottom | `toast-banner` |
| Live status dot | `pulsing-dot green/amber/red` |
| Hazard pulse | `hazard-pulse-border` |
| Voice active | `pulse-audio` |
| Breathing icon | `pulse-soft` |

---

## File Locations

| File | Role |
| :--- | :--- |
| `src/styles/theme.css` | All @keyframes, global classes, accessibility overrides |
| `src/components/DeviceFrameWrapper.jsx` | Screen push/pop slide transitions |
| `src/utils/haptics.js` | Audio feedback that pairs with visual animations |

---

## Future Roadmap

- **View Transitions API** — migrate screen push transitions to `document.startViewTransition()` for GPU-accelerated native quality
- **Framer Motion** — for gesture-based panels, `AnimatePresence` on list re-orders
- **Swipe Back Gesture** — `touch-action: pan-y` + JS touch tracking for iOS-style edge swipe navigation
