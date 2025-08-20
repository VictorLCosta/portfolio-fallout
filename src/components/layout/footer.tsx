export function Footer() {
  return (
    <footer className="fixed bottom-0 flex items-center justify-center w-full mt-16 py-5 border-t border-t-electric-green">
      <div className="container mx-auto text-center text-sm flex items-center justify-between">
        <span className="font-techno font-bold animate-blink text-2xl select-none tracking-wider">
          Interface Loaded <span className="text-cardinal">•</span>
        </span>
        <p className="flex flex-col items-end">
          @ 1984 Victor Lima Costa.
          <span>無断転載を禁じます</span>
        </p>
      </div>
    </footer>
  );
}
