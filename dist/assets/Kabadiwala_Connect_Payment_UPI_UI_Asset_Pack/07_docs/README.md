# Kabadiwala Connect — Payment UPI + QR UI Asset Pack

## Extracted
- Exact screenshot reference
- Screen reference without phone bezel
- Payment summary panel
- Cash and selected UPI method cards
- Scan-to-pay panel
- QR reference
- UPI mark reference
- Share payment request control
- Payment amount row
- Confirm Payment CTA
- Back, radio, selected-check, share, edit and arrow references
- App exports
- Web reference board
- Design tokens and manifest

## CRITICAL QR NOTE
The QR extracted from the screenshot is a visual reference only. A production payment QR must be generated from the real verified payment payload at runtime/server-side. Never use a screenshot-derived QR as a live payment credential.

## Production architecture
PaymentScreen
- TopBar
- AmountSummaryCard
- PaymentMethodSelector
  - Cash
  - UPI (selected)
- ScanToPayCard
  - title
  - subtitle
  - runtime QR
  - amount
  - recycler/payee name
  - SharePaymentRequest
- PaymentAmountRow
- ConfirmPaymentButton
- SafetyHint

## App
Keep the QR large enough to scan, maintain generous quiet zone around it, and keep the amount/payee visibly tied to the payment request. Recreate controls and typography as native components.

## Web
Use a responsive two-column or centered payment panel, with QR and transaction information as separate components. Do not scale the mobile screenshot into a desktop page.

## Tooling
Figma: master components, variables, variants, responsive modes and shared libraries.
Illustrator: vector redraw/cleanup for custom illustrations.
LottieFiles: optional payment-state animations.
Generic UI icons: use a consistent vector icon library.

## Fidelity
Screenshot crops are faithful visual references. They are not the original editable source layers.
