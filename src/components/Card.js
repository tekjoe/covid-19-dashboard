import React from "react";
import styled from "styled-components";

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

export default ({ stat, variant }) => {
  return (
    <Card variant={variant}>
      <Card.Statistic>{stat}</Card.Statistic>
      <Card.Label>{variant}</Card.Label>
    </Card>
  );
};
