import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import Card from "./Card";
import axios from "axios";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={150}
    viewBox="0 0 275 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="18" rx="0" ry="0" width="275" height="150" />
  </ContentLoader>
);

const CardContainer = styled.div`
  margin: -3rem 2rem 2rem 2rem;
  @media (min-width: 768px) {
    margin: -12rem 2rem 2rem 2rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const StateSelector = styled.select`
  width: 100%;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.cardBackground};
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 49%;
  }
`;

export default () => {
  const [data, setData] = useState({ stateData: [] });
  const [selectedState, setSelectedState] = useState("WI");
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  useEffect(() => {
    async function getData() {
      const result = await axios(
        "https://covidtracking.com/api/v1/states/current.json"
      );
      setData({ stateData: result.data });
    }
    getData();
  }, []);
  let filteredState = data.stateData.filter(
    (state) => state.state === selectedState
  );
  return (
    <Container>
      <CardContainer>
        <StateSelector value={selectedState} onChange={handleStateChange}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </StateSelector>
        {filteredState.length ? (
          filteredState.map((state) => (
            <CardGrid key={1}>
              <Card stat={state.totalTestResults} variant="total tested" />
              <Card stat={state.negative} variant="negative" />
              <Card stat={state.positive} variant="positive" />
              {state.hospitalized ? (
                <Card stat={state.hospitalized} variant="hospitalized" />
              ) : null}
              <Card stat={state.death} variant="deaths" />
              {state.inIcuCumulative ? (
                <Card stat={state.inIcuCumulative} variant="in icu" />
              ) : null}
            </CardGrid>
          ))
        ) : (
          <CardGrid>
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
          </CardGrid>
        )}
      </CardContainer>
    </Container>
  );
};
