# Publishing this design system inside Palantir Foundry

Goal: make `industrial-clarity` consumable as a versioned npm package by other
Foundry apps (e.g. the Pilot React app), without relying on GitHub or public npm
(both are blocked by Foundry's network isolation).

## The model

```
Foundry Code Repository (library)        Pilot React repo
  = this design system source        ─▶  package.json dependency
  builds + publishes on release           import { Button } from "@<scope>/industrial-clarity"
        │
        ▼
  first-party npm Artifacts registry  (NOT the external-npm-npmjs mirror)
```

The `external-npm-npmjs` Artifacts repository is a **read-only mirror of public
npm** — for pulling public packages in, not for publishing your own. Publishing
your own package requires a **first-party** registry, which a Foundry library
code repository publishes to as part of its release flow.

## Checklist

- [ ] Create a Foundry **Code Repository** from a frontend/TypeScript **library**
      (a.k.a. "package") template. (Repo creation may be gated to your platform team.)
- [ ] Move this `src/` (components + tokens) into that repo. The package is a
      standard tsup-built TS library, so it should port with minimal changes —
      reconcile our `tsup` build with whatever build the template ships.
- [ ] Get these three values from the library repo / platform team:
  - **Scope** — e.g. `@your-org` → package name becomes `@<scope>/industrial-clarity`
  - **First-party registry URL** — the publish target (not the external mirror)
  - **Auth token** — keep it in `.npmrc` (gitignored) or Foundry secrets; never commit it
- [ ] Set `name` to the scoped name and add `publishConfig.registry` in `package.json`.
- [ ] Publish (Foundry library repos typically publish on tag/release rather than a
      manual `npm publish` — confirm in the in-platform docs: search "publish npm package").

## Consuming in the Pilot repo

Once published:

```jsonc
// Pilot package.json
"dependencies": {
  "@<scope>/industrial-clarity": "^0.1.0"
}
```

```tsx
import { Button, TextField } from "@<scope>/industrial-clarity";
import "@<scope>/industrial-clarity/tokens.css";
```

Ensure the Pilot repo's package resolution includes the same first-party
registry (usually via its `.npmrc` / package settings).

## Already done in this repo

- `prepublishOnly` build hook — guarantees `dist/` is freshly built into the tarball.
- `files: ["dist"]` + `exports` — only the build output ships.
- `.npmrc.example` — template for the registry config (copy to `.npmrc`, fill in, never commit).
