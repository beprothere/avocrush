"use client";

import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="avocrush-layout">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
