import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-text-inverse hover:bg-accent-hover hover:border-accent-hover",
  secondary:
    "border-border-subtle bg-bg-surface text-text-primary hover:bg-bg-elevated",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:bg-bg-muted hover:text-text-primary",
  danger: "border-danger bg-danger text-text-inverse hover:opacity-90",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild: true;
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    asChild,
    ...rest
  } = props;
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full border font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (asChild) {
    const { href, ...linkProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      };
    return (
      <Link href={href} {...linkProps} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
