import React, { useEffect, useState } from "react";
import Phone from "./Phone";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router";

function PhonesContainer({ phones, searchedPhones }) {
  console.log(searchedPhones);
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [showAll, phones]);
  //   console.log(phones);
  return (
    <div className="pt-20 pb--10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchedPhones.length
          ? searchedPhones.map((phone) => (
              <Phone key={phone.id} phone={phone} />
            ))
          : displayPhones.map((phone) => (
              <Phone key={phone.id} phone={phone} />
            ))}
      </div>
      <div
        onClick={() => {
          setShowAll((prev) => !prev);
          if (showAll) window.scrollTo(0, 450);
        }}
        className="mt-10"
      >
        <button className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              {showAll ? "Show Less" : "Show All"}
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </div>
  );
}

export default PhonesContainer;
