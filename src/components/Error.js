import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="cointainer text-center">
      <h2>Error! This is a dead end.</h2>
      <Link to="/" className="btn btn-outline-success mt-4">
        Back home
      </Link>
    </div>
  );
}

export default Error;
