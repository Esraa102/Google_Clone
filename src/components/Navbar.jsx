import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="section-container navbar">
      <div className="flex items-center gap-2">
        <img
          src="/public/assets/logo.png"
          alt="logo"
          className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px]"
        />
        <span className="font-bold  hidden md:inline text-2xl text-mainColor">
          GOOGLE
        </span>
      </div>
      <Searchbar />
      <button
        type="button"
        className="btn"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? (
          <LightModeOutlined className="hover:text-orange-600 transition" />
        ) : (
          <DarkModeOutlined className="hover:text-mainColor transition" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
