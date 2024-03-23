import styled from "styled-components";

export const Item = styled("li")`
  display: flex;
  gap: 24px;
  width: 888px;
  margin-bottom: 32px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
`;
export const Info = styled("div")``;
export const Images = styled("img")`
  width: 290px;
  height: 310px;
  border-radius: 10px;
`;
export const TitleContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const Title = styled("h3")`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
`;
export const PriceContainer = styled("div")`
  display: flex;
  gap: 10px;
`;
export const Price = styled("p")`
  font-weight: 600;
  font-size: 24px;
`;
export const FavoritesButton = styled("button")`
  background-color: transparent;
  border: none;
  &:hover svg {
    fill: var(--bgbutton);
    stroke: var(--bgbutton);
  }
`;
export const RatingContainer = styled("div")`
  position: relative;
  display: flex;
  gap: 36px;
  padding-left: 20px;
  margin-bottom: 24px;
  .rating__icon {
    position: absolute;
    top: 2px;
    left: 0;
  }
`;
export const Rating = styled("a")`
  font-weight: 400;
  border-bottom: 1px solid #101828;
  padding-bottom: 1px;
`;
export const Location = styled("span")`
  position: relative;
  font-weight: 400;
  padding-left: 20px;
  .location__icon {
    position: absolute;
    top: 2px;
    left: 0;
  }
`;
export const Description = styled("p")`
  font-weight: 400;
  color: var(--text);
  margin-bottom: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 525px;
`;
export const CategoriesContainer = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const CategoriesItem = styled("li")`
  position: relative;
  padding: 12px 18px 12px 46px;
  border-radius: 100px;
  background-color: var(--bgcategories);
  & svg {
    position: absolute;
    top: 11px;
    left: 18px;
  }
  &.ac--content svg {
    width: 20px;
    height: 20px;
  }
`;
export const Button = styled("button")`
  background-color: var(--bgbutton);
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  color: #fff;
  &:hover {
    background-color: #d84343;
  }
`;
export const ButtonLoadMore = styled("button")`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 19px 40px;
  background-color: transparent;
  margin: 0 auto;
  display: block;
  &:hover {
    border: 1px solid var(--bgbutton);
  }
`;
