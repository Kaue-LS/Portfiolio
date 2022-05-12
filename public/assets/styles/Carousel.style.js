import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselBox = styled(Carousel)`
  margin: 0 auto;
  padding: 10px 5px;
  display: flex;
  align-items: center;

  .react-multiple-carousel__arrow--left {
    left: calc(4% - 22px);
    z-index: 999999;
    @media (max-width: 1024px) {
      left: calc(1% + 10px);

    }
    @media (max-width: 820px) {
      left: calc(4% + 2px);
    }
    @media (max-width: 768px) {
      display: none;
      left: calc(4% - 10px);
    }
    @media (max-width: 478px) {
      left: calc(4% - 10px);
    }
  }

  .react-multiple-carousel__arrow--right {
    right: calc(4% - 22px);
    z-index: 999999;
    @media (max-width: 1024px) {
      right: calc(1% - 10px);
    }
    @media (max-width: 820px) {
      right: calc(4% + 2px);
    }
    @media (max-width: 768px) {
      display: none;
      right: calc(4% - 10px);
    }
    @media (max-width: 478px) {
      right: calc(4% - 10px);
    }
  }
  
  @media (max-width: 820px) {
    width: 100%;
    margin: 0 auto 0 100px;
    padding: 10px 5px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 10px 5px;
  }
  @media (max-width: 478px) {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 10px 5px;
  }
`;
