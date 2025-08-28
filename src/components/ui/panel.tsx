import { cn } from "@/utils";

type PanelProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  children: React.ReactNode;
  cols?: number;
};

type Props<C extends React.ElementType> = PanelProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof PanelProps<C>>;

export function Panel<C extends React.ElementType = "section">({
  as,
  cols = 12,
  className,
  children,
  ...restProps
}: Props<C>) {
  const Component = as || "section";

  const styles = cn("relative w-screen h-screen grid", className);

  return (
    <Component
      className={styles}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      {...restProps}
    >
      {children}
    </Component>
  );
}
