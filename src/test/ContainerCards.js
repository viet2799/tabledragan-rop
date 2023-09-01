import React from 'react';
import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        name: 'John',
        age: 30,
        customCellContent: <div style={{ backgroundColor: 'yellow' }}>Custom Content</div>,
    },
    {
        key: '2',
        name: 'Alice',
        age: 25,
        customCellContent: <div style={{ backgroundColor: 'lightblue' }}>Another Custom Content</div>,
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Custom Cell',
        key: 'customCell',
        render: (text, record) => record.customCellContent,
    },
];

function CustomTable() {
    return <Table dataSource={dataSource} columns={columns} />;
}

export default CustomTable;
