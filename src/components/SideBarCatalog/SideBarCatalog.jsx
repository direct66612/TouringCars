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

import { useDispatch } from "react-redux";
import { useState } from "react";
import { setupFilter } from "../../Redux/filterSlice";

export const SideBarCatalog = () => {
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });
  const [location, setLocation] = useState("");

  const [radio, setRadio] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateLocation = location.trim();
    dispatch(setupFilter({ location: validateLocation, checkBox, radio }));
  };

  const handleLocation = (e) => {
    const { value } = e.target;
    setLocation(value);
  };
  const handleCheckbox = (event) => {
    const { value, checked } = event.target;
    setCheckBox({ ...checkBox, [value]: checked });
  };

  const handleRadio = (event) => {
    const { value } = event.target;
    setRadio(value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label className="location">
        Location
        <div className="input__location-container">
          <Input
            className="input__location"
            type="text"
            name="location"
            placeholder="City"
            value={location}
            onChange={handleLocation}
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
            <input
              className="checkbox__inner-input"
              type="checkbox"
              name="checkBox"
              checked={checkBox.ac}
              value="ac"
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              {acSvg}
              <p className="checkmark__text">AC</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input
              className="checkbox__inner-input"
              type="checkbox"
              name="checkBox"
              checked={checkBox.automatic}
              value="automatic"
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              <p className="checkmark__text">Automatic</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input
              className="checkbox__inner-input"
              type="checkbox"
              name="checkBox"
              value="kitchen"
              checked={checkBox.kitchen}
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              <p className="checkmark__text">Kitchen</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input
              className="checkbox__inner-input"
              type="checkbox"
              name="checkBox"
              checked={checkBox.tv}
              value="tv"
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-tv`} />
              </svg>
              <p className="checkmark__text">TV</p>
            </span>
          </label>
          <label className="checkbox__inner">
            <input
              className="checkbox__inner-input"
              type="checkbox"
              name="checkBox"
              value="shower"
              checked={checkBox.shower}
              onChange={handleCheckbox}
            />
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
            <input
              className="radio__inner-input"
              onChange={handleRadio}
              type="radio"
              value="van"
              name="radio"
            />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-van`} />
              </svg>
              <p className="radiomark__text">Van</p>
            </span>
          </label>
          <label className="radio__inner">
            <input
              className="radio__inner-input"
              type="radio"
              name="radio"
              value="fullyIntegrated"
              onChange={handleRadio}
            />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-integrated`} />
              </svg>
              <p className="radiomark__text">Fully Integrated</p>
            </span>
          </label>
          <label className="radio__inner">
            <input
              className="radio__inner-input"
              type="radio"
              name="radio"
              value="alcove"
              onChange={handleRadio}
            />
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
