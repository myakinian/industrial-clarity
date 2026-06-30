import { useState } from "react";
import { Button, TextField } from "poc-ds";
import "poc-ds/tokens.css";

const section: React.CSSProperties = {
  marginBottom: "var(--ds-space-5)",
};

const heading: React.CSSProperties = {
  fontFamily: "var(--ds-font-sans)",
  fontSize: "var(--ds-font-size-sm)",
  fontWeight: 600,
  color: "var(--ds-color-text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: "var(--ds-space-3)",
};

const row: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--ds-space-3)",
  alignItems: "center",
};

export function App() {
  const [password, setPassword] = useState("secret");
  const passwordError = password.length < 8 ? "Must be at least 8 characters." : undefined;

  return (
    <main
      style={{
        fontFamily: "var(--ds-font-sans)",
        color: "var(--ds-color-text)",
        background: "var(--ds-color-bg)",
        maxWidth: 720,
        margin: "0 auto",
        padding: "var(--ds-space-5)",
      }}
    >
      <header style={section}>
        <h1 style={{ fontSize: "var(--ds-font-size-lg)", margin: 0 }}>poc-ds playground</h1>
        <p style={{ color: "var(--ds-color-text-muted)", fontSize: "var(--ds-font-size-sm)", margin: "4px 0 0" }}>
          Live components imported from the built package.
        </p>
      </header>

      <section style={section}>
        <p style={heading}>Button — variants</p>
        <div style={{ ...row, marginBottom: "var(--ds-space-3)" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div style={row}>
          <Button variant="primary" size="sm">Primary sm</Button>
          <Button variant="secondary" size="sm">Secondary sm</Button>
          <Button variant="danger" size="sm">Danger sm</Button>
        </div>
      </section>

      <section style={section}>
        <p style={heading}>TextField — states</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--ds-space-4)" }}>
          <TextField label="Email" placeholder="you@example.com" defaultValue="you@example.com" />
          <TextField label="Username" defaultValue="m.yakinian" hint="3–20 characters, letters and dots." />
          <TextField
            label="Password"
            type="password"
            value={password}
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </section>
    </main>
  );
}
