import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import FactCheck from "./FactCheck";
import NewsList from "./NewsList";

const NewsSection = styled.section`
  margin: 0 2rem 3rem;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  border: none;
  margin-right: 1rem;
  font-size: 2rem;
  background: none;
  color: ${({ theme, active }) => (active ? theme.textColor : theme.metaColor)};
  font-weight: bold;
  cursor: pointer;
  border-image-source: ${({ theme, active }) =>
    active ? theme.instagram : "none"};
  border-image-slice: 6;
  border-image-width: 0 0 3px 0;
  border-image-outset: 0px 0px 0px 0px;
`;

// only rendering one component at a time, resulting in excessive GET requests
export default () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (e) => {
    setActiveTab(Number(e.target.dataset.key));
  };
  return (
    <Container>
      <NewsSection>
        <Tabs>
          <Tab
            data-key={0}
            onClick={handleClick}
            active={activeTab === 0 ? true : false}
          >
            News
          </Tab>
          {/* <Tab
            data-key={1}
            onClick={handleClick}
            active={activeTab === 1 ? true : false}
          >
            Rumors
          </Tab> */}
        </Tabs>
        <NewsList active={activeTab === 0 ? true : false} />
        {/* <FactCheck active={activeTab === 1 ? true : false} /> */}
      </NewsSection>
    </Container>
  );
};
