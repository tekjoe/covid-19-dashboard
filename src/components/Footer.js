import React from "react";
import styled from "styled-components";
import Container from "./Container";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = styled.footer`
  background: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.metaColor};
  padding: 4rem 2rem;
`;

Footer.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

Footer.Column = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  text-align: center;
  h2 {
    margin-bottom: 1rem;
  }
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    padding: 0 4rem;
    margin-bottom: 0;
  }
`;

Footer.Icon = styled.img`
  height: 2rem;
  width: 2rem;
  margin: 0 0.5rem;
`;

export default () => {
  return (
    <Footer>
      <Container>
        <Footer.Content>
          <Footer.Column>
            <h2>COVID-19 Dashboard</h2>
            <p>
              All data is made available by the{" "}
              <a
                href="https://covidtracking.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Covid Tracking Project
              </a>
              , which sources its information from state/district/territory
              public health authorities. Data is as reliable as the public
              health authorities are.
            </p>
          </Footer.Column>
          <Footer.Column>
            <h2>Project by Joe Ramirez</h2>
            <a href="https://www.instagram.com/tekjoe/">
              <Footer.Icon src={instagram} />
            </a>
            <a href="https://twitter.com/_tekjoe">
              <Footer.Icon src={twitter} />
            </a>
          </Footer.Column>
        </Footer.Content>
      </Container>
    </Footer>
  );
};
