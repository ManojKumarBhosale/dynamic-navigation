import React from "react";
import { Table } from "antd";

const Grid = ({
  dataSource = [],
  columns = [],
  pagination = false,
  pageSize = 6,
  bordered = false,
}) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={
        pagination && {
          pageSize,
        }
      }
      bordered={bordered}
    />
  );
};

export default Grid;
