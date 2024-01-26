import webSearch from "../../api/searchApis";
import { UseSearchContext } from "../../contexts/SearchContext";
import { formateDate } from "../../utils";
import Loader from "../Loader";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState(null);
  const { searchValue } = UseSearchContext();
  useEffect(() => {
    const getNews = async () => {
      const dataNews = await webSearch(searchValue, "news");
      setNews(dataNews.data.news);
    };
    getNews();
  }, [searchValue]);
  if (!news) return;
  return (
    <section className="section-container">
      {!news && searchValue && <Loader />}
      {news.length === 0 ? (
        <div className="text-center mb-8 text-gray-500 dark:text-gray-300">
          No Results Found
        </div>
      ) : (
        <div className="mb-8">
          Around <span className="font-bold">{news?.length}</span> Found About{" "}
          <span className="font-bold text-mainColor capitalize">
            {searchValue}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div
            key={`${item.title}_${index}`}
            className="bg-lightWhite dark:bg-darkColor rounded-md overflow-hidden flex flex-col"
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <img
                src={
                  item.image
                    ? item.image
                    : "/public/assets/news-placeholder.jpg"
                }
                alt="news"
                className="h-[300px] w-full object-cover"
              />
            </a>
            <div className="p-3 pb-6 flex flex-col justify-between gap-4 flex-1">
              <div>
                <p className="text-xl font-semibold mb-4">
                  {item.title.length <= 50
                    ? item.title
                    : `${item.title.slice(50)}...`}
                </p>
                <p className="text-[16px]">
                  {item.body.length <= 150
                    ? item.body
                    : `${item.body.slice(150)}...`}
                </p>
              </div>
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-mainColor font-semibold  hover:underline"
                >
                  Source {item.source}
                </a>
                <p className="text-sm mt-1 text-dark-500 dark:text-gray-300">
                  Published At: {formateDate(item.date)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
