import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils.js";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--ds-space-1)",
  fontFamily: "var(--ds-font-sans)",
};

const labelStyle: React.CSSProperties = {
  fontSize: "var(--ds-font-size-sm)",
  fontWeight: 600,
  color: "var(--ds-color-text)",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--ds-font-sans)",
  fontSize: "var(--ds-font-size-md)",
  lineHeight: "var(--ds-line-height)",
  color: "var(--ds-color-text)",
  background: "var(--ds-color-bg)",
  border: "1px solid var(--ds-color-border)",
  borderRadius: "var(--ds-radius-sm)",
  padding: "var(--ds-space-2) var(--ds-space-3)",
};

const messageStyle: React.CSSProperties = {
  fontSize: "var(--ds-font-size-sm)",
  color: "var(--ds-color-text-muted)",
};

/** Labeled text input with optional hint/error messaging. */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hint, error, id, className, style, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const describedById = error || hint ? `${inputId}-msg` : undefined;

    return (
      <div className={cn("ds-text-field", className)} style={wrapperStyle}>
        {label ? (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          style={{
            ...inputStyle,
            ...(error ? { borderColor: "var(--ds-color-danger)" } : null),
            ...style,
          }}
          {...props}
        />
        {error || hint ? (
          <span
            id={describedById}
            style={{
              ...messageStyle,
              ...(error ? { color: "var(--ds-color-danger)" } : null),
            }}
          >
            {error ?? hint}
          </span>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
