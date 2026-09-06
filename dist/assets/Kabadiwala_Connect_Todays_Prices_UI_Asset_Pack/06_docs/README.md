# Kabadiwala Connect — Today's Prices UI Asset Pack

Source screenshot: Today's Prices / Rates screen.

## Included
- Exact source and bezel-free reference
- Full app screen 1x / 3x
- Header, location selector, update context, price-list card
- Six material price-row references
- Six material thumbnails
- Up/down/stable indicators
- Audio, location, clock, info, chevrons and bottom-nav SVGs
- Desktop/web responsive reference board and wide modules
- Design tokens + data model + asset manifest

## Production architecture
`TodaysPricesScreen → TopBar → LocationSelector → UpdateContext → PriceList → PriceRow* → PriceBasisBanner → BottomNavigation`

PriceRow properties:
`material, subtitle, thumbnail, pricePerKg, trend, changePct, selected/pressed state`

Trend must not rely on color alone: pair the direction with an arrow and percentage/Stable label.

## Production data
The visible prices, location, transaction count, and update copy are screenshot sample data. Production values must be supplied by the price service/data layer.

## Web
Do not stretch the mobile screenshot. Use a responsive dashboard/table: location and update context at top, price table/grid in the main content area, with filters or material detail on larger screens.
