// import React from "react";

import { Outlet } from "react-router-dom";

import Container from "../Container/Container.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import Footer from "../Footer/Footer.tsx";

export interface SharedLayoutProps {}

export default function SharedLayout() {
  return (
    <>
      <Container>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </>
  );
}
