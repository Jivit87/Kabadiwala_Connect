# Kabadiwala Connect — Transaction Receipt UI Asset Pack

Includes source/bezel-free references, app 1x/3x, receipt modules, logo/photo/status/action references, SVG utility icons, responsive web references, design tokens, data model, manifest and contact sheet.

Production architecture:
TransactionReceiptScreen → ReceiptDocument → ReceiptHeader → PaidToSection → ItemDetails → PaymentDetails → ThankYouBanner → ReceiptFooter → ReceiptActions.

The visible transaction number, date, recycler, authorization ID, material, weight, rate, amount and payment method are sample data. Production values must come from the verified transaction/payment record.

The receipt's scalloped/perforated edge should be rebuilt as a native vector/SVG/CSS mask, not shipped as a raster crop. Download/share should generate or share a real receipt from verified transaction data.

Web should use a centered receipt/document view with responsive actions rather than stretching the mobile screenshot.
