import { createBrowserRouter } from "react-router-dom";
import { RootLayout, RootErrorElement } from "./pages/_layout";
import { AuthIndexPage } from "./pages/auth";
import { CryptoCurrenct } from "./pages/cryptocurrencies";

const routes = [
  {
    path: "/auth",
    element: <AuthIndexPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorElement />,
    children: [
      {
        index: true,
        element: <CryptoCurrenct />,
      },
      {
        path: "cryptoTaxes",
        lazy: async () => ({
          element: (await import("./pages/cryptoTaxes")).default || (
            <h1>Loading...</h1>
          ),
        }),
      },
      {
        path: "freeTools",
        lazy: async () => ({
          element: (await import("./pages/freeTools")).default || (
            <h1>Loading...</h1>
          ),
        }),
      },
      {
        path: "resourceCenter",
        lazy: async () => ({
          element: (await import("./pages/resuorceCenter")).default || (
            <h1>Loading...</h1>
          ),
        }),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
