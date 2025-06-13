import React from "react";

const RecoveredItemRow = ({ item }) => {
  
  const { recoverUserEmail, recoverUserName, recoverDate, recoverLocation } =
    item;
  return (
    <tr>
      
      <td>{recoverUserEmail}</td>
      <td>{recoverUserName}</td>
      <td>{recoverDate}</td>
      <td>{recoverLocation}</td>
    </tr>
  );
};

export default RecoveredItemRow;
