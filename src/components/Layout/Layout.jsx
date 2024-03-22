import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <header>
        <ul className="list">
          <li className="item">
            <Link className="link" data-name="home" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="link" data-name="catalog" to="/catalog">
              Catalog
            </Link>
          </li>
          <li className="item">
            <Link className="link" data-name="favorites" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
