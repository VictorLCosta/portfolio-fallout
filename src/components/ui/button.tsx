import React from "react";

import { cn } from "@/utils/cn";

type ButtonProps = {
  magnetic?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, magnetic, ...props }, ref) => {
    const classes = cn(
      "group relative inline-flex w-fit cursor-pointer justify-center items-center overflow-hidden py-3 px-6 border border-black",
      className,
    );

    const handleHover = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      
    };

    return (
      <button
        ref={ref}
        type={type ? "button" : "submit"}
        className={classes}
        onMouseEnter={handleHover}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
