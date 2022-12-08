import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { FC } from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
