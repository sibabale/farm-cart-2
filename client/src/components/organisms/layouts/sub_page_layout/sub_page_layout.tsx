import { ReactNode } from "react";

import { NavBar } from "../../nav_bar/nav_bar";
import { SubPageLayoutContainer } from "./sub_page_layout.styles";

type PageLayoutProps = {
  children: ReactNode,
};

export const SubPageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <NavBar />
        <SubPageLayoutContainer>
          <div>
            {children}
          </div>
        </SubPageLayoutContainer>
    </>
  );
};
