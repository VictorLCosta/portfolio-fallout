import { Header, Footer, Hero, Experience, Projects } from "@/components";

function App() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
