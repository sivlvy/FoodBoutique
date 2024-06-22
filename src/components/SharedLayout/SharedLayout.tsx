// import React from "react";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Container from "../Container/Container.tsx";
import NavBar from "../NavBar/NavBar.tsx";

export interface SharedLayoutProps {}

export default function SharedLayout({}: SharedLayoutProps) {
  return (
    <>
      <Container>
        <NavBar />
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
