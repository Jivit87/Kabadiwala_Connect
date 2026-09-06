# Kabadiwala Connect — Battery Safety Tips UI Asset Pack

## Screen
Battery safety education modal/card:
- Battery detected badge
- Quick safety tip title
- Battery handling illustration
- Keep batteries away from heat
- Listen audio control
- Cool & dry / Heat & flames comparison
- Got it
- Remind me later
- Education pagination
- Close control

## Production architecture
SafetyEducation
├── DismissButton
├── SafetyCategoryBadge
├── SafetyHeading
├── SafetyIllustration
├── SafetyRule
│   ├── Positive
│   └── Negative
├── AudioButton
├── PrimaryAction
├── SecondaryAction
└── Pagination

## Critical UX rule
This screen is a safety-education component. Keep the positive/negative distinction visually and semantically clear. Do not rely on color alone; preserve icon + text.

## App
Use a native responsive education sheet/modal. Keep the illustration large and the safety instruction short. Provide an audio action for low-literacy users. Support Hindi/Marathi/English with Noto Sans Devanagari and dynamic text layout.

## Web
Use the same content and illustration as a responsive safety modal, contextual lot/material warning, or safety education page. Do not stretch the mobile screenshot.

## Tooling
Figma: design system, variables, components, variants, responsive modes and shared libraries.
Illustrator: redraw/clean custom battery illustration and safety pictograms as SVG.
LottieFiles: optional subtle safety acknowledgement/audio-state animation.
Generic UI icons: use a consistent vector icon library.

## Fidelity
The extracted image regions are screenshot-faithful references. They are not the original editable vector/source layers.
