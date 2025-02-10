import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client/contentfulClient";

// Details siden henter vores query params med "useParams" hooket (her bruger vi object destructuring til at "trække" articleID ud fra hele objektet)
// Når vi har ID for artiklen kan vi hente kun en specifik artikel og på den måde vise den i et andet view.
export const Detailspage = () => {
  const { articleID } = useParams();

  const [articleDetails, setArticleDetails] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "sys.id": articleID,
      })
      .then((data) => setArticleDetails(data))
      .catch((err) => console.log(err));
  }, [articleID]);

  return <div>{articleDetails?.items[0]?.fields.title}</div>;
};
