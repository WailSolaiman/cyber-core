# Design System Documentation: High-End Cybersecurity Editorial

## 1. Overview & Creative North Star
### The Kinetic Perimeter
This design system is built on the concept of "The Kinetic Perimeter." In the world of high-stakes cybersecurity, the interface should not feel like a static website; it must feel like a live tactical environment. We are moving away from the friendly, rounded "SaaS" aesthetic and embracing a sharp, authoritative, and multi-layered digital brutalism.

**The Creative North Star** is the tension between deep, infinite space and razor-sharp data nodes. We achieve this through:
- **Intentional Asymmetry:** Breaking the traditional 12-column grid to create a sense of scanning through a sophisticated terminal.
- **Tonal Depth:** Using a "dark-on-dark" layering strategy that relies on luminance rather than color to define hierarchy.
- **Technical Precision:** Every element—from the 0px corners to the 1px line art—must look mathematically perfect and intentionally placed.

---

## 2. Colors & Surface Architecture
The palette is a study in midnight values, punctuated by a singular, high-energy accent.

### Surface Hierarchy & Nesting
Depth is achieved through the stacking of `surface-container` tokens. Treat the UI as a series of physical layers where each inner container defines its importance by its tonal shift.

- **Background (`#0f131f`):** The foundation. Everything emerges from this deep void.
- **Surface Container Lowest (`#0a0e1a`):** Used for "inset" areas or background sections that need to feel receded.
- **Surface Container High (`#262937`):** Reserved for elevated interactive elements or floating dashboard modules.

### The "No-Line" Sectioning Rule
Prohibit the use of 1px solid horizontal lines to separate major page sections. Boundaries must be defined solely through background color shifts (e.g., a `surface_container_low` section transitioning into a `surface_dim` section).

### The Glass & Gradient Rule
To prevent the dark UI from feeling flat or "muddy," use **Glassmorphism** for floating overlays. Apply `surface_container` with a `backdrop-filter: blur(12px)` and 60% opacity.
- **Signature Glow:** For critical nodes and primary CTAs, use a subtle radial gradient of `primary_container` (#05ff4b) at 10% opacity to create a "bloom" effect behind the element.

---

## 3. Typography: Technical Authority
We utilize a high-contrast typographic scale to create an editorial feel that commands attention.

- **Headings (Space Grotesk):** This is our "Technical Voice." Its geometric, wide apertures feel like a futuristic terminal. Use `display-lg` for hero statements, intentionally overlapping background line art to create depth.
- **Body (Outfit / Plus Jakarta Sans):** Our "Narrative Voice." Clean and highly legible. Use `body-md` for standard descriptions, maintaining a generous `line-height` (1.6) to ensure the dark background doesn't swallow the text.
- **Labels (Space Grotesk):** Always uppercase with `0.05em` letter spacing. These should feel like data tags in a military-grade HUD.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows have no place here. Depth is mechanical, not natural.

- **The Layering Principle:** Place a `surface_container_highest` card on a `surface_container_low` background. This "Step-Up" method creates hierarchy without visual clutter.
- **Ambient Glows:** When an element must "float," use a shadow tinted with `surface_tint` (#00dbe9) at 5% opacity. The blur should be massive (40px+) to mimic light bleeding from a screen rather than a physical shadow.
- **The Ghost Border:** For component definition, use the `outline_variant` (#3b494b) at 1px width. It must be subtle—a whisper of a boundary that only appears upon focused inspection.

---

## 5. Components

### Buttons: The Critical Path
- **Primary:** Background of `primary_container` (#05ff4b), text color `on_primary` (#00363a). 0px corners. On hover, add a 4px outer glow of the same color.
- **Tertiary:** No background. 1px ghost border using `outline`. High-tech, low-profile.

### Dashboard-Inspired Cards
- **Structure:** Use `surface_container_low`. 0px corners.
- **Accents:** A single 1px vertical line of `primary_container` on the left edge to denote an "active" or "critical" status.
- **Spacing:** No internal dividers. Separate content using the spacing scale (e.g., 24px gaps) to let the data breathe.

### Input Fields
- **State:** Resting state uses `surface_container_lowest`.
- **Focus:** The border transitions from `outline_variant` to `primary_container`. No rounded corners. The cursor should be a solid block of Cyan.

### Network Line Art
- **Execution:** 1px strokes using `outline_variant`. These lines should flow diagonally between sections, connecting "nodes" (small 4x4px squares of `primary`). This guides the user's eye through the asymmetrical layout.

---

## 6. Do’s and Don’ts

### Do
- **Do** use `0px` border-radius for everything. Sharpness is our visual shorthand for "Precision."
- **Do** lean into white space. Dark UIs require more "air" than light UIs to avoid cognitive load.
- **Do** use asymmetry. Place a headline on the left and its supporting body text on the far right of the grid to create a sophisticated, editorial pace.

### Don't
- **Don't** use green for "Success" or red for "Error" in their standard bright forms. Use `primary_container` for all positive/critical actions and `error` (#ffb4ab) only for catastrophic system failures.
- **Don't** use pure black (#000000). It kills the depth of the "multi-layered" surfaces. Always use the midnight blues provided.
- **Don't** use standard "box-shadow" presets. If an element doesn't feel separated enough, adjust its `surface-container` level instead.