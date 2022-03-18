import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const ListItem = ({ data, remove }) => {

  return (
      <div className="card m-3 rounded border-2 border-dark bg-dark">
        <div className="card-body text-center">
          <h5 className="card-title text-light">{data.title}</h5>
          <p className="card-text text-light">{data.description}</p>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <span>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </span>
          <span>
            <button onClick={()=>remove(data.id)}>
              <FaRegTrashAlt size={25} />
            </button>
          </span>
        </div>
      </div>
  )
}

export default ListItem