# IMPRO.SP — Design System

**IMPRO.SP** is a contemporary collective theatrical-improvisation school ("escola contemporânea de improvisação teatral") based in São Paulo, Brazil. It is a working laboratory / company-in-formation / independent cultural center — not a corporate brand. Improvisation here means theatrical language (live composition, instant dramaturgy, stage research), never a corporate icebreaker or "unlock your creativity" gimmick.

This design system was compiled from a single source-of-truth document: `uploads/improsp-design-system-v3.html` ("Sistema de Identidade Visual · v3"), a living brand book written in the school's own voice, plus 24 real font files and the school's real logo/photography embedded inside it. No Figma file, codebase, or product screenshots were provided — **there is no existing product UI**, so the "components" in this system are an original, brand-accurate primitive set (see "Intentional additions" below), not a copy of an existing interface.

If a Figma file, website codebase, or app repo exists for IMPRO.SP, attach it and this system should be extended with real screens — right now it only covers foundations + a from-scratch component set + one sample marketing page built from those foundations.

## Index

- `styles.css` — root stylesheet, imports everything below. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (`@font-face`)
- `base.css` — global reset + shared brand utility classes (`.cartao`, `.rotulo`, `.cap`, `.linha-branca`, `.carimbo`, `.fita`, `.pixo`, `.mao`, `.servico`, section background variants, etc.) — mirrors the class vocabulary of the original brand book so any raw-HTML piece can reuse it directly.
- `assets/logo/` — the real IMPRO.SP logo (PNG, transparent)
- `assets/imagery/` — 3 real application photos extracted from the source doc (poster/collage, two wall-poster "pixação" photos)
- `assets/fonts/` — the 9 real house typefaces (23 files incl. 14 HitMePunk alternates)
- `guidelines/` — 21 foundation specimen cards (Colors, Type, Spacing, Brand groups) — see the Design System tab
- `components/core/` — 5 reusable UI primitives: **Badge, Button, Card, Divider, SectionHeader**
- `ui_kits/site/` — one sample marketing page ("home" of the school's site) built from the above
- `SKILL.md` — portable skill file for use in Claude Code

## Components

- **Button** — house CTA button (primary/secondary/inverse/ghost × sm/md/lg)
- **Card** — "cartao": bordered content block (label + title + body, optional ink-fill)
- **Badge** — "carimbo": rough rubber-stamp label
- **SectionHeader** — "cap": chapter/section title (number + name + hand-written aside)
- **Divider** — "linha": inline underline highlight, the brand's #1 graphic gesture

### Intentional additions
No component library or app screenshots were provided, so this is a from-scratch set sized to the brand's actual print/social vocabulary (poster, Instagram post, program, certificate) rather than a generic web-app kit (no Toast/Tabs/Dialog/Input — nothing in the source implies a form-heavy product). All five map directly to named elements already defined in the source brand book (`.cartao`, `.carimbo`, `.cap`, the underline gesture) — none are invented conventions.

## Content Fundamentals

**Voice:** direct, generous, intelligent, "paulistana" (of São Paulo). Short sentences, present-tense verbs, theater vocabulary (*cena, escuta, ensaio, elenco* — scene, listening, rehearsal, cast) — never marketing language ("jornada transformadora" / transformative journey) or self-help language ("saia da zona de conforto" / leave your comfort zone). The school invites you to rehearsal; it does not sell you a seat. Service information (date/time/place/price/accessibility) is sacred and always complete.

Examples straight from the source, "never / always":
- Never: *"Destrave sua criatividade!"* → Always: *"Aula aberta pra quem nunca pisou num palco."* (Open class for anyone who's never set foot on a stage.)
- Never: *"Últimas vagas, corra!"* → Always: *"Turma de 16. Restam 3 lugares."* (Class of 16. 3 spots left.)
- Never: *"Metodologia exclusiva"* → Always: *"Pesquisa contínua. A gente também tá descobrindo."* (Ongoing research. We're still figuring it out too.)

**Grammar & person:** Portuguese (pt-BR) first; when bilingual, Portuguese dominant with English set smaller in concrete gray — never the reverse. Addresses the reader informally ("você" implied, not stated) — an invitation, not a pitch.

**Casing:** display type is always UPPERCASE (Affigere). Body copy is normal sentence case. Service/label text is UPPERCASE with wide tracking (the "service voice").

**Emoji:** never. The only "iconography" is hand-drawn marks (✕ for prohibitions), rubber stamps, and the pixação tag typeface — see Iconography below.

**Vibe:** a photocopied zine pinned to a rehearsal-room wall, not a startup landing page. Everything should look accumulated over time (rehearsals, posters, workshops), never delivered polished by an agency. The self-test from the source: *"Cubra o logo. Se a peça segue reconhecível pela tipografia, pela cor e pela composição, funcionou. Se depende do logo, refaz."* (Cover the logo. If the piece is still recognizable by type, color, composition, it worked. If it depends on the logo, redo it.)

## Visual Foundations

**Colors:** official palette is short and hard — black (`--tinta` #12100E), paper-white (`--papel` #EFEDE6, never screen white), red (`--vermelho` #FF0000 screen / #FF183B photo / #D81E12 print, Pantone 485), and three grays (graphite #3A3833, concrete #8C8A85, cement #D8D5CE). Mix ratio: ~70% neutral (black/white/gray), ~22% contrast, ~8% red accent — red is the *only* fixed accent (logo, one bar, one underline) and never competes with a situational accent in the same piece. Two **situational accents** exist but are explicitly NOT brand color: teal `--sup-teal` #00726B (lifted from a real painted wall, one color per campaign only) and navy `--proc-navy` #0E244B (a cross-process/scanner color-shift artifact, never a flat background). Never more than one situational accent per series.

**Type:** 5 house voices + 1 punk reserve, base 18px, brutal jumps (no middle ground between "the shout" and body text). Voice 1 Affigere (the shout — titles/posters, always uppercase, line-height .85). Voice 2 Coolvetica (the organizer — running body copy in mixed case; uppercase + wide tracking becomes the "service" voice for date/time/place). Voice 3 Libre Caslon (the thinker — quotes/manifestos/editorial, italic for quotes). Voice 4 Ducha Completa (the hand — annotations/arrows/corrections, never in text blocks). Voice 5 Te Amo Jessica (the tag — real São Paulo pixação lettering for manifestos/keywords; no fallback exists on Google Fonts, must stay embedded). Reserve: Hit me, punk! (zine/ransom lettering for aggressive one-off pieces only — jam battles, parties — never everyday voice; ships with 14 alternate letterform sets). Banned: Anton, Canva fonts, romantic/geometric startup scripts (Montserrat, Poppins). Max 4 voices per single piece.

**Backgrounds:** flat paper, ink, graphite, or poster-red section fields — never a gradient. Full-bleed real photography (documentary B&W or city-collage) appears on marketing/social pieces. A fixed, near-global grain/noise overlay (fractal-noise SVG, ~45% opacity, multiply blend) sits over nearly everything, screen and print — simulating xerox/photocopy degradation.

**Animation:** minimal. The one motion pattern in the source is a slow (30s) linear marquee scroll for a ticker strip of keywords. No easing flourishes, no bounces, no page-transition choreography — this is a print-first, mostly-static brand.

**Hover states:** simple color inversion (fg/bg swap) on buttons — no opacity fades, no lightening/darkening tricks, no shadow growth.

**Press/active states:** not specified in the source; follow the same instant-invert logic rather than a shrink/scale — motion is not part of this brand's vocabulary.

**Borders:** always solid, always heavy (2–5px), always square. Never a soft 1px hairline, never rounded.

**Corner radius:** always **zero**. Rounded corners, gradients, glass/blur, and 3D are explicitly banned in the source ("Feito à mão, mesmo no digital" — handmade even when digital).

**Shadows:** hard-offset only (`6px 6px 0 rgba(0,0,0,.18)`, no blur) — like a card physically stacked on paper, never a soft drop shadow.

**Cards:** heavy solid border, flat fill (paper or ink), zero radius, hard offset shadow only when floating over another surface. Never a colored left-border accent strip.

**Transparency & blur:** transparency appears only as translucent "tape" strips (`rgba(255,255,255,.5)` over a section, with a light backdrop-blur to read as physical tape) and in the grain overlay's blend mode — never as frosted-glass panels or translucent nav bars.

**Photography color vibe:** two modes only — high-contrast black & white (documentary, Tri-X-grain feeling: closed blacks, blown whites) or a deliberately cross-processed navy color-shift (an artifact of "processing," never a chosen brand color). Never warm, never a polished full-color lifestyle look, never stock photography.

**Layout rules:** grid exists to be broken with intent — pieces bleed off the edge, type can be cropped by the margin as long as "SP" stays legible on the logo. Fixed elements: the chapter header (number + name + rotated hand note) sitting on a heavy top rule opens every section. Graphic devices — the white/red underline, the pixação tag, painted diagonal stripe, solid color bar/block, city photo collage, xerox grain, tape/staple/fold marks, rubber stamp, hand annotation — every single piece uses **at least two** of these nine devices, never all nine.

## Iconography

There is no icon font, icon library, or SVG icon system in the source — the school's "iconography" is entirely typographic and physical:
- **Hand-drawn marks**: a plain "✕" prefixes each item in "what this system never does" lists — not a custom icon glyph.
- **Rubber stamps** (`.carimbo`): a rough torn-edge mask over a bordered text label functions as the closest thing to a badge/icon component — see Badge.
- **The pixação tag** (Te Amo Jessica typeface) stands in for iconography on Instagram story covers ("carimbos com ícone-rabisco" — stamp-scribble icons — are explicitly preferred over "ícone arredondado de pacote," a rounded off-the-shelf icon).
- **Emoji**: never used.
- **Unicode-as-icon**: only the "✕" prohibition mark; no other Unicode glyphs are used decoratively.

No icon set was substituted, because the source brand explicitly rejects generic rounded package icons — introducing a Lucide/Heroicons-style icon set would contradict the brand itself. If UI work later needs functional icons (e.g. a close button, a play button), draw them as thick hand-cut shapes in the Affigere/pixo vocabulary, or ask the user for real hand-drawn marks — do not reach for a generic icon library.

## Fonts — substitution note

All 9 house typefaces were provided as real font files and are embedded from `assets/fonts/`; **no substitution was necessary**. `Libre Caslon Text` (Voice 3) is loaded from Google Fonts per the source's own fallback stack, matching the brand book's own choice. One file, `Americaine-Condensed.otf`, was superseded by the brand's own v3 revision (it lacked Portuguese accents) — it is kept in `assets/fonts/` for archival reasons only and is **not** wired into any `@font-face` rule or token; do not use it.
