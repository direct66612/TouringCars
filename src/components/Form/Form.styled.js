import styled from "styled-components";

export const FormContainer = styled("div")`
  .form__container {
    width: 448px;
    height: 532px;
    padding: 24px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
  }
  .form__input {
    border-radius: 10px;
    width: 414px;
    height: 56px;
    border: none;
    margin-bottom: 14px;
    padding-left: 18px;
    background-color: var(--bginputs);
  }
  .form__textarea {
    border-radius: 10px;
    width: 414px;
    margin-bottom: 24px;
    height: 114px;
    resize: none;
    padding: 9px;
    border: none;
    background-color: var(--bginputs);
  }
`;
export const Title = styled("h3")`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 8px;
`;
export const Description = styled("p")`
  font-weight: 400;
  margin-bottom: 24px;
  color: var(--text);
`;

export const Calendar = styled("div")`
  position: relative;
`;
export const CalendarIcon = styled("svg")`
  position: absolute;
  fill: #fff;
  stroke: #000;
  top: 18px;
  right: 18px;
  z-index: 25;
  pointer-events: none;
`;
export const Button = styled("button")`
  border-radius: 200px;
  padding: 16px 60px;
  background-color: var(--bgbutton);
  border: none;
  color: #fff;
  &:hover {
    background-color: #d84343;
  }
`;
