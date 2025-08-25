import { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  const styles = cn("group relative flex flex-col overflow-hidden", className);

  return <div className={styles}>{children}</div>;
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full text-xl !text-raisin-black text-shadow-none border-b border-raisin-black px-2 bg-yellowish animate-blink-box">
      {children}
    </div>
  );
};

Card.Image = function CardImage({
  src,
  alt,
  subtitle,
}: {
  src: string;
  alt: string;
  subtitle?: string;
}) {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="grayscale" />
      {subtitle && (
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden hidden group-hover:block group-hover:border-8 group-hover:border-cardinal">
          <span className="absolute top-[37%] pl-[150%] whitespace-nowrap text-6xl text-center text-cardinal font-unison font-bold text-shadow-none select-none animate-stream-title">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

Card.Content = function CardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full transition-[height] duration-100 ease-in-out bg-yellowish cyber-clipath",
        show ? "max-h-auto" : "max-h-0",
      )}
    >
      {children}
    </div>
  );
};
