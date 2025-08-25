import { Outlet } from "react-router";

import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export function AppRoot() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
