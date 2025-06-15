import React from "react";

const RecoveredItemRow = ({ item }) => {
  const { recoverUserEmail, recoverUserName, recoverDate, recoverLocation } =
    item;
  return (
    <tr>
      <td className="border border-gray-200">{recoverUserEmail}</td>
      <td className="border border-gray-200">{recoverUserName}</td>
      <td className="border border-gray-200">{recoverDate}</td>
      <td className="border border-gray-200">{recoverLocation}</td>
    </tr>
  );
};

export default RecoveredItemRow;
