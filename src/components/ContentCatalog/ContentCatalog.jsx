import car from "../../assets/helper/car.jpg";
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
