export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full mt-16">
      <div className="container mx-auto p-5 text-center text-sm">
        @ {new Date().getFullYear()} Victor Lima Costa. All rights reserved.
      </div>
    </footer>
  );
}
