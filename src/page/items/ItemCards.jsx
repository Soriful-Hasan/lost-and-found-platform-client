import React from "react";
import { Link } from "react-router";

const ItemCards = ({ item }) => {
  const {
    title,
    name,
    email,
    thumbnail,
    description,
    category,
    location,
    date,
    _id,
  } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="w-full h-70 ">
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt="image"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`itemDetails/${_id}`} className="btn btn-primary">
              see item
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
