import React from "react";
import { Wrapper, TextContent } from "./MidParallax.style";

const MidParallax = ({ Text }) => {
  return (
    <Wrapper>
      <TextContent>{Text}</TextContent>
    </Wrapper>
  );
};

export default MidParallax;
