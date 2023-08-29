import React, { useState } from 'react';
import { Table } from 'antd';



const MyTable = () => {

    const columns = [
        {
            title: 'Tiết',
            dataIndex: 'tiet',
            key: 'tiet',
        },
        {
            title: 'Thứ 2',
            dataIndex: 't2',
            key: 't2',
            render: (_, record) => (
                <div
                    onDragOver={(e) => handleDragOver(e, record)}
                    onDrop={(e) => handleDrop(e, record)}
                >
                    {record.t2}
                </div>
            ),
        },
        {
            title: 'Thứ 2',
            dataIndex: 't2',
            key: 't2',
            render: (_, record) => (
                <div
                // onDragOver={(e) => handleDragOver(e, record)}
                // onDrop={(e) => handleDrop(e, record)}
                >
                    {record.t2}
                </div>
            ),
        },
    ];

    const initialData = Array.from({ length: 9 }, (_, index) => ({
        key: index + 1,
        tiet: index + 1,
        t2: '',
        // Khởi tạo dữ liệu các cột khác
    }));
    const [dataSource, setDataSource] = useState(initialData);
    // console.log(initialData)

    const handleDragOver = (e, record) => {
        e.preventDefault();
        console.log('Drag over:');
    };

    const handleDrop = (e, record) => {
        e.preventDefault();
        const droppedData = e.dataTransfer.getData('text');
        console.log(droppedData)
        const updatedDataSource = [...dataSource];
        const dataIndex = updatedDataSource.findIndex(item => item.key === record.key);

        updatedDataSource[dataIndex].t2 = droppedData;
        // Cập nhật dữ liệu các cột khác tương tự

        setDataSource(updatedDataSource);
    };

    const handleDragStart = (e, data) => {
        e.dataTransfer.setData('text', data);
    };

    return (
        <div>
            <div
                draggable
                onDragStart={(e) => handleDragStart(e, 'Dữ liệu bạn muốn kéo vào t2')}
            >
                Kéo và thả dữ liệu vào ô t2
            </div>
            <Table columns={columns} dataSource={dataSource}
                onRow={(record, index) => {
                    return {
                        onDragOver: (e) => handleDragOver(e, record),
                        onDrop: (e) => handleDrop(e, record)
                    }
                }}

            />
            <div
                onDragOver={(e) => handleDragOver(e)}
                // onDrop={(e) => handleDrop(e)}
                style={{
                    height: '300px', width: '300px', border: '1px solid'
                }}
            ></div>
        </div>
    );
};

export default MyTable;
