import React from "react";
import Banner from "./Banner";
import CoffeList from "../coffes/CoffeList";


const Home = () => {
  return (
    <>
      <Banner />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">New Coffe</h1>
        <CoffeList/>
      </main>
    </>
  );
};

export default Home;
