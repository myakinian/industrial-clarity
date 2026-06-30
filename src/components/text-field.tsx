import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils.js";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

/** Labeled text input styled after the Atlassian Design System text field. */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hint, error, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const describedById = error || hint ? `${inputId}-msg` : undefined;

    return (
      <div className={cn("ds-field", className)}>
        {label ? (
          <label htmlFor={inputId} className="ds-field__label">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          className={cn("ds-field__input", error && "ds-field__input--error")}
          {...props}
        />
        {error || hint ? (
          <span id={describedById} className={cn("ds-field__msg", error && "ds-field__msg--error")}>
            {error ?? hint}
          </span>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = "TextField";
