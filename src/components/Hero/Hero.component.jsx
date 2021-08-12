import React from "react";

import {
  HeroTitleContainer,
  HeroTitle,
  Wrapper,
  HeroButton,
  Quote,
  HeroSpan,
  HeroButtonContainer,
  ArrowRight,
} from "./Hero.style";

const Hero = () => {
  return (
    <Wrapper id="Home">
      <HeroTitleContainer>
        <HeroTitle>
          Jobs fill your pocket. But, <HeroSpan>adventures</HeroSpan> fill your
          soul
        </HeroTitle>
        <Quote>"There are no shortcuts to any place worth going."</Quote>
        <HeroButtonContainer>
          <HeroButton to="/">Join Now</HeroButton>

          <ArrowRight />
        </HeroButtonContainer>
      </HeroTitleContainer>
    </Wrapper>
  );
};

export default Hero;
