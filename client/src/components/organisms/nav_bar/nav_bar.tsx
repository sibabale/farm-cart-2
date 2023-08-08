import { Link } from "../../atoms/link/link";
import { Button } from "../../atoms/button/button"
import { useState, useEffect } from "react";
import { 
  NavTitle,
} from "./nav_bar.styles";
import MenuImage from "../../../assets/icons/menu.svg";


export const NavBar = ({}) => {
  // const [clickedItem, setClickedItem] = useState("");
  const [atTopOfPage, setAtTopOfPage] = useState(false);
  const [mobileMenuVisibility, toggleMobileMenuVisibility] = useState(false);
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

  const scrollingStyles= {
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  }

  return (
    <div className="fixed z-50 w-screen p-3 max-w-full bg-white lg:px-10 "
      style={atTopOfPage ? scrollingStyles: {}}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <NavTitle>
            <Link to="/">farm cart</Link>
          </NavTitle>
          <div className="hidden md:flex justify-between">
            <Link to="/animals" className="px-4 lg:px-10">Animals</Link>
            <Link to="/why" className="px-4 lg:px-10">Why?</Link>
            <Link to="/blog" className="pl-4 lg:pl-10">Blog</Link>
          </div>
          <div className="hidden md:block">
            <Button 
            as="link"
            to="/sell"
            bg="black" 
            text="Sell Animals" 
            size="sm" 
            color="white" 
            isRound
          />
          </div>
          <img 
            src={MenuImage} 
            alt="Burger Menu" 
            className="md:hidden w-10"
            onClick={() => toggleMobileMenuVisibility(!mobileMenuVisibility) }
          />
        </div>
        {
          mobileMenuVisibility && (
            <div className="bg-white">
              <ul className="flex flex-col items-center">
                <li className="p-3">
                  <Link to="/animals">Animals</Link>
                </li>
                <li className="p-3">
                  <Link to="/why">Why?</Link>
                </li>
                <li className="p-3">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};
