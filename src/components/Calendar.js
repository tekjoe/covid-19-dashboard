import React from "react";
import styled from "styled-components";

const Calendar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  @media (min-width: 768px) {
    margin: 10rem 0;
  }
`;

Calendar.Day = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 3rem;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 8vw;
  }
`;

Calendar.SubText = styled.p`
  color: ${({ theme }) => theme.metaColor};
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 3vw;
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
