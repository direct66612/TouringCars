import { Container } from "../components/Container/Container";
import { SideBarCatalog } from "../components/SideBarCatalog/SideBarCatalog";
import { ContentCatalog } from "../components/ContentCatalog/ContentCatalog";
import { useSelector } from "react-redux";
import { getAdvert } from "../Redux/advertSlice";

export const CatalogPage = () => {
  const adverts = useSelector(getAdvert);

  return (
    <Container>
      <SideBarCatalog />
      <ContentCatalog adverts={adverts} />
    </Container>
  );
};
