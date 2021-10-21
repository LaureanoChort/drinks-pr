import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function SingleDrink() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [drink, setDrink] = useState(null);

  const getDrinkInfo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log(data.drinks[0]);
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newDrink = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setDrink(newDrink);
        console.log(newDrink);
      } else {
        setDrink(null);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getDrinkInfo();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (!drink) {
    return (
      <section className="container text-center">
        <h2 className="text-center">There is no cocktails to display</h2>
        <Link to="/" className="btn btn-outline-success mt-2">
          Back to home
        </Link>
      </section>
    );
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      drink;
    return (
      <section className="container text-center p-4">
        <Link to="/" className="btn btn-outline-success">
          Back home
        </Link>
        <h2 className="fw-bold my-5">{name}</h2>
        <div className="row mb-5 ">
          <div className="left col-md-5">
            <img className="single-drink-img rounded" src={image} alt={name} />
          </div>
          <div className="right col-md-7">
            <div className="drink-info d-flex flex-column justify-content-center text-start h-100 p-4 gap-2">
              <p>
                <span className="bg-success rounded text-white me-2 p-1">
                  Name:
                </span>
                {name}
              </p>
              <p>
                <span className="bg-success rounded text-white me-2 p-1">
                  Category:
                </span>
                {category}
              </p>
              <p>
                <span className="bg-success rounded text-white me-2 p-1">
                  Info:
                </span>
                {info}
              </p>
              <p>
                <span className="bg-success rounded text-white me-2 p-1">
                  Glass:
                </span>
                {glass}
              </p>
              <p>
                <span className="bg-success rounded text-white me-2 p-1">
                  Instructions:
                </span>
                {instructions}
              </p>
              <p>
                <span className="bg-success rounded text-white me-2 p-1 d-inline-block">
                  Ingredients:
                </span>
                <div className="d-inline-block">
                  {ingredients.map((item, index) => {
                    return item ? (
                      <p key={index} className="d-inline-block me-2">
                        {item}
                      </p>
                    ) : null;
                  })}
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <h2>{id}</h2>;
}

export default SingleDrink;
