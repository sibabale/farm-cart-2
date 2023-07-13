import { Link } from "../../atoms/link/link";
import { useState, useEffect } from "react";
import { 
  Menu, 
  NavTitle,
  NavBarItems,
  ProfileCart, 
  NavBarContainer 
} from "./nav_bar.styles";
import Avatar from "../../atoms/avatar/avatar";
import MenuImage from "../../../assets/icons/menu.svg";
import { Button } from "../../atoms/button/button";


export const NavBar = ({}) => {
  // const [clickedItem, setClickedItem] = useState("");
  const [atTopOfPage, setAtTopOfPage] = useState(false);
  // const [clickAnimation, setClickAnimation] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!atTopOfPage) setAtTopOfPage(true);
    } else {
      if (atTopOfPage) setAtTopOfPage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [atTopOfPage]);

  return (
    <NavBarContainer $atTopOfPage={atTopOfPage}>
      <NavBarItems>
        <NavTitle>
          <Link to="/">farm cart</Link>
        </NavTitle>
        <Menu src={MenuImage} alt="Menu" />
        <ProfileCart>
          <Button 
            as="link" to="/listing" 
            bg="black"
            text="List a product" 
            color="white" 
            isRound 
          />
          <Avatar />
        </ProfileCart>
      </NavBarItems>
    </NavBarContainer>
  );
};
