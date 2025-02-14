import { useEffect, useState } from "react";
import { client } from "../client/contentfulClient";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled(NavLink)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 15px;
`;

const NewsTitle = styled.h2`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 10px;
`;

const NewsDate = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

export const Frontpage = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "nyhedarticle" })
      .then((data) => setArticleData(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Header>
        <Logo>INGN</Logo>
      </Header>

      <NewsGrid>
        {articleData.map((article) => (
          <NewsCard to={`/details/${article.sys.id}`} key={article.sys.id}>
            <NewsImage src={article.fields.img.fields.file.url} alt={article.fields.title} />
            <NewsContent>
              <NewsTitle>{article.fields.title}</NewsTitle>
              <NewsDate>{article.fields.datetime}</NewsDate>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </Container>
  );
};
