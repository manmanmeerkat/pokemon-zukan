import React from 'react'
import './App.css';
import './index.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function Test() {

        const [post, setPosts] = useState([])

        useEffect(() => {
            axios.get("http://localhost:8000/api/list")
            .then(res => {
                setPosts(res.data)
                console.log(res.data);
            })
        }, [])
        
    
       
      const Change = () => {
              axios.get("http://localhost:8000/api/list")
              .then(res => {
                  setPosts(res.data)
          })
          
          }

          return (
            <>
     <DragDropContext>
						<Droppable droppableId="droppable">
							{(provided, snapshot) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
                {post.map((post,index) => (
								<Draggable key={post.id} draggableId={toString(post.id)} index={index}>
									{(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                    {post.name}
                  </div>)}
								</Draggable>
                ))}
							</div>
							)}
						</Droppable>
            		</DragDropContext>
    

            </>
          );
}