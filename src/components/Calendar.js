import React from "react";
import styled from "styled-components";

const Calendar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 2rem;
  @media (min-width: 768px) {
  }
`;

Calendar.Day = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 16vw;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 8vw;
  }
  @media (min-width: 1440px) {
    font-size: 9.625rem;
  }
`;

Calendar.SubText = styled.p`
  color: ${({ theme }) => theme.metaColor};
  font-size: 5vw;
  @media (min-width: 768px) {
    font-size: 3vw;
  }
  @media (min-width: 1440px) {
    font-size: 3.625rem;
  }
`;

export default () => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = date.getDay();
  return (
    <Calendar>
      <Calendar.Day>{days[today]}</Calendar.Day>
      <Calendar.SubText>It really do be this day.</Calendar.SubText>
    </Calendar>
  );
};
