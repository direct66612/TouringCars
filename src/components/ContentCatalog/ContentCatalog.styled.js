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
export const Info = styled("div")`
  width: 526px;
`;
export const Images = styled("img")`
  width: 290px;
  height: 310px;
  border-radius: 10px;
`;
export const Title = styled("h3")`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
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
  padding: 12px 18px;
  border-radius: 100px;
  background-color: var(--bgcategories);
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
