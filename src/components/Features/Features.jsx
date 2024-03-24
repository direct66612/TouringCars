import { DetailsList } from "../DetailsList.jsx/DetailsList";
import {
  FeaturesContainer,
  Title,
  VehicleDetailsContainer,
  VehicleDetailsText,
} from "./Features.styled";

export const Features = ({ advert }) => {
  const { adults, transmission, engine } = advert;
  const fullDetails = { adults, transmission, engine, ...advert.details };

  return (
    <FeaturesContainer>
      <DetailsList details={fullDetails} />
      <Title>Vehicle details</Title>
      <VehicleDetailsContainer>
        <VehicleDetailsText>Form</VehicleDetailsText>
        <VehicleDetailsText>{advert.form}</VehicleDetailsText>
      </VehicleDetailsContainer>
      <VehicleDetailsContainer>
        <VehicleDetailsText>Length</VehicleDetailsText>
        <VehicleDetailsText>{advert.length}</VehicleDetailsText>
      </VehicleDetailsContainer>
      <VehicleDetailsContainer>
        <VehicleDetailsText>Width</VehicleDetailsText>
        <VehicleDetailsText>{advert.width}</VehicleDetailsText>
      </VehicleDetailsContainer>
      <VehicleDetailsContainer>
        <VehicleDetailsText>Height</VehicleDetailsText>
        <VehicleDetailsText>{advert.height}</VehicleDetailsText>
      </VehicleDetailsContainer>
      <VehicleDetailsContainer>
        <VehicleDetailsText>Tank</VehicleDetailsText>
        <VehicleDetailsText>{advert.tank}</VehicleDetailsText>
      </VehicleDetailsContainer>
      <VehicleDetailsContainer>
        <VehicleDetailsText>Consumption</VehicleDetailsText>
        <VehicleDetailsText>{advert.consumption}</VehicleDetailsText>
      </VehicleDetailsContainer>
    </FeaturesContainer>
  );
};
