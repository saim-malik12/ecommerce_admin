import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Divider, Radio, Table } from 'antd';
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [
  {
    key: '1',
    name: 'John Brown',
    product: 32,
    status: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    product: 42,
    status: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    product: 32,
    status: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    product: 99,
    status: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const DashBoard = () => {
  const data = [
    {
      type: "jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "March",
      sales: 61,
    },
    {
      type: "April",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "June",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "August",
      sales: 38,
    },
    {
      type: "September",
      sales: 38,
    },
    {
      type: "October",
      sales: 38,
    },
    {
      type: "November",
      sales: 38,
    },
    {
      type: "December",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
    

      return "#ffd333";
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div className="">
            <p className="">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0 des align-items-en">Compared to April to 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="des">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0 des">Compared to April to 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div lassName="d-flex flex-column align-items-end">
            <p className="des">Total</p>
            <h4 className="mb-0">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0 des">Compared to April to 2024</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-4 title">
            Recents Orders
          </h3>
          <div>
          <Table
      
        columns={columns}
        dataSource={data1}
      />
          </div>
        </div>
      
      </div>
      
    </div>
  );
};

export default DashBoard;
