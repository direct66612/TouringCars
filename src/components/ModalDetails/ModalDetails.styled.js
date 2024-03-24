import styled from "styled-components";

export const ModalContainer = styled("div")`
  position: relative;
  border-radius: 20px;
  padding: 40px;
  width: 982px;
  max-height: calc(100vh - 2%);
  background-color: #fff;
  overflow: auto;
`;
export const ButtonClose = styled("button")`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled("h3")`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
`;
export const RatingContainer = styled("div")`
  display: flex;
  gap: 16px;
  font-size: 16px;
  margin-bottom: 24px;
`;
export const Rating = styled("span")`
  text-decoration: underline;
`;
export const Price = styled("span")`
  display: block;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 24px;
`;
export const GalleryList = styled("ul")`
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 310px;
  overflow: auto;
  margin-bottom: 24px;
`;
export const GalleryItem = styled("li")`
  width: 275px;
  height: 310px;
  overflow: hidden;
  border-radius: 10px;
  & img {
    border-radius: 10px;
    width: 290px;
    height: 310px;
    object-fit: cover;
  }
`;
export const Text = styled("p")`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  max-height: 72px;
  overflow-y: auto;
  margin-bottom: 44px;
`;
export const ButtonContainer = styled("div")`
  & button {
    outline: none;
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 24px;
  }
  .isActive {
    position: relative;
  }
  .isActive::after {
    position: absolute;
    left: 0;
    bottom: -27px;
    content: "";
    width: 100%;
    height: 6px;
    background-color: #e44848;
  }
`;
export const Line = styled("hr")`
  border: 1px solid rgba(16, 24, 40, 0.2);
  margin-top: 0;
  margin-bottom: 44px;
`;
export const Option = styled("div")`
  display: flex;
  gap: 24px;
`;
