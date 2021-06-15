import React from "react";
import { useParams } from "react-router-dom";

const Office = ({ defaultSubNavKey }) => {
  const { subNav } = useParams();
  const selectedSubNav = subNav || defaultSubNavKey;

  return (
    <>
      {selectedSubNav === "department" ? (
        <h1>Departments in Office</h1>
      ) : selectedSubNav === "location" ? (
        <h1>Office Locations</h1>
      ) : (
        selectedSubNav === "sales" && <h1>Office Wise Sales</h1>
      )}
    </>
  );
};

export default Office;
