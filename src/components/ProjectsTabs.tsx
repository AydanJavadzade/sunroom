"use client"
import { useState } from "react";
import ProjectsCard from "./ProjectsCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
    <div className="flex justify-center items-center border border-black rounded-full p-2">

        <button
          className={`${
            activeTab === "all"
              ? "bg-black text-white"
              : "bg-white text-black"
          } py-2 px-4 rounded-full transition duration-300 ease-in-out`}
          onClick={() => setActiveTab("all")}
        >
         All
        </button>

      <button
        className={`${
          activeTab === "home"
            ? "bg-black text-white"
            : "bg-white text-black"
        } py-2 px-4 rounded-full transition duration-300 ease-in-out`}
        onClick={() => setActiveTab("home")}
      >
        Home
      </button>

      <button
        className={`${
          activeTab === "business"
            ? "bg-black text-white"
            : "bg-white text-black"
        } py-2 px-4 rounded-full transition duration-300 ease-in-out`}
        onClick={() => setActiveTab("business")}
      >
        Business
      </button>
    </div>
    {/* {
        activeTab === "all" && 
    } */}
    </>
  );
};

export default Tabs;
