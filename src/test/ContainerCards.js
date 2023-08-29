import React from 'react'
import CardItems from './CardItems'

const ContainerCards = ({ status, items, isDragging, handleDragging, handleUpdateList }) => {
    const handleDrop = (e) => {
        e.preventDefault()
        handleUpdateList(+e.dataTransfer.getData('text'), status)
        handleDragging(false)
    }

    const handleDragOver = (e) => e.preventDefault()
    return (
        <div className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`} onDragOver={handleDragOver}
            onDrop={handleDrop}>
            <p>{status} hero</p>
            {/* Cards */}
            {
                items.map(item => status === item.status && (
                    <CardItems
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCards