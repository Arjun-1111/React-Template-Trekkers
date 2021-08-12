import React from "react";
import {
  Wrapper,
  TextContent,
  ContactFormContainer,
  ContactForm,
  InputContainer,
  MountainRoad,
} from "./Trek.style";

const Trek = ({ Text, Parallax }) => {
  // const arr = Text.split(".");
  // console.log(arr);
  return (
    <Wrapper Parallax={Parallax}>
      <TextContent>{Text}</TextContent>
      <ContactFormContainer>
        <ContactForm>
          <InputContainer className="hikingIcon">
            <MountainRoad />
          </InputContainer>
          <InputContainer>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autocomplete="off"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autocomplete="off"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Mobile no .."
              autocomplete="off"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              autocomplete="off"
            />
          </InputContainer>

          <InputContainer>
            <input type="submit" value="Book A Seat" id="submitbtn" />
          </InputContainer>
        </ContactForm>
      </ContactFormContainer>
    </Wrapper>
  );
};

export default Trek;
