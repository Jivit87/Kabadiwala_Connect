# Kabadiwala Connect — Sync Status Asset Pack

Source screenshot: 853 × 1844px.

## Included
- Exact source screenshot
- Bezel-free app reference
- App crops for status, offline banner, queue, each lot row, illustration, CTA and navigation
- Reference lot thumbnails
- Sync safety illustration reference
- 900px + 3× app exports
- Desktop/web reference board
- Wide web module references
- Reusable SVG sync/offline/navigation icons
- Design tokens
- Component/property model
- Asset manifest
- Contact sheet

## Recommended native component architecture

SyncStatusScreen
├── TopBar
├── SyncStatusHeader
│   └── SyncStatusPill
├── OfflineInfoBanner
├── SyncQueue
│   ├── SyncQueueCard
│   ├── SyncQueueCard
│   └── SyncQueueCard
├── SyncSafetySection
│   ├── SyncSafetyIllustration
│   ├── DataSafeMessage
│   └── TrySyncButton
└── BottomNavigation

SyncQueueCard properties:
- thumbnail
- material
- weight
- createdAt
- lotId
- amount
- syncState

Sync states:
offline / waiting / syncing / synced / failed

## Production behavior
- Queue rows are data-driven; the screenshot's lot IDs, amounts and times are reference examples.
- "Try syncing again" should trigger the real outbox synchronization process.
- Automatic syncing should be controlled by connectivity state and the app's sync engine.
- Keep the offline state reassuring rather than alarming.
- Pending count should update dynamically.
- Preserve local data until successful server acknowledgement.
- Use idempotent sync operations to avoid duplicate lots/transactions.
- Do not use the screenshot illustration as a flattened UI layer.

## App + Web
Mobile: prioritize the pending queue, clear offline state, and one-tap retry.
Web: use a wider sync dashboard/queue table while retaining the same semantic states and visual tokens.

## Asset fidelity
Screenshot crops are faithful references, not original source vectors. The illustration and thumbnails are derived/reference assets. Recreate distinctive artwork as editable vectors for production.

## Tooling research
Figma supports reusable components, variables, styles and shared libraries for scalable design systems. Variables can represent reusable values and different modes, while libraries let shared components and variables update across consuming files. citeturn0search0turn0search2turn0search4

Adobe Illustrator Image Trace can convert raster artwork into editable vector graphics, useful for redrawing the distinctive offline illustration. citeturn0search8

For future sync animations, LottieFiles supports Figma animation export and developer handoff, including dotLottie/Lottie JSON outputs. citeturn0search1
