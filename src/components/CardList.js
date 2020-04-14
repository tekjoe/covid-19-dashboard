import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import ContentLoader from "react-content-loader";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Container from "./Container";
import Card from "./Card";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={150}
    viewBox="0 0 275 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="18" rx="0" ry="0" width="275" height="200" />
  </ContentLoader>
);

const ChartContainer = styled(ResponsiveContainer)`
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  margin: 2rem 2rem 2rem 2rem;
  @media (min-width: 768px) {
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
  padding: 1rem;
  color: ${({ theme }) => theme.textColor};
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 2;
  option {
    background: ${({ theme }) => theme.cardBackground};
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 0.25rem;
  margin: 2rem 0;
  padding: 2rem 1rem;
  position: relative;
`;

SelectWrapper.Chevron = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 1rem;
  svg {
    display: block;
    height: 2rem;
    fill: ${({ theme }) => theme.textColor};
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
        "https://covidtracking.com/api/v1/states/daily.json"
      );
      setData({ stateData: result.data });
    }
    getData();
  }, []);
  const yesterday = moment().subtract(1, "day").format("YYYYMMDD");
  let todaysData = data.stateData
    .filter((state) => state.state === selectedState)
    .filter((state) => state.date === parseInt(yesterday));

  let allData = data.stateData
    .filter((state) => state.state === selectedState)
    .map((state) => ({
      date: moment(state.date.toString()).format("l"),
      positive: state.positive,
      negative: state.negative,
      total: state.totalTestResults,
    }));
  return (
    <Container>
      <CardContainer>
        <SelectWrapper>
          <StateSelector
            value={selectedState}
            onChange={handleStateChange}
            id="selector"
          >
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
          <SelectWrapper.Chevron>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </SelectWrapper.Chevron>
        </SelectWrapper>
        {todaysData.length ? (
          todaysData.map((state) => (
            <CardGrid key={1}>
              <Card
                stat={state.totalTestResults}
                delta={state.totalTestResultsIncrease}
                variant="total tested"
              />
              <Card
                stat={state.negative}
                delta={state.negativeIncrease}
                variant="negative"
              />
              <Card
                stat={state.positive}
                delta={state.positiveIncrease}
                variant="positive"
              />
              {state.hospitalized ? (
                <Card
                  stat={state.hospitalized}
                  delta={state.hospitalizedIncrease}
                  variant="hospitalized"
                />
              ) : null}
              <Card
                stat={state.death}
                delta={state.deathIncrease}
                variant="deaths"
              />
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
          </CardGrid>
        )}
        <ChartContainer height={400}>
          <AreaChart
            data={allData}
            margin={{ top: 3, right: 3, left: 0, bottom: 3 }}
          >
            <XAxis dataKey="date" hide={true} reversed={true} />
            <YAxis hide={true} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="hsl(195, 100%, 50%)"
              fill="hsl(195, 100%, 50%)"
              fillOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="negative"
              stroke="hsl(163, 72%, 41%)"
              fill="hsl(163, 72%, 41%)"
              fillOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="positive"
              stroke="hsl(348, 97%, 39%)"
              fill="hsl(348, 97%, 39%)"
              fillOpacity={0.7}
            />
          </AreaChart>
        </ChartContainer>
      </CardContainer>
    </Container>
  );
};
