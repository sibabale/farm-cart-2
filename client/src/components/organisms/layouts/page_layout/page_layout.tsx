import { ReactNode } from "react";

import { NavBar } from "../../nav_bar/nav_bar";
import { PageLayoutContainer } from "./page_layout.styles";

type PageLayoutProps = {
  children: ReactNode,
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <NavBar />
      <PageLayoutContainer>
        {children}          
      </PageLayoutContainer>
    </>
  );
};
