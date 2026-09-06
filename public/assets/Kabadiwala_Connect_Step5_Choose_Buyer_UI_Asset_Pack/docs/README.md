# Kabadiwala Connect — Step 5 Choose a Buyer Asset Pack

Source screenshot: 900 × 1747px.

## Included
- Exact screenshot/reference
- Bezel-free mobile reference
- App crops for all major UI regions
- Buyer-card, badge, metadata, radio and verification references
- App 900px and 3× exports
- Desktop/web reference board
- Wide web module references
- Reusable SVG icon set
- Design tokens
- Asset manifest
- Contact sheet

## Recommended production component architecture

CreateLotFlow
 ├─ TopBar
 ├─ LotProgressStepper(step=5)
 ├─ BuyerIntro
 ├─ LotSummaryPill
 ├─ BuyerList
 │   ├─ BuyerCard / best-match
 │   ├─ BuyerCard / default
 │   └─ BuyerCard / default
 ├─ VerifiedRecyclersBanner
 └─ BuyerSelectionFooter
      └─ PrimaryCTA

BuyerCard properties:
- buyerName
- pricePerKg
- distanceKm
- verified
- rating
- bestMatch
- selected

States:
- default
- selected
- best-match
- best-match + selected

## Important production behavior
- Prices and rankings must come from live/product pricing logic, not screenshot constants.
- "Best Match" should be backed by transparent matching criteria in the actual product.
- Selecting a buyer updates the selected state and downstream sale total.
- Verified status should not rely on color alone; keep the shield/check + text.
- The bottom selection area should remain reachable and have a 48dp+ touch target.
- Keep buyer price visually prominent for low-literacy / fast scanning.

## App vs Web
Mobile:
- single-column cards
- large touch targets
- bottom selection CTA
- concise metadata

Web:
- wider buyer comparison cards or a responsive table/card grid
- preserve price, distance, authorization/verification and rating hierarchy
- do not stretch the phone screenshot

## Asset fidelity
All screenshot crops are faithful visual references. They are not original source vectors/fonts/assets. Recreate text and controls natively in Figma/code. Redraw distinctive artwork as editable SVG where required.

## Recommended tooling
Figma is the master source of truth: components, variables, styles, auto layout and shared libraries are appropriate for this cross-platform system. Figma's documentation specifically describes variables as reusable values and libraries as shared components/styles/variables. citeturn0search0turn0search2turn0search5

For distinctive raster artwork, vectorize/redraw it in Illustrator rather than shipping a flattened screenshot.

For future buyer-selection motion or status animations, LottieFiles supports Figma-to-Lottie export and developer handoff. citeturn0search1
