# Drone Fields

- Status: Working prototype
- Date: 2026
- Medium / tools: TypeScript, React, Canvas 2D, IndexedDB, Vinext/Vite, Web Audio
- Role: Creator, designer, and developer
- Link: [Recorded demonstration and case study](../../samples/drone-fields/case-study.html)

## Short description

Drone Fields is a deterministic browser simulation about autonomous machines,
terrain, sites, energy, and changing environmental states. It is designed as a
small world that can be inspected, replayed, and eventually used as a basis for
an audiovisual or interactive installation.

## What I explored

I explored how a simulation can feel authored and atmospheric while remaining
deterministic enough to test, replay, and explain.

## What I made

The MVP includes a deterministic simulation loop, terrain and site state,
multiple drones, energy behavior, frozen provenance fixtures, persistence, and
a soak-test harness. The project records the simulation’s state rather than
presenting a purely decorative animation.

## Documentation

- Hero image: `samples/drone-fields/local.png`
- Demo video: `samples/drone-fields/demo.mp4` (24 seconds, silent)
- Screenshots: `samples/drone-fields/map.png` and `samples/drone-fields/inspection.png`
- Process material: `SUMMARY-2026-09-07.md`, `QA_CHECKLIST.md`, and `scripts/`

## Credits and access

- Collaborators: None recorded
- Credits: None recorded
- Accessibility notes: Simulation state should have a readable text or table view alongside visual motion

## Portfolio verification — September 15, 2026

Production build and TypeScript checks passed. Both current region runtimes
passed identical-input state/history, exact replay, and save round-trip checks.
Isolated browser checks passed for map/local continuity, keyboard selection,
reload, valid/invalid imports, replay preservation, mobile controls, and reduced
motion. The demo and screenshots were captured from the current local app.

One legacy acceptance test fails when the internal drone array is reversed:
external-event attribution follows the first array entry. Normal save/replay
verification passes; a change to attribution must preserve prior archives.

Locations remain provisional. Sources are frozen, and the optional shared-world
and local test-chain services are outside this portfolio demonstration.
