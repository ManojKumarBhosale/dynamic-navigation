import React from "react";
import { useParams } from "react-router-dom";

const Company = ({ defaultSubNavKey }) => {
  const { subNav } = useParams();
  const selectedSubNav = subNav || defaultSubNavKey;

  return (
    <>
      {selectedSubNav === "about" ? (
        <h1>About Company</h1>
      ) : selectedSubNav === "management" ? (
        <h1>Company Management</h1>
      ) : (
        selectedSubNav === "jobs" && <h1>Jobs in company</h1>
      )}
    </>
  );
};

export default Company;
