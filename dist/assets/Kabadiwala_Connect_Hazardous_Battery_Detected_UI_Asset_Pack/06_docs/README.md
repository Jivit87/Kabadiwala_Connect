# Kabadiwala Connect — Hazardous Battery Detected UI Asset Pack

## Included
- Exact source + bezel-free screen references
- Full app 1x/3x reference
- Camera preview test fixture
- 5-step lot progress reference
- Battery-detected badge and focus-box references
- Hazard warning bottom sheet
- Detected item card + battery thumbnail
- Safety guidelines card
- Fire / hand / recycle / shield icon references
- Close + warning + battery + chevron SVGs
- Responsive web reference board and wide modules
- Design tokens, component model, production rules, manifest and contact sheet

## Production architecture
`CreateLotFlow → CameraCapture → HazardDetectionOverlay → HazardBottomSheet → DetectedItemCard → SafetyGuidelines → GotItCTA`

## Critical implementation notes
1. The camera image in the screenshot is a TEST FIXTURE. Production must use live camera/gallery media.
2. "Battery detected" is a runtime computer-vision result. Do not hard-code this state or claim perfect detection accuracy.
3. The safety sheet is a blocking/attention state when required by the product safety policy.
4. Safety instructions should be data-driven by hazard/material type.
5. Red/orange/green must not be the only state signal; always pair color with iconography and explicit text.
6. The bottom sheet should be a native modal/bottom-sheet component with accessible dismissal and large touch targets.

## Web
Use the camera/detection preview as a responsive media panel with the hazard sheet represented as a side panel or modal. Do not stretch the mobile screenshot.

## Suggested component properties
HazardDetectionOverlay:
- detected
- material
- severity
- confidence
- boundingBox

HazardBottomSheet:
- title
- description
- detectedItem
- guidance[]
- dismissible
- primaryAction
