import car from "../../assets/helper/car.jpg";

import sprite from "../../assets/svgSprite/sprite.svg";

import {
  Button,
  CategoriesContainer,
  CategoriesItem,
  Description,
  Images,
  Info,
  Item,
  Location,
  Rating,
  RatingContainer,
  Title,
} from "./ContentCatalog.styled";

export const ContentCatalog = () => {
  return (
    <ul>
      <Item>
        <Images src={car} alt="car" />
        <Info>
          <Title>Mavericks</Title>
          <RatingContainer>
            <Rating href="kphrhr">
              <svg className="rating__icon" width="16" height="16">
                <use href={`${sprite}#icon-star`} />
              </svg>
              4.4(2 Reviews)
            </Rating>
            <Location>
              <svg
                className="location__icon"
                width="16"
                height="16"
                fill="none"
                stroke="#101828"
              >
                <use href={`${sprite}#icon-location-map`} />
              </svg>
              Kyiv, Ukraine
            </Location>
          </RatingContainer>
          <Description>
            The pictures shown here are example vehicles of the respective.
          </Description>
          <CategoriesContainer>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
          </CategoriesContainer>
          <Button>Show more</Button>
        </Info>
      </Item>
      <Item>
        <Images src={car} alt="car" />
        <Info>
          <Title>Mavericks</Title>
          <RatingContainer>
            <Rating href="kphrhr">4.4(2 Reviews)</Rating>
            <Location>Kyiv, Ukraine</Location>
          </RatingContainer>
          <Description>
            The pictures shown here are example vehicles of the respective.
          </Description>
          <CategoriesContainer>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
          </CategoriesContainer>
          <Button>Show more</Button>
        </Info>
      </Item>
      <Item>
        <Images src={car} alt="car" />
        <Info>
          <Title>Mavericks</Title>
          <RatingContainer>
            <Rating href="kphrhr">4.4(2 Reviews)</Rating>
            <Location>Kyiv, Ukraine</Location>
          </RatingContainer>
          <Description>
            The pictures shown here are example vehicles of the respective.
          </Description>
          <CategoriesContainer>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
          </CategoriesContainer>
          <Button>Show more</Button>
        </Info>
      </Item>
      <Item>
        <Images src={car} alt="car" />
        <Info>
          <Title>Mavericks</Title>
          <RatingContainer>
            <Rating href="kphrhr">4.4(2 Reviews)</Rating>
            <Location>Kyiv, Ukraine</Location>
          </RatingContainer>
          <Description>
            The pictures shown here are example vehicles of the respective.
          </Description>
          <CategoriesContainer>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
            <CategoriesItem>3 adults</CategoriesItem>
          </CategoriesContainer>
          <Button>Show more</Button>
        </Info>
      </Item>
    </ul>
  );
};
