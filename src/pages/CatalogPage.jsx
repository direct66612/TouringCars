import { Container } from "../components/Container/Container";
import { SideBarCatalog } from "../components/SideBarCatalog/SideBarCatalog";
import { ContentCatalog } from "../components/ContentCatalog/ContentCatalog";

export const CatalogPage = () => {
  return (
    <Container>
      <SideBarCatalog />
      <ContentCatalog />
    </Container>
  );
};
