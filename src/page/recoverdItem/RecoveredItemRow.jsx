import React from "react";

const RecoveredItemRow = ({ item }) => {
  const { recoverUserEmail, recoverUserName, recoverDate, recoverLocation } =
    item;
  return (
    <tr>
      <td className="">{recoverUserEmail}</td>
      <td className="">{recoverUserName}</td>
      <td className="">{recoverDate}</td>
      <td className="">{recoverLocation}</td>
    </tr>
  );
};

export default RecoveredItemRow;
