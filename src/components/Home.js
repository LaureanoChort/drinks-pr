import React from "react";
import SearchForm from "./SearchForm";
import DrinksList from "./DrinksList";

function Home() {
  return (
    <main className="container">
      <SearchForm />
      <DrinksList />
    </main>
  );
}

export default Home;
