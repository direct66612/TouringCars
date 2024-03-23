import { Container } from "../components/Container/Container";
import { SideBarCatalog } from "../components/SideBarCatalog/SideBarCatalog";
import { ContentCatalog } from "../components/ContentCatalog/ContentCatalog";
import { useSelector } from "react-redux";
import { getAdvert } from "../Redux/advertSlice";
import { ButtonLoadMore } from "../components/ContentCatalog/ContentCatalog.styled";

export const CatalogPage = () => {
  const adverts = useSelector(getAdvert);

  return (
    <Container>
      <SideBarCatalog />
      <ul>
        {adverts.map((el) => (
          <ContentCatalog key={el._id} advert={el} />
        ))}
        <ButtonLoadMore>Load more</ButtonLoadMore>
      </ul>
    </Container>
  );
};
