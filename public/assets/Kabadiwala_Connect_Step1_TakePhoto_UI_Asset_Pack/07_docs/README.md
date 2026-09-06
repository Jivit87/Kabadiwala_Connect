# Kabadiwala Connect — Step 1: Take a Photo UI Asset Pack

## Screen
Create Lot / Step 1 of 5:
1. Photo
2. Category
3. Weight
4. Value
5. Buyer

## Extracted
- Exact source screenshot
- Bezel-free app reference
- Header
- 5-step progress indicator
- Camera/viewfinder reference
- Instruction overlay
- Flash control
- Shutter control
- Gallery control
- Clear-photo guidance card
- Android navigation reference
- Individual icon references
- App 900px + 3x references
- Web reference board
- Wide web-oriented references
- Design tokens and manifest

## Production architecture
CreateLotFlow
├── TopBar
├── Stepper
│   ├── Photo / active
│   ├── Category / inactive
│   ├── Weight / inactive
│   ├── Value / inactive
│   └── Buyer / inactive
├── CameraCapture
│   ├── Viewfinder
│   ├── FramingCorners
│   ├── InstructionOverlay
│   ├── FlashControl
│   ├── ShutterButton
│   └── GalleryControl
└── PhotoQualityTip

## Important production rule
The central scrap photograph is not a reusable UI illustration. In the real app it should be the live camera preview or a selected gallery image. The screenshot photo is included as a reference/test fixture only.

The framing corners, controls, stepper and text should be vector/native components. Camera permissions, flash state, gallery selection, capture state, retake and photo-quality feedback should be real interactive states.

## App
Use native camera APIs where possible. Keep the capture target large, controls at least 48dp, and provide simple Hindi/Marathi/English copy with Noto Sans Devanagari support.

## Web
For desktop, create a responsive lot-creation capture workspace with the camera/upload area as the primary panel and the stepper/progress context alongside it. Do not stretch the phone screenshot.

## Tooling
Figma: components, variables, responsive modes, shared libraries and prototype states.
Illustrator: vector cleanup/redraw for custom UI pictograms.
LottieFiles: optional capture success / scan feedback animations.

## Fidelity
The extracted crops are screenshot-faithful references, not the original editable source layers.
