# OBS Studio

- Status: In progress
- Date: 2026
- Medium / tools: HTML, CSS, JavaScript, Node.js, OBS Browser Sources, WebRTC
- Role: Creator, designer, and developer
- Link: Local prototype available on request

## Short description

OBS Studio is a local control panel and toolkit for browser-based OBS sources.
It lets a performer create and tune reusable overlays, widgets, tickers, callers,
and visual tools while OBS remains responsible for scenes, recording, and
streaming.

## What I explored

I explored how a live-production tool can expose powerful visual controls without
turning the performer’s workspace into a dense technical dashboard.

## What I made

The system uses independent asset folders, source contracts, instance settings,
live browser-source URLs, transparent backgrounds, and a shared runtime for
connecting the panel to sources. It includes a guest caller path, Pattern Tiler,
subtitle tooling, and a growing library of editable widgets.

## Documentation

- Hero image: To select from the dashboard
- Demo video: To record in OBS
- Screenshots: Dashboard and Browser Source examples
- Process material: `panel/DESIGN_DIRECTION.md` and source manifests

## Credits and access

- Collaborators: None recorded
- Credits: See the source project’s dependency and donor notes
- Accessibility notes: Controls should be tested with keyboard and visible state; live visual output is supplemental rather than required information
