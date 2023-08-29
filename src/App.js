import "./App.css";
import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import Cardss from "./test/Card";
import CalendarTable from "./test/Cenlendar";
import MyTable from "./test/Cenlendar";
import Appp from "./test/testtiep";

const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
const times = Array.from({ length: 9 }, (_, index) => index + 1);

const subject = [
    { id: 1, name: "Toán" },
    { id: 2, name: "Văn" },
    { id: 3, name: "Anh" },
    { id: 4, name: "Sinh" },
    { id: 5, name: "Sử" },
];
const a = [];
function App() {
    const [subjectId, setSubjectId] = useState(null);
    const [dataNew, setDataNew] = useState([]);


    const handleDragStart = (e, id, name) => {
        console.log(e, id, name);
        setSubjectId(id);
        e.dataTransfer.setData('text', name);

        // a.push({ id, name })
        // setDataNew([...dataNew, { id, name }])
    };
    const handleDragOver = (event) => {
        // Xử lý sự kiện onDragOver tại đây
        // Thực hiện các thao tác cần thiết khi có sự kiện kéo qua ô cụ thể
        event.preventDefault();

    };

    const handleDrop = (e, record, index) => {
        console.log(e);
        const droppedData = e.dataTransfer.getData('text');
        console.log(droppedData)
        setSubjectId(null);
        console.log(record)
        console.log(index)
        console.log(e)
    };

    // const dataSource = times.map((time) => {
    //     const rowData = { key: time.toString() };
    //     daysOfWeek.forEach((day, index) => {
    //         // console.log(`${day}-${time}`);
    //         rowData[day] = (
    //             <div></div>
    //         );
    //     });
    //     return rowData;
    // });

    const dataSource = Array.from({ length: 9 }, (_, index) => ({
        key: index + 1,
        tiet: index + 1,
        t2: ``,
        t3: ``,
        t4: ``,
        t5: ``,
        t6: ``,
        t7: ``,
    }));
    const [dataS, setDataS] = useState(dataSource)
    // console.log(subjectId);
    console.log(dataSource)

    const columns = [
        {
            title: "",
            dataIndex: "key",
            key: "key",
            width: "6%",
            render: (value) => <div>T{value}</div>,
        },
        ...daysOfWeek.map((day) => ({
            title: day,
            dataIndex: day,
            key: day,
            onCell: (record, index) => ({
                onClick: () => console.log(record, index)
            })
        })),
    ];

    // console.log(dataSource);

    return (
        <div className="App">
            {/* <Table
                dataSource={dataS}
                columns={columns}
                bordered
                pagination={false}
                onDragOver={handleDragOver}
                onCell={(record, index) => ({
                    onDragOver: (e) => handleDragOver(e, record),
                    onDrop: (e) => handleDrop(e, record, index),
                })}

            />
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
            <div
                style={{ height: "300px", width: "220px", border: "1px solid" }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {a?.map((element) => (
                    <div>{element.name}</div>
                ))}
            </div> */}
            <Appp />
        </div>
    );
}

export default App;
