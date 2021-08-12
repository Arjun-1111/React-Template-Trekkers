import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaHiking } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import {
  GiCampingTent,
  GiCampfire,
  GiBarracksTent,
  GiWaterTank,
} from "react-icons/gi";

export const Wrapper = styled(LinkR)`
  width: 70%;
  margin: 0.5rem auto;
  overflow: hidden;
  /* border: 1px solid red; */
  position: relative;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0px 2px 5px #aaaaaa;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  /* height: 250px; */
  display: block;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 780px) {
    height: 300px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 125px;
  left: 0;
  z-index: 11;
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 120px;
  box-shadow: 7px 4px 4px #aaaaaa;
  text-align: center;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 780px) {
    height: 160px;
  }

  :hover {
    top: 210px;
    transition: top 0.5s ease-in-out;
  }
`;

export const Hiking = styled(FaHiking)`
  color: #00af91;
  padding-right: 5px;
  font-size: 1.2rem;
  margin-top: 5px;
`;
export const PriceIcon = styled(BiRupee)`
  color: #00af91;
  margin-right: 5px;
`;
export const DaysIcon = styled(GiCampingTent)`
  color: #00af91;
  margin-right: 5px;
`;

export const Name = styled.span`
  display: block;
  margin: 5px;
`;

export const Price = styled.span`
  display: block;
  margin: 5px;
  margin-left: -10px;
`;

export const Days = styled.span`
  display: block;
  margin: 5px;
  margin-left: -10px;
`;
export const Facilities = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
`;

export const CampFire = styled(GiCampfire)`
  color: #00af91;
`;
export const Tent = styled(GiBarracksTent)`
  color: #00af91;
`;
export const WaterTank = styled(GiWaterTank)`
  color: #00af91;
`;
