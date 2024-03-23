import { getFavorites } from "../Redux/favoritesSlice";
import { Container } from "../components/Container/Container";

import { useSelector } from "react-redux";
import { ContentCatalog } from "../components/ContentCatalog/ContentCatalog";

export const FavoritesPage = () => {
  const adverts = useSelector(getFavorites);

  return (
    <Container>
      <ul>
        {adverts.map((el) => (
          <ContentCatalog key={el._id} advert={el} />
        ))}
      </ul>
    </Container>
  );
};
