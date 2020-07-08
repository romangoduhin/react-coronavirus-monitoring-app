import React from "react";
import NavBar from "../NavBar/NavBar";
import News from "./News/News";
import SearchNews from "./SearchNews/SearchNews";

function NewsPage() {
  return (
    <div>
      <NavBar />
      <SearchNews />
      <News />
    </div>
  );
}
export default NewsPage;
