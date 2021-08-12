import React from "react";
import Image from "../../images/trek2.jpg";
import {
  Wrapper,
  FormDiv,
  ImageContainer,
  FormContainer,
  InputContainer,
} from "./Contact.style";

const Contact = () => {
  return (
    <Wrapper id="Contact">
      <FormDiv>
        <ImageContainer>
          <img src={Image} alt="Contact Us" />
        </ImageContainer>
        <FormContainer>
          <span>Name</span>
          <InputContainer>
            <input type="text" name="text" id="text" placeholder="Name..." />
          </InputContainer>
          <span className="mobileNo">Mobile No</span>
          <InputContainer>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="mobile no ..."
            />
          </InputContainer>
          <input type="submit" value="Contact" id="submitBtn" />
        </FormContainer>
      </FormDiv>
    </Wrapper>
  );
};

export default Contact;
