import React from 'react';
import {Table} from 'antd'

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group'
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city'
      }
];

const data = localStorage.getItem('empInfo') ? JSON.parse(localStorage.getItem('empInfo') || '{}') : [];
console.log("table",data);

const ShowEmployee:React.FC = () => {
    return (
        <>
        <div className="site-layout-content">
        <Table columns={columns} dataSource={data} rowKey="name"/>
        </div>
        </>
    )
}

export default ShowEmployee