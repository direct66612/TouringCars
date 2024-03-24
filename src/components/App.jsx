import { Route, Routes } from "react-router-dom";

import { WelcomePage } from "../pages/WelcomePage";
import { CatalogPage } from "../pages/CatalogPage";
import { FavoritesPage } from "../pages/FavoritesPage";

import { Layout } from "./Layout/Layout";

import { fetchAdvertAction } from "../API/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertAction());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};
