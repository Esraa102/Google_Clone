import { useState, useEffect } from "react";
import { UseSearchContext } from "../../contexts/SearchContext";
import webSearch from "../../api/searchApis";
import { formateDate } from "../../utils";
import { Visibility } from "@mui/icons-material";
import Loader from "../Loader";

const Videos = () => {
  const [videosSearch, setVideosSearch] = useState(null);
  const { searchValue } = UseSearchContext();
  useEffect(() => {
    const getVideos = async () => {
      const dataVideos = await webSearch(searchValue, "videos");
      setVideosSearch(dataVideos.data.result);
    };
    getVideos();
  }, [searchValue]);
  if (!videosSearch) return;
  return (
    <section className="section-container">
      {!videosSearch && searchValue && <Loader />}
      {videosSearch.length === 0 ? (
        <div className="text-center mb-8 text-gray-500 dark:text-gray-300">
          No Results Found
        </div>
      ) : (
        <div className="mb-8">
          Around <span className="font-bold">{videosSearch?.length}</span> Found
          About{" "}
          <span className="font-bold text-mianColor capitalize">
            {searchValue}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videosSearch.map((video) => (
          <div
            key={video.content}
            className="rounded-lg overflow-hidden relative
          dark:border-[2px] dark:border-[rgb(29,29,40)]"
          >
            <a href={video.content} target="_blank" rel="noreferrer">
              <img
                src={
                  video.images.large
                    ? video.images.large
                    : "/public/assets/video-logo.png"
                }
                alt="video"
                className="w-full h-[300px] object-cover bg-gray-500"
              />
            </a>
            <div
              className="flex justify-between flex-wrap gap-2
            absolute w-full bg-black/70 text-white bottom-0 left-0 py-2 px-4"
            >
              <div>
                <p className="text-lg font-semibold mb-1">
                  {video.title.length <= 50
                    ? video.title
                    : `${video.title.slice(50)}...`}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Published At: {formateDate(video.published)}
                </p>
              </div>
              <p className="flex gap-2 items-center text-blue-400">
                <Visibility />
                <span>{video.statistics.viewCount}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
