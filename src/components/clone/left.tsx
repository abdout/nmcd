import React from "react";
import SearchBar from "./search";
import TrendingSection from "./trend-section";
import FollowSection from "./follow-section";
import Footer from "./footer";
import Following from "../platform/platform/following";
import Foryou from "../platform/platform/foryou";


const MainSidebar = () => {
  return (
    <div className="w-80 flex flex-col gap-3">
      {/* <SearchBar />
      <TrendingSection />
      <FollowSection />
      <Footer /> */}
      <TrendingSection />
      <Following />
      <Foryou />
      
    </div>
  );
};

export default MainSidebar;
