import styled from "styled-components";
import { GiMountainRoad } from "react-icons/gi";

export const Wrapper = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.15)),
    url(${({ Parallax }) => Parallax});

  /* Set a specific height */
  min-height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const TextContent = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
  padding-top: 15px;
  text-shadow: 1px 2px 3px #000;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.45);
  height: auto;
  width: auto;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px #fff;

  .hikingIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 15px;
  }
`;

export const InputContainer = styled.div`
  :first-child {
    margin-top: 5px;
  }

  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5px 10px;

  input {
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 4px;
    padding-left: 7px;
    background: transparent;
    border-bottom: 2px solid #fff;
    transition: all 0.4s ease-in-out;

    :focus {
      border-bottom: 2px solid #00af91;
    }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="submit"] {
    border: none;
    background: #00af91;
    /* border: 1px solid #00af91; */
    color: #fff;
    border-radius: 4px;
    transform: translateY(8px);

    :hover {
      transform: translateY(0px);
      color: #000;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const MountainRoad = styled(GiMountainRoad)`
  color: #00af91;
  background: transparent;
  font-size: 1.7rem;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: rotate(-360deg);
    color: #000;
  }
`;
