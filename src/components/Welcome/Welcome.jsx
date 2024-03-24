import { Link } from "react-router-dom";
import { Title, WelcomeContainer } from "./Welcome.styled";

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <Title>welcome to our car rental website, you can go too our:</Title>
      <Link className="catalog" to={"/catalog"}>
        CATALOG
      </Link>
    </WelcomeContainer>
  );
};
