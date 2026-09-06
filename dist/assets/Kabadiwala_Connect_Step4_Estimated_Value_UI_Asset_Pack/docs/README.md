# Kabadiwala Connect — Step 4 Estimated Value Asset Pack

Source: 853 × 1844px screenshot.

## Asset categories
1. Exact screenshot/reference
2. Bezel-free app reference
3. App UI crops
4. PCB icon reference
5. Estimated-value emphasis/sparkle reference
6. Street-rate arrow/icon reference
7. App 900px + 3× exports
8. Desktop/web reference board
9. Wide web module exports
10. Production-oriented SVG utility icons
11. Design tokens and component properties

## Native component architecture
CreateLotFlow
 ├─ TopBar
 ├─ LotProgressStepper(step=4)
 ├─ ValueHero
 │   ├─ MaterialIcon
 │   ├─ EstimatedValueLabel
 │   ├─ EstimatedAmount
 │   ├─ ValueEmphasis
 │   ├─ ValueBasis
 │   └─ ListenToValueButton
 ├─ BreakdownCard
 ├─ StreetRateInsight
 └─ FindBuyerCTA

## Important production rule
The screenshot's ₹312, 2.5 kg, ₹125/kg and ₹18-above-street-rate values are visual/reference examples. Production values must be data-driven and calculated from the current pricing engine.

The PCB icon and decorative value accents in this pack are references/derived recreations, not original source vectors. Redraw distinctive artwork as editable SVG in Illustrator or Figma.

## Accessibility / low-literacy
- Keep the numeric value visually dominant.
- Preserve the audio action.
- Do not make color the only way to communicate a better/worse price.
- Use real text, not flattened text inside screenshots, for localization and accessibility.
- Maintain 48dp+ touch targets.

## App vs web
Mobile: single-column, touch-first.
Web: use the same components in a wider responsive composition; do not stretch the phone screenshot.

## Tooling research
Figma supports reusable components, variables, styles and shared libraries for scalable design systems. Variables can represent design tokens and responsive modes. citeturn0search0turn0search4turn0search2
Adobe Illustrator Image Trace can convert raster artwork into editable vector graphics and provides enhanced tracing controls. citeturn0search8turn0search11
LottieFiles supports Figma animation export and developer handoff if motion is added later. citeturn0search1
