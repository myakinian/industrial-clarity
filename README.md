# poc-ds

A proof-of-concept design system: CSS design tokens plus a small set of
token-driven React components.

## What's inside

- `src/tokens.css` — design tokens (color, spacing, radii, typography) as CSS variables.
- `src/components/button.tsx` — `Button` (`primary` | `secondary` | `danger`, sizes `sm` | `md`).
- `src/components/text-field.tsx` — `TextField` with label, hint, and error states.
- `src/lib/utils.ts` — `cn()` class-name helper.

## Scripts

```bash
npm install
npm run build      # bundle to dist/ with tsup (ESM + .d.ts)
npm run dev        # rebuild on change
npm run typecheck  # tsc --noEmit
```

## Usage

```tsx
import { Button, TextField } from "poc-ds";
import "poc-ds/tokens.css";

export function Example() {
  return (
    <form>
      <TextField label="Email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </form>
  );
}
```
