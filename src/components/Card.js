import React from "react";
import styled from "styled-components";
import iconUp from "../images/icon-up.svg";

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-top: 3px solid
    ${({ theme, variant }) => {
      switch (variant) {
        case "positive":
          return theme.limeGreen;
        case "negative":
          return `#fbb404`;
        case "hospitalized":
          return theme.twitter;
        case "deaths":
          return theme.youTube;
        default:
          return theme.facebook;
      }
    }};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 2rem;
`;

Card.Statistic = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

Card.Label = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.metaColor};
`;

Card.Delta = styled.p`
  color: ${({ theme }) => theme.limeGreen};
  margin-top: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 14px;
  img {
    margin-right: 0.5rem;
  }
`;

export default ({ stat, variant, delta }) => {
  return (
    <Card variant={variant}>
      <Card.Statistic>{stat}</Card.Statistic>
      <Card.Label>{variant}</Card.Label>
      {delta ? (
        <Card.Delta>
          <img src={iconUp} alt="Increase" />
          {delta} Today
        </Card.Delta>
      ) : null}
    </Card>
  );
};
