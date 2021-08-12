import React from "react";
import Card from "../Card/Card.component";
import { Wrapper, Title } from "./PopularTrek.style";
import Trek1 from "../../images/trek1.jpg";
import Trek2 from "../../images/trek2.jpg";
import Trek3 from "../../images/trek3.jpg";
import Trek4 from "../../images/trek4.jpg";

const PopularTrek = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper id="Trek">
        {/* {// When getting images from api we only use one card,but for now we
        repeat the card} */}
        <Card
          img={Trek1}
          trekName="Kedarkantha"
          price="2000"
          days="7"
          showContent={true}
          clickable={true}
          trekId={1}
        />
        <Card
          img={Trek2}
          trekName="Kedarkantha"
          price="2000"
          days="7"
          showContent={true}
          clickable={true}
          trekId={2}
        />
        <Card
          img={Trek3}
          trekName="Kedarkantha"
          price="2000"
          days="7"
          showContent={true}
          clickable={true}
          trekId={3}
        />
        <Card
          img={Trek4}
          trekName="Kedarkantha"
          price="2000"
          days="7"
          showContent={true}
          clickable={true}
          trekId={4}
        />
        <Card
          img={Trek1}
          trekName="Kedarkantha"
          price="2000"
          days="7"
          showContent={true}
          clickable={true}
          trekId={5}
        />
      </Wrapper>
    </>
  );
};

export default PopularTrek;
