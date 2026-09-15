# Hymnal Engine

- Status: Verified local prototype
- Date: 2026
- Medium / tools: React, JavaScript, Vite, Strudel, Web Audio, Three.js, Codex
- Role: Concept, product design, interaction, and implementation
- Link: Local prototype available on request

## Short description

Hymnal Engine is a local-first audiovisual instrument where music, reactive
visuals, and transparent overlays can be composed together, performed live,
and revised through specialist AI patches.

## What I explored

I explored how generative agents can change a live creative system without
taking authorship or control away from its performer.

## What I made

The working prototype connects Strudel pattern work, live Web Audio analysis,
Three.js visuals, persistent scenes, and an independent performance output.
Music, visual, and overlay specialists return small validated `AgentPatch`
proposals against a shared `SceneSpec`. Every change can be inspected, applied,
or rejected before it reaches the live scene.

## Documentation

- Hero image: `samples/hymnal-engine/hero.png`
- Demo video: `samples/hymnal-engine/demo.mp4`
- Supporting views: `samples/hymnal-engine/workbench.png` and `samples/hymnal-engine/output.png`
- Process material: `docs/`, `DESIGN-BRIEF.md`, and `DECISIONS.md` in the source project

## Verification

- Automated application tests and the production build pass.
- A live Codex-backed session generated and applied separate music, visual, and overlay patches.
- The generated scene and all three patch histories survived a full reload.
- The clean output route rendered the performance in a separate browser view.
- The demo contains browser audio captured from the running instrument.

## Product direction

The current release is a local browser prototype. A later productization track
can evaluate a native wrapper or Swift implementation, including the existing
Strudel-to-Swift research, for desktop and app-store distribution. That work is
direction, not a feature claimed by this release.

## Credits and access

- Collaborators: None recorded
- Credits: Uses the project’s documented donor and licensing notes
- Accessibility notes: The interface respects reduced-motion preferences; the portfolio includes still images as a non-audio explanation of the performance.
