import React from "react";

import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, ...props }, forwardedRef) => {
    const classes = cn(
      "group relative inline-flex w-fit cursor-pointer justify-center items-center overflow-hidden py-3 px-6 border border-black",
      className,
    );

    return (
      <button
        ref={forwardedRef}
        type={type ? "button" : "submit"}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
