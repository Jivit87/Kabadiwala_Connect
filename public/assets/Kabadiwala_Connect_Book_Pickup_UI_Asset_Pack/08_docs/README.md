# Kabadiwala Connect — Book a Pickup UI Asset Pack

Source screenshot: Image 7.png (853×1844)

## What is included
- Exact source/reference screen and bezel-free app reference.
- Granular UI crops for top bar, location selector, next pickup, date selector, each kabadiwala card, statuses, CTAs and bottom navigation.
- Avatar/date reference crops.
- Clean SVG utility icons redrawn for production use.
- 1× and 3× app reference exports.
- Wide web reference modules and a web reference board.
- Figma-ready design tokens and a runtime content model.
- Asset manifest.

## Recommended Figma architecture
BookPickupScreen
→ AppTopBar
→ LocationSelector
→ NextPickupCard
→ DateSelector
→ KabadiwalaList
→ KabadiwalaCard*
→ BottomNavigation
→ FloatingCameraAction

### KabadiwalaCard properties
name, initials/avatar, rating, reviewCount, distanceKm, status,
verified, materials[], selected/available state, CTA state.

### Status variants
available / few-slots / fully-booked

### CTA variants
primary / outline / disabled

## Production rules
1. Do not ship the full screenshot as UI. Rebuild text, layout, cards, buttons and navigation as native Figma/code components.
2. Avatar initials and names are runtime data.
3. Ratings, distance, availability and time slots are runtime data.
4. "Verified" must have text/icon semantics and not depend on color alone.
5. Fully-booked CTA must be disabled and keyboard/screen-reader accessible on web.
6. Date selection must drive real availability.
7. Location must be a real selectable location, not flattened screenshot text.
8. The screenshot is a visual reference; distinctive brand artwork should be redrawn as vector assets if needed.

## Suggested web adaptation
Desktop: two-column layout:
- Left: date/location controls + kabadiwala list
- Right: selected pickup summary / map or time-slot detail
At tablet widths, collapse to one column. Preserve the same token values and component states.

## Tooling research
- Figma variables, components and libraries are appropriate for a single source of truth across app + web.
- Adobe Illustrator Image Trace is useful for converting raster artwork into editable vectors, followed by manual cleanup.
- LottieFiles is appropriate if this flow later needs motion/animation and developer handoff.

Research links are included in the assistant response accompanying this pack.
