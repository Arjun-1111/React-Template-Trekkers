import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 87vh;

  @media screen and (max-width: 414px) {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 35px;
  }

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  width: 50%;
  padding: 2.5rem;
  position: relative;

  @media screen and (max-width: 414px) {
    display: none;
    width: 100%;
  }

  :before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 1.95rem;
    background-color: #aee1f9;
    background-image: linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%);

    z-index: -2;
    box-shadow: 0px 1px 2px #000;
    height: 84%;
    width: 90%;

    @media screen and (max-width: 414px) {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      height: 86%;
      width: 88%;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: 540px) {
    width: 115%;
    height: 460px;
  }
`;

export const TextContainer = styled.div`
  overflow: hidden;
  width: 50%;
  padding-left: 2rem;
  @media screen and (max-width: 414px) {
    width: 100%;
    padding-left: 1rem;
  }

  @media screen and (max-width: 540px) {
    padding-left: 1rem;
  }
`;

export const Title = styled.h1`
  width: 95%;
  padding-top: 1.6rem;
  text-align: center;
  font-size: 2.5rem;

  @media screen and (max-width: 414px) {
    width: 100%;
    margin-left: -10px;
  }
`;

export const Para = styled.p`
  width: 95%;
  text-align: center;
  padding-top: 1.5rem;
  padding-right: 2rem;
  line-height: 2.2rem;
  letter-spacing: 1px;

  @media screen and (max-width: 414px) {
    width: 100%;
    letter-spacing: 0.5px;
    line-height: 1.9rem;
  }

  @media screen and (max-width: 540px) {
    letter-spacing: 0.5px;
    line-height: 1.9rem;
    width: 100%;
    padding-top: 1.2rem;
    padding-right: 1.5rem;
    padding-bottom: 8px;
  }
`;
