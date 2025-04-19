import React from "react";

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
        <button type="submit" class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">Search</span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </div>
  );
}

export default Banner;
