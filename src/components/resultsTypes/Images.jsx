import { useState, useEffect } from "react";
import { UseSearchContext } from "../../contexts/SearchContext";
import webSearch from "../../api/searchApis";
import Loader from "../Loader";

const Images = () => {
  const [imagesSearch, setImagesSearch] = useState(null);
  const { searchValue } = UseSearchContext();
  useEffect(() => {
    const getImages = async () => {
      const dataImages = await webSearch(searchValue, "images");
      setImagesSearch(dataImages.data.result);
    };
    getImages();
  }, [searchValue]);
  if (!imagesSearch) return;
  return (
    <section className="section-container">
      {!imagesSearch && searchValue && <Loader />}
      {imagesSearch.length === 0 ? (
        <div className="text-center mb-8 text-gray-500 dark:text-gray-300">
          No Results Found
        </div>
      ) : (
        <div className="mb-8">
          Around <span className="font-bold">{imagesSearch?.length}</span> Found
          About{" "}
          <span className="font-bold text-mainColor capitalize">
            {searchValue}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {imagesSearch.map((img, index) => (
          <div
            key={`${img.title}_${index}`}
            className="bg-lightWhite dark:bg-darkColor 
            rounded-lg flex flex-col justify-between overflow-hidden"
          >
            <a href={img.url} target="_blank" rel="noreferrer">
              <img
                src={
                  img.image ? img.image : "/public/assets/img-placeholder.png"
                }
                alt="img"
                className="w-full h-[300px] object-cover"
              />
            </a>
            <p className="p-4 text-lg font-semibold">{img.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Images;
