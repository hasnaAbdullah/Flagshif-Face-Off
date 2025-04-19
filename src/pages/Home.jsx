import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import PhonesContainer from "../components/PhonesContainer";

function Home() {
  // get data
  const phones = useLoaderData();
  // console.log(phones);
  return (
    <div>
      <Banner />
      <PhonesContainer phones={phones} />
    </div>
  );
}

export default Home;
