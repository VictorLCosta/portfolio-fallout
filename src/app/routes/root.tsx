import { Outlet } from "react-router";

import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

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
