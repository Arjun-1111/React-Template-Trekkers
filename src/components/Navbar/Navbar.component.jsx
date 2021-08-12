import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Logo,
  NavList,
  NavItem,
  GiMountain,
  LinkScroll,
} from "./Navbar.style";

const Navbar = () => {
  const [ToggleClass, setToggleClass] = useState(false);

  useEffect(() => {
    // checking window scroll-y
    const toggleclass = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setToggleClass(true);
        } else {
          setToggleClass(false);
        }
      });
    };

    toggleclass();
  }, [ToggleClass]);

  return (
    <Wrapper position={ToggleClass}>
      <Logo>
        <LinkScroll
          to="Home"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
        >
          {/* Received `false` for a non-boolean attribute `position`. Due to this error , a way around is to passtoggle with 0 and 1 as they are reffered to as true and false */}
          <GiMountain position={ToggleClass ? 0 : 1} />
        </LinkScroll>
      </Logo>
      <NavList position={ToggleClass ? 0 : 1}>
        {/* activeClass="active" */}
        <NavItem>
          <LinkScroll
            to="Home"
            spy={true}
            smooth={true}
            offset={-76}
            duration={500}
            position={ToggleClass ? 0 : 1}
          >
            Home
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="About"
            spy={true}
            smooth={true}
            offset={-76}
            duration={500}
            position={ToggleClass ? 0 : 1}
          >
            About
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="Contact"
            spy={true}
            smooth={true}
            offset={-76}
            duration={500}
            position={ToggleClass ? 0 : 1}
          >
            Contact
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="Trek"
            spy={true}
            smooth={true}
            offset={-166}
            duration={500}
            position={ToggleClass ? 0 : 1}
          >
            Trek
          </LinkScroll>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

export default Navbar;
