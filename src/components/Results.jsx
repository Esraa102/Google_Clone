import { Outlet } from "react-router-dom";
import { UseSearchContext } from "../contexts/SearchContext";

const Results = () => {
  const { searchValue } = UseSearchContext();
  return searchValue !== "" && <Outlet />;
};

export default Results;
