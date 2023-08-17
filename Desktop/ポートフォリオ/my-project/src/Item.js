import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const items = [
    {
        id:"item-1",
        content: "item 1",
    },
    {
        id:"item-2",
        content: "item 2",
    },
    {
        id:"item-3",
        content: "item 3",
    },
    {
        id:"item-4",
        content: "item 4",
    },
    {
        id:"item-5",
        content: "item 5",
    },
];

const Item = () => {
  return (
    <div>
         <DragDropContext>
						<Droppable droppableId="droppable">
							{(provided, snapshot) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
                                {items.map((item,index) => (
								<Draggable key={item.id} draggableId={item.id} index={index}>
									{(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        >
                                        {item.content}
                                    </div>)}
								</Draggable>
                ))}
							</div>
							)}
						</Droppable>
            		</DragDropContext>
    
    </div>
  )
}

export default Item