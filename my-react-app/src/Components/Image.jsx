import React from "react";
import product from "../product";

const Image = () => {
  return <img src={product.imageUrl} alt={product.name} />;
};

export default Image;
