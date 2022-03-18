import React from 'react'
import { useState } from 'react'

const Form = ({ addList }) => {
  let isInvalid;
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function changeTitle(e){
    setTitle(e.target.value)
  }

  function changeText(e){
    setText(e.target.value)
  }

  function createList(e){
    e.preventDefault();

    if(text !== '' || title !== ''){
      isInvalid = ''
      const temp = {
        title: text,
        description: title
      }

      addList(temp)
    }else if(text === '' || title === ''){
      isInvalid = 'is-invalid'
    }

    setTitle('')
    setText('')
  }
  return (
    <form onSubmit={createList}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" id="title" className={`form-control ${isInvalid}`} placeholder='Enter To do Title' value={title} onChange={changeTitle}/>
            <div className="invalid-feedback">
              Pls Type Something here Dummy!
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea type="text" id="description" className={`form-control ${isInvalid}`} placeholder='Enter Description' value={text} onChange={changeText}/>
            <div className="invalid-feedback">
              Pls also type something here Dummy!
            </div>
        </div>
        <center>
          <input type="submit" className='btn btn-dark text-center' />
        </center>
    </form>
  )
}

export default Form