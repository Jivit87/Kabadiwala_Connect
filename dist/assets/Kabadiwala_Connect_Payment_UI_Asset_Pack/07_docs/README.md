# Kabadiwala Connect — Payment UI Asset Pack

This pack contains screenshot-faithful reference crops for the Payment screen, app exports, a web reference board, design tokens and a manifest.

Production rule: do NOT ship the entire screenshot as the UI. Rebuild the top bar, amount card, payment-method cards, cash-received state, amount row, CTA, typography and controls as Figma/code components. Redraw distinctive cash/UPI artwork as SVG/AI when possible.

Component architecture:
PaymentScreen
- TopBar / BackButton / Title
- AmountSummaryCard
- PaymentMethodSelector
  - Cash (selected)
  - UPI
- CashReceivedBanner
- PaymentAmountRow
- ConfirmPaymentButton
- ConfirmationSafetyHint

App: preserve large amount, obvious method selection, receipt confirmation and large CTA; use Noto Sans Devanagari for Hindi/Marathi localization.

Web: create a responsive handover/payment panel instead of stretching the mobile screenshot. Reuse the same tokens and artwork.

Tooling: Figma for components/variables/libraries; Illustrator for vector cleanup/redraw; LottieFiles for optional payment-success motion.
