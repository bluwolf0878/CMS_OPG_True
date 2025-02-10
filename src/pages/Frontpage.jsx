import { useEffect, useState } from "react";
import { client } from "../client/contentfulClient";
import { NavLink } from "react-router-dom";

// Frontpage der henter alle min artiker (husk at ændre "ID" i content_type til jeres eget)
// Siden returnerer en liste af NavLinks der alle peger på Details siden med et Query Param smidt på.

export const Frontpage = () => {
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
      })
      .then((data) => setArticleData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(articleData);

  return (
    <div>
      {articleData?.items?.map((article) => {
        return (
          <NavLink to={`/details/${article.sys.id}`} key={article.sys.id}>
            {article.fields.title}
          </NavLink>
        );
      })}
    </div>
  );
};
