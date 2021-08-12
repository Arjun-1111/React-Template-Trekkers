import styled from "styled-components";

export const Wrapper = styled.div`
  width: 96%;
  margin: 2.5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  border-radius: 15px;
  box-shadow: 0px 2px 5px #aaaaaa;
  overflow: hidden;
  padding: 2rem;

  @media screen and (max-width: 298px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  text-shadow: 0px 1px 3px #00af91;
  margin-top: 1.5rem;
`;
