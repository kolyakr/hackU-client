import { events } from "@/config";
import React from "react";

const News = () => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row gap-10">
        {events.map((ev) => (
          <li key={ev} className="w-[300px] h-[300px] ">
            <img
              src={ev}
              alt="hackaton event"
              className="w-full h-full object-cover object-center rounded-[40px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
