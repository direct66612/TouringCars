import styled from "styled-components";

export const Container = styled("ul")`
  header {
    background: rgb(2, 0, 36);
    color: white;
  }
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  li {
    font-size: 3rem;
    padding: 20px;
    position: relative;
    text-transform: uppercase;
    transition: all 300ms ease;
    width: fit-content;
    cursor: pointer;
  }
  li:hover {
    transform: skew(10deg);
  }
  li::before {
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
  li:hover::before {
    top: -3px;
    left: 0px;
    color: hotpink;
  }

  li::after {
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
  li:hover::after {
    width: 120%;
    outline: 5px solid rgb(2, 0, 36);
  }
`;
