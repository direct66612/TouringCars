import styled from "styled-components";

export const Container = styled("ul")`
  header {
    background: rgb(2, 0, 36);
    color: white;
  }
  .list {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  .item {
    font-size: 3rem;
    padding: 20px;
    position: relative;
    text-transform: uppercase;
    transition: all 300ms ease;
    width: fit-content;
    cursor: pointer;
  }
  .item:hover {
    transform: skew(10deg);
  }
  .item::before {
    content: attr(data-name);
    position: absolute;
    top: 0;
    left: -20px;
    background: rgb(2, 0, 36);
    height: 3rem;
    overflow: hidden;
    transition: all 300ms ease;
    padding-left: 20px;
  }
  .item:hover::before {
    top: -3px;
    left: 0px;
    color: hotpink;
  }

  .item::after {
    content: "";
    height: 4px;
    width: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: hotpink;
    transition: all 300ms ease;
  }
  .item:hover::after {
    width: 120%;
    outline: 5px solid rgb(2, 0, 36);
  }
`;
