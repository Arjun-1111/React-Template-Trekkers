import React from "react";
import {
  Image,
  Wrapper,
  Content,
  Name,
  Price,
  Days,
  ImgContainer,
  Hiking,
  PriceIcon,
  DaysIcon,
  CampFire,
  Tent,
  WaterTank,
  Facilities,
} from "./Card.style";

const Card = ({
  img,
  trekName,
  price,
  days,
  showContent,
  clickable,
  trekId,
}) => {
  return (
    <Wrapper clickable={clickable ? 1 : 0} to={`trek/${trekId}`}>
      <ImgContainer>
        <Image src={img} alt="Popular trek" />
      </ImgContainer>
      <Content show={showContent ? 1 : 0}>
        <Name>
          <Hiking />
          Trek Name: {trekName}
        </Name>
        <Price>
          <PriceIcon />
          Price: {price}
        </Price>
        <Days>
          <DaysIcon />
          Days: {days}
        </Days>
        {/* ?Available facilities */}
        Available facilities
        <Facilities>
          <CampFire />
          <Tent />
          <WaterTank />
        </Facilities>
      </Content>
    </Wrapper>
  );
};

export default Card;
