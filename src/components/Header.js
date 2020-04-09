import React from "react";
import styled from "styled-components";
import Container from "./Container";
import ThemeToggler from "./ThemeToggle";

const Header = styled.header`
  background: ${({ theme }) => theme.headerBackground};
  padding: 3rem 2rem 5rem 2rem;
  @media (min-width: 768px) {
    padding: 3rem 2rem 15rem 2rem;
  }
`;

Header.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

Header.Title = styled.div`
  h1 {
    line-height: 1;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    h1 {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;

export default ({ toggleTheme }) => {
  return (
    <Header>
      <Container>
        <Header.Content>
          <Header.Title>
            <h1>COVID-19 Dashboard</h1>
          </Header.Title>
          <ThemeToggler toggleTheme={toggleTheme} />
        </Header.Content>
      </Container>
    </Header>
  );
};
