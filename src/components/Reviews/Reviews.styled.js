import styled from "styled-components";

export const Item = styled("li")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;
export const UserInfo = styled("div")`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const NameBlock = styled("span")`
  background-color: var(--bgcategories);
  border-radius: 60px;
  width: 60px;
  height: 60px;
  font-weight: 600;
  font-size: 24px;
  color: var(--bgbutton);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RatingBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const RatingText = styled("p")`
  font-weight: 600;
  font-size: 18px;
`;
export const Description = styled("p")`
  font-weight: 400;
  width: 430px;
  line-height: 150%;
  color: var(--text);
`;
