import React from "react";
import { useParams } from "react-router-dom";

const Customer = ({ defaultSubNavKey }) => {
  const { subNav } = useParams();
  const selectedSubNav = subNav || defaultSubNavKey;
  return <>{selectedSubNav === "dashboard" && <h1> Dashboard</h1>}</>;
};

export default Customer;
