import React, { useState } from 'react';
import { Table } from 'antd';

const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
const periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subject = [
    { id: 1, name: "Toán" },
    { id: 2, name: "Văn" },
    { id: 3, name: "Anh" },
    { id: 4, name: "Sinh" },
    { id: 5, name: "Sử" },
];

const generateColumns = (handleCellClick, handleDragOver, handleDrop) => {
    const columns = [
        {
            title: 'Tiết',
            dataIndex: 'period',
            key: 'period',
        },
    ];

    daysOfWeek.forEach((day, index) => {
        columns.push({
            title: day,
            dataIndex: `day${index}`,
            key: `day${index}`,
            onCell: (record) => ({
                onClick: () => handleCellClick(record.period, day),
                onDragOver: (e) => handleDragOver(e, record, record.period, day),
                onDrop: (e) => handleDrop(e, record, record.period, day),
            }),
        });
    });

    return columns;
};

const generateDataSource = () => {
    const dataSource = [];

    periods.forEach((period) => {
        const row = { period: `Tiết ${period}` };
        daysOfWeek.forEach((day, index) => {
            row[`day${index}`] = ''; // Ô trống
        });
        dataSource.push(row);
    });

    return dataSource;
};

const Appp = () => {

    const dataSource = generateDataSource();

    console.log('dataSource', dataSource)
    const [data, setData] = useState(dataSource)

    const handleDragStart = (e, id, name) => {
        console.log(e, id, name);
        e.dataTransfer.setData('text', name);

        // a.push({ id, name })
        // setDataNew([...dataNew, { id, name }])
    };
    const handleDragOver = (event, period, day) => {
        // Xử lý sự kiện onDragOver tại đây
        // Thực hiện các thao tác cần thiết khi có sự kiện kéo qua ô cụ thể
        event.preventDefault();

    };

    const handleDrop = (e, record, period, day) => {
        console.log(e);
        const droppedData = e.dataTransfer.getData('text');
        console.log(droppedData)
        console.log(record)
        console.log(period)
        console.log(day)
        console.log(e)
        console.log(dataSource)
        // setData([...data, { ...record, }])
    };

    const handleCellClick = (period, day) => {
        console.log(`Clicked on period ${period}, day ${day}`);
    };
    const columns = generateColumns(handleCellClick, handleDragOver, handleDrop);

    console.log(data)

    return (
        <>
            <div>
                {subject?.map((element, key) => (
                    <div
                        draggable
                        onDragStart={(e) => {
                            handleDragStart(e, element.id, element.name);
                        }}
                        style={{ height: "30px", width: "120px", border: "1px solid" }}
                    >
                        {element.name}
                    </div>
                ))}
            </div>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered
            // onRow={(record, period, index) => ({
            //     onDragOver: (e) => handleDragOver(e, record),
            //     onDrop: (e) => handleDrop(e, record, period, index),
            // })}
            />
        </>
    );
};

export default Appp;
