import { ReactLenis } from "lenis/react";

import {
  Header,
  Footer,
  Hero,
  Experience,
  Projects,
  Contact,
} from "@/components";

function App() {
  return (
    <>
      <ReactLenis root />
      <Header />
      <main className="mt-20">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
