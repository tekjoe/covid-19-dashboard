import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import moment from "moment";
import Container from "./Container";

const NewsList = styled(motion.section)`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
`;

NewsList.Title = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  margin: 0 2rem 2rem 2rem;
`;

const NewsItem = styled.a`
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.cardBackground};
  border-left: 3px solid hsl(37, 97%, 70%);
  border-bottom: none;
  border-right: none;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
`;

NewsItem.Body = styled.div`
  font-size: 1rem;
  small {
    color: ${({ theme }) => theme.metaColor};
  }
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

NewsItem.Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export default ({ active }) => {
  const [news, setNews] = useState({ articles: [] });
  useEffect(() => {
    async function getNewsArticles() {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search_by_date?query=corona&tags=story&hitsPerPage=10`
      );
      setNews({ articles: result.data.hits });
    }
    getNewsArticles();
  }, []);
  return (
    <Container>
      <NewsList active={active}>
        {news.articles.map((article) => (
          <NewsItem key={article.objectID} href={article.url} target="_blank">
            <NewsItem.Body>
              <h4>{article.title}</h4>
              <small>{moment(article.created_at).format("LLLL")}</small>
            </NewsItem.Body>
          </NewsItem>
        ))}
      </NewsList>
    </Container>
  );
};
