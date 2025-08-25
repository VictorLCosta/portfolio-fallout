import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { AppRoot } from "./routes/root";

const convert = () => (m: any) => {
  const { default: Component, ...rest } = m;
  return {
    ...rest,
    Component,
  };
};

export const createAppRouter = () =>
  createBrowserRouter([
    {
      element: <AppRoot />,
      children: [
        {
          path: "/",
          lazy: () => import("./routes/home").then(convert()),
        },
        {
          path: "/contact",
          lazy: () => import("./routes/contact").then(convert()),
        },
        {
          path: "/experience",
          lazy: () => import("./routes/experience").then(convert()),
        },
        {
          path: "/projects",
          lazy: () => import("./routes/projects").then(convert()),
        },
      ],
    },
  ]);

export function AppRouter() {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
}
