import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils.js";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/** Action button styled after the Atlassian Design System button. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", type = "button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn("ds-button", `ds-button--${variant}`, `ds-button--${size}`, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
