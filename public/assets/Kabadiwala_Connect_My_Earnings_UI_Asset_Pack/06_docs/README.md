# Kabadiwala Connect — My Earnings UI Asset Pack

Source: uploaded screenshot `tab_my_earnings.png` (853×1844).

## What is included
- Exact source and bezel-free screen references
- App screen exports (1x / 3x)
- Earnings hero, chart, header, transaction list, rows, thumbnails, CTA and bottom-nav references
- Extracted decorative plant and audio-button references
- SVG utility icons for production reconstruction
- Responsive web reference board and wide module references
- Design tokens and content model
- Asset manifest

## Production-perfect implementation
Do NOT ship the screenshot as a flattened UI. Treat the screenshot crops as pixel-reference material.
Build the screen from native Figma/code components:
`MyEarningsScreen → TopBar → EarningsSummaryCard → EarningsChart → RecentTransactions → TransactionRow* → ViewAllTransactions → BottomNavigation`.

Recommended component properties:
- EarningsSummaryCard: period, amount, delta, comparisonText, chartData, audioEnabled
- TransactionRow: thumbnail, material, date, amount, status
- StatusPill: Received | Pending
- BottomNavigation: Home | Bookings | Camera | Rates | Profile, active=Camera

The ₹1,240 total, +18% delta, dates and transaction amounts in the screenshot are sample content; production values should come from the earnings/transaction data layer.

## Web adaptation
For desktop/web, use a two-column or dashboard layout: summary/analytics on the left or full-width top, transaction table/list below, with the same tokens and status semantics. Do not simply stretch the mobile screenshot.

## Recommended tooling
Figma for variables/components/libraries; Illustrator for cleaning/redrawing distinctive raster illustrations; LottieFiles if the plant/audio/feedback visuals are later animated.
