import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils.js";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base: React.CSSProperties = {
  fontFamily: "var(--ds-font-sans)",
  lineHeight: "var(--ds-line-height)",
  borderRadius: "var(--ds-radius-md)",
  border: "1px solid transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: { fontSize: "var(--ds-font-size-sm)", padding: "var(--ds-space-1) var(--ds-space-3)" },
  md: { fontSize: "var(--ds-font-size-md)", padding: "var(--ds-space-2) var(--ds-space-4)" },
};

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--ds-color-primary)",
    color: "var(--ds-color-primary-text)",
  },
  secondary: {
    background: "var(--ds-color-surface)",
    color: "var(--ds-color-text)",
    borderColor: "var(--ds-color-border)",
  },
  danger: {
    background: "var(--ds-color-danger)",
    color: "var(--ds-color-primary-text)",
  },
};

/** Primary action button driven by design tokens. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", style, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("ds-button", className)}
        disabled={disabled}
        style={{
          ...base,
          ...sizes[size],
          ...variants[variant],
          ...(disabled ? { opacity: 0.55, cursor: "not-allowed" } : null),
          ...style,
        }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
