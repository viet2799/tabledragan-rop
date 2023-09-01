import { Card, Col, Row, Table } from "antd";
import React, { useState } from "react";

const subject = [
    { id: 1, name: "Toán", idCell: "", numberOfPerviod: 2 },
    { id: 2, name: "Văn", idCell: "", numberOfPerviod: 1 },
    { id: 3, name: "Anh", idCell: "", numberOfPerviod: 4 },
    { id: 4, name: "Sinh", idCell: "", numberOfPerviod: 2 },
    { id: 5, name: "Sử", idCell: "day2_3", numberOfPerviod: 3 },
];

const DAYSOFWEEK = {
    day0: "Thứ 2",
    day1: "Thứ 3",
    day2: "Thứ 4",
    day3: "Thứ 5",
    day4: "Thứ 6",
    day5: "Thứ 7",
};

const daysOfWeek = ["day0", "day1", "day2", "day3", "day4", "day5"];
const periods = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateColumns = (
    handleCellClick,
    handleDragStart,
    handleDragOver,
    handleDrop,
    subjectData, curData, handleDropElement
) => {
    const columns = [
        {
            title: "Tiết",
            dataIndex: "period",
            key: "period",
        },
    ];

    daysOfWeek?.forEach((day, index) => {
        columns.push({
            title: DAYSOFWEEK[day],
            dataIndex: `day${index}`,
            key: `day${index}`,
            onCell: (record) => ({
                onClick: () => handleCellClick(record.period, day),
                onDragOver: (e) => handleDragOver(e, day, record.period),
                onDrop: (e) => handleDrop(e, day, record.period),
            }),
            render: (value, record) => (
                <div style={{
                    height: "40px",
                    width: '80px'
                }}
                >
                    {subjectData
                        ?.filter((value) => value.idCell === `${day}_${record.period}`)
                        ?.map((element) => (
                            <Card
                                draggable
                                onDragStart={(even) => {
                                    handleDragStart(even, element);
                                }}
                                onDrop={handleDropElement}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    height: `${element.numberOfPerviod * 100}%`,
                                    width: "100%",
                                    backgroundColor: 'pink',
                                    zIndex: 999
                                }}
                            >
                                {element.name}
                            </Card>
                        ))}
                </div>
            ),
        });
    });

    return columns;
};

const generateDataSource = () => {
    const dataSource = [];

    periods.forEach((period) => {
        const row = { period: period };
        daysOfWeek.forEach((day, index) => {
            row[`day${index}`] = ``; // Ô trống
        });
        dataSource.push(row);
    });

    return dataSource;
};

const LastTest = () => {
    const dataSource = generateDataSource();

    const [data, setData] = useState(dataSource);
    const [curData, setCurData] = useState({});
    const [subjectData, setSubjectData] = useState(subject);

    const handleDragStart = (event, value) => {
        console.log(event, value);
        setCurData(value);
    };

    const handleCellClick = (period, day) => {
        // console.log(`Clicked on period ${period}, day ${day}`);
        console.log(`${day}_${period}`);
    };

    const handleDragOver = (event, period, day) => {
        // Xử lý sự kiện onDragOver tại đây
        // Thực hiện các thao tác cần thiết khi có sự kiện kéo qua ô cụ thể
        event.preventDefault();
    };

    const handleDrop = (event, day, period) => {
        console.log(event);
        console.log(day, period);
        // setCurData({ ...curData, idCell: `${day}_${period}` });
        const index = subjectData?.findIndex(element => element.idCell === curData?.idCell)
        console.log(index)
        const newData = [...subjectData]
        newData[index].idCell = `${day}_${period}`
        setSubjectData(newData)
        // setSubjectData([...subjectData, { ...subjectData[index], idCell: `${day}_${period} ` }])

    };
    const handleDropElement = (event) => {
        console.log('drop')
        event.preventDefault();

    }

    console.log(curData);

    const columns = generateColumns(
        handleCellClick,
        handleDragStart,
        handleDragOver,
        handleDrop,
        subjectData, curData, handleDropElement
    );

    console.log(subjectData)

    return (
        <Row gutter={20}>
            <Col span={20}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered
                />
            </Col>
            <Col span={4}>
                <Card style={{ height: "auto", width: "300px" }}>
                    {subjectData
                        ?.filter((value) => value.idCell === "")
                        ?.map((value) => (
                            <Card
                                draggable
                                onDragStart={(event) => {
                                    handleDragStart(event, value);
                                }}
                            >
                                {value.name}
                            </Card>
                        ))}
                </Card>
            </Col>
        </Row>
    );
};

export default LastTest;
