import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { BiDrink } from "react-icons/bi";

function SearchForm() {
  const term = useRef("");
  const { setSearchTerm, searchTerm } = useGlobalContext();

  React.useEffect(() => {
    term.current.focus();
  }, []);

  return (
    <section className="contaier">
      <form
        className="d-flex flex-column col-8 col-md-5 mx-auto mt-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="term" className="mx-auto mb-2 fs-5 text-center">
          Search your favorite cocktail <BiDrink className="mb-1" />
        </label>
        <input
          className="form-control me-2"
          type="text"
          name="term"
          placeholder="Buscar"
          ref={term}
          onChange={() => setSearchTerm(term.current.value)}
        />
      </form>
    </section>
  );
}

export default SearchForm;
