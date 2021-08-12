import styled from "styled-components";

import Parallax from "../../images/midparallax1.jpg";
export const Wrapper = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.1)),
    url(${Parallax});

  /* Set a specific height */
  min-height: 150px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextContent = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 2.8rem;
  color: #fff;
  font-size: 2.4rem;

  @media screen and (max-width: 780px) {
    font-size: 1.7rem;
    padding-left: 10px;
  }

  @media screen and (max-width: 414px) {
    padding-top: 2.2rem;
    font-size: 1.5rem;
    padding-left: 10px;
  }

  @media screen and (max-width: 280px) {
    padding-top: 2.5rem;
    font-size: 1.3rem;
    padding-left: 12px;
  }
`;
