import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Data from './components/data/DummyData'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
    const [data, setData] = useState([]);

    function addList(obj){
      obj.id = uuidv4()
      // console.log(obj)
      setData([...data, obj])
    }

    function removeList(id){
      setData(data.filter(item => item.id !== id))
    }
  return (
    <>
        <Header addList={addList}/>
        <List data={data} removeList={removeList}/>
    </>
  )
}

export default App