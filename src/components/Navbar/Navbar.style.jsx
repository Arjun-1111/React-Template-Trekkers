import styled from "styled-components";
import { GiMountains } from "react-icons/gi";
import { Link as LinkS } from "react-scroll";

export const Wrapper = styled.div`
  height: 75px;
  position: ${({ position }) => (position ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  /* border: 1px solid black; */
  background: ${({ position }) => (position ? "#00af91" : "transparent")};
  box-shadow: 0px 1px 2px #00af91;
  z-index: ${({ position }) => (position ? "1000" : "1")};
`;

export const Logo = styled.div`
  margin-left: 1rem;
  height: 100%;
  /* border: 1px solid red; */
  overflow: hidden;

  @media screen and (max-width: 280px) {
    margin-left: 0;
  }
`;

export const GiMountain = styled(GiMountains)`
  color: ${({ position }) => (position ? "#00af91" : "#fff")};
  background: transparent;
  padding-top: 0.3rem;
  font-size: 4.5rem;
  align-content: center;
  cursor: pointer;

  @media screen and (max-width: 414px) {
    font-size: 2.8rem;
    margin-top: 1rem;
    margin-right: 0.2rem;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  /* border: 1px solid blue; */
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-right: 2rem;
  color: ${({ position }) => (position ? "#000" : "#fff")};
`;

export const NavItem = styled.li`
  margin-right: 1.5rem;

  @media screen and (max-width: 320px) {
    margin-right: 1.3rem;
  }

  @media screen and (max-width: 280px) {
    margin-right: 0.9rem;
  }

  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: translateY(-3px);
    transition: transform 0.3s ease-in-out;
  }
`;

export const LinkScroll = styled(LinkS)`
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.15rem;
  font-size: 1.25rem;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid
      ${({ position }) => (position ? "#00af91" : "#000")};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: border-bottom 0.7s ease-in-out;
  }
`;
