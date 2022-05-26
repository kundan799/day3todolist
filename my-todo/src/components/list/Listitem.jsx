import React from 'react'

const Listitem = ({title,id,handledelete}) => {
    const handledeletefn=()=>{
        handledelete(id)

    }
  return (
      <>
      <br/>
    <div className='child' >
      <h3>{title}</h3>
      <button className='deletebtn' onClick={handledeletefn}><i className="fa-solid fa-trash-can"></i></button>

    </div>
    </>
  )
}

export default Listitem
