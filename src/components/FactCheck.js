import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import Container from "./Container";
import { factCheckApiKey } from "../utils/keys";

const FactList = styled(motion.section)`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
`;

FactList.Title = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  margin: 0 2rem 2rem 2rem;
`;

const Rumor = styled.div`
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.cardBackground};
  border-left: 3px solid hsl(37, 97%, 70%);
  border-bottom: none;
  border-right: none;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
`;

Rumor.Body = styled.div`
  font-size: 1rem;
  h4,
  p {
    margin-bottom: 0.5rem;
  }
  small {
    color: ${({ theme }) => theme.metaColor};
  }
  a {
    color: ${({ theme }) => theme.metaColor};
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

Rumor.Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export default ({ active }) => {
  const [rumors, setRumors] = useState({ claims: [] });
  useEffect(() => {
    const getRumors = async () => {
      const results = await axios(
        `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=covid-19&key=${factCheckApiKey}&languageCode=en-US`
      );
      setRumors({ claims: results.data.claims });
    };
    getRumors();
  }, []);
  return (
    <Container>
      <FactList active={active}>
        {rumors.claims.map((rumor) => (
          <Rumor key={rumor.claimReview[0].title}>
            <Rumor.Body>
              <h4>
                {rumor.claimant ? `Claim by ${rumor.claimant}:` : "Claim:"}
              </h4>
              <p>{rumor.text}</p>
              <p>
                <strong>{`${rumor.claimReview[0].publisher.name}`}</strong>{" "}
                rating:{" "}
                <strong>{`${rumor.claimReview[0].textualRating}`}</strong>
              </p>
              <a
                href={rumor.claimReview[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {rumor.claimReview[0].title}
              </a>
            </Rumor.Body>
          </Rumor>
        ))}
      </FactList>
    </Container>
  );
};
