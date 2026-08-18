import React, { type FC } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  as: Tag = "button",
  href,
  ...props
}: ButtonProps) => {
  const classes = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (Tag === "a") {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
