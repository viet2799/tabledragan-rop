import React, { useState } from 'react';
import { Table } from 'antd';

const DAYSOFWEEK = {
    day0: 'Thứ 2',
    day1: 'Thứ 3',
    day2: 'Thứ 4',
    day3: 'Thứ 5',
    day4: 'Thứ 6',
    day5: 'Thứ 7',
}

const daysOfWeek = ["day0", "day1", "day2", "day3", "day4", "day5"];
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

    daysOfWeek?.forEach((day, index) => {
        columns.push({
            title: DAYSOFWEEK[day],
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
        // console.log(droppedData)
        // console.log(record)
        // console.log(period)
        // console.log(day)
        // console.log(e)
        const chooseDay = data?.find(element => element.period === period)
        const index = data?.findIndex(element => element.period === period)
        // console.log(chooseDay)

        // console.log(chooseDay[day])
        // setData([...data, data[index] : {
        //     ...data[index]
        // }])
        const key = Object.keys(chooseDay)?.find(value => value === day)

        // data[index][day] = droppedData
        console.log(data)
        const newData = [...data]
        newData[index][day] = droppedData
        console.log(chooseDay[key])
        // newData[index] = { ...newData[index], chooseDay[day]: droppedData }
        // const newArray = [...arrayOfObjects];
        // newArray[index] = { ...newArray[index], age: newAge };
        // setArrayOfObjects(newArray);
        setData(newData)
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
                dataSource={data}
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
