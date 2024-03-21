import styled from "styled-components";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  .input__location:focus .input__location-icon {
    stroke: #101828;
  }
  .input__location-icon {
    position: absolute;
    top: 18px;
    left: 18px;
    stroke: rgba(16, 24, 40, 0.6);
  }
`;
export const Label = styled("label")`
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
  margin-bottom: 24px;
`;
export const ContainerCheckBox = styled("div")`
  padding-top: 24px;
  display: flex;
  gap: 10px;
  width: 360px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;
export const ContainerRadio = styled("div")`
  padding-top: 24px;
  display: flex;
  gap: 10px;
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
`;
