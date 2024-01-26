import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Tabs from "./components/Tabs";
import { News, All, Images, Videos } from "./components/resultsTypes";
function App() {
  return (
    <section
      className="min-h-screen pt-24 bg-white dark:bg-black 
    text-black dark:text-white"
    >
      <Navbar />
      <Tabs />
      <Routes>
        <Route path="/"  element={<Results />}>
          <Route path="/all/:searchValue" element={<All />} />
          <Route path="/news/:searchValue" element={<News />} />
          <Route path="/images/:searchValue" element={<Images />} />
          <Route path="/videos/:searchValue" element={<Videos />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
