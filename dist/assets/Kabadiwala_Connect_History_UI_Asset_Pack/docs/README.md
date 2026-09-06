# Kabadiwala Connect — History UI Asset Pack

Source screenshot: 853 × 1844px.

## Included
- Exact source/reference screenshot
- Bezel-free mobile reference
- Header + filter tabs
- All transaction rows and thumbnail references
- Status references: Completed, Handed Over, Listed, Disputed
- Earnings Summary card
- Bottom navigation
- 900px + 3× app exports
- Desktop/web reference board
- Desktop transaction table reference
- Wide web module references
- Reusable SVG icons
- Design tokens
- Component/property model
- Asset manifest
- Contact sheet

## Recommended component architecture

HistoryScreen
├── TopBar
├── HistoryHeader
│   └── FilterButton
├── HistoryFilterTabs
│   ├── All
│   ├── Active
│   └── Completed
├── TransactionList
│   ├── TransactionCard
│   ├── TransactionCard
│   ├── TransactionCard
│   └── TransactionCard
├── EarningsSummaryCard
└── BottomNavigation

TransactionCard properties:
- thumbnail
- material
- weight
- date
- lotId
- amount
- status
- clickable

Status variants:
- completed
- handed-over
- listed
- disputed

## Production behavior
- Transaction data, amounts, dates and lot IDs should be loaded from the user's transaction/lot store.
- The screenshot's ₹312, ₹280, ₹510 and ₹190 values are reference examples only.
- Filter tabs should actually filter the transaction collection.
- The filter icon should open real filtering/sorting controls.
- Tapping a transaction should open the lot/transaction detail screen.
- "View Earnings Summary" should navigate to the earnings summary.
- Status must not be communicated by color alone; preserve text and icon/shape cues.
- Keep the transaction amount prominent for fast scanning.
- Use real text layers rather than flattened screenshot text for localization/accessibility.

## App vs Web
Mobile:
- stacked transaction cards
- large thumbnails
- amount and status right-aligned
- bottom navigation

Web:
- use a responsive transaction table or wide cards
- keep material, weight, date, lot ID, amount and status visible
- support filters/sorting without copying the phone layout

## Asset fidelity
Screenshot crops are faithful references, not original vectors/fonts/assets. Transaction photos are references derived from the supplied screenshot. For production, use original/user-captured lot media or approved image assets.

## Recommended tools
Figma is the master design-system tool: components, variables, auto layout and shared libraries are appropriate for this cross-platform system. Figma documents variables as reusable values and libraries as collections of components, styles and variables that can be reused across files. citeturn0search0turn0search2turn0search5

For distinctive raster artwork, redraw/vectorize instead of shipping a flattened crop. Adobe Illustrator's Image Trace converts raster artwork into editable vector graphics and provides tracing controls. citeturn0search14

If the history screen later gets animated status transitions or filter motion, LottieFiles supports Figma animation export and developer handoff, including dotLottie and Lottie JSON outputs. citeturn0search1
