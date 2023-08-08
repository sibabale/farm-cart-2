import { Link } from "../../atoms/link/link";
import { useState, useEffect } from "react";
import { 
  Menu, 
  NavTitle,
  NavLinks, 
  NavBarItems,
  NavBarContainer 
} from "./nav_bar.styles";
import MenuImage from "../../../assets/icons/menu.svg";


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
        <NavLinks>
          <Link to="/animals">Animals</Link>
          <Link to="/why">Why?</Link>
          <Link to="#" className="blog">Blog <span>coming soon</span></Link>
        </NavLinks>
        <Menu src={MenuImage} alt="Menu" />
      </NavBarItems>
    </NavBarContainer>
  );
};
