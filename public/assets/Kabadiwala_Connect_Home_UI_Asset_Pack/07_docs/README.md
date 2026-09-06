# Kabadiwala Connect — Home Screen UI Asset Pack

Source: user-supplied 740×1600 screenshot.

## What is extracted
- Exact reference crops for brand lockup/mark, pickup hero artwork, four feature illustrations, notification/location/market icons, and bottom-navigation icons.
- App reference exports and a web reference board.
- Visual design-token reconstruction for color, spacing, radius and typography.
- Asset manifest for development handoff.

## Production rule
Do NOT ship the screenshot itself as the UI.

Rebuild these as native Figma/code components:
- Header, greeting/location row
- Hero carousel/card
- Feature cards
- Market Trends row
- Bottom navigation
- Buttons, chevrons, icon containers
- All text

Use the supplied illustration crops as visual references. The screenshot does not contain enough source resolution to guarantee pixel-perfect original vectors. For a genuinely production-perfect result, redraw the distinctive illustrations/logo as SVG/AI artwork or obtain the original source vectors.

## App
Recommended:
- Android/iOS: SVG/WebP/PNG depending on artwork
- 3x/4x source for mobile raster exports
- 48dp minimum touch target
- Keep the 5-tab navigation as native components
- Support Hindi/Marathi/English using Noto Sans Devanagari + Inter/Noto Sans

## Web
Do not simply stretch the mobile screen.
Use the same tokens and illustration library, but create a responsive desktop layout:
- max-width content container
- wider hero banner
- 2–4 column card grid as appropriate
- desktop navigation/sidebar/header as a separate component
- preserve the same brand colors, illustration language and semantic states

## Recommended tools
1. Figma — master design system, components, variants, variables and shared libraries.
2. Adobe Illustrator — professional vector redraw / cleanup and SVG export.
3. LottieFiles for Figma — motion assets and developer handoff where animation is required.
4. Phosphor/Lucide/Iconify — generic UI icons; use custom KC artwork for brand-distinctive illustrations.

## Fidelity
'Extracted' means faithfully cropped from the provided screenshot. It does not mean the crop is the original source artwork.
