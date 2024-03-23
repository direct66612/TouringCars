import { acSvg } from "../../assets/helper/acSvg";

import sprite from "../../assets/svgSprite/sprite.svg";

import { addFavorite } from "../../Redux/favoritesSlice";

import { useDispatch } from "react-redux";

import {
  Button,
  CategoriesContainer,
  CategoriesItem,
  Description,
  FavoritesButton,
  Images,
  Info,
  Item,
  Location,
  Price,
  PriceContainer,
  Rating,
  RatingContainer,
  Title,
  TitleContainer,
} from "./ContentCatalog.styled";

export const ContentCatalog = ({ advert }) => {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(addFavorite(advert));
  };
  return (
    <>
      <Item key={advert._id}>
        <Images src={advert.gallery[0]} alt={advert.name} />
        <Info>
          <TitleContainer>
            <Title>{advert.name}</Title>
            <PriceContainer>
              <Price>${advert.price}</Price>
              <FavoritesButton onClick={handleFavorite}>
                <svg
                  className="rating__icon"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#101828"
                >
                  <use href={`${sprite}#icon-add-favorite`} />
                </svg>
              </FavoritesButton>
            </PriceContainer>
          </TitleContainer>
          <RatingContainer>
            <Rating href="kphrhr">
              <svg className="rating__icon" width="16" height="16">
                <use href={`${sprite}#icon-star`} />
              </svg>
              {advert.rating}
              {`(${advert.reviews.length} Reviews)`}
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
              {advert.location}
            </Location>
          </RatingContainer>
          <Description>{advert.description}</Description>
          <CategoriesContainer>
            <CategoriesItem>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-adults`} />
              </svg>
              {advert.adults} adults
            </CategoriesItem>
            <CategoriesItem>
              <svg width="20" height="20" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              {advert.transmission}
            </CategoriesItem>
            <CategoriesItem>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              {advert.engine}
            </CategoriesItem>
            {advert.details.kitchen > 0 ? (
              <CategoriesItem>
                <svg width="20" height="20" fill="none" stroke="#101828">
                  <use href={`${sprite}#icon-kitchen`} />
                </svg>
                Kitchen
              </CategoriesItem>
            ) : (
              <></>
            )}
            <CategoriesItem>
              <svg width="20" height="20" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-beds`} />
              </svg>
              beds
            </CategoriesItem>
            {advert.details.airConditioner > 0 ? (
              <CategoriesItem className="ac--content">
                {acSvg} AC
              </CategoriesItem>
            ) : (
              <></>
            )}
          </CategoriesContainer>
          <Button>Show more</Button>
        </Info>
      </Item>
    </>
  );
};
