# Kabadiwala Connect — Profile UI Asset Pack

Includes source/bezel-free references, app 1x/3x, profile header, avatar, identity, verified member badge, edit button, motivation banner, seven settings rows, individual icon references, SVG production icons, responsive web references, tokens, component model, manifest and contact sheet.

Production architecture:
ProfileScreen → ProfileHeader → MotivationBanner → ProfileMenuList → BottomNavigation.

ProfileMenuRow properties:
icon, title, description, destination, enabled, badge/state.

The displayed name, phone number and verification state are sample/runtime data. Keep them as editable text in Figma/code.

For web, use a responsive account/settings dashboard: identity header plus a two-column settings layout on larger screens, while preserving the same component and token system.
