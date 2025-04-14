import Hero from "@/components/pages/HomePage/Hero";
import News from "@/components/pages/HomePage/News";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Hero />
      <News />
    </div>
  );
};

export default HomePage;
