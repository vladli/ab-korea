import React from "react";

import Footer from "@/app/Layout/Footer";
import Header from "@/app/Layout/Header";

function Layout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="flex grow">{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
