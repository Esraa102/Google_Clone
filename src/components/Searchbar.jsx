import { useState } from "react";
import { UseSearchContext } from "../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@mui/icons-material";
import webSearch from "../api/searchApis";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchValue, setResults } = UseSearchContext();
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      setSearchValue(searchTerm);
      const { data } = await webSearch(searchTerm, "web");
      if (data) {
        navigate(`/${searchTerm}`);
        setResults(data.result);
      }
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSumbit}
      className="py-2 md:py-3 px-4 shadow
      flex items-center gap-3
      rounded-full w-[60%]
      bg-lightWhite dark:bg-darkColor"
    >
      <input
        type="search"
        placeholder="Search anything..."
        required
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent focus:outline-none
        flex-1 text-black dark:text-white"
      />
      <button type="submit" className="text-black dark:text-white ">
        <SearchOutlined
          style={{ fontSize: "30px" }}
          className="hover:text-mainColor transition"
        />
      </button>
    </form>
  );
};

export default Searchbar;
