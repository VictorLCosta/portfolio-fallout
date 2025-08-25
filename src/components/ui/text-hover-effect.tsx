import { useEffect, useRef } from "react";

import { cn } from "@/utils/cn";
import { TextAnimator } from "@/utils/text-animator";

type TextProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  React.ComponentPropsWithRef<C>;

export function TextHoverEffect<C extends React.ElementType = "span">({
  as,
  className,
  children,
  ...restProps
}: Props<C>) {
  const Component = as || "span";

  const styles = cn("hover-effect", className);

  const elRef = useRef(null);
  const animatorRef = useRef<TextAnimator>(null);

  useEffect(() => {
    if (elRef.current && !animatorRef.current) {
      animatorRef.current = new TextAnimator(elRef.current);
    }
    return () => {
      animatorRef.current?.reset?.();
    };
  }, []);

  return (
    <Component
      ref={elRef}
      onMouseEnter={() => animatorRef.current?.animate()}
      className={styles}
      {...restProps}
    >
      {children}
    </Component>
  );
}
