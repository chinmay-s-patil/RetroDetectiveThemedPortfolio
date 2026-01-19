# Landing Concept: **WANTED POSTER**

This is not a hero section.
It’s a **document**.

The user feels like they’ve stumbled onto a case file pinned to a corkboard.

---

## 1. Core fantasy (what the user understands instantly)

> “This is a person of interest. There’s a story here. I should investigate.”

That’s exactly what you want before they “Look around”.

---

## 2. Visual Design (what it looks like)

### Overall Layout

* Full-screen muted background:

  * Dark wood table / corkboard texture
  * Soft vignette
* Centered **aged paper poster**

  * Slight rotation (–1° to –2°)
  * Drop shadow
  * Paper grain texture

### Poster Structure (top → bottom)

#### Header

```
WANTED
```

* Big serif / slab font
* Slight ink bleed / rough edges
* Optional subtitle:

  ```
  FOR ENGINEERING CRIMES
  ```

#### Portrait Section

* Black & white or desaturated photo of you
* Rough rectangular crop
* Slight blur / film grain
* “Tape” or push-pin visuals (pure CSS)

#### Identity Block

```
NAME: CHINMAY S. PATIL
ALIAS: "CHIN DOES SIMS"
LAST SEEN: CFD LAB / TERMINAL
SPECIALTY: SIMULATION & VISUALIZATION
```

Monospaced / typewriter font works beautifully here.

#### Description Paragraph

Short, punchy, readable:

> Known for building CFD pipelines, optimization workflows, and visualization tools.
> Frequently spotted working with OpenFOAM, Python, and large datasets.
> Approached with curiosity and good documentation.

Keep this **human and slightly playful**, not cringe.

#### Charges / Skills Section

Bulleted or stamped:

* CFD & OpenFOAM
* Simulation Automation
* 3D & Scientific Visualization
* ML-assisted Optimization

Optional red “STAMP” graphic:

```
ACTIVE CASE
```

#### Reward Section (CTA)

Instead of money:

```
REWARD
INSIGHTFUL CONVERSATIONS
COLLABORATIONS
ENGINEERING WORK
```

Below that:

### Primary Button

**INVESTIGATE CASE →**

This is your “Look around”.

---

## 3. Interaction Rules (important)

* The poster is the **only strong element** on the page
* Everything else is subdued
* Only one clear CTA: *Investigate Case*
* Poster reacts slightly on hover:

  * 1–2px lift
  * Shadow deepens
* Button is clearly clickable with your white-border rule

---

## 4. Technical Implementation (clean + safe)

### Component structure

```
<WantedPosterLanding>
 ├─ PosterContainer
 │   ├─ Header
 │   ├─ Portrait
 │   ├─ IdentityBlock
 │   ├─ Description
 │   ├─ Skills
 │   └─ CTA
```

### Assets

* 1 portrait image (compressed WebP)
* Optional paper texture (CSS background)
* Optional stamp SVG (inline)

No video.
No 3D.
No heavy JS.

This will load instantly and never OOM.

---

## 5. Accessibility (don’t skip this)

* Poster is a `section` with `aria-labelledby="wanted-title"`
* CTA button has `aria-label="Investigate Chinmay Patil's work"`
* Image has alt text:

  > “Portrait photo of Chinmay S Patil styled as a wanted poster”

High contrast text on paper background.

---

## 6. Mobile Behavior (very important)

* Poster scales down proportionally
* Text wraps naturally
* Button stays large and thumb-friendly
* No hover-only interactions

On mobile, this looks **even better** than a map or arcade UI.

---

## 7. How it leads into your site

Clicking **INVESTIGATE CASE** does ONE thing:

* Transitions (fade or cut) into your **hub**
* OR scrolls down to the hub section
* OR swaps the component (poster → hub)

No fancy transition needed — a hard cut fits the “document” vibe.

---

## 8. Why this beats every other idea

* Instantly readable
* Strong theme without being busy
* Professional *and* memorable
* Zero artistic skill required
* Scales with future changes
* Feels intentional, not experimental

This is a portfolio landing **recruiters won’t skip**.

---

## 9. Optional flavor (only if you want)

* Subtle paper rustle sound on click (optional, off by default)
* Tiny footer text:

  ```
  Case File ID: CSP-2412
  ```

That’s it.