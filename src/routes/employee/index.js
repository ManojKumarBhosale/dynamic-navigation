import React from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

const Employee = ({ defaultSubNavKey }) => {
  const { subNav } = useParams();
  const selectedSubNav = subNav || defaultSubNavKey;

  return (
    <>
      {selectedSubNav === "dashboard" ? (
        <Dashboard />
      ) : selectedSubNav === "project" ? (
        <h1>Employee Projects</h1>
      ) : (
        selectedSubNav === "settings" && <h1>Employee Settings</h1>
      )}
    </>
  );
};

export default Employee;
