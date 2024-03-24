import { useState } from "react";
import {
  ModalContainer,
  ButtonClose,
  Title,
  RatingContainer,
  Rating,
  Price,
  GalleryList,
  GalleryItem,
  Text,
  ButtonContainer,
  Line,
  Option,
} from "./ModalDetails.styled";

import sprite from "../../assets/svgSprite/sprite.svg";
import { Features } from "../Features/Features";
import { Reviews } from "../Reviews/Reviews";
import { FormSubmit } from "../Form/Form";

export const ModalDetails = ({ advert, close }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <ModalContainer>
      <ButtonClose onClick={close}>
        <svg stroke="#101828" width="32" height="32">
          <use href={`${sprite}#icon-close`} />
        </svg>
      </ButtonClose>
      <Title>{advert.name}</Title>
      <RatingContainer>
        <Rating>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-star`} />
          </svg>
          {advert.rating}({advert.reviews.length} Rewiews)
        </Rating>
        <Rating>
          <svg fill="#fff" stroke="#101828" width={16} height={16}>
            <use href={`${sprite}#icon-location-map`} />
          </svg>
          {advert.location}
        </Rating>
      </RatingContainer>
      <Price>€{advert.price}</Price>
      <GalleryList>
        {advert.gallery.map((elem, index) => (
          <GalleryItem key={index}>
            <img src={elem} alt={advert.name} />
          </GalleryItem>
        ))}
      </GalleryList>
      <Text>{advert.description}</Text>
      <ButtonContainer>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? `isActive` : null}
        >
          Features
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? `isActive` : null}
        >
          Reviews
        </button>
      </ButtonContainer>
      <Line />
      <Option>
        {activeTab === 1 && <Features advert={advert} />}
        {activeTab === 2 && <Reviews reviews={advert.reviews} />}
        {activeTab !== 0 && <FormSubmit />}
      </Option>
    </ModalContainer>
  );
};
