import React from "react";

const RecoveredItemCard = ({ item }) => {
  return (
    <div>
      <div className="card  bg-base-100 w-full shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{item.recoverUserEmail}</h2>
          <h2 className="font-semibold">Location- {item.location}</h2>
          <p>{item.recoverUserName}</p>
        </div>
      </div>
    </div>
  );
};

export default RecoveredItemCard;
