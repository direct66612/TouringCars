import styled from "styled-components";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 360px;
  .location {
    gap: 8px;
    color: rgba(16, 24, 40, 0.6);
  }
  .text-first {
    margin-top: 14px;
  }
  .input__location-container {
    position: relative;
  }
  .input__location {
    padding-left: 44px;
  }
  .input__location:focus + .input__location-icon {
    stroke: #101828;
  }
  .input__location-icon {
    position: absolute;
    top: 18px;
    left: 18px;
    stroke: rgba(16, 24, 40, 0.6);
  }
`;
export const Label = styled("div")`
  display: flex;
  flex-direction: column;
  color: var(--text);
`;
export const Input = styled("input")`
  border-radius: 10px;
  border: none;
  width: 316px;
  height: 56px;
  background-color: var(--bginputs);
`;
export const Text = styled("p")`
  font-weight: 600;
  font-size: 20px;
  color: #101828;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;
export const ContainerCheckBox = styled("div")`
  padding-top: 24px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  .checkbox__inner {
    position: relative;
    cursor: pointer;
    width: 110px;
    height: 93px;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
  }
  .checkbox__inner-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox__inner:has(.checkbox__inner-input:checked) {
    border: 1px solid var(--bgbutton);
  }
  .checkmark {
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .checkmark__text {
    color: #101828;
    text-align: center;
  }
`;
export const ContainerRadio = styled("div")`
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .radio__inner {
    position: relative;
    cursor: pointer;
    width: 110px;
    height: 93px;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
  }
  .radio__inner-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .radio__inner:has(.radio__inner-input:checked) {
    border: 1px solid var(--bgbutton);
  }
  .radiomark {
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .radiomark__text {
    color: #101828;
    text-align: center;
  }
`;
export const Button = styled("button")`
  margin-top: 32px;
  background-color: var(--bgbutton);
  border: none;
  cursor: pointer;
  padding: 16px 60px;
  max-width: 173px;
  border-radius: 200px;
  color: #fff;
  &:hover {
    background: #d84343;
  }
`;
