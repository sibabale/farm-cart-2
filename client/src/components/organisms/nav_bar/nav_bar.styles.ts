import styled from "styled-components";

export const Cart = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const Menu = styled.img`
  height: 30px;
  display: none;
  @media screen and (max-width: 425px) {
      display: block;
    }
`;

export const NavTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #000000;
  }
`;
