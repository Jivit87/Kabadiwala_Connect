# Kabadiwala Connect — Step 2: Select Scrap Category UI Asset Pack

## Screen
Create Lot / Step 2 of 5:
1. Photo — complete
2. Category — active
3. Weight
4. Value
5. Buyer

## Category set shown
- CRT TV
- LCD Display
- PCB (Circuit Board) — selected in reference
- Cables & Wires
- Car Battery
- Motor & Magnet
- Mixed Plastic
- Other Items

## Extracted
- Exact source screenshot
- Bezel-free app reference
- Top bar
- 5-step progress state
- Captured-photo card and thumbnail
- Category heading
- Full category grid reference
- Individual category illustration references
- Selected PCB state
- Change action
- Next CTA
- App 900px + 3x references
- Web reference board and wide references
- Design tokens + asset manifest

## Production architecture
CreateLotCategory
├── TopBar
├── LotProgressStepper
├── CapturedPhotoCard
│   ├── Thumbnail
│   └── Change
├── CategoryQuestion
├── CategoryGrid
│   └── CategoryCard
│       ├── Illustration
│       ├── Label
│       └── SelectedState
└── NextButton

## Figma recommendation
Make `CategoryCard` a component set with:
- `category`: CRT / LCD / PCB / Cables / Battery / Motor / MixedPlastic / Other
- `state`: default / selected
- `size`: mobile / desktop if needed
- optional `subtitle`: true/false

Use a shared `LotProgressStepper` component across Steps 1–5. Use variables for spacing, colors and mobile/desktop modes.

## App
Keep category cards large and visually distinct for low-literacy users. Pair every illustration with a text label; do not rely on imagery alone. Preserve the large touch targets and the selected check/border state.

## Web
Use the same category component library in a responsive 2–4 column grid depending on viewport. The mobile grid should not simply be stretched to desktop.

## Artwork fidelity
The screenshot crops are faithful references. They are not original editable vectors. For production, redraw/clean the distinctive category illustrations as SVG/AI assets or obtain original vector sources.

## Tooling
Figma: components, variants, variables and libraries.
Adobe Illustrator: vector redraw/cleanup.
LottieFiles: optional category-selection feedback animation.
