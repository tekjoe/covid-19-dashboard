import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import moment from "moment";

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
  line-height: 1.1;
  @media (min-width: 768px) {
    font-size: 8vw;
  }
  @media (min-width: 1440px) {
    font-size: 9.625rem;
  }
`;

Calendar.SubText = styled(motion.abbr)`
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
  const isItTimeForBeer = () => {
    const hour = moment().hour();
    if (hour < 17) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Calendar>
      <Calendar.Day>{days[today]}</Calendar.Day>
      <Calendar.SubText
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        title={`According to my calculations, it's ${
          isItTimeForBeer() ? "time" : "too early"
        } for a beer.`}
      >
        It's time for a {isItTimeForBeer() ? "beer" : "coffee"}.
      </Calendar.SubText>
    </Calendar>
  );
};
