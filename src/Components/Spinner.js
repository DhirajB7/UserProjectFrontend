import React from "react";

function Spinner() {
  return (
    <tr className="text-center">
      <td className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </td>
    </tr>
  );
}

export default Spinner;
