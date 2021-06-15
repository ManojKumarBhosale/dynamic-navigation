import React, { useState } from "react";
import { Grid, TextBox } from "../../components/ui";
import { columns, data } from "./temp-data";
import { SearchOutlined } from "@ant-design/icons";

const Dashboard = () => {
  let [filteredDataSource, setFilteredDataSoure] = useState(data);

  const onSearchChange = ({ currentTarget }) => {
    const { value: searchText } = currentTarget;
    const filteredData = data.filter((row) => {
      return Object.values(row)
        .join("")
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setFilteredDataSoure(filteredData);
  };

  return (
    <div>
      <h1>Employee Information</h1>
      <div style={{ margin: "10px 0px" }}>
        <TextBox
          prefix={<SearchOutlined />}
          placeholder={"Search Employee"}
          onChange={onSearchChange}
        />
      </div>
      <Grid
        columns={columns}
        dataSource={filteredDataSource}
        bordered={true}
        pagination={true}
      />
    </div>
  );
};

export default Dashboard;
