import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Thời gian',
        dataIndex: 'thoiGian',
    },
    {
        title: 'T2',
        dataIndex: 't2',
    },
    {
        title: 'T3',
        dataIndex: 't3',
    },
    {
        title: 'T4',
        dataIndex: 't4',
    },
    {
        title: 'T5',
        dataIndex: 't5',
    },
    {
        title: 'T6',
        dataIndex: 't6',
    },
];

const data = [
    {
        thoiGian: 'Tiết 1',
        t2: '...',
        t3: '...',
        t4: '...',
        t5: '...',
        t6: '...',
    },
    {
        thoiGian: 'Tiết 2',
        t2: '...',
        t3: '...',
        t4: '...',
        t5: '...',
        t6: '...',
    },
    // Tương tự cho các tiết khác
];

const CustomTable = () => {
    return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default CustomTable;
