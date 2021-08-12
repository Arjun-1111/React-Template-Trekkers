import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Hero from "../../images/hero.jpg";

// #00af91

export const Wrapper = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.75),
      rgba(0, 0, 0, 0.3)
    ),
    url(${Hero});
  background-position: center;
  background-size: cover;
  height: 100vh;
  z-index: -10;
`;

export const HeroTitleContainer = styled.div`
  position: relative;
  width: 80%;
  overflow: hidden;
  /* border: 2px solid black; */
  top: 55%;
  left: 22%;
  transform: translate(-22%, -55%);
`;

export const HeroSpan = styled.span`
  font-weight: 600;
  font-size: 3.3rem;
  text-transform: capitalize;
  color: #00af91;
  background: transparent;
  margin-right: 0.5rem;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 2.7rem;
  text-transform: capitalize;
  color: #000;
  background: transparent;
  width: 55%;
  /* border: 2px solid red;*/
  @media screen and (max-width: 414px) {
    width: 75%;
    font-size: 2.1rem;
  }

  @media screen and (max-width: 320px) {
    width: 85%;
    font-size: 1.9rem;
  }
`;

export const Quote = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
  text-transform: capitalize;
  color: #000;
  background: transparent;
  width: 100%;
  /* border: 2px solid blue; */
  margin-top: 1.1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 414px) {
    font-size: 1.55rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
  }
`;

export const HeroButtonContainer = styled.div`
  width: 7rem;
  height: 2.59rem;
  background-color: #000;
  border-radius: 1.8rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  transition: all 0.6s ease-in;
  :hover {
    background-color: #00af91;
    width: 10rem;
    transition: background-color 0.6s ease-in-out, width 1s ease-in-out;
  }
`;

export const HeroButton = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 1.5px;
  padding-left: 15px;
  color: #fff;
`;

export const ArrowRight = styled(BsArrowRightShort)`
  font-size: 2.6rem;
`;
