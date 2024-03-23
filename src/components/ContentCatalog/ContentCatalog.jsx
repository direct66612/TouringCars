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

export const ContentCatalog = ({ adverts }) => {
  return (
    <ul>
      {adverts.map(
        ({
          _id,
          name,
          price,
          rating,
          location,
          adults,
          children,
          engine,
          transmission,
          description,
          gallery,
        }) => (
          <Item key={_id}>
            <Images src={gallery[_id]} alt={name} />
            <Info>
              <Title>{name}</Title>
              <RatingContainer>
                <Rating href="kphrhr">
                  <svg className="rating__icon" width="16" height="16">
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  {rating}
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
                  {location}
                </Location>
              </RatingContainer>
              <Description>{description}</Description>
              <CategoriesContainer>
                <CategoriesItem>{adults}</CategoriesItem>
                <CategoriesItem>{engine}</CategoriesItem>
                <CategoriesItem>{transmission}</CategoriesItem>
                <CategoriesItem>{children}</CategoriesItem>
                <CategoriesItem>3 adults</CategoriesItem>
                <CategoriesItem>3 adults</CategoriesItem>
              </CategoriesContainer>
              <Button>Show more</Button>
            </Info>
          </Item>
        )
      )}
    </ul>
  );
};
