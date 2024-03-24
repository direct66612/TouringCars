import { Container } from "../components/Container/Container";
import { SideBarCatalog } from "../components/SideBarCatalog/SideBarCatalog";
import { ContentCatalog } from "../components/ContentCatalog/ContentCatalog";
import { ButtonLoadMore } from "../components/ContentCatalog/ContentCatalog.styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAdvert } from "../Redux/advertSlice";
import { NoContent } from "../components/NoContent/NoContent";
import { filter } from "../Redux/filterSlice";
import { filterCars } from "../assets/helper/filterFunc";

export const CatalogPage = () => {
  const allCars = useSelector(getAdvert);

  const filters = useSelector(filter);

  const [cars, setCars] = useState([]);
  const [pag, setPag] = useState(4);

  useEffect(() => {
    if (
      Object.values(filters.radio).every((el) => Boolean(el) === false) &&
      Object.values(filters.checkBox).every((el) => Boolean(el) === false) &&
      !filters.location
    ) {
      setCars(() => [...allCars]);
      return;
    }
    setCars(filterCars(allCars, filters));
  }, [allCars, filters]);

  useEffect(() => {
    setPag(4);
  }, [filters]);

  const handleLoadMore = () => {
    setPag(pag + 4);
  };
  useEffect(() => {
    setCars(() => [...allCars]);
  }, [allCars]);

  return (
    <Container>
      <SideBarCatalog />
      {cars.length ? (
        <ul>
          {cars.slice(0, pag).map((el) => (
            <ContentCatalog key={el._id} advert={el} />
          ))}
          {cars.length > pag && (
            <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
          )}
        </ul>
      ) : (
        <NoContent />
      )}
    </Container>
  );
};
