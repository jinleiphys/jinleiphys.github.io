# Unresolved: Color Banding / Abrupt Color Transition on Homepage

## Problem
On the homepage, there is a visible horizontal color boundary. The top portion (sidebar area) shows the blue gradient from the liquid-bg, but below the sidebar content the left side appears white/lighter, creating a sharp color split.

The issue appears at the boundary where the `.sidebar.sticky` element content ends. Below that point, the left column area looks distinctly different (lighter/whiter) than the right content area.

## Key Observation (NOT YET INVESTIGATED)
The sidebar element (`div.sidebar.sticky`) only extends as far as its content (author profile). Below it, the left 2/12 column area is empty. The RIGHT side has glass-card elements with `backdrop-filter: blur(30px)` and `background: rgba(255,255,255,0.35)` which tint/blur the background differently. The LEFT empty area shows the raw background. This **asymmetry between glass-filtered vs raw background** might be the actual cause of the visible color difference - NOT the blobs or base gradient.

The "banding" may actually be the contrast between glass-covered areas and non-glass areas.

## Attempted Solutions (all failed)

### Attempt 1: Soften blobs (commit 333756a)
- Increased blur 90px -> 160px
- Reduced opacity 0.7 -> 0.4
- Changed mix-blend-mode from multiply to normal
- Enlarged blobs, pushed further off-screen
- Result: Colors became too washed out, bottom still white

### Attempt 2: Restore colors + layered base gradient (commit c75db25)
- Restored original #a1c4fd/#c2e9fb colors and multiply blend
- Added multi-layer radial gradients to `.liquid-bg` base
- Moderate blur (120px)
- Result: Still had visible color bands

### Attempt 3: Radial-gradient blobs (commit cf49447)
- Changed blob backgrounds from solid to `radial-gradient(circle, color, transparent 70%)`
- Richer multi-layer base gradient
- blur 200px, opacity 0.35
- Result: Still had color bands

### Attempt 4: Uniform blue base gradient (commit 00f0ca2)
- Base: `linear-gradient(135deg, #c9d6f0 -> #cdd9ee)` - uniform blue everywhere
- Blobs: solid colors with 150px blur, 0.5 opacity
- Result: STILL has the issue - left side below sidebar is lighter

## Next Steps to Try
1. **The glass card effect hypothesis**: The right side content is inside `.glass-card-section` with `backdrop-filter: blur(30px)` + white-tinted background. This makes the right side look different from the left. The left side without glass shows the raw gradient. This contrast creates the visible split. Fix: add a subtle glass panel or background element to the sidebar column area, or make the sidebar extend full height.
2. **Check if Susy grid `@include span(2 of 12)` outputs a background** on the sidebar column
3. **Try making the sidebar full-height** with matching glass treatment
4. **Alternative**: remove backdrop-filter from content cards and use solid semi-transparent backgrounds instead

## File Locations
- Blob/gradient styles: `_sass/_glassmorphism.scss` (lines 37-81)
- Sidebar styles: `_sass/_sidebar.scss`
- Glass card mixin: `_sass/_glassmorphism.scss` (line 14, `@mixin glass-card`)
- Sticky utility: `_sass/_utilities.scss` (line 351)
- Page layout: `_sass/_page.scss`
- Variables: `_sass/_variables.scss` ($background-color is transparent)
- Layout template: `_layouts/single.html`
- Sidebar template: `_includes/sidebar.html`
