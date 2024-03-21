import {
  Button,
  ContainerCheckBox,
  ContainerRadio,
  Form,
  Input,
  Label,
  Text,
} from "./SideBarCatalog.styled";

import sprite from "../../assets/svgSprite/sprite.svg";

export const SideBarCatalog = () => {
  return (
    <div>
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
            <input type="checkbox" name="equipment" />
            <input type="checkbox" name="equipment" />
            <input type="checkbox" name="equipment" />
            <input type="checkbox" name="equipment" />
            <input type="checkbox" name="equipment" />
          </ContainerCheckBox>
          <Text>Vehicle type</Text>
          <ContainerRadio>
            <input type="radio" name="type" />
            <input type="radio" name="type" />
            <input type="radio" name="type" />
          </ContainerRadio>
        </Label>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
