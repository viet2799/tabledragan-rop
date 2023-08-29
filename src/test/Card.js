import React, { useState } from 'react'
import ContainerCards from './ContainerCards'

const typesHero = ['good', 'normal', 'bad']
export const data = [
    {
        id: 1,
        content: 'Aqua-man',
        status: 'good'
    },
    {
        id: 2,
        content: 'Flash',
        status: 'normal'
    },
    {
        id: 3,
        content: 'Green Lantern',
        status: 'good'
    },
    {
        id: 4,
        content: 'Batman',
        status: 'bad'
    },
]
const Cardss = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState(data)

    const handleDragging = (dragging) => setIsDragging(dragging)

    const handleUpdateList = (id, status) => {

        let card = listItems.find(item => item.id === id)

        if (card && card.status !== status) {

            card.status = status

            setListItems(prev => ([
                ...prev.filter(item => item.id !== id)
            ]))
        }
    }
    return (
        <div className="grid" style={{ display: 'flex' }}>
            {
                typesHero.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}

export default Cardss