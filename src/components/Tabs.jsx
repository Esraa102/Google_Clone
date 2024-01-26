import {
  Feed,
  InsertPhoto,
  OndemandVideo,
  WebStories,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { UseSearchContext } from "../contexts/SearchContext";

const Tabs = () => {
  const { searchValue } = UseSearchContext();
  return (
    <section className="section-container">
      <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap mb-10">
        <NavLink
          to={`/all/${searchValue}`}
          className={({ isActive }) =>
            `tab-btn ${isActive && "bg-lightWhite dark:bg-darkColor"} `
          }
        >
          <WebStories />
          <span>All</span>
        </NavLink>
        <NavLink
          to={`/news/${searchValue}`}
          className={({ isActive }) =>
            `tab-btn ${isActive && "bg-lightWhite dark:bg-darkColor"}`
          }
        >
          <Feed />
          <span>News</span>
        </NavLink>
        <NavLink
          to={`/images/${searchValue}`}
          className={({ isActive }) =>
            `tab-btn ${isActive && "bg-lightWhite dark:bg-darkColor"}`
          }
        >
          <InsertPhoto />
          <span>Images</span>
        </NavLink>
        <NavLink
          to={`/videos/${searchValue}`}
          className={({ isActive }) =>
            `tab-btn ${isActive && "bg-lightWhite dark:bg-darkColor"}`
          }
        >
          <OndemandVideo />
          <span>Videos</span>
        </NavLink>
      </div>
    </section>
  );
};

export default Tabs;
