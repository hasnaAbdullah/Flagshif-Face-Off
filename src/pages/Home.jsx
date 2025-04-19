import React, { useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import PhonesContainer from "../components/PhonesContainer";

function Home() {
  // get data
  const phonesData = useLoaderData();
  const [phones, setPhones] = useState([]);
  console.log(phonesData[0]);
  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedPhones = phonesData.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    console.log(searchedPhones);
    setPhones(searchedPhones);
  };
  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <PhonesContainer phones={phonesData} searchedPhones={phones} />
    </div>
  );
}

export default Home;
