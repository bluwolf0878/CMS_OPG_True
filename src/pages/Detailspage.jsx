import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client/contentfulClient";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 40px 0;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const ArticleTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 20px 0;
`;

const ArticleInfo = styled.p`
  color: gray;
  font-size: 0.9rem;
`;

const ArticleContent = styled.p`
  margin-top: 20px;
  line-height: 1.6;
`;

export const Detailspage = () => {
  const { articleID } = useParams();
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    client
      .getEntry(articleID)
      .then((data) => setArticleDetails(data))
      .catch((err) => console.log(err));
  }, [articleID]);

  if (!articleDetails) return <p>Henter artikel...</p>;

  return (
    <Container>
      <ArticleImage src={articleDetails.fields.img.fields.file.url} alt={articleDetails.fields.title} />
      <ArticleTitle>{articleDetails.fields.title}</ArticleTitle>
      <ArticleInfo>
        {articleDetails.fields.skriben} - {articleDetails.fields.datetime}
      </ArticleInfo>
      <ArticleContent>{articleDetails.fields.indhold}</ArticleContent>
    </Container>
  );
};
