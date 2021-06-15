import React from "react";
import { Input } from "antd";

const TextBox = ({ type, placeholder, ...rest }) => {
  return <Input type={type} placeholder={placeholder} {...rest} />;
};

export default TextBox;
