import React from "react";
import { Link } from "react-router-dom";

function Drink({ id, name, image, info, glass }) {
  return (
    <div className="drink card shadow mb-5 bg-body">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title fs-3 fw-bold">{name}</h5>
        <p className="card-glass fw-bold">{glass}</p>
        <p className="card-info">{info}</p>
        <Link className="btn btn-success" to={`/drink/${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}

export default Drink;
