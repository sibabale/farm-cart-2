import React, {ReactNode} from "react";
import {
  ProductsHeader,
  ProductsContainer,
  ProductLayoutContent,
  ProductLayoutContainer,
} from "./product_layout.styles";
import Link from "../../../atoms/link/link";

type ProductLayoutProps = {
  title?: string,
  children: ReactNode,
  seeAllLink?: string
}
export const ProductLayout = ({ title, children, seeAllLink }: ProductLayoutProps) => {
  return (
    <ProductLayoutContainer>
      <ProductLayoutContent>
        <ProductsHeader>
          <h3>{title}</h3>
          {seeAllLink && <Link to={`animals/${seeAllLink}`}>See all</Link>}
        </ProductsHeader>
        <ProductsContainer>{children}</ProductsContainer>
      </ProductLayoutContent>
    </ProductLayoutContainer>
  );
};
