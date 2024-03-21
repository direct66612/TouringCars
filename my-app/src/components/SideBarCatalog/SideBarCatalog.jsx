import {
  Button,
  ContainerCheckBox,
  ContainerRadio,
  Form,
  Input,
  Label,
  Text,
} from "./SideBarCatalog.styled";

import { acSvg } from "../../assets/helper/acSvg";

import sprite from "../../assets/svgSprite/sprite.svg";

export const SideBarCatalog = () => {
  return (
    <Form>
      <Label className="location">
        Location
        <div className="input__location-container">
          <Input
            className="input__location"
            type="text"
            name="location"
            placeholder="City"
          />
          <svg
            className="input__location-icon"
            fill="white"
            width="18"
            height="20"
          >
            <use href={`${sprite}#icon-location-map`} />
          </svg>
        </div>
      </Label>
      <Label>
        Filters
        <Text className="text-first">Vehicle equipment</Text>
        <ContainerCheckBox>
          <label className="checkbox__inner">
            <input className="checkbox__inner-input" type="checkbox" />
            <span className="checkmark">
              {acSvg}
              <p className="checkmark__text">AC</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input className="checkbox__inner-input" type="checkbox" />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              <p className="checkmark__text">Automatic</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input className="checkbox__inner-input" type="checkbox" />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              <p className="checkmark__text">Kitchen</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input className="checkbox__inner-input" type="checkbox" />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-tv`} />
              </svg>
              <p className="checkmark__text">TV</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input className="checkbox__inner-input" type="checkbox" />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-shower`} />
              </svg>
              <p className="checkmark__text">Shower/WC</p>
            </span>
          </label>
        </ContainerCheckBox>
        <Text>Vehicle type</Text>
        <ContainerRadio>
          <label className="radio__inner">
            <input className="radio__inner-input" type="radio" name="type" />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-van`} />
              </svg>
              <p className="radiomark__text">Van</p>
            </span>
          </label>
          <label className="radio__inner">
            <input className="radio__inner-input" type="radio" name="type" />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-integrated`} />
              </svg>
              <p className="radiomark__text">Fully Integrated</p>
            </span>
          </label>
          <label className="radio__inner">
            <input className="radio__inner-input" type="radio" name="type" />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-alcove`} />
              </svg>
              <p className="radiomark__text">Alcove</p>
            </span>
          </label>
        </ContainerRadio>
      </Label>
      <Button className="button" type="submit">
        Search
      </Button>
    </Form>
  );
};
