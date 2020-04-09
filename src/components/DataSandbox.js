import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";

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
        "https://covidtracking.com/api/v1/states/daily.json"
      );
      setData({ stateData: result.data });
    }
    getData();
  }, []);
  const yesterday = parseInt(moment().subtract(1, "day").format("YYYYMMDD"));
  let todaysData = data.stateData
    .filter((state) => state.state === selectedState)
    .filter((state) => state.date === yesterday);
  console.log(todaysData);
  return (
    <div>
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
      {todaysData.map((item) => (
        <div key={item.hash}>
          <p>{item.death}</p>
        </div>
      ))}
    </div>
  );
};
