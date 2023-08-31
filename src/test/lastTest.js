import { Card, Table } from 'antd';
import React from 'react'

const subject = [
    { id: 1, name: "Toán", idCell: '' },
    { id: 2, name: "Văn", idCell: '' },
    { id: 3, name: "Anh", idCell: '' },
    { id: 4, name: "Sinh", idCell: '' },
    { id: 5, name: "Sử", idCell: '' },
];

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

const LastTest = () => {
    const handleDragStart = (even) => {

    }
    return (
        <div>
            <Table />
            <Card style={{ height: 'auto', width: '300px' }}>
                {
                    subject?.map(v => <Card draggable onDragStart={handleDragStart}>{v.name}</Card>)
                }
            </Card>
        </div>
    )
}



export default LastTest