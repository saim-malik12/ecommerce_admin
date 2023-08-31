import React from 'react'
import { Column } from "@ant-design/plots";
import { Table } from "antd";
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
const  ColorList = () => {
  return (
    <div>
        <div className='mb-4 title'>Color</div>
       <div>
      <Table columns={columns} dataSource={data1} />
    </div>
    </div>
  )
}

export default ColorList
