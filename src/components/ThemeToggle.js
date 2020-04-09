import React from "react";
import styled from "styled-components";

const ThemeToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${({ theme }) => theme.textColor};
    margin-right: 1rem;
    font-weight: bold;
  }
`;

ThemeToggler.Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 2rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-image: ${({ theme }) => theme.toggle};
    }
    &:focus + span {
      box-shadow: 0 0 1px #2196f3;
    }
    &:checked + span:before {
      -webkit-transform: translateX(2rem);
      -ms-transform: translateX(2rem);
      transform: translateX(2rem);
    }
  }
`;

ThemeToggler.Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.toggle};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1rem;
  &:before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 1rem;
  }
`;

export default ({ toggleTheme }) => {
  return (
    <ThemeToggler>
      <p>Dark Mode</p>
      <ThemeToggler.Switch>
        <input type="checkbox" onChange={toggleTheme} />
        <ThemeToggler.Slider />
      </ThemeToggler.Switch>
    </ThemeToggler>
  );
};
