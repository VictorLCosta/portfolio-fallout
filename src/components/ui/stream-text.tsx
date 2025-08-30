type StreamTextProps = {
  text: string;
  color?: string;
};

export function StreamText({ text, color = "#F20505" }: StreamTextProps) {
  return (
    <div className="group absolute top-0 left-0 bottom-0 right-0 z-40 overflow-hidden select-none">
      <span
        className="absolute inline-block invisible top-[45%] pl-[150%] uppercase text-6xl font-nclr text-center whitespace-nowrap text-shadow-none group-hover:visible animate-stream-title"
        style={{ color }}
      >
        {text}
      </span>
      <span
        className="absolute inline-block invisible top-[45%] pl-[150%] uppercase text-6xl font-nclr text-center whitespace-nowrap text-shadow-none group-hover:visible animate-stream-title animation-delay-2000"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  );
}
