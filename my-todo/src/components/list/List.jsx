import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import Listitem from './Listitem';

const List = () => {
    const [query,setquery]=useState("");
    const [list,setlist]=useState([]);
    const handleadd=()=>{
        const payload={
            title:query,
            status:false,
            id:uuid()
        }
        setlist([...list,payload])

    }
    const handledelete=(id)=>{
        let updatedlist=list.filter((item)=>item.id !==id)
        setlist(updatedlist)

    }
  return (
    <div>
        <h1>SIMPLE TODO


        </h1>
        <div>
            <input value={query} type="text" onChange={(e)=>setquery(e.target.value)} placeholder='write here'/>
            <button onClick={handleadd}>+</button>

        </div>
        <div>
       { list.map((item)=>(
        //    <div key={item.id}>{item.title}</div>
           <Listitem handledelete={handledelete} key={item.id} {...item}/>

        ))}
        </div>
      
    </div>
  )
}

export default List
