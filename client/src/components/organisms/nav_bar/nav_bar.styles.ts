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

export const ProfileCart = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 40px;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const NavBarContainer = styled.nav<{$atTopOfPage: boolean}>`
  width: 100%;
  z-index: 1000;
  position: fixed;
  background-color: white;

  ${({ $atTopOfPage }) =>
    $atTopOfPage
      ? "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
      : ""};
`;

export const NavBarItems = styled.div`
  margin: 0 40px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    height: 60px;
  }
`
