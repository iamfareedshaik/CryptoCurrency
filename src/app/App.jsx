import React from "react";
import Navbar from "../Navbar";
import { CryptoCurrenct } from "./pages/cryptocurrencies";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
export default function App() {
  return (
    <RouterProvider router={router} />
    // <div>
    //   <Navbar />
    //   <CryptoCurrenct />
    // </div>
  );
}
