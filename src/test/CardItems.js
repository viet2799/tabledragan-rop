import React from "react";

const CardItems = ({ data, handleDragging }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)
    return (
        <div className="card-container" draggable onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            <p>{data.content}</p>
        </div>
    );
};

export default CardItems;
