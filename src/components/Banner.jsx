import React from "react";
import PrimaryButton from "./PrimaryButton";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img width="800" src="images/banner.png" alt="banner-image" />
      <h1 className="text-3xl font-light md:text-6xl  ">
        Browse, Search, View, Buy
      </h1>
      <p className="opacity-80 text-center max-w-[570px]">
        Best place to browse, search, view details and purchase of top flagship
        phones of the current time - FlagshipFaceOff
      </p>
      <form className="max-w-[750px] w-full flex flex-col md:flex-row items-center gap-6">
        <input
          className="p-3 shadow border border-gray-300 rounded-md w-3/4"
          type="text"
          placeholder="Search Phone by Name"
        />
        <PrimaryButton buttonText={"Search"} />
      </form>
    </div>
  );
}

export default Banner;
