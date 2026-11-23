# Project memory

## Product intent & audience

- Multi-step form/order submission app with pages: beranda (home), detail pesanan (order detail), formulir (form), tinjauan (review), sukses (success).
- Has a PRD defining requirements including a submission deadline.
- Three request statuses exist in the workflow.
- User-facing content and documentation written in Bahasa Indonesia.

## Brand personality & voice

- Bahasa Indonesia for user-facing text and project docs (e.g., changelog).
- Professional, clear, production-oriented tone.

## Visual design & UX direction

- Top navigation bar with a working back button; behavior varies per page.
- Demo controls available (likely a demo/testing mode).
- Global design guidance lives in `.bolt/prompt` (beautiful, production-worthy, non-cookie-cutter).

## Decisions, constraints & rationale

- Framework: Vite + React; styling via Tailwind; icons via lucide-react; imports use `@/` path alias → `src/`. (See `.bolt/prompt` for authoritative constraints.)
- Client-side data persistence in the browser (likely localStorage).
- Changelog uses "Keep a Changelog" format, written in Bahasa Indonesia, for easy future version additions.
- Back-button bug fixed in v0.2.0; initial release documented as v0.1.0.

## Open questions & assumptions

- Exact domain/purpose of "pesanan" (order/request) not fully specified.
- Specific names/definitions of the three request statuses unknown.
- PRD contents not directly available; details inferred from changelog.
- Whether app targets internal staff, public users, or both is unconfirmed.