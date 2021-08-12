import React from "react";
import about from "../../images/about.jpg";
import {
  ImgContainer,
  Wrapper,
  Img,
  TextContainer,
  Title,
  Para,
} from "./About.style";

const About = () => {
  return (
    <Wrapper id="About">
      <ImgContainer>
        <Img src={about} alt="About Us" />
      </ImgContainer>
      <TextContainer>
        <Title>About</Title>
        <Para>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          nesciunt velit magni optio facilis cupiditate consequuntur,
          consectetur odio hic veniam minus voluptatibus laudantium a illo
          nihil. Molestias ut corrupti, quasi, hic nulla quisquam, dolores
          tempora quos deleniti velit corporis odit voluptatum reiciendis illum.
          Nulla numquam iusto culpa temporibus provident voluptatum ipsa
          praesentium similique laboriosam libero facere, vitae ex! Eum
          deserunt, culpa illo suscipit alias quibusdam! Fuga eius alias
          excepturi nulla.
        </Para>
      </TextContainer>
    </Wrapper>
  );
};

export default About;
