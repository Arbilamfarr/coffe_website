import React from "react";
import CoffeItem from "./CoffeItem";

const CoffeList = () => {
  const coffe = new Array(20).fill(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-6 mx-auto">
      {coffe.map((_, index) => (
        <CoffeItem key={index} />
      ))}
    </div>
  );
};

export default CoffeList;
