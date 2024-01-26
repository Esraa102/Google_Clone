/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, createContext, useState } from "react";

const context = createContext();

// eslint-disable-next-line react/prop-types
export const SearchContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState(null);
  return (
    <context.Provider
      value={{
        searchValue,
        setSearchValue,
        results,
        setResults,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const UseSearchContext = () => useContext(context);
