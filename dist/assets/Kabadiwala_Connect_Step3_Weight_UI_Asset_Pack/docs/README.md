# Kabadiwala Connect — Step 3 Enter Weight Asset Pack

Source screenshot: 853 × 1844px.

## Included
- Exact source/reference screenshot
- Bezel-free app reference
- App crops for every major UI region
- PCB category thumbnail reference
- Three Quick Select bag illustrations, including derived transparent reference versions
- App exports at 900px and 3×
- Wide web/reference board and module exports
- Recreated SVG utility icons for native rebuilding
- Design tokens + asset manifest

## Recommended production architecture
Build this screen as native components rather than shipping the screenshot as a flattened image:

CreateLotFlow
  └─ TopBar
  └─ LotProgressStepper(step=3)
  └─ SelectedCategoryCard
  └─ WeightEntry
      ├─ WeightStepper
      ├─ WeightValue
      └─ WeightStepHint
  └─ OrDivider
  └─ ConnectScaleCard
  └─ QuickSelect
      ├─ QuickSelectCard(~5 kg)
      ├─ QuickSelectCard(~10 kg)
      └─ QuickSelectCard(~15 kg)
  └─ PrimaryCTA(Continue)

## Important interaction behavior
- +/- changes weight in 0.5 kg increments.
- Connect Scale launches Bluetooth weighing-scale pairing.
- Quick Select sets an approximate weight; it should remain visually distinguishable from an exact scale reading.
- Continue moves to Step 4 / Value.
- Keep the weight number visually dominant.
- Use large touch targets (48dp minimum).
- Do not hard-code screenshot text into an image; use real text for accessibility, localization and responsive layout.

## App + Web
Mobile should preserve the single-column, touch-first hierarchy.
Web should adapt the same components into a wider layout rather than simply stretching the phone screenshot.

## Asset fidelity
The screenshot crops are pixel-faithful references. They are NOT the original source vectors/fonts/assets. The transparent illustration exports are derived references. For a truly production-perfect result, redraw/rebuild distinctive artwork as editable SVG/illustration layers.

## Recommended tools
- Figma: master design system, variables, components, variants and shared libraries.
- Adobe Illustrator: redraw/vector cleanup of distinctive illustrations.
- LottieFiles: optional for future motion/animation handoff.

Research basis: Figma documents reusable libraries, variables and components as the foundation for scalable design systems; Adobe documents Image Trace for converting raster artwork into editable vectors; LottieFiles documents Figma animation export and developer handoff.
