import { useState, useEffect } from "react";
import { Tag } from "./Tag";
import axios from "axios";
export const Post = ({}) => {
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`)
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <div className="flex flex-start gap-5 grid grid-cols-3">
      {articles.map((articles, social_image) => {
        return (
          <div className="flex w-[392px] p-4 flex-col justify-center items-center gap-4 rounded-lg bg-white border-[1px]">
            <img
              className="w-[360px] h-[240px] rounded-lg"
              src={articles.social_image}
            />
            <div className="flex flex-col items-start gap-4 self-stretch">
              <Tag text={articles.tag_list[0]} />
              <h3 className="text-xl font-semibold font-sans leading-8">
                {articles.title}
              </h3>
              <p className="text-base font-normal text-[#97989F] leading-6">
                {articles.published_at}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
