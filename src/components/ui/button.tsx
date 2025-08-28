import { forwardRef } from "react";

import { cn } from "@/utils";

import { TextHoverEffect } from "./text-hover-effect";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, ...props }, forwardedRef) => {
    const classes = cn(
      "group relative inline-flex w-fit font-bold cursor-pointer justify-center items-center overflow-hidden py-3 px-6",
      "uppercase border-2 border-text hover:bg-electric-green hover:text-black",
      className,
    );

    return (
      <button
        ref={forwardedRef}
        type={type ? "button" : "submit"}
        className={classes}
        {...props}
      >
        <TextHoverEffect>{children}</TextHoverEffect>
      </button>
    );
  },
);

Button.displayName = "Button";
