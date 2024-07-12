import HomePage from "../pages/HomePage.tsx";
import CartPage from "../pages/CartPage.tsx";
import SharedLayout from "./SharedLayout/SharedLayout.tsx";

import { Routes, Route } from "react-router-dom";

export interface AppProps {}

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<SharedLayout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/cart"} element={<CartPage />} />
      </Route>
    </Routes>
  );
}
