import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false); // this is for mobile devices menues

  const isAboveSmallScreen = useMediaQuery("(min-width:768px)");

  return <nav className={`z-40 w-full fixed top-0 py-6 `}>
    <div className="flex items-center justify-between mx-auto w-5/6">
         <h4 className="font-playfair text-3xl font-bold">BSB</h4>

         {/* Desktop Nav */}

         {isAboveSmallScreen ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-bold"> 
            </div>
         ) : (<div></div>)}

    </div>
  </nav>;
};

export default Navbar