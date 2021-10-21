import React from "react";
import { useGlobalContext } from "../context";
import Drink from "./Drink";
import Loading from "./Loading.js";

function DrinksList() {
  const { cocktails, isLoading, setSearchTerm } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <section className="text-center">
        <h2 className="mt-5">No se encontró ningún cocktail.</h2>
        <button
          className="btn btn-outline-success mt-3"
          onClick={() => setSearchTerm("a")}
        >
          Volver
        </button>
      </section>
    );
  }

  return (
    <section
      className="drinks-list container mx-auto pt-5 gap-5 d-flex flex-wrap justify-content-center"
      style={{ width: "100vw" }}
    >
      {cocktails.map((item) => {
        const { id } = item;
        return <Drink key={id} {...item} />;
      })}
    </section>
  );
}

export default DrinksList;
