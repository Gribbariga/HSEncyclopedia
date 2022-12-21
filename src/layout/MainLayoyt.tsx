import Footer from "@/components/anyPage/Footer/Footer";
import Header from "@/components/anyPage/Header/Header";
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
