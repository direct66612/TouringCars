import {
  Description,
  Item,
  NameBlock,
  RatingBlock,
  RatingText,
  UserInfo,
} from "./Reviews.styled";

import { Rating } from "../Rating/Rating";

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((el, index) => (
        <Item key={index}>
          <UserInfo>
            <NameBlock>{el.reviewer_name.slice(0, 1)}</NameBlock>
            <RatingBlock>
              <RatingText>{el.reviewer_name}</RatingText>
              <Rating rating={el.reviewer_rating} />
            </RatingBlock>
          </UserInfo>
          <Description>{el.comment}</Description>
        </Item>
      ))}
    </ul>
  );
};
