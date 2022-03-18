import React from 'react'
import Form from './Form'

const Header = ( { addList } ) => {
  return (
    <>
        <div className='mb-4 p-3 bg-dark '>
            <h1 className="text-light text-center">Todo List</h1>
        </div>
        <div className="container mb-5">
            <Form addList={addList}/>
        </div>
    </>
  )
}

export default Header
