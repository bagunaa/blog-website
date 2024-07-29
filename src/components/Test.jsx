import axios from "axios";
import { useEffect, useState } from "react";

export const Test = () => {
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("https://dev.to/api/articles").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {articles.map((artilce) => (
          <li>{artilce.title}</li>
        ))}
      </ul>
    </div>
  );
};
