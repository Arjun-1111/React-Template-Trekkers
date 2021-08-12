import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 40px;
  margin-bottom: 45px;
`;

export const FormDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.35);
  box-shadow: -1.5px -1px 3px rgba(0, 0, 0, 0.45);
  display: flex;
  border-radius: 1px;

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 60%;
  margin: 1px;
  margin-right: 5px;
  overflow: hidden;
  border-right: 4px;
  box-shadow: 1.5px 0px 3px rgba(0, 0, 0, 0.45);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-left: 40px;
  padding: 10px;
  @media screen and (max-width: 375px) {
    margin-left: 25px;
  }

  span {
    display: block;
    margin-bottom: 2px;
  }

  #submitBtn {
    width: 30%;
    color: #000;
    font-weight: bold;
    margin-top: 5px;
    padding: 3px 0px;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 280px) {
      width: 35%;
    }

    :hover {
      box-shadow: 1px 2px 3px #000;
    }
  }
`;

export const InputContainer = styled.div`
  width: 80%;
  box-shadow: 0px 1.5px 1px rgba(0, 0, 0, 0.35);
  margin-bottom: 15px;

  input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 1rem;
    border-radius: 2px;
    padding-left: 5px;
    padding-bottom: 3px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
