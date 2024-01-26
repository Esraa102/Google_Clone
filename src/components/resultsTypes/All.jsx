import Loader from "../Loader";
import { UseSearchContext } from "../../contexts/SearchContext";
/* eslint-disable react/prop-types */
const All = () => {
  const { searchValue, results } = UseSearchContext();
  if (!results) return;
  return (
    <section className="section-container">
      {!results && searchValue && <Loader />}
      {results.length === 0 ? (
        <div className="text-center mb-8 text-gray-500 dark:text-gray-300">
          No Results Found
        </div>
      ) : (
        <div className="mb-8">
          Around <span className="font-bold">{results?.length}</span> Found
          About{" "}
          <span className="font-bold text-mainColor capitalize">
            {searchValue}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {results?.map((result) => (
          <div
            key={result.href}
            className="p-3 transition rounded-md hover:bg-lightWhite hover:shadow-md dark:hover:bg-darkColor"
          >
            <a
              href={result.href}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-mainColor hover:underline text-xl md:text-2xl my-3 block"
            >
              {result.title}
            </a>
            <p className="text-gray-600 dark:text-gray-200 text-sm md:text-lg">
              {result.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default All;
