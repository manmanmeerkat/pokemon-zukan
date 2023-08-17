import React from 'react'
import './App.css';
import './index.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Child() {

        const [post, setPosts] = useState([])

        useEffect(() => {
            axios.get("http://localhost:8000/api/list")
            .then(res => {
                setPosts(res.data)
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
            <div>{post.map((post) => (
         <div key={post.id}>
      <a href="childs.tsx"><p className='bg-color-red text-red-400'><span className="ml-2 italic">{post.id}{post.name}</span></p></a>
      <button onClick={Change}
        type="button"
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        別のにする
      </button>
    </div>
    
   ))}
   </div>
            </>
          );
}